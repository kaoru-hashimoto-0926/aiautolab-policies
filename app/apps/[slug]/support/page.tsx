import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, StaticRedirect } from "../../../components";
import { allAppSlugs, getApp, isAppSlugAlias } from "../../../data";

export const dynamicParams = false;

export function generateStaticParams() {
  return allAppSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  const canonical = `/apps/${app.slug}/support/`;
  return {
    title: `${app.shortName}のサポート`,
    description: `${app.name}のサポート・お問い合わせ窓口です。`,
    alternates: { canonical },
    robots: isAppSlugAlias(slug) ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${app.shortName}のサポート`,
      description: `${app.name}のサポート・お問い合わせ窓口です。`,
      url: canonical,
    },
  };
}

export default async function AppSupportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();
  if (isAppSlugAlias(slug)) {
    return <StaticRedirect href={`/apps/${app.slug}/support/`} label={`${app.shortName}のサポート`} />;
  }

  const subject = encodeURIComponent(`【${app.shortName}】お問い合わせ`);
  return (
    <>
      <PageHero
        eyebrow="SUPPORT / APP"
        title={`${app.shortName}のサポート`}
        lead={`${app.name}に関する不具合、ご意見、ご要望を受け付けています。`}
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "アプリ一覧", href: "/apps/" },
          { label: app.shortName, href: `/apps/${app.slug}/` },
          { label: "サポート" },
        ]}
      />
      <section className="content-section contact-content">
        <div className="shell app-support-grid">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>{app.shortName}について問い合わせる</h2>
            <p>対象アプリ名が入力されたメール作成画面を開きます。端末・OS・発生状況もお知らせください。</p>
            <a className="button support-button" href={`mailto:info@aiautolab.net?subject=${subject}`}>
              メールで問い合わせる
            </a>
          </div>
          <nav className="app-support-nav" aria-label={`${app.shortName}の関連ページ`}>
            <Link href={`/apps/${app.slug}/`}>このアプリの詳細</Link>
            <Link href={`/apps/${app.slug}/privacy/`}>このアプリのプライバシーポリシー</Link>
            <Link href={`/apps/${app.slug}/terms/`}>このアプリの利用規約</Link>
            <Link href="/apps/">AIAutoLabのアプリ一覧へ戻る</Link>
          </nav>
        </div>
      </section>
    </>
  );
}
