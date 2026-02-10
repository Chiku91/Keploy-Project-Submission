import "./globals.css";
import ClientShell from "./ClientShell";

export const metadata = {
  title: "Keploy Docs",
  description: "Keploy Documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
