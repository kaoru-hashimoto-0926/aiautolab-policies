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
      "本アプリは、一般社団法人生成AI活用普及協会および生成AIパスポート試験の公式提供者とは一切関係のない非公式アプリです。",
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
    status: "公開中",
    description: "クイズ形式の問題演習で、FP1級の合格を目指す学習アプリ。",
    longDescription:
      "FP1級技能検定（学科試験）の学習に対応した問題演習アプリです。練習モードと本番形式の試験モードで、スマートフォンから手軽に試験対策を進められます。",
    platforms: "Android",
    icon: "/assets/images/fp1.png",
    accent: "pink",
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
        href: "https://play.google.com/store/apps/details?id=net.aiautolab.fp1study",
      },
    ],
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
    slug: "kaigo",
    name: "介護福祉士",
    shortName: "介護福祉士",
    eyebrow: "CARE WORK",
    status: "準備中",
    description: "介護福祉士国家試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "介護福祉士国家試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "pink",
    kind: "learning",
    legalName: "介護福祉士｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "介護福祉士国家試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省および公益財団法人社会福祉振興・試験センターとは一切関係のない非公式アプリです。",
  },
  {
    slug: "shakaifukushi",
    name: "社会福祉士",
    shortName: "社会福祉士",
    eyebrow: "SOCIAL WORK",
    status: "準備中",
    description: "社会福祉士国家試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "社会福祉士国家試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "blue",
    kind: "learning",
    legalName: "社会福祉士｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "社会福祉士国家試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省および公益財団法人社会福祉振興・試験センターとは一切関係のない非公式アプリです。",
  },
  {
    slug: "seishinhoken",
    name: "精神保健福祉士",
    shortName: "精神保健福祉士",
    eyebrow: "MENTAL HEALTH",
    status: "準備中",
    description: "精神保健福祉士国家試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "精神保健福祉士国家試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "mint",
    kind: "learning",
    legalName: "精神保健福祉士｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "精神保健福祉士国家試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省および公益財団法人社会福祉振興・試験センターとは一切関係のない非公式アプリです。",
  },
  {
    slug: "caremanager",
    name: "介護支援専門員（ケアマネ）",
    shortName: "ケアマネ",
    eyebrow: "CARE MANAGEMENT",
    status: "準備中",
    description: "介護支援専門員実務研修受講試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "介護支援専門員実務研修受講試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "amber",
    kind: "learning",
    legalName: "介護支援専門員（ケアマネ）｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "介護支援専門員実務研修受講試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省、各都道府県および試験実施機関とは一切関係のない非公式アプリです。",
  },
  {
    slug: "nurse",
    name: "看護師",
    shortName: "看護師",
    eyebrow: "NURSING",
    status: "準備中",
    description: "看護師国家試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "看護師国家試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "violet",
    kind: "learning",
    legalName: "看護師｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "看護師国家試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省とは一切関係のない非公式アプリです。",
  },
  {
    slug: "phn",
    name: "保健師",
    shortName: "保健師",
    eyebrow: "PUBLIC HEALTH",
    status: "準備中",
    description: "保健師国家試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "保健師国家試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "cyan",
    kind: "learning",
    legalName: "保健師｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "保健師国家試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省とは一切関係のない非公式アプリです。",
  },
  {
    slug: "midwife",
    name: "助産師",
    shortName: "助産師",
    eyebrow: "MIDWIFERY",
    status: "準備中",
    description: "助産師国家試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "助産師国家試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "pink",
    kind: "learning",
    legalName: "助産師｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "助産師国家試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省とは一切関係のない非公式アプリです。",
  },
  {
    slug: "dietitian",
    name: "管理栄養士",
    shortName: "管理栄養士",
    eyebrow: "NUTRITION",
    status: "準備中",
    description: "管理栄養士国家試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "管理栄養士国家試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "lime",
    kind: "learning",
    legalName: "管理栄養士｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "管理栄養士国家試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省とは一切関係のない非公式アプリです。",
  },
  {
    slug: "pt",
    name: "理学療法士",
    shortName: "理学療法士",
    eyebrow: "PHYSICAL THERAPY",
    status: "準備中",
    description: "理学療法士国家試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "理学療法士国家試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "orange",
    kind: "learning",
    legalName: "理学療法士｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "理学療法士国家試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省とは一切関係のない非公式アプリです。",
  },
  {
    slug: "ot",
    name: "作業療法士",
    shortName: "作業療法士",
    eyebrow: "OCCUPATIONAL THERAPY",
    status: "準備中",
    description: "作業療法士国家試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "作業療法士国家試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "mint",
    kind: "learning",
    legalName: "作業療法士｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "作業療法士国家試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、厚生労働省とは一切関係のない非公式アプリです。",
  },
  {
    slug: "denko2",
    name: "第二種電気工事士",
    shortName: "第二種電気工事士",
    eyebrow: "ELECTRICAL WORK",
    status: "準備中",
    description: "第二種電気工事士試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "第二種電気工事士試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "amber",
    kind: "learning",
    legalName: "第二種電気工事士｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "第二種電気工事士試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、経済産業省および一般財団法人電気技術者試験センターとは一切関係のない非公式アプリです。",
  },
  {
    slug: "denko1",
    name: "第一種電気工事士",
    shortName: "第一種電気工事士",
    eyebrow: "ELECTRICAL WORK",
    status: "準備中",
    description: "第一種電気工事士試験の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "第一種電気工事士試験の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "blue",
    kind: "learning",
    legalName: "第一種電気工事士｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "第一種電気工事士試験の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、経済産業省および一般財団法人電気技術者試験センターとは一切関係のない非公式アプリです。",
  },
  {
    slug: "denken",
    name: "電気主任技術者（電験三種ほか）",
    shortName: "電験",
    eyebrow: "ELECTRICAL ENGINEERING",
    status: "準備中",
    description: "電気主任技術者試験（第三種ほか）の対策を、すきま時間で進めるための学習アプリ。",
    longDescription:
      "電気主任技術者試験（第三種ほか）の問題演習に集中できる、シンプルな学習アプリとして現在準備を進めています。",
    platforms: "Android・iOS",
    accent: "violet",
    kind: "learning",
    legalName: "電気主任技術者（電験三種ほか）｜試験対策 - クイズで学ぶ問題集アプリ",
    legalPurpose: "電気主任技術者試験（第三種ほか）の利用・学習を支援するアプリケーション",
    nonOfficialNotice:
      "本アプリは、経済産業省および一般財団法人電気技術者試験センターとは一切関係のない非公式アプリです。",
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
