import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { AppInfo } from "./data";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="AIAutoLab ホーム">
          <span className="wordmark-mark" aria-hidden="true">
            <i />
          </span>
          <span>AIAutoLab</span>
        </Link>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <Link href="/apps/">Apps</Link>
          <Link href="/about/">About</Link>
          <Link href="/legal/">Legal</Link>
          <Link className="nav-contact" href="/contact/">
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="メニューを開く">
            <span />
            <span />
          </summary>
          <nav aria-label="モバイルナビゲーション">
            <Link href="/">Home</Link>
            <Link href="/apps/">Apps</Link>
            <Link href="/about/">About</Link>
            <Link href="/legal/">Legal</Link>
            <Link href="/contact/">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <p className="footer-kicker">MAKE IT CLEAR.</p>
          <p className="footer-statement">
            学びと日常を、<br />
            もう少し軽やかに。
          </p>
        </div>
        <div className="footer-nav">
          <div>
            <p className="footer-label">Explore</p>
            <Link href="/apps/">アプリ一覧</Link>
            <Link href="/about/">AIAutoLabについて</Link>
            <Link href="/contact/">お問い合わせ</Link>
          </div>
          <div>
            <p className="footer-label">Legal</p>
            <Link href="/legal/">法的情報一覧</Link>
            <Link href="/legal/privacy/">Webサイトのプライバシーポリシー</Link>
            <Link href="/legal/terms/">Webサイト利用規約</Link>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <div className="wordmark wordmark-light">
          <span className="wordmark-mark" aria-hidden="true">
            <i />
          </span>
          <span>AIAutoLab</span>
        </div>
        <p>© 2026 AIAutoLab</p>
        <p>JIMBOCHO, TOKYO</p>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  breadcrumbs?: BreadcrumbItem[];
}) {
  return (
    <header className="page-hero">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="dark" />}
      <div className="shell page-hero-grid">
        <p className="eyebrow light">{eyebrow}</p>
        <div>
          <h1>{title}</h1>
          <p>{lead}</p>
        </div>
      </div>
      <span className="page-orbit orbit-a" aria-hidden="true" />
      <span className="page-orbit orbit-b" aria-hidden="true" />
    </header>
  );
}

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
}) {
  return (
    <nav className={`breadcrumbs breadcrumbs-${tone}`} aria-label="パンくず">
      <ol className="shell">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function StaticRedirect({ href, label }: { href: string; label: string }) {
  return (
    <section className="redirect-page">
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <div className="shell">
        <p>{label}へ移動します。</p>
        <Link href={href}>{label}を開く</Link>
      </div>
    </section>
  );
}

export function Status({ value }: { value: AppInfo["status"] }) {
  return <span className={`status ${value === "公開中" ? "is-live" : ""}`}>{value}</span>;
}

export function ProductVisual({
  app,
  size = "card",
}: {
  app: AppInfo;
  size?: "card" | "hero";
}) {
  return (
    <div className={`product-visual accent-${app.accent} visual-${size}`}>
      {app.icon ? (
        <Image src={app.icon} alt="" width={size === "hero" ? 180 : 92} height={size === "hero" ? 180 : 92} />
      ) : (
        <>
          <span className="visual-grid" aria-hidden="true" />
          <span className="visual-code" aria-hidden="true">
            {app.shortName.slice(0, 2)}
          </span>
          <span className="visual-dot" aria-hidden="true" />
        </>
      )}
    </div>
  );
}

export function ProductCard({ app, featured = false }: { app: AppInfo; featured?: boolean }) {
  return (
    <article className={`product-card ${featured ? "featured-card" : ""}`}>
      <Link className="card-hit" href={`/apps/${app.slug}/`} aria-label={`${app.name}の詳細を見る`} />
      <div className="card-meta">
        <p>{app.eyebrow}</p>
        <Status value={app.status} />
      </div>
      <ProductVisual app={app} />
      <div className="card-copy">
        <h3>{app.name}</h3>
        <p>{app.description}</p>
        {app.releaseNote && <p className="release-note">{app.releaseNote}</p>}
        <span className="card-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </article>
  );
}

export function LegalNav({ slug, appName, active }: { slug: string; appName: string; active: "privacy" | "terms" }) {
  return (
    <nav className="legal-nav" aria-label={`${appName}の案内`}>
      <p className="legal-nav-label">{appName}</p>
      <Link href={`/apps/${slug}/`}>このアプリの詳細</Link>
      <Link href={`/apps/${slug}/support/`}>このアプリのサポート</Link>
      <Link aria-current={active === "privacy" ? "page" : undefined} href={`/apps/${slug}/privacy/`}>
        このアプリのプライバシーポリシー
      </Link>
      <Link aria-current={active === "terms" ? "page" : undefined} href={`/apps/${slug}/terms/`}>
        このアプリの利用規約
      </Link>
      <Link href="/apps/">AIAutoLabのアプリ一覧へ戻る</Link>
    </nav>
  );
}
