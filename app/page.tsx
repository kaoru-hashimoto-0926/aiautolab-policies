import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "./components";
import { apps } from "./data";

const principles = [
  {
    number: "01",
    title: "Clear",
    ja: "迷わせない",
    text: "必要な機能を、必要な場所に。初めてでも自然に使える体験を設計します。",
  },
  {
    number: "02",
    title: "Focused",
    ja: "集中を守る",
    text: "余計な表示や複雑な操作を減らし、学びや作業のリズムを邪魔しません。",
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
  const featuredHeroApps = liveApps.filter((app) => app.slug !== "tableclock");
  const preparingApps = apps.filter((app) => app.status === "準備中");

  return (
    <>
      <section className="hero">
        <div className="shell hero-inner">
          <div className="hero-headline">
            <p className="eyebrow light">MOBILE PRODUCTS / TOKYO</p>
            <h1>
              <span className="phrase">学ぶ時間を、</span>
              <span className="accent">もっと心地よく。</span>
            </h1>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-lead">
                迷いを減らし、本来の目的に集中できる。
                <br className="desktop-only" />
                AIAutoLabは、そんなモバイルプロダクトをつくっています。
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
                <span>BUILDING CALM EXPERIENCES</span>
              </div>
              <div className="stage-orbit orbit-one" aria-hidden="true" />
              <div className="stage-orbit orbit-two" aria-hidden="true" />
              <div className="hero-app-grid">
                {featuredHeroApps.map((app, index) => (
                  <article className="floating-app" key={app.slug}>
                    <span className="mini-label">NOW AVAILABLE</span>
                    {app.icon && (
                      <Image
                        src={app.icon}
                        alt={app.shortName + "のアプリアイコン"}
                        width={112}
                        height={112}
                        priority={index === 0}
                      />
                    )}
                    <strong>{app.shortName}</strong>
                  </article>
                ))}
              </div>
              <span className="focus-chip">
                <i aria-hidden="true" /> Focus by design
              </span>
            </div>
          </div>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <div>
            <span>LEARN CLEARLY</span><i /> <span>FOCUS DEEPLY</span><i /> <span>DESIGN THOUGHTFULLY</span>
            <i /> <span>LEARN CLEARLY</span><i /> <span>FOCUS DEEPLY</span>
          </div>
        </div>
      </section>

      <section className="belief section">
        <div className="shell belief-grid">
          <p className="eyebrow">WHAT WE BELIEVE</p>
          <div>
            <h2>
              機能を足す前に、
              <br />
              <span className="serif">迷いをひとつ減らす。</span>
            </h2>
            <div className="belief-copy">
              <p className="large-copy">良いアプリは、できることの多さだけで決まりません。</p>
              <p>
                必要な機能を、必要な場所に。小さな違和感まで見逃さず、
                使うたびに馴染むプロダクトを目指します。
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
              <h2>つくっているもの</h2>
            </div>
            <p>
              公開中のアプリと、
              <br />
              これから届けるアプリ。
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
            <p>見た目の美しさだけでなく、迷わず使い続けられることまで設計します。</p>
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
