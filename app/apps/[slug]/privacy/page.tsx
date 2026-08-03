import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LegalNav, PageHero, StaticRedirect } from "../../../components";
import { allAppSlugs, getApp, isAppSlugAlias } from "../../../data";

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
  const canonical = `/apps/${app.slug}/privacy/`;
  const title = `${app.shortName}のプライバシーポリシー`;
  return {
    title,
    description: `${app.name}における情報の取り扱いについて定めたプライバシーポリシーです。`,
    alternates: { canonical },
    robots: isAppSlugAlias(slug) ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description: `${app.name}における情報の取り扱いについてご案内します。`,
      url: canonical,
    },
  };
}

const adData = [
  "広告識別子（Advertising ID / IDFA 等）",
  "IPアドレス",
  "端末情報（端末モデル、OSバージョン、言語設定など）",
  "広告の表示・クリック等のイベント情報",
  "概算の位置情報（IPアドレス等から推定される地域情報）",
];

export default async function AppPrivacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();
  if (isAppSlugAlias(slug)) {
    return <StaticRedirect href={`/apps/${app.slug}/privacy/`} label={`${app.shortName}のプライバシーポリシー`} />;
  }
  const learningApp = app.slug !== "tableclock";

  return (
    <>
      <PageHero
        eyebrow="PRIVACY / APP POLICY"
        title={`${app.shortName}のプライバシーポリシー`}
        lead={`${app.name}における情報の取り扱いについてご案内します。`}
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: app.shortName, href: "/#products" },
          { label: "プライバシーポリシー" },
        ]}
      />
      <section className="legal-section">
        <div className="shell legal-layout">
          <LegalNav slug={app.slug} appName={app.shortName} active="privacy" />
          <article className="legal-article">
            <p className="legal-scope-label">対象アプリ: {app.name}</p>
            <p className="legal-intro">
              橋本 薫（以下「開発者」）は、「{app.legalName}」（以下「本アプリ」）における
              個人情報および利用情報の取り扱いについて、以下のとおり定めます。
              本アプリにはアカウント作成・ログイン機能はなく、利用に必須の氏名、メールアドレス等の入力はありません。
            </p>
            <h2>1. 本ポリシーの適用範囲</h2>
            <p>
              本ポリシーは、本アプリ内のフィードバック送信機能、サポート対応、広告配信
              {learningApp ? "および問題報告に付随する利用状況の分析" : ""}に伴い取得される情報の取り扱いに適用されます。
            </p>
            <h2>2. 収集する情報</h2>
            <h3>2.1 ユーザーが入力する情報</h3>
            <p>
              ユーザーが任意で入力する自由記述のフィードバック内容（問題の誤り指摘、改善要望、動作不具合の報告など）を取得します。
              {learningApp && " 問題報告時には、問題ID、報告種別、アプリバージョン、端末情報、送信日時等が送信される場合があります。"}
            </p>
            <h3>2.2 広告配信に伴い取得される情報</h3>
            <p>
              本アプリは Google LLC が提供する Google AdMob を利用して広告を表示します。
              広告配信のため、以下の情報が Google に送信される場合があります。
            </p>
            <ul>{adData.map((item) => <li key={item}>{item}</li>)}</ul>
            {learningApp && (
              <>
                <h3>2.3 問題報告に付随する分析情報</h3>
                <p>
                  ユーザーが明示的に同意した場合に限り、品質改善のため、課金状態、問題の回答数・正答率、
                  学習セッション数・学習日数、疑似匿名のインストール識別子（install_id）等が送信される場合があります。
                  未同意の場合、Web版の場合、または本機能が無効の場合、これらは送信されません。
                </p>
              </>
            )}
            <h3>{learningApp ? "2.4" : "2.3"} 取得しない情報</h3>
            <ul>
              <li>氏名・メールアドレス・Googleアカウント情報</li>
              <li>正確な位置情報（GPSなど）</li>
              <li>連絡先や電話帳などの端末内データ</li>
              <li>アカウント登録・ログイン情報</li>
            </ul>
            <h2>3. 収集方法</h2>
            <p>
              本アプリの操作により外部の Google フォームが開き、ユーザーが入力・送信した内容が取得されます。
              広告配信に伴う情報は、Google Mobile Ads SDK を通じて自動的に収集・送信されます。
            </p>
            <h2>4. 利用目的</h2>
            <ul>
              <li>問題や不具合の調査・修正</li>
              <li>個別のサポート対応</li>
              <li>本アプリの機能改善</li>
              <li>広告の表示、配信の最適化、広告効果の測定、不正防止</li>
            </ul>
            <h2>5. 第三者への提供</h2>
            <p>
              送信された情報は Google LLC が提供する Google フォームおよび Google スプレッドシート上に保存されます。
              広告配信に伴い取得される情報は同社のプライバシーポリシーに基づき取り扱われます。
              法令に基づく場合を除き、その他の第三者への提供は行いません。
            </p>
            <h2>6. ユーザーの選択とコントロール</h2>
            <ul>
              <li>フィードバック送信は任意であり、送信しなくても本アプリを利用できます。</li>
              {learningApp && <li>分析情報の送信は任意の同意に基づき、同意はアプリ内から撤回できます。</li>}
              <li>広告のパーソナライズや広告識別子は、端末の設定から制限・リセットできます。</li>
            </ul>
            <h2>7. 保存期間</h2>
            <p>
              フィードバックデータは問題対応・品質改善に必要な期間保持し、不要になった後に削除します。
              広告配信に伴うデータの保存期間は Google LLC のポリシーに従います。
            </p>
            <h2>8. お問い合わせ</h2>
            <dl>
              <div><dt>アプリ名</dt><dd>{app.legalName}</dd></div>
              <div><dt>開発者</dt><dd>橋本 薫</dd></div>
              <div><dt>メールアドレス</dt><dd><a href="mailto:info@aiautolab.net">info@aiautolab.net</a></dd></div>
            </dl>
            <h2>9. 広告について</h2>
            <p>
              本アプリは Google AdMob を利用して広告を表示します。Google のプライバシーポリシーおよび広告に関する情報をご確認ください。
            </p>
            <ul className="external-document-links">
              <li>
                <Link href="https://policies.google.com/privacy" rel="noreferrer" target="_blank">
                  Google プライバシーポリシー（外部サイト） <span aria-hidden="true">↗</span>
                </Link>
              </li>
              <li>
                <Link href="https://policies.google.com/technologies/ads" rel="noreferrer" target="_blank">
                  Google 広告に関する情報（外部サイト） <span aria-hidden="true">↗</span>
                </Link>
              </li>
            </ul>
            <h2>10. プライバシーポリシーの変更</h2>
            <p>
              開発者は、本ポリシーの内容を適宜見直し、必要に応じて改訂します。
              重要な変更がある場合は本アプリ内で通知することがあります。
            </p>
            <p className="updated">最終更新日: 2026年7月27日</p>
          </article>
        </div>
      </section>
    </>
  );
}
