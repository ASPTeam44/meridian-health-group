// Brand & category catalog.
// NOTE: Brand names below are real third-party trademarks supplied by the client.
// Confirm licensing/authorisation before publishing. Product imagery uses
// category-appropriate stock — replace with authorised brand assets in production.

export type Product = {
  sku: string;
  ean: string;        // GTIN-13
  name: string;
  tagline: string;
  description: string;
  priceUsd: number;
  priceEur: number;
  size: string;
};

export type Brand = {
  slug: string;
  name: string;
  monogram: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  short: string;
  description: string;
  story: string;
  accent: string;
  heroVideo: string;
  heroImage: string;
  productImage: string; // category-appropriate stock for product cards
  products: Product[];
  keywords: string[];
};

export type Category = {
  slug: string;
  label: string;
  blurb: string;
  image: string;
};

const VIDEOS = {
  oral: "https://videos.pexels.com/video-files/4124482/4124482-uhd_2560_1440_25fps.mp4",
  vms: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
  resp: "https://videos.pexels.com/video-files/3997798/3997798-uhd_2560_1440_25fps.mp4",
  pain: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
  dig: "https://videos.pexels.com/video-files/3199284/3199284-uhd_2560_1440_25fps.mp4",
  wellness: "https://videos.pexels.com/video-files/4498283/4498283-uhd_2560_1440_25fps.mp4",
};

const IMG = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

// Category-appropriate product photography (stock)
const PIMG = {
  toothpaste: IMG("photo-1559591935-c6c92c6cb8be"),
  mouthwash: IMG("photo-1606811971618-4486d14f3f99"),
  denture: IMG("photo-1606811841689-23dfddce3e95"),
  vitamins: IMG("photo-1550572017-edd951b55104"),
  effervescent: IMG("photo-1607619056574-7b8d3ee536b2"),
  nasal: IMG("photo-1584952811565-c4c4031c0a04"),
  sachets: IMG("photo-1577563908411-5077b6dc7624"),
  tablets: IMG("photo-1587854692152-cbe660dbde88"),
  gel: IMG("photo-1559757175-5700dde675bc"),
  antacid: IMG("photo-1547887537-6158d64c35b3"),
  gum: IMG("photo-1556228720-195a672e8a03"),
  lipbalm: IMG("photo-1612277796419-b39e9a4ab10c"),
};

export const CATEGORIES: Category[] = [
  { slug: "oral-health", label: "Oral Health", blurb: "Toothpastes, mouthwashes and denture care developed with dentists for daily clinical clean.", image: PIMG.toothpaste },
  { slug: "vitamins", label: "Vitamins, Minerals & Supplements", blurb: "Pharmaceutical-grade multivitamins and immunity boosters for everyday nutritional support.", image: PIMG.vitamins },
  { slug: "respiratory", label: "Respiratory Health", blurb: "Nasal sprays and cold & flu relief trusted across pharmacies worldwide.", image: PIMG.nasal },
  { slug: "pain-relief", label: "Pain Relief", blurb: "Systemic and topical analgesics for headache, body and joint pain.", image: PIMG.tablets },
  { slug: "digestive", label: "Digestive Health", blurb: "Antacids and digestive comfort for everyday wellbeing.", image: PIMG.antacid },
  { slug: "wellness", label: "Wellness & Other", blurb: "Smoking cessation, lip care and lifestyle wellness essentials.", image: PIMG.gum },
];

const p = (
  sku: string, ean: string, name: string, tagline: string, description: string,
  priceUsd: number, priceEur: number, size: string,
): Product => ({ sku, ean, name, tagline, description, priceUsd, priceEur, size });

