const signals = [
  {
    title: 'Cash on Delivery',
    description: 'Order online and pay on delivery across Kathmandu Valley.',
    icon: '💳',
  },
  {
    title: 'VAT Transparency',
    description: 'Clear pricing and proper billing for every order.',
    icon: '🧾',
  },
  {
    title: '12-Month Warranty',
    description: 'Mechanical warranty support on selected premium chairs.',
    icon: '🛠️',
  },
  {
    title: 'Fast Delivery',
    description: 'Quick dispatch with setup guidance by our support team.',
    icon: '🚚',
  },
];

export default function TrustSignals() {
  return (
    <section className="border-y border-black/10 bg-white py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {signals.map((item) => {
          return (
            <article key={item.title} className="rounded-2xl border border-black/10 bg-[#F5F5F7] p-4">
              <span className="text-lg">{item.icon}</span>
              <h3 className="mt-3 text-sm font-[700] text-[#1A1A1A]">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-black/65">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
