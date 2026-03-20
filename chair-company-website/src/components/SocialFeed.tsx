import Image from 'next/image';

const posts = [
  'https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80',
];

export default function SocialFeed() {
  return (
    <section className="bg-[#F5F5F7] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-[700] tracking-tight text-[#1A1A1A] sm:text-3xl">#JSTraders</h2>
        <p className="mt-2 text-sm text-black/65">Share your workspace on Instagram and get featured.</p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <article key={post + i} className="relative aspect-square overflow-hidden rounded-xl border border-black/10 bg-white">
              <Image src={post} alt={`Workspace post ${i + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 33vw, 16vw" loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
