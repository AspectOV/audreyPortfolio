import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audrey Hayes | Realtor",
  description: "Real estate services by Audrey Hayes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
