export default function TicketCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ticket p-6 md:p-8">
      <div className="ticket-perf" />
      <div className="ticket-stamp" />

      <div className="relative z-[3]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-2xl md:text-3xl font-semibold text-darkBrown">
              {title}
            </div>
            {subtitle && (
              <div className="mt-1 text-sm md:text-base text-outline">
                {subtitle}
              </div>
            )}
          </div>

          <span className="badge">
            <span>🎟</span>
            <span>Official Form</span>
          </span>
        </div>

        <div className="ticket-tear" />

        {children}

        <div className="mt-6 barcode" />
        <div className="mt-2 text-xs text-outline/80">
          
        </div>
      </div>
    </div>
  );
}