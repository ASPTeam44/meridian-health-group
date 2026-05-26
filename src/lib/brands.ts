// Brand & category catalog for Vitala Global.
// Note: brand names are original to avoid third-party trademarks.

export type Product = {
  sku: string;
  name: string;
  tagline: string;
  description: string;
  price: number; // USD
  size: string;
};

export type Brand = {
  slug: string;
  name: string;
  monogram: string;
  category: string; // category slug
  categoryLabel: string;
  tagline: string;
  short: string;
  description: string;
  story: string;
  accent: string;
  heroVideo: string;
  heroImage: string;
  products: Product[];
  keywords: string[];
};

export type Category = {
  slug: string;
  label: string;
  blurb: string;
  image: string;
};

// ---- Stock cinematic media (Pexels / Unsplash CDN) ----
const VIDEOS = {
  oral: "https://videos.pexels.com/video-files/4124482/4124482-uhd_2560_1440_25fps.mp4",
  vms: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
  resp: "https://videos.pexels.com/video-files/3997798/3997798-uhd_2560_1440_25fps.mp4",
  pain: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
  dig: "https://videos.pexels.com/video-files/3199284/3199284-uhd_2560_1440_25fps.mp4",
  skin: "https://videos.pexels.com/video-files/4498283/4498283-uhd_2560_1440_25fps.mp4",
};

const IMG = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const CATEGORIES: Category[] = [
  {
    slug: "oral-health",
    label: "Oral Health",
    blurb: "Toothpastes, rinses and denture care developed with dentists for daily clinical clean.",
    image: IMG("photo-1606811971618-4486d14f3f99"),
  },
  {
    slug: "vitamins",
    label: "Vitamins, Minerals & Supplements",
    blurb: "Pharmaceutical-grade multivitamins, immunity and bone-health complexes.",
    image: IMG("photo-1556228720-195a672e8a03"),
  },
  {
    slug: "respiratory",
    label: "Respiratory",
    blurb: "Nasal sprays, cold and flu relief and allergy management trusted across 38 markets.",
    image: IMG("photo-1584515933487-779824d29309"),
  },
  {
    slug: "pain-relief",
    label: "Pain Relief",
    blurb: "Topical and systemic analgesics — body pain, headache, joint and back pain.",
    image: IMG("photo-1583947581924-860bda6a26df"),
  },
  {
    slug: "digestive",
    label: "Digestive Health & Other",
    blurb: "Antacids, fibre support and digestive comfort for everyday wellbeing.",
    image: IMG("photo-1505751172876-fa1923c5c528"),
  },
  {
    slug: "skin",
    label: "Therapeutic Skin Health",
    blurb: "Dermatologist-developed creams and gels for itch, cold sores and skin infection.",
    image: IMG("photo-1556228578-8c89e6adf883"),
  },
];

// Helper to compress product authoring
const p = (sku: string, name: string, tagline: string, description: string, price: number, size: string): Product =>
  ({ sku, name, tagline, description, price, size });

