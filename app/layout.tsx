import "./globals.css";

export const metadata = {
  title: "Aegis Intelligence | Global Compliance Command",
  description: "Advanced AI Risk Mitigation for Enterprise Entities",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
