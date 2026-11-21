export type AppInfo = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  status: "公開中" | "準備中";
  description: string;
  longDescription: string;
  platforms: string;
  icon?: string;
  accent: string;
  kind: "learning" | "utility";
  features?: string[];
  stores?: { label: string; href: string }[];
  releaseNote?: string;
  officialNotice?: string;
  legalName: string;
  legalPurpose: string;
  nonOfficialNotice?: string;
};

export const apps: AppInfo[] = [
  {
    slug: "genai-passport",
    name: "生成AIパスポート 学習アプリ",
    shortName: "生成AIパスポート",
    eyebrow: "GENERATIVE AI",
    status: "公開中",
    description: "問題演習、復習、学習進捗の確認に集中できる、シンプルな試験対策アプリ。",
    longDescription:
      "生成AIパスポート試験の学習に対応した問題演習アプリです。不要な機能をできるだけ減らし、問題演習、復習、学習進捗の確認に集中できる構成を採用しています。",
    platforms: "Android・iOS",
    icon: "/assets/images/generative-ai-passport.png",
    accent: "violet",
    kind: "learning",
    features: [
      "問題演習",
      "解説の確認",
      "間違えた問題の復習",
      "学習進捗の確認",
      "シンプルで迷いにくい操作",
      "スマートフォンでの学習に最適化",
    ],
    stores: [
      {
        label: "Google Playで見る",
        href: "https://play.google.com/store/apps/details?id=net.aiautolab.aipassportstudy",
      },
      {
        label: "App Storeで見る",
        href: "https://apps.apple.com/jp/app/id6762196276",
      },
    ],
    officialNotice:
      "本アプリは、一般社団法人生成AI活用普及協会および生成AIパスポート試験の公式提供者とは関係のない非公式アプリです。",
    legalName: "生成AIパスポート｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "生成AIパスポート試験の利用・学習を支援するアプリケーション",
  },
  {
    slug: "itpass",
    name: "ITパスポート",
    shortName: "ITパスポート",
    eyebrow: "INFORMATION TECHNOLOGY",
    status: "公開中",
    description: "練習モードと試験モードで、ITパスポート試験の合格を目指す学習アプリ。",
    longDescription:
      "ITパスポート試験の学習に対応した問題演習アプリです。ストラテジ系・マネジメント系・テクノロジ系の分野別に、スマートフォンから手軽に試験対策を進められます。",
    platforms: "Android",
    icon: "/assets/images/itpass.png",
    accent: "lime",
    kind: "learning",
    features: [
      "分野別・全分野ランダムの問題演習",
      "すぐに正解を確認できる練習モード",
      "本番形式で実力を確認できる試験モード",
      "解説の確認",
      "学習進捗の確認",
      "スマートフォンでの学習に最適化",
    ],
    stores: [
      {
        label: "Google Playで見る",
        href: "https://play.google.com/store/apps/details?id=net.aiautolab.IP_study",
      },
    ],
    legalName: "ITパスポート｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "ITパスポート試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、独立行政法人情報処理推進機構（IPA）とは一切関係のない非公式アプリです。",
  },
  {
    slug: "sg",
    name: "情報セキュリティマネジメント",
    shortName: "情報セキュリティ",
    eyebrow: "SECURITY",
    status: "公開中",
    description: "練習モードと試験モードで、情報セキュリティマネジメント試験の合格を目指す学習アプリ。",
    longDescription:
      "情報セキュリティマネジメント試験の学習に対応した問題演習アプリです。すぐに正解を確認できる練習モードと本番形式の試験モードで、スマートフォンから手軽に試験対策を進められます。",
    platforms: "Android",
    icon: "/assets/images/sg.png",
    accent: "orange",
    kind: "learning",
    features: [
      "分野別・全分野ランダムの問題演習",
      "すぐに正解を確認できる練習モード",
      "本番形式で実力を確認できる試験モード",
      "解説の確認",
      "学習進捗の確認",
      "スマートフォンでの学習に最適化",
    ],
    stores: [
      {
        label: "Google Playで見る",
        href: "https://play.google.com/store/apps/details?id=net.aiautolab.SG_study",
      },
    ],
    legalName: "情報セキュリティマネジメント｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "情報セキュリティマネジメント試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、独立行政法人情報処理推進機構（IPA）とは一切関係のない非公式アプリです。",
  },
  {
    slug: "fe",
    name: "基本情報技術者",
    shortName: "基本情報技術者",
    eyebrow: "ENGINEERING",
    status: "公開中",
    description: "練習モードと試験モードで、基本情報技術者試験の合格を目指す学習アプリ。",
    longDescription:
      "基本情報技術者試験の学習に対応した問題演習アプリです。すぐに正解を確認できる練習モードと本番形式の試験モードで、スマートフォンから手軽に試験対策を進められます。",
    platforms: "Android",
    icon: "/assets/images/fe.png",
    accent: "blue",
    kind: "learning",
    features: [
      "分野別・全分野ランダムの問題演習",
      "すぐに正解を確認できる練習モード",
      "本番形式で実力を確認できる試験モード",
      "解説の確認",
      "学習進捗の確認",
      "スマートフォンでの学習に最適化",
    ],
    stores: [
      {
        label: "Google Playで見る",
        href: "https://play.google.com/store/apps/details?id=net.aiautolab.FE_study",
      },
    ],
    legalName: "基本情報技術者｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "基本情報技術者試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、独立行政法人情報処理推進機構（IPA）とは一切関係のない非公式アプリです。",
  },
  {
    slug: "fp1",
    name: "FP1級",
    shortName: "FP1級",
    eyebrow: "FINANCIAL PLANNING",
    status: "準備中",
    description: "お金の知識を、暮らしにつながる確かな力へ。",
    longDescription:
      "FP1級試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "pink",
    kind: "learning",
    legalName: "FP1級｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "FP1級技能検定の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、日本FP協会および一般社団法人金融財政事情研究会（きんざい）とは一切関係のない非公式アプリです。",
  },
  {
    slug: "fp2",
    name: "FP2級",
    shortName: "FP2級",
    eyebrow: "FINANCIAL PLANNING",
    status: "公開中",
    description: "クイズ形式の問題演習で、FP2級の合格を目指す学習アプリ。",
    longDescription:
      "FP2級技能検定の学習に対応した問題演習アプリです。選択式のクイズ形式で、スマートフォンから手軽に試験対策を進められます。",
    platforms: "Android・iOS",
    icon: "/assets/images/fp2.png",
    accent: "amber",
    kind: "learning",
    features: [
      "クイズ形式の問題演習",
      "解説の確認",
      "間違えた問題の復習",
      "学習進捗の確認",
      "シンプルで迷いにくい操作",
      "スマートフォンでの学習に最適化",
    ],
    stores: [
      {
        label: "Google Playで見る",
        href: "https://play.google.com/store/apps/details?id=net.aiautolab.fp2study",
      },
      {
        label: "App Storeで見る",
        href: "https://apps.apple.com/jp/app/id6804550059",
      },
    ],
    legalName: "FP2級｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "FP2級技能検定の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、日本FP協会および一般社団法人金融財政事情研究会（きんざい）とは一切関係のない非公式アプリです。",
  },
  {
    slug: "fp3",
    name: "FP3級",
    shortName: "FP3級",
    eyebrow: "FINANCIAL PLANNING",
    status: "公開中",
    description: "クイズ形式の問題演習で、FP3級の合格を目指す学習アプリ。",
    longDescription:
      "FP3級技能検定の学習に対応した問題演習アプリです。クイズ形式で、スマートフォンから手軽に試験対策を進められます。",
    platforms: "Android・iOS",
    icon: "/assets/images/fp3.png",
    accent: "mint",
    kind: "learning",
    features: [
      "クイズ形式の問題演習",
      "解説の確認",
      "間違えた問題の復習",
      "学習進捗の確認",
      "シンプルで迷いにくい操作",
      "スマートフォンでの学習に最適化",
    ],
    stores: [
      {
        label: "Google Playで見る",
        href: "https://play.google.com/store/apps/details?id=net.aiautolab.fp3study",
      },
      {
        label: "App Storeで見る",
        href: "https://apps.apple.com/jp/app/id6834650491",
      },
    ],
    legalName: "FP3級｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "FP3級技能検定の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、日本FP協会および一般社団法人金融財政事情研究会（きんざい）とは一切関係のない非公式アプリです。",
  },
  {
    slug: "tableclock",
    name: "TableClock",
    shortName: "TableClock",
    eyebrow: "UTILITY",
    status: "公開中",
    description: "スマートフォンやタブレットを、見やすくシンプルな卓上時計に。",
    longDescription:
      "スマートフォンやタブレットを、シンプルな卓上時計として使用できるアプリです。必要な情報を見やすく表示し、余計な操作をせずにすぐ利用できることを重視しています。",
    platforms: "Android",
    icon: "/assets/images/tableclock.png",
    accent: "cyan",
    kind: "utility",
    features: [
      "大きく見やすい時刻表示",
      "卓上で使いやすいシンプルな画面",
      "不要な操作を減らした設計",
    ],
    stores: [
      {
        label: "Google Playで見る",
        href: "https://play.google.com/store/apps/details?id=net.aiautolab.tableclock",
      },
    ],
    legalName: "TableClock",
    legalPurpose: "シンプルで見やすい時計表示を提供するアプリケーション",
  },
];

export const slugAliases: Record<string, string> = {
  "generative-ai-passport": "genai-passport",
  "it-passport": "itpass",
  "security-management": "sg",
  "fundamental-information-technology-engineer": "fe",
};

export function getApp(slug: string) {
  const normalized = slugAliases[slug] ?? slug;
  return apps.find((app) => app.slug === normalized);
}

export function getCanonicalAppSlug(slug: string) {
  return slugAliases[slug] ?? slug;
}

export function isAppSlugAlias(slug: string) {
  return Object.hasOwn(slugAliases, slug);
}

export const allAppSlugs = [...apps.map((app) => app.slug), ...Object.keys(slugAliases)];
