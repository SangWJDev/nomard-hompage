import type { Metadata } from "next";
import { notoSansKR } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "디지털 노마드 코리아 | 한국의 디지털 노마드 플랫폼",
  description: "한국 전역의 디지털 노마드를 위한 도시 정보, 커뮤니티, 이벤트를 제공합니다.",
  keywords: ["디지털 노마드", "원격 근무", "한국", "워케이션", "코워킹스페이스"],
  openGraph: {
    title: "디지털 노마드 코리아",
    description: "한국의 디지털 노마드를 위한 최고의 플랫폼",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
