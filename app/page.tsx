import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "./components";
import { apps } from "./data";

const principles = [
  {
    number: "01",
    title: "Useful",
    ja: "用事を軽くする",
    text: "毎日の小さな手間を見つけ、少ない操作で目的に届くツールにします。",
  },
  {
    number: "02",
    title: "Clear",
    ja: "迷わせない",
    text: "できることを増やすだけでなく、必要な機能を見つけやすく整理します。",
  },
  {
    number: "03",
    title: "Evolving",
    ja: "小さく育てる",
    text: "利用者の声と実際の使われ方から、意味のある改善を積み重ねます。",
  },
];

export default function Home() {
  const liveApps = apps.filter((app) => app.status === "公開中");
  const utilityApps = apps.filter((app) => app.kind === "utility");
  const featuredHeroApps = [...utilityApps, ...liveApps.filter((app) => app.kind !== "utility")].slice(0, 3);
  const preparingApps = apps.filter((app) => app.status === "準備中");

  return (
    <>
      <section className="hero">
        <div className="shell hero-inner">
          <div className="hero-headline">
            <p className="eyebrow light">APP DIRECTORY / TOKYO</p>
            <h1>
              <span className="phrase">日常に役立つ</span>
              <span className="accent">アプリを。</span>
            </h1>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-lead">
                学習、時計、テザリングまわりまで。
                <br className="desktop-only" />
                AIAutoLabがつくる便利なモバイルアプリをまとめています。
              </p>
              <div className="hero-actions">
                <Link className="button button-light" href="#products">
                  アプリを見る <span aria-hidden="true">↓</span>
                </Link>
                <Link className="button button-ghost" href="/about/">
                  私たちについて
                </Link>
              </div>
            </div>

            <div className="hero-stage" aria-label="AIAutoLabのプロダクト">
              <div className="stage-label">
                <span>STUDIO / 01</span>
                <span>TOOLS FOR DAILY USE</span>
              </div>
              <div className="stage-orbit orbit-one" aria-hidden="true" />
              <div className="stage-orbit orbit-two" aria-hidden="true" />
              <div className="hero-app-grid">
                {featuredHeroApps.map((app, index) => (
                  <article className="floating-app" key={app.slug}>
                    <span className="mini-label">{app.status === "公開中" ? "NOW AVAILABLE" : "IN DEVELOPMENT"}</span>
                    {app.icon ? (
                      <Image
                        src={app.icon}
                        alt={app.shortName + "のアプリアイコン"}
                        width={112}
                        height={112}
                        priority={index === 0}
                      />
                    ) : (
                      <span className="hero-placeholder" aria-hidden="true">
                        {app.shortName.slice(0, 2)}
                      </span>
                    )}
                    <strong>{app.shortName}</strong>
                  </article>
                ))}
              </div>
              <span className="focus-chip">
                <i aria-hidden="true" /> Useful by design
              </span>
            </div>
          </div>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <div>
            <span>UTILITY APPS</span><i /> <span>LEARNING TOOLS</span><i /> <span>MOBILE PRODUCTS</span>
            <i /> <span>WATCH UTILITIES</span><i /> <span>SIMPLE TOOLS</span>
          </div>
        </div>
      </section>

      <section className="belief section">
        <div className="shell belief-grid">
          <p className="eyebrow">WHAT WE BELIEVE</p>
          <div>
            <h2>
              いろいろな用事を、
              <br />
              <span className="serif">少しだけ扱いやすく。</span>
            </h2>
            <div className="belief-copy">
              <p className="large-copy">AIAutoLabは、便利な小さなアプリを継続してつくっています。</p>
              <p>
                試験対策のような学習アプリから、時計やスマートウォッチ連携の実用ツールまで。
                目的に対してまっすぐ使えることを大切にしています。
              </p>
              <Link className="text-link" href="/about/">
                AIAutoLabの考え方 <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="products section" id="products">
        <span className="anchor-alias" id="apps" aria-hidden="true" />
        <div className="shell">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">SELECTED PRODUCTS</p>
              <h2>アプリ一覧</h2>
            </div>
            <p>
              公開中のアプリと、
              <br />
              準備中の便利ツール。
            </p>
          </div>

          <div className="featured-products">
            {liveApps.map((app) => (
              <ProductCard app={app} featured key={app.slug} />
            ))}
          </div>

          <div className="preparing-header">
            <p>IN DEVELOPMENT</p>
            <span>{String(preparingApps.length).padStart(2, "0")} PRODUCTS</span>
          </div>
          <div className="product-grid">
            {preparingApps.map((app) => (
              <ProductCard app={app} key={app.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="principles section">
        <div className="shell">
          <p className="eyebrow light">OUR PRINCIPLES</p>
          <div className="principles-heading">
            <h2>
              つくるときに、
              <br />
              大切にしていること。
            </h2>
            <p>見た目の美しさだけでなく、日々の使いやすさと導線の短さまで設計します。</p>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <div className="principle-symbol" aria-hidden="true">
                  <i />
                </div>
                <h3>{principle.title}</h3>
                <p className="principle-ja">{principle.ja}</p>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="shell contact-band-grid">
          <p className="eyebrow">LET&apos;S TALK</p>
          <div>
            <h2>
              アプリについて、
              <br />
              お気軽にどうぞ。
            </h2>
            <Link className="round-link" href="/contact/" aria-label="お問い合わせへ">
              ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
