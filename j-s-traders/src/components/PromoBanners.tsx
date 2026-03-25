const promos = [
  {
    title: 'Up to 28% Off on Mesh Chairs',
    copy: 'Breathable lumbar support designed for long sessions.',
  },
  {
    title: 'Up to 23% Off on Office Tables',
    copy: 'Executive desks and workstations for modern offices.',
  },
  {
    title: 'Up to 30% Off on Executive Chairs',
    copy: 'Premium finish chairs with boardroom-ready comfort.',
  },
];

export default function PromoBanners() {
  return (
    <section className="bg-[#F5F5F7] py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {promos.map((promo) => (
          <article key={promo.title} className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-black/45">Limited Offer</p>
            <h3 className="mt-2 text-xl font-[700] text-[#1A1A1A]">{promo.title}</h3>
            <p className="mt-2 text-sm text-black/65">{promo.copy}</p>
            <a
              href="/products"
              className="mt-4 inline-flex h-11 min-h-[44px] items-center rounded-xl bg-[#0F766E] px-4 text-sm font-semibold text-white"
            >
              Shop Now
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
