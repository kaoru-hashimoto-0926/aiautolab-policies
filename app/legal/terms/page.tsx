import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components";

export const metadata: Metadata = {
  title: "AIAutoLab Webサイト利用規約",
  description: "AIAutoLab Webサイトをご利用いただく際の条件を定めた利用規約です。",
  alternates: { canonical: "/legal/terms/" },
  openGraph: {
    title: "AIAutoLab Webサイト利用規約",
    description: "AIAutoLab Webサイトをご利用いただく際の条件をご案内します。",
    url: "/legal/terms/",
  },
};

export default function WebsiteTermsPage() {
  return (
    <>
      <PageHero
        eyebrow="TERMS / WEBSITE"
        title="AIAutoLab Webサイト利用規約"
        lead="このWebサイトをご利用いただく際の条件をご案内します。"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "法的情報", href: "/legal/" },
          { label: "Webサイト利用規約" },
        ]}
      />
      <section className="legal-section">
        <article className="shell legal-article standalone-legal">
          <p className="legal-scope-label">対象: AIAutoLab Webサイト</p>
          <p className="legal-intro">
            本規約は、AIAutoLab（代表者：橋本 薫）が運営する本ウェブサイトの利用条件を定めるものです。
          </p>
          <h2>掲載情報について</h2>
          <p>
            掲載内容については正確性の確保に努めますが、その完全性、正確性、最新性を保証するものではありません。
            掲載内容は予告なく変更または削除する場合があります。
          </p>
          <h2>免責事項</h2>
          <p>
            本ウェブサイトの利用により生じた損害について、AIAutoLabは、法令により責任を負う場合を除き責任を負いません。
            外部サイトの内容についても責任を負いません。
          </p>
          <h2>著作権</h2>
          <p>
            本ウェブサイトに掲載する文章、画像その他のコンテンツに関する権利は、
            AIAutoLabまたは正当な権利者に帰属します。法令で認められる範囲を超えた無断利用を禁止します。
          </p>
          <h2>各アプリの利用規約</h2>
          <p>
            各アプリの利用条件はアプリごとに定めています。
            <Link href="/legal/#app-policies">アプリ別利用規約一覧</Link>から対象アプリを選択してください。
          </p>
          <h2>規約の変更</h2>
          <p>本規約は、必要に応じて変更することがあります。変更後の規約は、本ウェブサイトに掲載した時点から適用されます。</p>
          <h2>お問い合わせ先</h2>
          <dl>
            <div><dt>運営者</dt><dd>AIAutoLab</dd></div>
            <div><dt>代表者</dt><dd>橋本 薫</dd></div>
            <div><dt>メールアドレス</dt><dd><a href="mailto:info@aiautolab.net">info@aiautolab.net</a></dd></div>
          </dl>
          <p className="updated">最終更新日: 2026年7月27日</p>
        </article>
      </section>
    </>
  );
}