export const BRANDS: Brand[] = [
  // ============== ORAL HEALTH ==============
  {
    slug: "sensodyne",
    name: "Sensodyne",
    monogram: "Sd",
    category: "oral-health",
    categoryLabel: "Oral Health",
    tagline: "The #1 dentist-recommended brand for sensitive teeth.",
    short: "Sensitivity relief toothpastes engineered for exposed dentine.",
    description: "Sensodyne uses clinically proven actives — potassium nitrate, stannous fluoride and novamin technology — to relieve dentine hypersensitivity while strengthening enamel.",
    story: "Trusted by dental professionals worldwide for over 60 years, Sensodyne is the global leader in sensitive teeth care.",
    accent: "#7BD3F7",
    heroVideo: VIDEOS.oral,
    heroImage: IMG("photo-1559591935-c6c92c6cb8be"),
    productImage: PIMG.toothpaste,
    products: [
      p("SEN-001", "5054563000101", "Sensodyne Repair & Protect Toothpaste", "Daily repair toothpaste 75ml", "Builds a reparative layer over sensitive areas with twice-daily brushing.", 4.0, 3.5, "75ml"),
      p("SEN-002", "5054563000118", "Sensodyne Pronamel Gentle Whitening", "Enamel-safe whitening 75ml", "Restores natural whiteness without harsh abrasion on softened enamel.", 4.5, 4.0, "75ml"),
      p("SEN-003", "5054563000125", "Sensodyne Rapid Relief Toothpaste", "Fast sensitivity relief 75ml", "Targeted relief from tooth sensitivity in as little as 60 seconds.", 4.0, 3.5, "75ml"),
    ],
    keywords: ["sensitive teeth", "toothpaste", "enamel", "fluoride"],
  },
  {
    slug: "parodontax",
    name: "Parodontax",
    monogram: "Pa",
    category: "oral-health",
    categoryLabel: "Oral Health",
    tagline: "Stop bleeding gums. Start healthier smiles.",
    short: "Daily toothpastes and rinses clinically proven to reduce bleeding gums.",
    description: "Parodontax combines stannous fluoride with herbal extracts to fight plaque bacteria at the gum line, the main cause of bleeding gums.",
    story: "Developed with periodontists in Europe and trusted in over 50 markets for gum health.",
    accent: "#E2615C",
    heroVideo: VIDEOS.oral,
    heroImage: IMG("photo-1571115764595-644a1f56a55c"),
    productImage: PIMG.toothpaste,
    products: [
      p("PAR-001", "5054563001108", "Parodontax Complete Protection Toothpaste", "Gum-care toothpaste 75ml", "8 benefits for healthier gums and stronger teeth.", 3.5, 3.1, "75ml"),
      p("PAR-002", "5054563001115", "Parodontax Active Gum Health Mouthwash", "Alcohol-free rinse 500ml", "Daily mouthwash for ongoing gum protection.", 3.0, 2.7, "500ml"),
    ],
    keywords: ["gum health", "bleeding gums", "gingivitis"],
  },
  {
    slug: "corsodyl",
    name: "Corsodyl",
    monogram: "Co",
    category: "oral-health",
    categoryLabel: "Oral Health",
    tagline: "Treats and helps prevent gum problems.",
    short: "Chlorhexidine-based mouthwashes for intensive gum treatment.",
    description: "Corsodyl 0.2% chlorhexidine digluconate is a clinically validated treatment for gingivitis, mouth ulcers and post-dental-procedure care.",
    story: "A pharmacy benchmark in intensive oral care across the UK, Europe and Middle East.",
    accent: "#3A6FB0",
    heroVideo: VIDEOS.oral,
    heroImage: IMG("photo-1606811971618-4486d14f3f99"),
    productImage: PIMG.mouthwash,
    products: [
      p("COR-001", "5054563002105", "Corsodyl Daily Mouthwash", "Daily protection 500ml", "Helps prevent gum problems with daily use.", 3.5, 3.1, "500ml"),
    ],
    keywords: ["mouthwash", "chlorhexidine", "gingivitis"],
  },
  {
    slug: "polident",
    name: "Polident",
    monogram: "Pl",
    category: "oral-health",
    categoryLabel: "Oral Health",
    tagline: "A clean denture you can trust.",
    short: "Denture cleanser tablets that kill 99.9% of odour-causing bacteria.",
    description: "Polident effervescent tablets deep clean dentures, removing stains and plaque while killing 99.9% of odour-causing bacteria in just 3 minutes.",
    story: "The global category leader in denture care, recommended by dentists for over 50 years.",
    accent: "#FFC59B",
    heroVideo: VIDEOS.oral,
    heroImage: IMG("photo-1606811841689-23dfddce3e95"),
    productImage: PIMG.denture,
    products: [
      p("POL-001", "5054563003102", "Polident 3 Minute Denture Cleanser Tablets", "Cleansing tablets x36", "Deep cleans dentures in just 3 minutes.", 3.0, 2.7, "36 tabs"),
    ],
    keywords: ["denture cleanser", "denture care"],
  },
  {
    slug: "corega",
    name: "Corega",
    monogram: "Cg",
    category: "oral-health",
    categoryLabel: "Oral Health",
    tagline: "Hold and seal you can rely on.",
    short: "Denture fixative creams for an all-day secure hold.",
    description: "Corega Ultra fixative cream provides a strong, all-day hold and a tight seal that helps stop food particles getting trapped under dentures.",
    story: "A trusted denture-fixative brand across Europe, Latin America and Asia-Pacific.",
    accent: "#D8A26E",
    heroVideo: VIDEOS.oral,
    heroImage: IMG("photo-1606811841689-23dfddce3e95"),
    productImage: PIMG.denture,
    products: [
      p("COG-001", "5054563004109", "Corega Ultra Denture Fixative Cream", "Fixative cream 40g", "All-day secure hold and tight food seal.", 2.5, 2.2, "40g"),
    ],
    keywords: ["denture adhesive", "fixative"],
  },
  {
    slug: "aquafresh",
    name: "Aquafresh",
    monogram: "Aq",
    category: "oral-health",
    categoryLabel: "Oral Health",
    tagline: "Triple protection for healthy smiles.",
    short: "Family toothpastes with triple protection for teeth, gums and breath.",
    description: "Aquafresh's signature triple-stripe toothpaste delivers cavity protection, healthy gums and fresh breath in a single formulation — for all the family.",
    story: "An icon in family oral care since 1973, available in 80+ countries.",
    accent: "#5DC1E6",
    heroVideo: VIDEOS.oral,
    heroImage: IMG("photo-1559591935-c6c92c6cb8be"),
    productImage: PIMG.toothpaste,
    products: [
      p("AQF-001", "5054563005106", "Aquafresh Triple Protection Toothpaste", "Family toothpaste 100ml", "Triple protection for teeth, gums and breath.", 2.0, 1.8, "100ml"),
      p("AQF-002", "5054563005113", "Aquafresh Kids Toothpaste 3–5 Years", "Mild mint kids paste 50ml", "Specially formulated for milk and developing teeth.", 2.0, 1.8, "50ml"),
    ],
    keywords: ["family toothpaste", "kids toothpaste"],
  },

  // ============== VITAMINS ==============
  {
    slug: "centrum",
    name: "Centrum",
    monogram: "Cn",
    category: "vitamins",
    categoryLabel: "Vitamins, Minerals & Supplements",
    tagline: "The world's #1 multivitamin.",
    short: "Comprehensive daily multivitamins for adults, women and 50+.",
    description: "Centrum delivers a complete range of essential vitamins and minerals in scientifically calibrated daily doses for energy, immunity and metabolism.",
    story: "Backed by 40+ years of nutritional science, Centrum is the world's most-trusted multivitamin brand.",
    accent: "#C9FF3B",
    heroVideo: VIDEOS.vms,
    heroImage: IMG("photo-1607619056574-7b8d3ee536b2"),
    productImage: PIMG.vitamins,
    products: [
      p("CEN-001", "5054563006103", "Centrum Advance Multivitamins", "Daily multivitamin x30", "24 essential nutrients for daily wellbeing.", 6.0, 5.3, "30 tabs"),
      p("CEN-002", "5054563006110", "Centrum Women Multivitamins", "Women's formula x30", "Tailored to women — with iron, folate and calcium.", 7.0, 6.2, "30 tabs"),
    ],
    keywords: ["multivitamin", "minerals", "daily wellness"],
  },
  {
    slug: "emergen-c",
    name: "Emergen-C",
    monogram: "Em",
    category: "vitamins",
    categoryLabel: "Vitamins, Minerals & Supplements",
    tagline: "1000mg of immune-supporting Vitamin C.",
    short: "Effervescent vitamin C drink mixes for daily immune support.",
    description: "Emergen-C delivers 1000mg of vitamin C plus B vitamins and antioxidants in a fizzy, great-tasting drink that absorbs fast.",
    story: "A trusted American immunity brand now distributed across global pharmacies and travel retail.",
    accent: "#FF8A3D",
    heroVideo: VIDEOS.vms,
    heroImage: IMG("photo-1550572017-edd951b55104"),
    productImage: PIMG.effervescent,
    products: [
      p("EMG-001", "5054563007100", "Emergen-C Vitamin C Orange", "Orange sachets x30", "1000mg vitamin C with B vitamins and electrolytes.", 7.5, 6.6, "30 sachets"),
    ],
    keywords: ["vitamin c", "immune support", "effervescent"],
  },

  // ============== RESPIRATORY ==============
  {
    slug: "otrivin",
    name: "Otrivin",
    monogram: "Ot",
    category: "respiratory",
    categoryLabel: "Respiratory Health",
    tagline: "Breathe freely, fast.",
    short: "Decongestant nasal sprays for fast relief of blocked noses.",
    description: "Otrivin's xylometazoline nasal sprays unblock noses in minutes and keep them clear for up to 10 hours.",
    story: "Trusted across 80+ markets as a leading nasal decongestant brand for over 60 years.",
    accent: "#9FD4FF",
    heroVideo: VIDEOS.resp,
    heroImage: IMG("photo-1584952811565-c4c4031c0a04"),
    productImage: PIMG.nasal,
    products: [
      p("OTR-001", "5054563008107", "Otrivin Nasal Spray", "Adult decongestant 10ml", "Fast relief from nasal congestion for up to 10 hours.", 4.0, 3.5, "10ml"),
    ],
    keywords: ["nasal spray", "decongestant", "cold"],
  },
  {
    slug: "theraflu",
    name: "Theraflu",
    monogram: "Th",
    category: "respiratory",
    categoryLabel: "Respiratory Health",
    tagline: "Powerful cold and flu relief.",
    short: "Hot drink sachets that relieve multiple cold and flu symptoms fast.",
    description: "Theraflu combines paracetamol, phenylephrine and vitamin C in soothing hot drink sachets for fast multi-symptom relief.",
    story: "An iconic winter wellness brand across North America, Europe and the Middle East.",
    accent: "#FFD27F",
    heroVideo: VIDEOS.resp,
    heroImage: IMG("photo-1577563908411-5077b6dc7624"),
    productImage: PIMG.sachets,
    products: [
      p("THF-001", "5054563009104", "Theraflu Flu & Cold Relief Sachets", "Hot drink sachets x10", "Multi-symptom cold and flu relief.", 5.5, 4.9, "10 sachets"),
    ],
    keywords: ["cold and flu", "paracetamol", "hot drink"],
  },

  // ============== PAIN RELIEF ==============
  {
    slug: "panadol",
    name: "Panadol",
    monogram: "Pn",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Trusted paracetamol pain relief.",
    short: "Paracetamol-based pain and fever relief for the whole family.",
    description: "Panadol Extra combines paracetamol and caffeine to deliver fast, effective relief from headache, body ache and fever.",
    story: "The world's most-trusted paracetamol brand, available in over 85 countries.",
    accent: "#3FB47A",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1587854692152-cbe660dbde88"),
    productImage: PIMG.tablets,
    products: [
      p("PND-001", "5054563010100", "Panadol Extra Tablets", "Pain relief tablets x24", "Paracetamol with caffeine for stronger pain relief.", 3.0, 2.7, "24 tabs"),
    ],
    keywords: ["paracetamol", "headache", "fever"],
  },
  {
    slug: "voltaren",
    name: "Voltaren",
    monogram: "Vt",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Targeted joint and muscle pain relief.",
    short: "Topical diclofenac gels for joint, back and muscle pain.",
    description: "Voltaren Emulgel delivers diclofenac directly into the skin to relieve pain and reduce inflammation in joints and muscles.",
    story: "The world's leading topical joint pain brand, recommended by doctors and pharmacists globally.",
    accent: "#FF8A6B",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1559757175-5700dde675bc"),
    productImage: PIMG.gel,
    products: [
      p("VOL-001", "5054563011107", "Voltaren Emulgel 1%", "Topical pain gel 100g", "Relieves joint and muscle pain with anti-inflammatory action.", 7.0, 6.2, "100g"),
    ],
    keywords: ["diclofenac", "joint pain", "topical gel"],
  },
  {
    slug: "advil",
    name: "Advil",
    monogram: "Av",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Fast, effective pain relief.",
    short: "Ibuprofen tablets and capsules for headache, body and back pain.",
    description: "Advil 200mg ibuprofen tablets deliver fast, effective relief from pain, inflammation and fever.",
    story: "A flagship ibuprofen brand across the Americas, trusted by households for decades.",
    accent: "#1F6BCB",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1587854692152-cbe660dbde88"),
    productImage: PIMG.tablets,
    products: [
      p("ADV-001", "5054563012104", "Advil Ibuprofen 200mg", "Pain relief tablets x50", "Effective relief from headache, body and back pain.", 4.5, 4.0, "50 tabs"),
    ],
    keywords: ["ibuprofen", "pain relief"],
  },

  // ============== DIGESTIVE ==============
  {
    slug: "tums",
    name: "Tums",
    monogram: "Tm",
    category: "digestive",
    categoryLabel: "Digestive Health",
    tagline: "Heartburn? Tums to the rescue.",
    short: "Calcium-carbonate antacid chews for fast heartburn relief.",
    description: "Tums chewable antacid tablets neutralise stomach acid in seconds for fast relief from heartburn, indigestion and upset stomach.",
    story: "An iconic American antacid brand, trusted by families for over 90 years.",
    accent: "#F4B860",
    heroVideo: VIDEOS.dig,
    heroImage: IMG("photo-1547887537-6158d64c35b3"),
    productImage: PIMG.antacid,
    products: [
      p("TUM-001", "5054563013101", "Tums Antacid Tablets Assorted Fruit", "Chewable antacid x60", "Fast-acting heartburn relief in assorted fruit flavours.", 3.5, 3.1, "60 chews"),
    ],
    keywords: ["antacid", "heartburn", "indigestion"],
  },

  // ============== WELLNESS ==============
  {
    slug: "nicotinell",
    name: "Nicotinell",
    monogram: "Nc",
    category: "wellness",
    categoryLabel: "Wellness & Other",
    tagline: "Help to quit smoking, your way.",
    short: "Nicotine gum and patches that help you stop smoking for good.",
    description: "Nicotinell nicotine replacement therapy doubles your chance of quitting smoking when used as part of a behavioural support programme.",
    story: "A clinically validated stop-smoking brand across Europe, the Middle East and Asia-Pacific.",
    accent: "#7FB57F",
    heroVideo: VIDEOS.wellness,
    heroImage: IMG("photo-1556228720-195a672e8a03"),
    productImage: PIMG.gum,
    products: [
      p("NIC-001", "5054563014108", "Nicotinell Nicotine Gum Mint 2mg", "Stop-smoking gum x96", "2mg nicotine gum to help curb cravings.", 9.0, 7.9, "96 pieces"),
    ],
    keywords: ["nicotine gum", "stop smoking", "nrt"],
  },
  {
    slug: "chapstick",
    name: "ChapStick",
    monogram: "Cp",
    category: "wellness",
    categoryLabel: "Wellness & Other",
    tagline: "Soft, smooth, protected lips.",
    short: "Iconic lip balms for everyday moisture and protection.",
    description: "ChapStick's classic original lip balm protects and softens lips with a smooth, long-lasting moisturising formula.",
    story: "An American household icon since 1880, sold in over 30 countries.",
    accent: "#E8A2B0",
    heroVideo: VIDEOS.wellness,
    heroImage: IMG("photo-1612277796419-b39e9a4ab10c"),
    productImage: PIMG.lipbalm,
    products: [
      p("CHP-001", "5054563015105", "ChapStick Classic Original Lip Balm", "Lip balm 4g", "Everyday moisture and protection for soft, smooth lips.", 1.5, 1.3, "4g"),
    ],
    keywords: ["lip balm", "lip care"],
  },
];

export const getBrand = (slug: string) => BRANDS.find((b) => b.slug === slug);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const brandsByCategory = (catSlug: string) => BRANDS.filter((b) => b.category === catSlug);
