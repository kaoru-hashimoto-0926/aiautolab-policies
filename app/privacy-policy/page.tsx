import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "AIAutoLab公式サイトのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="PRIVACY / WEBSITE"
        title="プライバシーポリシー"
        lead="本ウェブサイトにおける情報の取り扱いについてご案内します。"
      />
      <section className="legal-section">
        <article className="shell legal-article standalone-legal">
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
          <ul className="document-links">
            <li><Link href="/apps/genai-passport/privacy/">生成AIパスポート 学習アプリ</Link></li>
            <li><Link href="/apps/tableclock/privacy/">TableClock</Link></li>
            <li><Link href="/#products">その他のアプリ</Link></li>
          </ul>
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
