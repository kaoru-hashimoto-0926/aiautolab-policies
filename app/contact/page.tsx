import type { Metadata } from "next";
import { PageHero } from "../components";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "AIAutoLabが提供するアプリに関するお問い合わせ窓口です。",
};

const checklist = [
  "対象のアプリ名",
  "利用している端末",
  "OSのバージョン",
  "発生している問題",
  "問題が発生するまでの操作",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT / SUPPORT"
        title={
          <>
            気になることを、
            <br />
            <span className="serif">聞かせてください。</span>
          </>
        }
        lead="アプリの不具合、ご意見、ご要望、その他のお問い合わせを受け付けています。"
      />
      <section className="content-section contact-content">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">EMAIL US</p>
            <h2>メールでのお問い合わせ</h2>
            <p>以下のメールアドレスまでご連絡ください。</p>
          </div>
          <a className="email-card" href="mailto:info@aiautolab.net">
            <span>CONTACT ADDRESS</span>
            <strong>info@aiautolab.net</strong>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
        <div className="shell support-grid">
          <div>
            <p className="eyebrow">BEFORE YOU SEND</p>
            <h2>お問い合わせ時に<br />ご記載ください</h2>
          </div>
          <ol className="support-list">
            {checklist.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className="shell quiet-notice">
          <span aria-hidden="true">i</span>
          <p>
            お問い合わせの内容によっては、回答までに時間がかかる場合があります。
            営業、勧誘、広告掲載等のご連絡には、返信できない場合があります。
          </p>
        </div>
      </section>
    </>
  );
}
