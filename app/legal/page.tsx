import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components";
import { apps } from "../data";

export const metadata: Metadata = {
  title: "法的情報",
  description: "AIAutoLab Webサイトと各アプリのプライバシーポリシー・利用規約を一覧でご案内します。",
  alternates: { canonical: "/legal/" },
  openGraph: {
    title: "AIAutoLabの法的情報",
    description: "Webサイトと各アプリの規約を対象別にご案内します。",
    url: "/legal/",
  },
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL / INDEX"
        title="法的情報"
        lead="Webサイト全体の規約と、各アプリ固有の規約を対象別にご案内します。"
        breadcrumbs={[{ label: "ホーム", href: "/" }, { label: "法的情報" }]}
      />
      <section className="legal-index-section">
        <div className="shell legal-index-grid">
          <section className="legal-index-group">
            <p className="eyebrow">WEBSITE</p>
            <h2>AIAutoLab Webサイト</h2>
            <p>このWebサイトの閲覧・利用に適用される規約です。</p>
            <div className="legal-index-links">
              <Link href="/legal/privacy/">Webサイトのプライバシーポリシー</Link>
              <Link href="/legal/terms/">Webサイト利用規約</Link>
            </div>
          </section>
          <section className="legal-index-group" id="app-policies">
            <p className="eyebrow">APPLICATIONS</p>
            <h2>アプリ別の規約</h2>
            <p>各アプリの利用・情報の取り扱いに適用される規約です。</p>
            <div className="app-legal-list">
              {apps.map((app) => (
                <article key={app.slug}>
                  <div>
                    <h3>{app.name}</h3>
                  </div>
                  <div>
                    <Link href={`/apps/${app.slug}/privacy/`}>{app.shortName}のプライバシーポリシー</Link>
                    <Link href={`/apps/${app.slug}/terms/`}>{app.shortName}の利用規約</Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
