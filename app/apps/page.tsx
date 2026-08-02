import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, ProductVisual, Status } from "../components";
import { apps } from "../data";

export const metadata: Metadata = {
  title: "アプリ一覧",
  description: "AIAutoLabが提供・開発するアプリの一覧です。各アプリの詳細、規約、サポートをご案内します。",
  alternates: { canonical: "/apps/" },
  openGraph: {
    title: "AIAutoLabのアプリ一覧",
    description: "各アプリの詳細、対応プラットフォーム、規約、サポートをご案内します。",
    url: "/apps/",
  },
};

export default function AppsPage() {
  return (
    <>
      <header className="apps-hero">
        <Breadcrumbs
          items={[{ label: "ホーム", href: "/" }, { label: "アプリ一覧" }]}
          tone="dark"
        />
        <div className="shell apps-hero-copy">
          <p className="eyebrow light">APPS / AIAUTOLAB</p>
          <h1>アプリ一覧</h1>
          <p>公開中のアプリと、これから届けるアプリをご案内します。</p>
        </div>
      </header>
      <section className="apps-directory">
        <div className="shell app-directory-list">
          {apps.map((app) => (
            <article className="app-directory-card" key={app.slug}>
              <ProductVisual app={app} />
              <div className="app-directory-copy">
                <div className="app-directory-heading">
                  <div>
                    <p>{app.eyebrow}</p>
                    <h2>{app.name}</h2>
                  </div>
                  <Status value={app.status} />
                </div>
                <p>{app.description}</p>
                <dl>
                  <div>
                    <dt>対応プラットフォーム</dt>
                    <dd>{app.platforms}</dd>
                  </div>
                </dl>
                <div className="app-directory-links" aria-label={`${app.name}のリンク`}>
                  <Link className="primary-directory-link" href={`/apps/${app.slug}/`}>
                    アプリ詳細を見る
                  </Link>
                  <Link href={`/apps/${app.slug}/privacy/`}>このアプリのプライバシーポリシー</Link>
                  <Link href={`/apps/${app.slug}/terms/`}>このアプリの利用規約</Link>
                  <Link href={`/apps/${app.slug}/support/`}>このアプリのサポート</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
