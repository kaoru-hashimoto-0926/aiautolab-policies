import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductVisual, Status } from "../../components";
import { allAppSlugs, getApp } from "../../data";

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
  return {
    title: app.name,
    description: app.longDescription,
  };
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const isLive = app.status === "公開中";

  return (
    <>
      <header className="product-hero">
        <div className="shell product-hero-grid">
          <div className="product-hero-copy">
            <p className="eyebrow light">{app.eyebrow}</p>
            <Status value={app.status} />
            <h1>{app.name}</h1>
            <p>{app.longDescription}</p>
            {app.stores && app.stores.length > 0 && (
              <div className="store-actions">
                {app.stores.map((store, index) => (
                  <a
                    className={`button ${index === 0 ? "button-light" : "button-ghost"}`}
                    href={store.href}
                    key={store.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {store.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <ProductVisual app={app} size="hero" />
        </div>
      </header>

      <section className="product-detail-section">
        <div className="shell product-detail-grid">
          <div>
            <p className="eyebrow">{isLive ? "DESIGNED FOR FOCUS" : "IN DEVELOPMENT"}</p>
            <h2>{isLive ? "迷わず使える、必要十分な機能。" : "学習に集中できる設計を。"}</h2>
          </div>
          <div>
            {app.features ? (
              <ul className="feature-list">
                {app.features.map((feature, index) => (
                  <li key={feature}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {feature}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="development-copy">
                <p>
                  必要な機能を分かりやすく配置し、不要な表示や複雑な操作を減らすことで、
                  利用者が学習に集中できる体験を目指します。
                </p>
                <p>
                  このアプリに関するお問い合わせは、
                  <a href="mailto:info@aiautolab.net">info@aiautolab.net</a>までご連絡ください。
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="shell product-info">
          <div>
            <span>STATUS</span>
            <strong>{app.status}</strong>
          </div>
          <div>
            <span>PLATFORMS</span>
            <strong>{app.platforms}</strong>
            {app.releaseNote && <small className="release-note">{app.releaseNote}</small>}
          </div>
          <div>
            <span>SUPPORT &amp; POLICY</span>
            <Link href="/contact/">お問い合わせ</Link>
            <Link href={`/apps/${app.slug}/privacy/`}>プライバシーポリシー</Link>
            <Link href={`/apps/${app.slug}/terms/`}>利用規約</Link>
          </div>
        </div>

        {app.officialNotice && (
          <div className="shell quiet-notice">
            <span aria-hidden="true">i</span>
            <p>{app.officialNotice}</p>
          </div>
        )}
      </section>
    </>
  );
}
