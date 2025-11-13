import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getBaseURL } from "@/lib/get-base-url";

export const metadata: Metadata = {
  title: {
    template: "%s | turso検証",
    default: "turso検証",
  },
  metadataBase: new URL(getBaseURL()),
  description: "turso検証",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="container relative flex-1 pt-10 pb-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
