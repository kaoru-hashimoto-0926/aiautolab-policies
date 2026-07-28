import type { Metadata } from "next";
import { PageHero } from "../components";

export const metadata: Metadata = {
  title: "AIAutoLabについて",
  description: "AIAutoLabの事業内容、代表者、所在地などの事業者情報をご案内します。",
};

const businessInfo = [
  ["屋号", "AIAutoLab"],
  ["代表者", "橋本 薫"],
  ["事業形態", "個人事業"],
  ["所在地", "〒101-0051\n東京都千代田区神田神保町3丁目11番6号\n神保町ビル10階"],
  ["事業内容", "モバイルアプリの企画、開発、運営"],
  ["お問い合わせ", "info@aiautolab.net"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT / AIAUTOLAB"
        title={
          <>
            目的に集中できる、
            <br />
            <span className="serif">静かな体験をつくる。</span>
          </>
        }
        lead="AIAutoLabは、橋本 薫が運営するモバイルプロダクトスタジオです。"
      />
      <section className="content-section">
        <div className="shell editorial-grid">
          <p className="eyebrow">WHO WE ARE</p>
          <div className="editorial-copy">
            <p className="statement">
              資格学習アプリや日常を支える実用アプリを通じて、複雑さをほどき、目的までの距離を短くします。
            </p>
            <p>
              私たちが大切にしているのは、機能の多さではありません。複雑な操作や不要な表示を減らし、
              利用者が本来やりたかったことに、気持ちよく集中できることです。
            </p>
            <p>
              企画から開発、運営まで一貫して向き合い、小さな違和感にも丁寧に手を入れながら、
              長く使えるプロダクトへ育てていきます。
            </p>
          </div>
        </div>
      </section>
      <section className="business-section">
        <div className="shell">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">PROFILE</p>
              <h2>事業者情報</h2>
            </div>
            <p>AIAutoLab / Tokyo, Japan</p>
          </div>
          <dl className="business-list">
            {businessInfo.map(([term, value], index) => (
              <div key={term}>
                <dt>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {term}
                </dt>
                <dd>
                  {term === "お問い合わせ" ? (
                    <a href={`mailto:${value}`}>{value}</a>
                  ) : (
                    value.split("\n").map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
