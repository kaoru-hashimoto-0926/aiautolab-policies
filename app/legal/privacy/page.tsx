import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components";

export const metadata: Metadata = {
  title: "AIAutoLab Webサイトのプライバシーポリシー",
  description: "AIAutoLab Webサイトにおける情報の取り扱いについて定めたプライバシーポリシーです。",
  alternates: { canonical: "/legal/privacy/" },
  openGraph: {
    title: "AIAutoLab Webサイトのプライバシーポリシー",
    description: "AIAutoLab Webサイトにおける情報の取り扱いについてご案内します。",
    url: "/legal/privacy/",
  },
};

export default function WebsitePrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="PRIVACY / WEBSITE"
        title="AIAutoLab Webサイトのプライバシーポリシー"
        lead="このWebサイトにおける情報の取り扱いについてご案内します。"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "法的情報", href: "/legal/" },
          { label: "Webサイトのプライバシーポリシー" },
        ]}
      />
      <section className="legal-section">
        <article className="shell legal-article standalone-legal">
          <p className="legal-scope-label">対象: AIAutoLab Webサイト</p>
          <p className="legal-intro">
            AIAutoLab（代表者：橋本 薫）は、本ウェブサイトにおける情報の取り扱いについて、以下のとおり定めます。
          </p>
          <h2>取得する情報</h2>
          <p>
            本ウェブサイトでは、アクセス解析、Cookie、お問い合わせフォームを使用しておらず、
            閲覧者の個人情報を本ウェブサイト上で取得しません。
          </p>
          <h2>お問い合わせ</h2>
          <p>
            メールでお問い合わせいただいた場合、返信および対応に必要な範囲で、メールアドレスとお問い合わせ内容を取り扱います。
            これらの情報は、法令に基づく場合を除き、本人の同意なく第三者へ提供しません。
          </p>
          <h2>各アプリのプライバシーポリシー</h2>
          <p>
            各アプリにおける情報の取り扱いはアプリごとに定めています。
            <Link href="/legal/#app-policies">アプリ別プライバシーポリシー一覧</Link>から対象アプリを選択してください。
          </p>
          <h2>改定</h2>
          <p>本ポリシーは、必要に応じて改定することがあります。重要な変更がある場合は、本ウェブサイト上でお知らせします。</p>
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
