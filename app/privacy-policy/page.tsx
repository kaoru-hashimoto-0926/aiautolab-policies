import type { Metadata } from "next";
import { StaticRedirect } from "../components";

export const metadata: Metadata = {
  title: "Webサイトのプライバシーポリシー",
  alternates: { canonical: "/legal/privacy/" },
  robots: { index: false, follow: true },
};

export default function LegacyPrivacyPage() {
  return <StaticRedirect href="/legal/privacy/" label="AIAutoLab Webサイトのプライバシーポリシー" />;
}
