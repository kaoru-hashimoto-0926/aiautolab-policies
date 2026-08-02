import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LegalNav, PageHero, StaticRedirect } from "../../../components";
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
  const canonical = `/apps/${app.slug}/terms/`;
  const title = `${app.shortName}の利用規約`;
  return {
    title,
    description: `${app.name}の利用条件を定めた利用規約です。`,
    alternates: { canonical },
    robots: isAppSlugAlias(slug) ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description: `${app.name}の利用条件をご案内します。`,
      url: canonical,
    },
  };
}

export default async function AppTermsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();
  if (isAppSlugAlias(slug)) {
    return <StaticRedirect href={`/apps/${app.slug}/terms/`} label={`${app.shortName}の利用規約`} />;
  }
  const notice = app.nonOfficialNotice ?? app.officialNotice;

  return (
    <>
      <PageHero
        eyebrow="TERMS / APP POLICY"
        title={`${app.shortName}の利用規約`}
        lead={`${app.name}の利用条件をご案内します。`}
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: app.shortName, href: "/#products" },
          { label: "利用規約" },
        ]}
      />
      <section className="legal-section">
        <div className="shell legal-layout">
          <LegalNav slug={app.slug} appName={app.shortName} active="terms" />
          <article className="legal-article">
            <p className="legal-scope-label">対象アプリ: {app.name}</p>
            <p className="legal-intro">
              この利用規約（以下「本規約」）は、橋本 薫（以下「開発者」）が提供する「{app.legalName}」
              （以下「本アプリ」）の利用条件を定めるものです。本アプリをインストール、起動、
              または使用した時点で、本規約に同意したものとみなされます。
            </p>
            <h2>第1条（アプリの概要）</h2>
            <p>{app.examDescription}の利用・学習を支援するアプリケーションです。</p>
            {notice && <p className="legal-notice"><strong>重要なお知らせ</strong>{notice}</p>}
            <h2>第2条（利用資格）</h2>
            <p>本アプリは13歳以上の方を対象としています。未成年者が利用する場合は、保護者の同意を得た上でご利用ください。</p>
            <h2>第3条（推奨動作環境）</h2>
            <dl>
              <div><dt>対応OS</dt><dd>Android / iOS</dd></div>
              <div><dt>インターネット接続</dt><dd>{app.slug === "tableclock" ? "広告表示のため必要となる場合があります" : "必須"}</dd></div>
            </dl>
            <p>推奨環境以外での動作は保証されません。</p>
            <h2>第4条（免責事項）</h2>
            <p>
              開発者は、本アプリで提供されるコンテンツの正確性、完全性、有用性について保証しません。
              本アプリの利用または利用不能により生じたいかなる損害についても、一切の責任を負いません。
            </p>
            <h2>第5条（知的財産権）</h2>
            <p>
              本アプリおよび本アプリ内のコンテンツに関する著作権、その他一切の知的財産権は、
              開発者または正当な権利者に帰属します。
            </p>
            <h2>第6条（禁止行為）</h2>
            <ul>
              <li>法令または公序良俗に違反する行為</li>
              <li>本アプリの運営を妨害する行為</li>
              <li>不正アクセス、リバースエンジニアリング、脆弱性の探索または悪用</li>
              <li>本アプリのコンテンツを無断で複製、転載、配布、公開する行為</li>
              <li>その他、開発者が不適切と判断する行為</li>
            </ul>
            <h2>第7条（広告の掲載）</h2>
            <p>
              本アプリは Google LLC が提供する Google AdMob を利用して広告を掲載します。
              広告内容は第三者により提供されるため、開発者はその正確性、適法性、有用性について保証しません。
            </p>
            <h2>第8条（プライバシー）</h2>
            <p>
              個人情報の取り扱いについては、別途定める
              <Link href={`/apps/${app.slug}/privacy/`}>{app.shortName}のプライバシーポリシー</Link>
              をご確認ください。
            </p>
            <h2>第9条（サービスの変更・終了）</h2>
            <p>開発者は、利用者への事前の通知なく、本アプリの内容を変更、追加、削除、または提供終了することがあります。</p>
            <h2>第10条（利用規約の変更）</h2>
            <p>開発者は、必要に応じて本規約を変更できます。変更後は本ページに掲載します。</p>
            <h2>第11条（準拠法および管轄裁判所）</h2>
            <p>
              本規約は日本法に準拠します。本規約または本アプリに関連する紛争については、
              東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
            <h2>第12条（お問い合わせ）</h2>
            <dl>
              <div><dt>アプリ名</dt><dd>{app.legalName}</dd></div>
              <div><dt>開発者</dt><dd>橋本 薫</dd></div>
              <div><dt>メールアドレス</dt><dd><a href="mailto:info@aiautolab.net">info@aiautolab.net</a></dd></div>
            </dl>
            <p className="updated">最終更新日: 2026年7月27日</p>
          </article>
        </div>
      </section>
    </>
  );
}
