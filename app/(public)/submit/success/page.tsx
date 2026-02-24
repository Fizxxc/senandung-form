export default function Success() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full vintage-border rounded-[1.25rem] bg-cream/70 px-6 py-8 text-center">
        <div className="text-2xl font-semibold">Form terkirim 🌿</div>
        <p className="mt-2 text-outline">
          Terima kasih! Tim Senandung Alam akan menghubungi kamu untuk konfirmasi.
        </p>
        <a className="inline-block mt-6 btn-vintage rounded-xl px-4 py-2 font-semibold" href="/">
          Kembali ke Form
        </a>
      </div>
    </main>
  );
}
