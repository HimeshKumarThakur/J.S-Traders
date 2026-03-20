import Link from 'next/link';

const categories = [
  {
    title: 'Executive Chairs',
    subtitle: 'Boardroom-ready silhouette',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Task Chairs',
    subtitle: 'Day-long support',
    className: '',
  },
  {
    title: 'Mesh Collection',
    subtitle: 'Breathable comfort',
    className: '',
  },
  {
    title: 'Visitor Seating',
    subtitle: 'Premium guest comfort',
    className: '',
  },
  {
    title: 'Accessories',
    subtitle: 'Footrests, cushions, add-ons',
    className: 'md:col-span-2',
  },
];

export default function BentoCategories() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-[700] tracking-tight text-[#1A1A1A] sm:text-3xl">Shop by Category</h2>
            <p className="mt-2 text-sm text-black/65">Bento-style discovery designed for fast, high-intent browsing.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="/products"
              className={`group rounded-2xl border border-black/10 bg-[#F5F5F7] p-6 transition hover:-translate-y-0.5 hover:border-[#0F766E]/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${category.className}`}
            >
              <p className="text-xs uppercase tracking-widest text-black/45">Collection</p>
              <h3 className="mt-3 text-xl font-[700] text-[#1A1A1A]">{category.title}</h3>
              <p className="mt-2 text-sm text-black/60">{category.subtitle}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[#0F766E]">
                Explore
                <span className="ml-1 transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
