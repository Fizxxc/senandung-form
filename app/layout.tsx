import "./globals.css";
export const metadata = {
  title: "Senandung Alam Festival Music 2026",
  description: "Ticket Form for Senandung Alam Festival Music 2026",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen grain">{children}</body>
    </html>
  );
}
