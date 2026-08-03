import type { Metadata } from "next";
import { StaticRedirect } from "../components";

export const metadata: Metadata = {
  title: "Webサイト利用規約",
  alternates: { canonical: "/legal/terms/" },
  robots: { index: false, follow: true },
};

export default function LegacyTermsPage() {
  return <StaticRedirect href="/legal/terms/" label="AIAutoLab Webサイト利用規約" />;
}
