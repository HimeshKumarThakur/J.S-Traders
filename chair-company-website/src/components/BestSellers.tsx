import Image from 'next/image';

const items = [
  {
    name: 'Vertex Mesh Pro',
    category: 'Chair',
    price: 'NPR 13,000',
    oldPrice: 'NPR 20,000',
    discount: '-35%',
    image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'DL40 Executive Black',
    category: 'Executive',
    price: 'NPR 9,500',
    oldPrice: 'NPR 12,000',
    discount: '-21%',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Boom Neck Support',
    category: 'Chair',
    price: 'NPR 6,500',
    oldPrice: 'NPR 8,000',
    discount: '-19%',
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Visitor Mesh 1101',
    category: 'Visitor',
    price: 'NPR 3,500',
    oldPrice: 'NPR 4,500',
    discount: '-22%',
    image: 'https://images.unsplash.com/photo-1561677978-583a8c7a4b43?auto=format&fit=crop&w=900&q=80',
  },
];

export default function BestSellers() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-[700] tracking-tight text-[#1A1A1A] sm:text-3xl">Best Sellers</h2>
            <p className="mt-2 text-sm text-black/65">Comfort-first office furniture for productive workspaces.</p>
          </div>
          <a href="/products" className="text-sm font-semibold text-[#0F766E] hover:underline">View all</a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.name} className="group rounded-2xl border border-black/10 bg-[#F5F5F7] p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <span className="absolute left-2 top-2 rounded-full bg-[#0F766E] px-2 py-1 text-xs font-semibold text-white">
                  {item.discount}
                </span>
              </div>
              <div className="pt-3">
                <p className="text-xs uppercase tracking-wide text-black/45">{item.category}</p>
                <h3 className="mt-1 text-sm font-[700] text-[#1A1A1A]">{item.name}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="font-[700] text-[#1A1A1A]">{item.price}</span>
                  <span className="text-black/45 line-through">{item.oldPrice}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
