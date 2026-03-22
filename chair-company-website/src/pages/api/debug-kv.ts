import type { NextApiRequest, NextApiResponse } from 'next';
import { getAdminStorageInfo, probeAdminStorage, readAdminDataStore } from '../../lib/adminDataStore';

type ResponseData = {
  env: {
    hasUpstashConfig: boolean;
    activeBackend: 'upstash' | 'file';
    usesEphemeralFileFallbackOnVercel: boolean;
    nodeEnv: string;
    vercel: boolean;
  };
  upstashVars: {
    UPSTASH_REDIS_REST_URL: boolean;
    UPSTASH_REDIS_REST_TOKEN: boolean;
    UPSTASH_REDIS_REST_READ_ONLY_TOKEN: boolean;
    KV_REST_API_URL: boolean;
    KV_REST_API_TOKEN: boolean;
    KV_REST_API_READ_ONLY_TOKEN: boolean;
  };
  currentData: {
    products: number;
    overrides: number;
  };
  kvProbe?: {
    attempted: boolean;
    success: boolean;
    key?: string;
    valueMatched?: boolean;
    error?: string;
  };
  success: boolean;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    const storageInfo = getAdminStorageInfo();

    const data = await readAdminDataStore();
    const shouldProbe = req.query['probe'] === '1' || req.query['probe'] === 'true';
    let kvProbe: ResponseData['kvProbe'] = {
      attempted: false,
      success: false,
    };

    if (shouldProbe && storageInfo.hasUpstashConfig) {
      kvProbe = await probeAdminStorage();
    }

    res.status(200).json({
      env: {
        hasUpstashConfig: storageInfo.hasUpstashConfig,
        activeBackend: storageInfo.activeBackend,
        usesEphemeralFileFallbackOnVercel: storageInfo.usesEphemeralFileFallbackOnVercel,
        nodeEnv: process.env.NODE_ENV || 'unknown',
        vercel: Boolean(process.env.VERCEL),
      },
      upstashVars: {
        UPSTASH_REDIS_REST_URL: storageInfo.env.UPSTASH_REDIS_REST_URL,
        UPSTASH_REDIS_REST_TOKEN: storageInfo.env.UPSTASH_REDIS_REST_TOKEN,
        UPSTASH_REDIS_REST_READ_ONLY_TOKEN: storageInfo.env.UPSTASH_REDIS_REST_READ_ONLY_TOKEN,
        KV_REST_API_URL: storageInfo.env.KV_REST_API_URL,
        KV_REST_API_TOKEN: storageInfo.env.KV_REST_API_TOKEN,
        KV_REST_API_READ_ONLY_TOKEN: storageInfo.env.KV_REST_API_READ_ONLY_TOKEN,
      },
      currentData: {
        products: data.products.length,
        overrides: data.overrides.length,
      },
      kvProbe,
      success: true,
      message: shouldProbe
        ? kvProbe.attempted
          ? kvProbe.success
            ? `Upstash probe succeeded. Found ${data.products.length} products and ${data.overrides.length} overrides.`
            : `Upstash probe failed. Found ${data.products.length} products and ${data.overrides.length} overrides.`
          : `Upstash probe skipped (set UPSTASH_REDIS_REST_URL/TOKEN or KV_REST_API_URL/TOKEN). Found ${data.products.length} products and ${data.overrides.length} overrides.`
        : `Great! Data store is working. Found ${data.products.length} products and ${data.overrides.length} overrides.`,
    });
  } catch (error) {
    res.status(500).json({
      env: {
        hasUpstashConfig: Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN),
        activeBackend: process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN ? 'upstash' : 'file',
        usesEphemeralFileFallbackOnVercel: Boolean(process.env.VERCEL) && !(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN),
        nodeEnv: process.env.NODE_ENV || 'unknown',
        vercel: Boolean(process.env.VERCEL),
      },
      upstashVars: {
        UPSTASH_REDIS_REST_URL: Boolean(process.env.UPSTASH_REDIS_REST_URL),
        UPSTASH_REDIS_REST_TOKEN: Boolean(process.env.UPSTASH_REDIS_REST_TOKEN),
        UPSTASH_REDIS_REST_READ_ONLY_TOKEN: Boolean(process.env.UPSTASH_REDIS_REST_READ_ONLY_TOKEN),
        KV_REST_API_URL: Boolean(process.env.KV_REST_API_URL),
        KV_REST_API_TOKEN: Boolean(process.env.KV_REST_API_TOKEN),
        KV_REST_API_READ_ONLY_TOKEN: Boolean(process.env.KV_REST_API_READ_ONLY_TOKEN),
      },
      currentData: {
        products: 0,
        overrides: 0,
      },
      kvProbe: {
        attempted: req.query['probe'] === '1' || req.query['probe'] === 'true',
        success: false,
      },
      success: false,
      message: `Error: ${error instanceof Error ? error.message : String(error)}`,
    });
  }
}
