import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiautolab.net"),
  title: {
    default: "AIAutoLab | 学ぶ時間を、もっと心地よく。",
    template: "%s | AIAutoLab",
  },
  description:
    "AIAutoLabは、学習や日常の目的に集中できる、シンプルで心地よいモバイルアプリを企画・開発・運営しています。",
  icons: {
    icon: "/assets/images/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "AIAutoLab",
    title: "AIAutoLab | 学ぶ時間を、もっと心地よく。",
    description: "迷いを減らし、本来の目的に集中できるモバイルプロダクトを。",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AIAutoLab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIAutoLab | 学ぶ時間を、もっと心地よく。",
    description: "迷いを減らし、本来の目的に集中できるモバイルプロダクトを。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.variable}>
        <a className="skip-link" href="#main-content">
          本文へ移動
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
