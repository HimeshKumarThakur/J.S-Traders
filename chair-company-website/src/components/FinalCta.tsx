export default function FinalCta() {
  return (
    <section className="bg-[#1A1A1A] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">Premium Office Furniture</p>
        <h2 className="mt-3 text-3xl font-[700] tracking-tight sm:text-4xl">Get premium office furniture for your next setup</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75">
          Upgrade comfort, posture, and aesthetics with curated ergonomic seating and executive desks.
        </p>
        <a
          href="/products"
          className="mt-6 inline-flex h-11 min-h-[44px] items-center rounded-xl bg-[#0F766E] px-6 text-sm font-semibold text-white"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
