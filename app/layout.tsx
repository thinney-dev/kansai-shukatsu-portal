import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ルートドメインに修正
  metadataBase: new URL("https://thinney.co.jp"), 

  title: {
    default: "関西就活イベントまとめポータル",
    template: "%s | 関西就活イベントまとめポータル"
  },
  description: "京阪神・関関同立の学生向け。最難関企業が多数出展する特別イベントの最新日程をまとめて確認・エントリーできます。",
  
  icons: {
    icon: "/images/logo-1.png",     
    apple: "/images/logo-1.png",    
  },
  
  openGraph: {
    title: "関西就活イベントまとめポータル",
    description: "京阪神・関関同立の学生向け。最難関企業が多数出展する特別イベントの最新日程をまとめて確認・エントリーできます。",
    url: "/", 
    siteName: "関西就活イベントまとめ",
    images: [
      {
        url: "/images/og-image.png", 
        width: 1200,
        height: 630,
        alt: "関西就活イベントまとめ OG画像",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "関西就活 Meetup まとめポータル",
    description: "京阪神・関関同立の学生向け。最難関企業が多数出展する特別イベントの最新日程をまとめて確認・エントリーできます。",
    images: ["/images/og-image.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}