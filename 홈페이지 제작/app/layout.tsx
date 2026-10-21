import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "어반수영장 | 100% 친환경 해수풀 프리미엄 패밀리 수영장",
  description:
    "락스 제로! 피부 자극 없는 천연 해수풀 어반수영장. 어린이 올케어부터 성인 마스터즈까지 온 가족이 안심하고 다니는 수영장 (빛가람점, 양산점, 봉선점, 각화점, 효천점)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className="antialiased selection:bg-rose-500 selection:text-white pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
