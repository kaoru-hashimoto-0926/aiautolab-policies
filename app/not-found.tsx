import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell">
        <p className="eyebrow light">ERROR / 404</p>
        <p className="error-number">404</p>
        <h1>ページが見つかりません</h1>
        <p>URLが変更されたか、ページが削除された可能性があります。</p>
        <Link className="button button-light" href="/">ホームへ戻る</Link>
      </div>
    </section>
  );
}
