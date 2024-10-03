import Header from "@/shared/component/Header";
import Providers from "@/shared/component/Provider";
import { theme } from "@/styles/themes.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlgoHub",
  description: "알고리즘 스터디 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ backgroundColor: theme.color.bg }}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
