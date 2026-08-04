import type { Metadata } from "next";
import { StaticRedirect } from "../../components";

export const metadata: Metadata = {
  title: "AIAutoLab トップページへ移動します",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
};

export default function GenaiPassportRedirectPage() {
  return <StaticRedirect href="/" label="AIAutoLab トップページ" />;
}
