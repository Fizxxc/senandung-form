import QRCode from "qrcode";

type PageProps = {
  params: Promise<{ code: string }>;
};

export default async function TicketPage({ params }: PageProps) {
  const { code } = await params;

  const payload = `SENANDUNG_ALAM_2026|${code}`;
  const qrDataUrl = await QRCode.toDataURL(payload, { margin: 2, scale: 8 });

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md sm:max-w-lg">
        <div className="ticket p-5 sm:p-8">
          <div className="ticket-perf" />
          <div className="ticket-stamp" />

          <div className="relative z-[3] text-center">
            <div className="text-2xl sm:text-3xl font-semibold">🎟 Ticket Kamu</div>
            <p className="mt-2 text-sm sm:text-base text-outline">
              Simpan QR ini untuk verifikasi saat check-in.
            </p>

            <div className="mt-6 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrDataUrl}
                alt="QR Ticket"
                className="w-full max-w-[240px] sm:max-w-[280px] rounded-xl border-2 border-outline bg-white p-3"
              />
            </div>

            <div className="mt-5 text-left">
              <div className="text-sm text-outline">Ticket Code</div>
              <div className="mt-1 border-2 border-outline rounded-xl bg-beige/20 px-3 py-2">
                <div className="font-mono text-sm sm:text-base leading-6 break-all text-darkBrown">
                  {code}
                </div>
              </div>
            </div>

            <div className="mt-6 barcode" />
          </div>
        </div>
      </div>
    </main>
  );
}