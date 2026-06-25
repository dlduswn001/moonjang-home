import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문장학교 | 쓰는 사람이 되는 곳",
  description: "성인을 위한 글쓰기 수업 공간, 문장학교"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
