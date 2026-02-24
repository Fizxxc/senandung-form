import AnimatedBrand from "@/components/AnimatedBrand";
import PublicForm from "@/components/PublicForm";
import TicketCard from "@/components/TicketCard";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <TicketCard
          title="Senandung Alam"
          subtitle="Festival Music 2026 • Ticket Form"
        >
          <AnimatedBrand />

          <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-xl border-2 border-outline bg-beige/20 p-4">
              <div className="text-lg font-semibold">Info Festival</div>
              <ul className="mt-2 text-sm leading-6 text-darkBrown/90 list-disc pl-5">
                <li>Senandung Alam Festival Music 2026</li>
                <li>Bekasi, 22-23 November 2026</li>
                <li>Isi form untuk pemesanan tiket</li>
              </ul>
              <div className="mt-4 text-xs text-outline">
                *Detail venue/jadwal bisa kamu isi di catatan, tim akan follow up.
              </div>
            </div>

            <PublicForm />
          </div>
        </TicketCard>

        <div className="mt-4 text-center text-xs text-outline">
          © 2026 Senandung Alam. By TitikTemu Production.
        </div>
      </div>
    </main>
  );
}