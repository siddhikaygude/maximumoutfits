export default function DemoBanner() {
  return (
    <aside
      aria-label="Demo notice"
      className="w-full bg-espresso text-cream text-xs md:text-sm py-1.5 px-4 text-center leading-snug tracking-wide font-normal z-50 select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5">
        <span>Unofficial concept demo · Sample data only · Not the store's official website</span>
      </div>
    </aside>
  );
}
