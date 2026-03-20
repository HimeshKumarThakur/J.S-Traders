import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, 'public', 'images', 'source');
const outputDir = path.join(projectRoot, 'public', 'images', 'optimized');

const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const TARGET_WIDTHS = [640, 960, 1280, 1600];

async function ensureOutputDirectory() {
  await fs.mkdir(outputDir, { recursive: true });
}

async function listSourceImages() {
  try {
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => SUPPORTED_EXTENSIONS.has(path.extname(name).toLowerCase()));
  } catch {
    console.log('No source directory found at public/images/source. Create it and add JPG/PNG files.');
    return [];
  }
}

async function optimizeImage(fileName) {
  const sourcePath = path.join(sourceDir, fileName);
  const baseName = path.parse(fileName).name;

  for (const width of TARGET_WIDTHS) {
    const avifPath = path.join(outputDir, `${baseName}-${width}.avif`);
    const webpPath = path.join(outputDir, `${baseName}-${width}.webp`);

    await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 55, effort: 6 })
      .toFile(avifPath);

    await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(webpPath);
  }

  console.log(`Optimized: ${fileName}`);
}

async function main() {
  await ensureOutputDirectory();
  const files = await listSourceImages();

  if (!files.length) {
    console.log('No compatible images found for optimization.');
    return;
  }

  for (const fileName of files) {
    await optimizeImage(fileName);
  }

  console.log('Image optimization complete. Output: public/images/optimized');
}

main().catch((error) => {
  console.error('Image optimization failed:', error);
  process.exit(1);
});