export const BRANDS: Brand[] = [
  // ---------- ORAL HEALTH ----------
  {
    slug: "sensodent",
    name: "Sensodent",
    monogram: "Sd",
    category: "oral-health",
    categoryLabel: "Oral Health",
    tagline: "Sensitivity, soothed.",
    short: "Daily toothpaste built for sensitive teeth and exposed dentine.",
    description: "Sensodent uses potassium nitrate and stannous fluoride to calm nerve response in sensitive teeth while protecting enamel — the everyday clean dentists recommend.",
    story: "Born from a 1998 dental research partnership in Basel, Sensodent has become a household sensitivity-relief brand in over 30 markets.",
    accent: "#7BD3F7",
    heroVideo: VIDEOS.oral,
    heroImage: IMG("photo-1559591935-c6c92c6cb8be"),
    products: [
      p("SD-001", "Sensodent Daily Relief", "Sensitivity toothpaste 100ml", "Twin-active formula for fast and lasting sensitivity relief.", 6.9, "100ml"),
      p("SD-002", "Sensodent Whitening", "Gentle whitening 100ml", "Low-abrasion enamel-safe whitening for sensitive teeth.", 8.5, "100ml"),
      p("SD-003", "Sensodent Rapid Action", "Fast relief 75ml", "Targeted relief in 60 seconds for exposed dentine.", 7.4, "75ml"),
    ],
    keywords: ["sensitive toothpaste", "enamel", "fluoride", "dentine"],
  },
  {
    slug: "polidura",
    name: "Polidura",
    monogram: "Pd",
    category: "oral-health",
    categoryLabel: "Oral Health",
    tagline: "A confident hold, every day.",
    short: "Denture adhesives, cleansers and care for a secure, fresh fit.",
    description: "Polidura combines zinc-free polymer adhesives with cleansing tablets engineered to remove 99.9% of odour-causing bacteria from dentures.",
    story: "Polidura was developed inside a prosthodontics clinic in Milan, and is now the second most-recommended denture brand by EU dental hygienists.",
    accent: "#FFC59B",
    heroVideo: VIDEOS.oral,
    heroImage: IMG("photo-1606811841689-23dfddce3e95"),
    products: [
      p("PD-001", "Polidura Secure Hold", "Adhesive cream 60g", "12-hour denture hold, zinc-free.", 9.2, "60g"),
      p("PD-002", "Polidura Daily Cleanse", "Cleansing tablets x32", "Whitens and disinfects dentures overnight.", 7.1, "32 tabs"),
      p("PD-003", "Polidura Comfort Strips", "Adhesive strips x30", "Discreet pre-cut adhesive strips.", 8.8, "30 strips"),
    ],
    keywords: ["denture adhesive", "denture cleaner", "prosthodontic"],
  },
  {
    slug: "gumtide",
    name: "Gumtide",
    monogram: "Gt",
    category: "oral-health",
    categoryLabel: "Oral Health",
    tagline: "Healthier gums, naturally.",
    short: "Gum-care toothpastes and rinses targeting plaque and bleeding gums.",
    description: "Gumtide pairs stannous fluoride with botanical extracts (sage, myrrh, chamomile) to reduce bleeding gums and gingival inflammation.",
    story: "Created with periodontists in Stockholm, Gumtide is the gum-health system used in Scandinavian dental clinics since 2011.",
    accent: "#B5E8A7",
    heroVideo: VIDEOS.oral,
    heroImage: IMG("photo-1571115764595-644a1f56a55c"),
    products: [
      p("GT-001", "Gumtide Daily Gum Care", "Toothpaste 75ml", "Clinically proven 48% bleeding gum reduction.", 7.6, "75ml"),
      p("GT-002", "Gumtide Active Rinse", "Mouthwash 500ml", "Alcohol-free antibacterial gum-health rinse.", 9.4, "500ml"),
      p("GT-003", "Gumtide Intensive Gel", "Gum gel 30ml", "Targeted gel for inflamed or post-procedure gums.", 11.2, "30ml"),
    ],
    keywords: ["gum care", "gingivitis", "periodontal", "mouthwash"],
  },

  // ---------- VITAMINS ----------
  {
    slug: "centrux",
    name: "Centrux",
    monogram: "Cx",
    category: "vitamins",
    categoryLabel: "Vitamins, Minerals & Supplements",
    tagline: "Complete, every day.",
    short: "Comprehensive daily multivitamin range for adults, women and 50+.",
    description: "Centrux delivers 24 essential micronutrients in clinically-validated doses with chelated minerals for superior bioavailability.",
    story: "Centrux was the first multivitamin range to publish full third-party absorption data across all SKUs. Trusted by clinicians in 22 markets.",
    accent: "#C9FF3B",
    heroVideo: VIDEOS.vms,
    heroImage: IMG("photo-1607619056574-7b8d3ee536b2"),
    products: [
      p("CX-001", "Centrux Adult", "Multivitamin tablets x60", "24 nutrients for daily nutritional foundation.", 14.9, "60 tabs"),
      p("CX-002", "Centrux Women", "Women's formula x60", "Iron, folate and B6 calibrated for women's needs.", 16.2, "60 tabs"),
      p("CX-003", "Centrux Silver 50+", "Mature adult formula x60", "Higher D3, B12 and lutein for adults 50+.", 17.8, "60 tabs"),
    ],
    keywords: ["multivitamin", "minerals", "daily wellness"],
  },
  {
    slug: "emergevit",
    name: "Emergevit",
    monogram: "Ev",
    category: "vitamins",
    categoryLabel: "Vitamins, Minerals & Supplements",
    tagline: "Immune support, fast.",
    short: "High-dose Vitamin C, zinc and electrolyte effervescents.",
    description: "Effervescent immunity sachets combining 1000mg buffered Vitamin C with zinc, B-vitamins and electrolytes.",
    story: "A favourite of long-haul travellers and elite athletes, Emergevit's effervescent format delivers fast, complete absorption.",
    accent: "#FFB36B",
    heroVideo: VIDEOS.vms,
    heroImage: IMG("photo-1550572017-edd951b55104"),
    products: [
      p("EV-001", "Emergevit Original", "Vitamin C sachets x30", "1000mg buffered C with zinc & electrolytes.", 19.5, "30 sachets"),
      p("EV-002", "Emergevit Immune+", "Elderberry & zinc x20", "Standardised elderberry extract for cold season.", 17.4, "20 sachets"),
      p("EV-003", "Emergevit Hydrate", "Electrolyte + C x20", "Recovery electrolytes with 500mg C.", 16.8, "20 sachets"),
    ],
    keywords: ["vitamin c", "immunity", "zinc", "effervescent"],
  },
  {
    slug: "caltria",
    name: "Caltria",
    monogram: "Ca",
    category: "vitamins",
    categoryLabel: "Vitamins, Minerals & Supplements",
    tagline: "Strong bones for life.",
    short: "Calcium, Vitamin D3 and K2 for skeletal health.",
    description: "Caltria pairs calcium citrate with D3 and K2 (MK-7) for proper calcium routing to bone and away from arteries.",
    story: "Developed with endocrinologists at the Lyon Bone Institute, Caltria is prescribed across European osteoporosis clinics.",
    accent: "#E8D8C3",
    heroVideo: VIDEOS.vms,
    heroImage: IMG("photo-1584472362967-83a4be0f31aa"),
    products: [
      p("CA-001", "Caltria Bone Strong", "Calcium + D3 x90", "1200mg calcium citrate + 25mcg D3.", 18.2, "90 tabs"),
      p("CA-002", "Caltria Advanced", "Calcium + D3 + K2 x60", "Calcium routed to bone, not arteries.", 22.4, "60 tabs"),
      p("CA-003", "Caltria Chewable", "Orange chew tabs x60", "Easy-to-take chewable for daily use.", 15.6, "60 tabs"),
    ],
    keywords: ["calcium", "vitamin d", "bone health", "osteoporosis"],
  },

  // ---------- RESPIRATORY ----------
  {
    slug: "otriva",
    name: "Otriva",
    monogram: "Ot",
    category: "respiratory",
    categoryLabel: "Respiratory",
    tagline: "Breathe clearly.",
    short: "Decongestant nasal sprays for cold, flu and sinus relief.",
    description: "Otriva's xylometazoline range opens blocked nasal passages within minutes, with moisturising hyaluronic acid variants for dry mucosa.",
    story: "Otriva was the first nasal spray brand to ship a fully recyclable metered-dose actuator. Distributed in 28 markets.",
    accent: "#9FD4FF",
    heroVideo: VIDEOS.resp,
    heroImage: IMG("photo-1584952811565-c4c4031c0a04"),
    products: [
      p("OT-001", "Otriva Adult Spray", "Nasal spray 10ml", "0.1% xylometazoline — fast adult congestion relief.", 7.9, "10ml"),
      p("OT-002", "Otriva Moisture", "Hyaluronic spray 10ml", "Decongestant + hyaluronic acid for dry mucosa.", 9.4, "10ml"),
      p("OT-003", "Otriva Child", "Child spray 10ml", "Gentle 0.05% formula for ages 2-11.", 8.2, "10ml"),
    ],
    keywords: ["nasal spray", "decongestant", "sinus"],
  },
  {
    slug: "theraflex",
    name: "Theraflex",
    monogram: "Tf",
    category: "respiratory",
    categoryLabel: "Respiratory",
    tagline: "Cold & flu, defeated.",
    short: "Hot drink and tablet flu remedies for full-symptom relief.",
    description: "Theraflex combines paracetamol, phenylephrine and vitamin C in soothing hot drinks and daytime/night tablets.",
    story: "Theraflex's signature lemon-honey sachet is one of Europe's best-selling winter wellness products.",
    accent: "#FFD27F",
    heroVideo: VIDEOS.resp,
    heroImage: IMG("photo-1577563908411-5077b6dc7624"),
    products: [
      p("TF-001", "Theraflex Hot Lemon", "Sachets x10", "Lemon-honey hot drink for cold & flu.", 10.4, "10 sachets"),
      p("TF-002", "Theraflex Night", "Night tablets x16", "Daytime/nighttime tablets for restful recovery.", 11.2, "16 tabs"),
      p("TF-003", "Theraflex Severe", "Max-strength sachets x10", "Full-symptom adult formula.", 12.8, "10 sachets"),
    ],
    keywords: ["cold and flu", "paracetamol", "sachets"],
  },
  {
    slug: "flonex",
    name: "Flonex",
    monogram: "Fx",
    category: "respiratory",
    categoryLabel: "Respiratory",
    tagline: "24-hour allergy control.",
    short: "Steroid nasal sprays for hay fever and chronic allergic rhinitis.",
    description: "Flonex delivers fluticasone propionate metered doses for full-day relief from sneezing, itching and nasal congestion.",
    story: "Recommended by ENT specialists across Europe and Latin America for seasonal allergic rhinitis.",
    accent: "#B8C9FF",
    heroVideo: VIDEOS.resp,
    heroImage: IMG("photo-1606166187734-a4cb0cbfc6a4"),
    products: [
      p("FX-001", "Flonex Allergy Relief", "60-dose spray", "Once-daily allergy control.", 13.4, "60 doses"),
      p("FX-002", "Flonex 24H", "120-dose spray", "Two-month supply, 24-hour relief.", 21.6, "120 doses"),
      p("FX-003", "Flonex Kids", "Children's 60-dose", "Gentler dose for ages 4+.", 14.8, "60 doses"),
    ],
    keywords: ["allergy", "fluticasone", "hay fever"],
  },
  {
    slug: "robitex",
    name: "Robitex",
    monogram: "Rx",
    category: "respiratory",
    categoryLabel: "Respiratory",
    tagline: "Soothe the cough.",
    short: "Cough syrups for dry, chesty and night-time cough relief.",
    description: "Robitex's dextromethorphan and guaifenesin syrups target different cough types with honey-tinged palatable formulas.",
    story: "Trusted as a household cough remedy across South-East Asia and Latin America since 2003.",
    accent: "#E8A87C",
    heroVideo: VIDEOS.resp,
    heroImage: IMG("photo-1626716493137-b67fe9501e76"),
    products: [
      p("RX-001", "Robitex Dry Cough", "Syrup 200ml", "Dextromethorphan-based dry cough relief.", 8.6, "200ml"),
      p("RX-002", "Robitex Chesty", "Expectorant syrup 200ml", "Loosens chest congestion.", 8.8, "200ml"),
      p("RX-003", "Robitex Night", "Night-time syrup 150ml", "Calms cough for restful sleep.", 9.4, "150ml"),
    ],
    keywords: ["cough syrup", "dextromethorphan", "expectorant"],
  },

  // ---------- PAIN RELIEF ----------
  {
    slug: "voltarex",
    name: "Voltarex",
    monogram: "Vx",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Targeted pain relief.",
    short: "Topical diclofenac gels for joint, muscle and back pain.",
    description: "Voltarex 1% and 2% diclofenac gels target inflammation at source — knees, hands, back and sport injuries.",
    story: "Voltarex topical gel is recommended in EULAR osteoarthritis guidelines and is stocked in 35 markets.",
    accent: "#FF8A6B",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1559757175-5700dde675bc"),
    products: [
      p("VX-001", "Voltarex Gel 1%", "Topical gel 100g", "Daily joint and muscle pain relief.", 12.6, "100g"),
      p("VX-002", "Voltarex Forte 2.32%", "Max-strength gel 100g", "12-hour relief — twice-daily dosing.", 17.8, "100g"),
      p("VX-003", "Voltarex Patch", "Medicated patches x10", "Targeted back & shoulder pain patches.", 14.4, "10 patches"),
    ],
    keywords: ["diclofenac", "joint pain", "topical analgesic"],
  },
  {
    slug: "panadron",
    name: "Panadron",
    monogram: "Pn",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Trusted paracetamol.",
    short: "Paracetamol tablets, syrups and rapid-action formats.",
    description: "Panadron offers gentle but effective paracetamol for headache, fever and body aches — across adult and paediatric formats.",
    story: "Panadron is the leading paracetamol brand in Vitala's portfolio, with WHO-prequalified manufacturing.",
    accent: "#9FD4FF",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1587854692152-cbe660dbde88"),
    products: [
      p("PN-001", "Panadron 500mg", "Tablets x24", "Standard paracetamol for adults.", 5.4, "24 tabs"),
      p("PN-002", "Panadron Rapid", "Rapid tablets x20", "Sodium-buffered fast absorption.", 6.9, "20 tabs"),
      p("PN-003", "Panadron Child Syrup", "Syrup 100ml", "Strawberry-flavour child paracetamol.", 7.2, "100ml"),
    ],
    keywords: ["paracetamol", "headache", "fever"],
  },
  {
    slug: "adviron",
    name: "Adviron",
    monogram: "Av",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Ibuprofen, evolved.",
    short: "Liquid-gel ibuprofen for fast inflammatory pain relief.",
    description: "Adviron's solubilised ibuprofen reaches peak plasma levels in under 30 minutes — clinically faster onset than standard tablets.",
    story: "Adviron is the preferred ibuprofen brand of European sports physios for acute injury management.",
    accent: "#E2C2FF",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1607619056574-7b8d3ee536b2"),
    products: [
      p("AV-001", "Adviron Liquid-Gel 200mg", "Capsules x20", "Fast ibuprofen absorption.", 8.4, "20 caps"),
      p("AV-002", "Adviron PM", "Night-time gel caps x20", "Ibuprofen + diphenhydramine for pain & sleep.", 11.4, "20 caps"),
      p("AV-003", "Adviron Migraine", "Migraine formula x20", "Targeted formulation for migraine episodes.", 12.2, "20 caps"),
    ],
    keywords: ["ibuprofen", "pain relief", "migraine"],
  },
  {
    slug: "fenbira",
    name: "Fenbira",
    monogram: "Fb",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Joint comfort, day and night.",
    short: "Ibuprofen and joint-care formulas for chronic discomfort.",
    description: "Fenbira's slow-release ibuprofen and topical patches give 12-hour coverage for chronic joint pain.",
    story: "A flagship pain brand in Asia-Pacific, Fenbira ships over 80M units annually.",
    accent: "#FFCB6B",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1580281658626-ee379f3cce93"),
    products: [
      p("FB-001", "Fenbira 12-Hour", "Slow-release tabs x30", "Sustained 12-hour ibuprofen release.", 13.8, "30 tabs"),
      p("FB-002", "Fenbira Patch", "Topical patches x6", "Heated topical patches for joint stiffness.", 9.6, "6 patches"),
      p("FB-003", "Fenbira Joint Plus", "Glucosamine 60 tabs", "Joint-care supplement for daily use.", 18.4, "60 tabs"),
    ],
    keywords: ["ibuprofen", "joint pain", "patch"],
  },
  {
    slug: "contaq",
    name: "Contaq",
    monogram: "Cq",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Cold-plus-pain control.",
    short: "Combination cold & pain capsules for full-symptom relief.",
    description: "Contaq combines paracetamol, phenylephrine and chlorpheniramine in a single capsule for cold-with-pain relief.",
    story: "A go-to winter-season brand across Latin America, with paediatric and adult formats.",
    accent: "#D4A574",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1602049090850-9e54a3927a83"),
    products: [
      p("CQ-001", "Contaq Day & Night", "Combo pack x16", "Day and night formula in one pack.", 9.4, "16 caps"),
      p("CQ-002", "Contaq Sinus", "Sinus formula x20", "Sinus pressure + pain relief.", 8.2, "20 caps"),
      p("CQ-003", "Contaq Kids", "Child syrup 100ml", "Cold + pain relief for children.", 7.4, "100ml"),
    ],
    keywords: ["cold and pain", "sinus", "paracetamol"],
  },
  {
    slug: "grandera",
    name: "Grandera",
    monogram: "Gr",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Headache powders, classic format.",
    short: "Powdered analgesics — fast-acting, single-dose sachets.",
    description: "Grandera's heritage headache powders provide fast aspirin-caffeine relief in single-dose sachets.",
    story: "An iconic format in Southern Africa, Grandera has been a household name for over 80 years.",
    accent: "#C9A84C",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1631549916768-4119b2e5f926"),
    products: [
      p("GR-001", "Grandera Original Powders", "Sachets x24", "Aspirin + caffeine fast-acting powder.", 6.8, "24 sachets"),
      p("GR-002", "Grandera Tablets", "Tablets x30", "Convenient tablet format.", 5.4, "30 tabs"),
      p("GR-003", "Grandera Cool", "Menthol sachets x12", "Menthol-cool dispersion sachets.", 7.2, "12 sachets"),
    ],
    keywords: ["headache powder", "aspirin", "caffeine"],
  },
  {
    slug: "excellan",
    name: "Excellan",
    monogram: "Ex",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    tagline: "Migraine, met head-on.",
    short: "Triple-action analgesic for migraine and severe headache.",
    description: "Excellan combines acetaminophen, aspirin and caffeine — the FDA-validated combination for migraine relief.",
    story: "Excellan is positioned as the migraine specialist in Vitala's pain portfolio.",
    accent: "#FF6B6B",
    heroVideo: VIDEOS.pain,
    heroImage: IMG("photo-1631815587646-b85a1bb027e1"),
    products: [
      p("EX-001", "Excellan Migraine", "Tablets x24", "Triple-action migraine relief.", 10.2, "24 tabs"),
      p("EX-002", "Excellan Tension", "Tension-headache x24", "For tension headaches.", 9.4, "24 tabs"),
      p("EX-003", "Excellan PM", "Night-time x20", "Migraine + sleep aid.", 11.8, "20 caps"),
    ],
    keywords: ["migraine", "headache", "acetaminophen"],
  },

  // ---------- DIGESTIVE ----------
  {
    slug: "tumix",
    name: "Tumix",
    monogram: "Tx",
    category: "digestive",
    categoryLabel: "Digestive Health & Other",
    tagline: "Heartburn, gone.",
    short: "Calcium-carbonate antacids for fast heartburn and indigestion relief.",
    description: "Tumix chewable antacids neutralise stomach acid in seconds with a satisfying fruit-chew finish.",
    story: "A fast-growing antacid brand across emerging markets, recently reformulated to remove all artificial colours.",
    accent: "#FFB36B",
    heroVideo: VIDEOS.dig,
    heroImage: IMG("photo-1607619056574-7b8d3ee536b2"),
    products: [
      p("TX-001", "Tumix Original", "Chewables x60", "Mint and fruit assorted antacids.", 6.8, "60 chews"),
      p("TX-002", "Tumix Extra Strength", "Chewables x48", "Higher dose for severe heartburn.", 8.4, "48 chews"),
      p("TX-003", "Tumix Smoothie", "Liquid bottle 350ml", "Liquid antacid, creamy texture.", 9.2, "350ml"),
    ],
    keywords: ["antacid", "heartburn", "indigestion"],
  },
  {
    slug: "enova",
    name: "Enova",
    monogram: "En",
    category: "digestive",
    categoryLabel: "Digestive Health & Other",
    tagline: "Fruit-salt freshness.",
    short: "Effervescent fruit salts for indigestion and acid relief.",
    description: "Enova's classic effervescent fruit-salt formula relieves heartburn, gas and indigestion in under 30 seconds.",
    story: "An iconic digestive brand across South Asia, Enova is reformulated with reduced sodium.",
    accent: "#A8E6CF",
    heroVideo: VIDEOS.dig,
    heroImage: IMG("photo-1547887537-6158d64c35b3"),
    products: [
      p("EN-001", "Enova Original", "Sachets x30", "Classic fruit-salt indigestion relief.", 7.2, "30 sachets"),
      p("EN-002", "Enova Lemon", "Lemon sachets x30", "Lemon-flavour variant.", 7.4, "30 sachets"),
      p("EN-003", "Enova Powder Tub", "Tub 100g", "Family-size economy tub.", 11.6, "100g"),
    ],
    keywords: ["fruit salt", "indigestion", "antacid"],
  },
  {
    slug: "benefibra",
    name: "Benefibra",
    monogram: "Bf",
    category: "digestive",
    categoryLabel: "Digestive Health & Other",
    tagline: "Daily fibre, no aftertaste.",
    short: "Soluble wheat-dextrin fibre supplements for gut health.",
    description: "Benefibra dissolves clear in any drink — daily soluble fibre to support healthy digestion and microbiome.",
    story: "A pharmacy-recommended daily fibre across Europe and Australasia.",
    accent: "#FFD27F",
    heroVideo: VIDEOS.dig,
    heroImage: IMG("photo-1505253716362-afaea1d3d1af"),
    products: [
      p("BF-001", "Benefibra Powder", "Tub 250g", "Tasteless soluble fibre for daily use.", 14.8, "250g"),
      p("BF-002", "Benefibra Sticks", "Sachets x28", "On-the-go fibre sticks.", 12.4, "28 sticks"),
      p("BF-003", "Benefibra Chewables", "Chewables x90", "Orange chewable fibre tablets.", 13.6, "90 chews"),
    ],
    keywords: ["fibre", "gut health", "digestion"],
  },

  // ---------- SKIN ----------
  {
    slug: "fenistal",
    name: "Fenistal",
    monogram: "Fs",
    category: "skin",
    categoryLabel: "Therapeutic Skin Health",
    tagline: "Calm the itch.",
    short: "Antihistamine gels and creams for insect bites, hives and skin irritation.",
    description: "Fenistal's dimetindene gel cools and calms itching from insect bites, sunburn and contact dermatitis within minutes.",
    story: "A summer-season staple across European pharmacies, with travel-size dispensers in 40+ markets.",
    accent: "#A0E7E5",
    heroVideo: VIDEOS.skin,
    heroImage: IMG("photo-1556228720-195a672e8a03"),
    products: [
      p("FS-001", "Fenistal Itch Gel", "Topical gel 30g", "Cooling antihistamine itch relief.", 9.2, "30g"),
      p("FS-002", "Fenistal Roll-On", "Roll-on stick 8ml", "On-the-go insect bite relief.", 7.6, "8ml"),
      p("FS-003", "Fenistal Drops", "Oral drops 20ml", "Antihistamine oral drops for allergy.", 12.4, "20ml"),
    ],
    keywords: ["antihistamine", "itch relief", "insect bite"],
  },
  {
    slug: "zoviran",
    name: "Zoviran",
    monogram: "Zv",
    category: "skin",
    categoryLabel: "Therapeutic Skin Health",
    tagline: "Stop cold sores early.",
    short: "Aciclovir creams and patches for cold sore treatment.",
    description: "Zoviran's 5% aciclovir cream shortens cold-sore episodes when applied at first tingle. Discreet patches accelerate healing.",
    story: "Zoviran's invisible hydrocolloid patch is the most-recommended cold-sore patch in pharmacies across Western Europe.",
    accent: "#F8C8D8",
    heroVideo: VIDEOS.skin,
    heroImage: IMG("photo-1612277796419-b39e9a4ab10c"),
    products: [
      p("ZV-001", "Zoviran Cold Sore Cream", "Cream 2g", "5% aciclovir cold sore cream.", 10.6, "2g"),
      p("ZV-002", "Zoviran Invisible Patch", "Patches x15", "Discreet hydrocolloid healing patches.", 13.8, "15 patches"),
      p("ZV-003", "Zoviran Lip Balm SPF30", "Lip balm 4g", "Daily protective lip balm.", 7.4, "4g"),
    ],
    keywords: ["cold sore", "aciclovir", "lip"],
  },
  {
    slug: "bactrova",
    name: "Bactrova",
    monogram: "Bv",
    category: "skin",
    categoryLabel: "Therapeutic Skin Health",
    tagline: "Stops skin infection.",
    short: "Mupirocin topical antibiotics for minor skin infections.",
    description: "Bactrova 2% mupirocin ointment treats impetigo, infected cuts and minor secondary skin infections.",
    story: "A prescription-grade brand also available over the counter in select markets.",
    accent: "#B5E8A7",
    heroVideo: VIDEOS.skin,
    heroImage: IMG("photo-1559757175-5700dde675bc"),
    products: [
      p("BV-001", "Bactrova Ointment", "Ointment 15g", "2% mupirocin topical antibiotic.", 14.4, "15g"),
      p("BV-002", "Bactrova Nasal", "Nasal ointment 3g", "Nasal mupirocin for MRSA carriage.", 16.8, "3g"),
      p("BV-003", "Bactrova Wound Pack", "Wound care kit", "Wound cleansing + ointment kit.", 22.4, "kit"),
    ],
    keywords: ["antibiotic", "mupirocin", "skin infection"],
  },
];

export const getBrand = (slug: string) => BRANDS.find((b) => b.slug === slug);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const brandsByCategory = (catSlug: string) => BRANDS.filter((b) => b.category === catSlug);
