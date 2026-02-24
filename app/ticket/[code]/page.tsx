import QRCode from "qrcode";

export default async function TicketPage({ params }: { params: { code: string } }) {
    const code = params.code;

    // data yang dimasukin ke QR (bisa URL domain kamu nanti)
    const payload = `SENANDUNG_ALAM_2026|${code}`;

    const qrDataUrl = await QRCode.toDataURL(payload, { margin: 2, scale: 8 });

    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-lg vintage-border rounded-[1.25rem] bg-cream/70 px-6 py-8 text-center">
                <div className="text-2xl font-semibold">Ticket Kamu</div>
                <p className="mt-2 text-outline">
                    Simpan QR ini untuk verifikasi saat check-in.
                </p>

                <div className="mt-6 flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={qrDataUrl} alt="QR Ticket" className="rounded-xl border-2 border-outline bg-white p-3" />
                </div>

                <div className="mt-4 text-sm text-outline">Ticket Code</div>

                <div className="mt-1 border-2 border-outline rounded-xl bg-beige/20 px-3 py-2">
                    <div className="font-mono text-sm sm:text-base leading-6 text-darkBrown break-all">
                        {code}
                    </div>
                </div>

                <a className="inline-block mt-6 btn-vintage rounded-xl px-4 py-2 font-semibold" href="/">
                    Buat Pemesanan Baru
                </a>
            </div>
        </main>
    );
}