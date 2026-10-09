import heroCollectionImg from '../assets/images/hero_flat_plastic_jars_ayurveda_1791484419511.jpg';
import heroAyurvedicBgImg from '../assets/images/hero_ayurvedic_theme_bg_1791486164343.jpg';
import storyCraftsmanshipImg from '../assets/images/story_herbal_craftsmanship_1791482295366.jpg';
import studioJarGreensImg from '../assets/images/studio_jar_moringa_greens_1791552646958.jpg';
import studioJarAmlaImg from '../assets/images/studio_jar_amla_triphala_1791552659588.jpg';
import studioJarRootsImg from '../assets/images/studio_jar_ashwagandha_shatavari_1791552673379.jpg';
import studioJarBeetrootImg from '../assets/images/studio_jar_beetroot_ruby_1791552687684.jpg';
import studioJarBarkImg from '../assets/images/studio_jar_bark_shikakai_1791552699608.jpg';

export const BRAND_IMAGES = {
  heroCollection: heroCollectionImg,
  heroAyurvedicBg: heroAyurvedicBgImg,
  storyCraftsmanship: storyCraftsmanshipImg,
  greenVitality: studioJarGreensImg,
  rootsBark: studioJarRootsImg,
  fruitBotanical: studioJarAmlaImg,
  beetrootRuby: studioJarBeetrootImg,
  barkShikakai: studioJarBarkImg,
};

export enum ProductCategory {
  ALL = 'All Botanicals',
  VITALITY_GREENS = 'Daily Vitality & Greens',
  ROOTS_RASAYANA = 'Roots, Bark & Rasayana',
  DIGESTIVE_METABOLIC = 'Digestive & Metabolic',
  HAIR_SKIN = 'Hair & Skin Care',
}

export interface PackSizeOption {
  weight: '100g' | '250g' | '500g' | '1kg';
  priceINR: number;
  priceUSD: number;
  label: string;
}

export interface AyurvedicProduct {
  id: string;
  name: string;
  labelTitle: string;
  devanagariName: string;
  hindiName: string;
  botanicalName: string;
  category: ProductCategory;
  featured: boolean;
  shortDescription: string;
  ayurvedicProfile: string;
  plantPartUsed: string;
  processingMethod: string;
  powderColorHex: string;
  powderSecondaryHex: string;
  pouchTone: 'forest' | 'kraft' | 'ivory';
  studioImage: string;
  posterHighlights: [string, string, string, string];
  benefits: string[];
  usageInstructions: {
    dailyRitual: string;
    recommendedServing: string;
    anupanaOrMedium: string;
    bestTime: string;
    externalOrCulinaryNote?: string;
  };
  packSizes: PackSizeOption[];
}

export const WHATSAPP_NUMBER = '919823000000';

export const PRODUCTS: AyurvedicProduct[] = [
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    labelTitle: 'Moringa Powder',
    devanagariName: 'मोरिंगा पावडर',
    hindiName: 'Sahjan Patra Churna',
    botanicalName: 'Moringa oleifera',
    category: ProductCategory.VITALITY_GREENS,
    featured: true,
    shortDescription:
      'Shade-dried tender drumstick leaves finely milled into a vibrant green powder rich in natural plant nutrients and antioxidants.',
    ayurvedicProfile: 'Laghu (Light) · Ushna Virya · Kapha-Vata Balancing',
    plantPartUsed: 'Young Tender Leaves',
    processingMethod: 'Low-Temperature Shade Drying · Fine 100-Mesh Sieve',
    powderColorHex: '#6E8B3D',
    powderSecondaryHex: '#8AA852',
    pouchTone: 'forest',
    studioImage: studioJarGreensImg,
    posterHighlights: [
      'Rich in\nNatural Nutrients',
      'Supports\nImmunity',
      'Boosts\nEnergy',
      'Good for\nOverall Wellness',
    ],
    benefits: [
      'Provides natural plant-based vitamins, minerals, and essential amino acids for everyday nourishment',
      'Supports sustained daily energy and natural vitality without caffeine or stimulants',
      'Rich in chlorophyll and polyphenols that support general cellular wellness',
      'Versatile green superfood that blends effortlessly into warm water, dal, soups, or smoothies',
    ],
    usageInstructions: {
      dailyRitual:
        'Stir half to one level teaspoon into warm water with a few drops of fresh lemon juice, or mix into smoothies and chapati dough.',
      recommendedServing: '3g – 5g (approx. 1 level teaspoon) once daily',
      anupanaOrMedium: 'Lukewarm water, honey, buttermilk, or smoothies',
      bestTime: 'Morning on an empty stomach or with breakfast',
    },
    packSizes: [
      { weight: '100g', priceINR: 185, priceUSD: 6, label: '100gm Jar' },
      { weight: '250g', priceINR: 390, priceUSD: 12, label: '250gm Jar' },
      { weight: '500g', priceINR: 720, priceUSD: 20, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1350, priceUSD: 35, label: '1kg Bulk' },
    ],
  },
  {
    id: 'amla-powder',
    name: 'Amla Powder',
    labelTitle: 'Amla Powder',
    devanagariName: 'आंवला पावडर',
    hindiName: 'Amalaki Churna',
    botanicalName: 'Phyllanthus emblica',
    category: ProductCategory.VITALITY_GREENS,
    featured: true,
    shortDescription:
      'Pure wild-harvested Indian Gooseberry deseeded and gently dried to preserve its natural Vitamin C for daily immunity, skin, and hair care.',
    ayurvedicProfile: 'Pancha-Rasa (Five Tastes) · Sheeta (Cooling) · Tridoshic',
    plantPartUsed: 'Deseeded Whole Fruit Pericarp',
    processingMethod: 'Seedless Sun-Shade Curing · Cold Micro-Milling',
    powderColorHex: '#9C8253',
    powderSecondaryHex: '#B89E6C',
    pouchTone: 'kraft',
    studioImage: studioJarAmlaImg,
    posterHighlights: [
      'Rich in\nNatural Vitamin C',
      'Supports\nImmunity',
      'Nourishes\nHair & Skin',
      'Good for\nDaily Digestion',
    ],
    benefits: [
      'Revered in classical Ayurveda as a premier Rasayana for daily rejuvenation and seasonal resilience',
      'Naturally rich in botanical Vitamin C and tannins that support radiant skin and lustrous hair',
      'Supports gentle digestive harmony and cooling Pitta balance',
      'Dual-purpose botanical suitable for both internal wellness drinks and nourishing hair masks',
    ],
    usageInstructions: {
      dailyRitual:
        'Mix 1 teaspoon in a glass of warm water for morning consumption, or blend with warm water/curd into a smooth paste for a 30-minute hair & scalp pack.',
      recommendedServing: '3g – 5g (1 teaspoon) daily for dietary use',
      anupanaOrMedium: 'Warm water, raw honey, or rock sugar',
      bestTime: 'Early morning or 30 minutes after meals',
    },
    packSizes: [
      { weight: '100g', priceINR: 165, priceUSD: 5, label: '100gm Jar' },
      { weight: '250g', priceINR: 350, priceUSD: 11, label: '250gm Jar' },
      { weight: '500g', priceINR: 640, priceUSD: 18, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1190, priceUSD: 32, label: '1kg Bulk' },
    ],
  },
  {
    id: 'triphala-powder',
    name: 'Triphala Powder',
    labelTitle: 'Triphala Powder',
    devanagariName: 'त्रिफला पावडर',
    hindiName: 'Triphala Churna',
    botanicalName: 'Amalaki · Bibhitaki · Haritaki',
    category: ProductCategory.DIGESTIVE_METABOLIC,
    featured: true,
    shortDescription:
      'Time-honored Ayurvedic synergy of three sacred fruits blended in balanced proportions to support gentle overnight digestive cleansing.',
    ayurvedicProfile: 'Tridoshic Rasayana · Deepana-Pachana · Balanced Formula',
    plantPartUsed: 'Deseeded Pericarps of Three Fruits',
    processingMethod: 'Traditional Ratio Blending · Stone-Pulverized',
    powderColorHex: '#8C704B',
    powderSecondaryHex: '#A88A62',
    pouchTone: 'kraft',
    studioImage: studioJarAmlaImg,
    posterHighlights: [
      'Three Sacred\nAyurvedic Fruits',
      'Supports\nGut Cleanse',
      'Promotes\nDigestion',
      'Balances\nTridosha Daily',
    ],
    benefits: [
      'Supports natural, non-habit-forming digestive regularity and gentle internal cleansing',
      'Combines the synergistic properties of Amla, Baheda, and Harad in one balanced formulation',
      'Promotes comfortable gut motility and nutrient assimilation',
      'Traditionally used as a daily evening tonic to maintain Tridoshic equilibrium',
    ],
    usageInstructions: {
      dailyRitual:
        'Steep 1 level teaspoon in a cup of warm water for 10 minutes before bedtime and drink comfortably.',
      recommendedServing: '3g – 5g (1 level teaspoon) once daily at night',
      anupanaOrMedium: 'Warm water or a half-teaspoon of cow ghee',
      bestTime: 'At bedtime, 1 to 2 hours after dinner',
    },
    packSizes: [
      { weight: '100g', priceINR: 175, priceUSD: 6, label: '100gm Jar' },
      { weight: '250g', priceINR: 370, priceUSD: 11, label: '250gm Jar' },
      { weight: '500g', priceINR: 680, priceUSD: 19, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1260, priceUSD: 33, label: '1kg Bulk' },
    ],
  },
  {
    id: 'shatavari-powder',
    name: 'Shatavari Powder',
    labelTitle: 'Shatavari Powder',
    devanagariName: 'शतावरी पावडर',
    hindiName: 'Shatavari Mool Churna',
    botanicalName: 'Asparagus racemosus',
    category: ProductCategory.ROOTS_RASAYANA,
    featured: true,
    shortDescription:
      'Creamy, naturally nourishing tuberous roots carefully cleaned and shade-dried to support holistic vitality, stamina, and restorative balance.',
    ayurvedicProfile: 'Madhura (Sweet) · Sheeta (Cooling) · Vata-Pitta Pacifying',
    plantPartUsed: 'Mature Tuberous Roots',
    processingMethod: 'Hand-Cleaned & Shade-Dried · Ultra-Fine Milling',
    powderColorHex: '#CBB289',
    powderSecondaryHex: '#DFC9A4',
    pouchTone: 'ivory',
    studioImage: studioJarRootsImg,
    posterHighlights: [
      'Rich in\nRoot Nutrients',
      'Supports\nWomen Wellness',
      'Boosts\nVitality',
      'Cooling &\nNourishing',
    ],
    benefits: [
      'Celebrated in Ayurveda as a soothing, grounding tonic for women’s wellness across life stages',
      'Provides cooling, demulcent nourishment that pacifies excess Pitta and Vata',
      'Supports natural stamina, restful recovery, and balanced vitality',
      'Naturally creamy texture blends smoothly into warm milk or almond milk lattes',
    ],
    usageInstructions: {
      dailyRitual:
        'Simmer 1 teaspoon gently in a cup of warm milk or plant-based milk with a pinch of cardamom.',
      recommendedServing: '3g – 5g (1 teaspoon) once or twice daily',
      anupanaOrMedium: 'Warm milk, almond milk, or a drop of ghee',
      bestTime: 'Morning after breakfast or evening before rest',
    },
    packSizes: [
      { weight: '100g', priceINR: 240, priceUSD: 8, label: '100gm Jar' },
      { weight: '250g', priceINR: 520, priceUSD: 15, label: '250gm Jar' },
      { weight: '500g', priceINR: 960, priceUSD: 26, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1800, priceUSD: 46, label: '1kg Bulk' },
    ],
  },
  {
    id: 'arjun-chhal-powder',
    name: 'Arjun Chhal Powder',
    labelTitle: 'Arjun Chhal Powder',
    devanagariName: 'अर्जुन छाल पावडर',
    hindiName: 'Arjuna Twak Churna',
    botanicalName: 'Terminalia arjuna',
    category: ProductCategory.ROOTS_RASAYANA,
    featured: false,
    shortDescription:
      'Sustainably harvested outer bark of the sacred Arjuna tree, finely milled into a rich terracotta-hued powder revered for holistic wellness.',
    ayurvedicProfile: 'Kashaya (Astringent) · Sheeta (Cooling) · Kapha-Pitta Balancing',
    plantPartUsed: 'Sustainably Harvested Stem Bark',
    processingMethod: 'Sun-Cured Bark · Slow Stone-Grinding',
    powderColorHex: '#944D36',
    powderSecondaryHex: '#B06249',
    pouchTone: 'kraft',
    studioImage: studioJarBarkImg,
    posterHighlights: [
      'Pure Sacred\nArjuna Bark',
      'Rich in\nAntioxidants',
      'Supports\nEndurance',
      'Good for\nHeart Wellness',
    ],
    benefits: [
      'Traditionally prepared as Ksheerapaka (herbal milk decoction) for holistic cardiovascular wellness support',
      'Rich in natural bark polyphenols, proanthocyanidins, and trace minerals',
      'Supports endurance, balanced circulation, and grounding physical resilience',
      '100% pure bark powder with zero fillers, artificial colors, or synthetic additives',
    ],
    usageInstructions: {
      dailyRitual:
        'Prepare traditional Arjuna Ksheerapaka: boil 1 teaspoon of powder in equal parts milk and water (1 cup each) until reduced to 1 cup.',
      recommendedServing: '3g (approx. ½ to 1 level teaspoon) daily',
      anupanaOrMedium: 'Boiled with milk and water or steeped as herbal kadha',
      bestTime: 'Morning on an empty stomach or evening',
    },
    packSizes: [
      { weight: '100g', priceINR: 170, priceUSD: 6, label: '100gm Jar' },
      { weight: '250g', priceINR: 360, priceUSD: 11, label: '250gm Jar' },
      { weight: '500g', priceINR: 660, priceUSD: 18, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1220, priceUSD: 32, label: '1kg Bulk' },
    ],
  },
  {
    id: 'ashwagandha-powder',
    name: 'Ashwagandha Powder',
    labelTitle: 'Ashwagandha Powder',
    devanagariName: 'अश्वगंधा पावडर',
    hindiName: 'Ashwagandha Mool Churna',
    botanicalName: 'Withania somnifera',
    category: ProductCategory.ROOTS_RASAYANA,
    featured: true,
    shortDescription:
      'Single-origin Nagori-grade roots finely milled to a velvety beige powder to support calm composure, physical strength, and restful sleep.',
    ayurvedicProfile: 'Balya (Strength-Giving) · Rasayana · Vata-Kapha Pacifying',
    plantPartUsed: '100% Mature Dried Roots Only',
    processingMethod: 'Root-Only Selection · Slow Cold Pulverization',
    powderColorHex: '#C2A679',
    powderSecondaryHex: '#D6BC92',
    pouchTone: 'forest',
    studioImage: studioJarRootsImg,
    posterHighlights: [
      '100% Pure\nRoot Powder',
      'Supports\nStress Relief',
      'Boosts\nStrength & Stamina',
      'Promotes\nRestful Sleep',
    ],
    benefits: [
      'Classical Ayurvedic adaptogenic root that supports calm composure during everyday stress',
      'Promotes physical strength, muscle recovery, and steady daytime stamina',
      'Supports deep, restful nighttime relaxation when enjoyed in warm evening milk',
      'Pure root-only formulation with authentic earthy aroma and natural withanolide profile',
    ],
    usageInstructions: {
      dailyRitual:
        'Whisk 1 level teaspoon into a cup of warm milk with a pinch of nutmeg or cardamom 30 minutes before sleep.',
      recommendedServing: '3g – 5g (1 level teaspoon) daily',
      anupanaOrMedium: 'Warm milk, almond milk, or warm water with honey',
      bestTime: 'Nighttime before sleep, or post-workout with warm milk',
    },
    packSizes: [
      { weight: '100g', priceINR: 230, priceUSD: 7, label: '100gm Jar' },
      { weight: '250g', priceINR: 490, priceUSD: 14, label: '250gm Jar' },
      { weight: '500g', priceINR: 910, priceUSD: 25, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1720, priceUSD: 44, label: '1kg Bulk' },
    ],
  },
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    labelTitle: 'Beetroot Powder',
    devanagariName: 'चुकंदर पावडर',
    hindiName: 'Chukandar Churna',
    botanicalName: 'Beta vulgaris',
    category: ProductCategory.VITALITY_GREENS,
    featured: true,
    shortDescription:
      'Dehydrated farm-fresh ruby beetroots ground into a vibrant crimson powder packed with natural nutrients for stamina and glowing skin.',
    ayurvedicProfile: 'Madhura (Sweet) · Nourishing · Rakta-Poshaka Support',
    plantPartUsed: 'Whole Peeled Taproot',
    processingMethod: 'Low-Heat Dehydration · Non-Caking Fine Grind',
    powderColorHex: '#8E1D3C',
    powderSecondaryHex: '#B02C50',
    pouchTone: 'ivory',
    studioImage: studioJarBeetrootImg,
    posterHighlights: [
      'Rich in\nNatural Iron',
      'Supports\nHealthy Glow',
      'Boosts\nActive Stamina',
      'Good for\nOverall Wellness',
    ],
    benefits: [
      'Supports natural stamina, pre-workout vitality, and healthy circulation',
      'Rich in natural betalain pigments and iron-supportive plant nutrients',
      'Imparts a gorgeous ruby tint and natural sweetness to smoothies, rotis, juices, and lattes',
      'Also popular in natural lip balms, blush masks, and glow-enhancing ubtan face packs',
    ],
    usageInstructions: {
      dailyRitual:
        'Blend 1 to 2 teaspoons into cool water, citrus juice, or smoothies; or mix with rose water for a natural pink glow face mask.',
      recommendedServing: '5g – 10g (1 to 2 teaspoons) daily',
      anupanaOrMedium: 'Citrus juice, smoothies, yogurt, or rose water (topical)',
      bestTime: 'Morning or 30 minutes prior to exercise',
    },
    packSizes: [
      { weight: '100g', priceINR: 180, priceUSD: 6, label: '100gm Jar' },
      { weight: '250g', priceINR: 380, priceUSD: 11, label: '250gm Jar' },
      { weight: '500g', priceINR: 700, priceUSD: 19, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1300, priceUSD: 34, label: '1kg Bulk' },
    ],
  },
  {
    id: 'jamun-seed-powder',
    name: 'Jamun Seed Powder',
    labelTitle: 'Jamun Seed Powder',
    devanagariName: 'जामुन बीज पावडर',
    hindiName: 'Jambu Beej Churna',
    botanicalName: 'Syzygium cumini',
    category: ProductCategory.DIGESTIVE_METABOLIC,
    featured: false,
    shortDescription:
      'Sun-matured Indian Blackberry seed kernels washed, shade-dried, and finely ground to support balanced metabolism and digestive wellness.',
    ayurvedicProfile: 'Kashaya-Tikta (Astringent-Bitter) · Kapha-Pitta Pacifying',
    plantPartUsed: 'Cleaned Inner Seed Kernel',
    processingMethod: 'Triple-Washed Kernel · Hygienic Solar-Shade Drying',
    powderColorHex: '#7D6046',
    powderSecondaryHex: '#99795C',
    pouchTone: 'kraft',
    studioImage: studioJarAmlaImg,
    posterHighlights: [
      'Pure Jamun\nSeed Kernel',
      'Supports\nMetabolism',
      'Aids Healthy\nDigestion',
      'Good for\nDaily Balance',
    ],
    benefits: [
      'Traditionally valued in Ayurveda for supporting healthy glycemic and metabolic balance',
      'Contains natural plant alkaloids (jamboline) and astringent polyphenols',
      'Supports digestive comfort and Kapha balance when taken before meals',
      'Hygienically processed from ripe summer Jamun fruits with zero starch adulteration',
    ],
    usageInstructions: {
      dailyRitual:
        'Stir 1 level teaspoon into a glass of lukewarm water and consume 20 minutes before morning and evening meals.',
      recommendedServing: '3g – 5g (1 level teaspoon) once or twice daily',
      anupanaOrMedium: 'Lukewarm water or fresh buttermilk',
      bestTime: '15–20 minutes before principal meals',
    },
    packSizes: [
      { weight: '100g', priceINR: 165, priceUSD: 5, label: '100gm Jar' },
      { weight: '250g', priceINR: 340, priceUSD: 10, label: '250gm Jar' },
      { weight: '500g', priceINR: 620, priceUSD: 17, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1160, priceUSD: 30, label: '1kg Bulk' },
    ],
  },
  {
    id: 'babool-phali-powder',
    name: 'Babool Phali Powder',
    labelTitle: 'Babool Phali Powder',
    devanagariName: 'बबूल फली पावडर',
    hindiName: 'Babbula Phali Churna',
    botanicalName: 'Acacia nilotica',
    category: ProductCategory.ROOTS_RASAYANA,
    featured: false,
    shortDescription:
      'Nutrient-dense pods of the indigenous Babool tree carefully dried and pulverized to support traditional joint comfort and structural strength.',
    ayurvedicProfile: 'Kashaya (Astringent) · Grahi · Kapha-Pacifying',
    plantPartUsed: 'Whole Young Seed Pods (Phali)',
    processingMethod: 'Whole-Pod Shade Curing · Heavy Duty Stone Milling',
    powderColorHex: '#8C7456',
    powderSecondaryHex: '#A68D6D',
    pouchTone: 'kraft',
    studioImage: studioJarRootsImg,
    posterHighlights: [
      'Rich in\nPlant Calcium',
      'Supports\nJoint Comfort',
      'Strengthens\nBones & Gums',
      'Good for\nOverall Mobility',
    ],
    benefits: [
      'Revered in regional Indian wellness traditions for supporting joint comfort and skeletal strength',
      'Naturally rich in plant tannins, calcium compounds, and astringent phytonutrients',
      'Traditionally used as a strengthening botanical for gums and oral hygiene',
      'Unrefined, single-ingredient pod powder free from synthetic additives',
    ],
    usageInstructions: {
      dailyRitual:
        'Take 1 level teaspoon with warm water or warm milk after meals.',
      recommendedServing: '3g – 5g (1 level teaspoon) daily',
      anupanaOrMedium: 'Lukewarm water or warm milk',
      bestTime: 'Morning and evening after meals',
    },
    packSizes: [
      { weight: '100g', priceINR: 175, priceUSD: 6, label: '100gm Jar' },
      { weight: '250g', priceINR: 370, priceUSD: 11, label: '250gm Jar' },
      { weight: '500g', priceINR: 680, priceUSD: 19, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1260, priceUSD: 33, label: '1kg Bulk' },
    ],
  },
  {
    id: 'neem-powder',
    name: 'Neem Powder',
    labelTitle: 'Neem Powder',
    devanagariName: 'नीम पावडर',
    hindiName: 'Nimba Patra Churna',
    botanicalName: 'Azadirachta indica',
    category: ProductCategory.HAIR_SKIN,
    featured: false,
    shortDescription:
      'Pure, shade-dried mature Neem leaves milled into a deep green purifying powder prized for clarifying skin packs, scalp care, and cleansing.',
    ayurvedicProfile: 'Tikta (Bitter) · Sheeta (Cooling) · Pitta-Kapha Clarifying',
    plantPartUsed: 'Mature Shade-Dried Leaves',
    processingMethod: 'Triple-Washed Leaf Selection · Micro-Sieved',
    powderColorHex: '#4F7533',
    powderSecondaryHex: '#699449',
    pouchTone: 'forest',
    studioImage: studioJarGreensImg,
    posterHighlights: [
      '100% Pure\nNeem Leaves',
      'Purifies &\nClarifies Skin',
      'Supports\nScalp Hygiene',
      'Natural\nDetox Support',
    ],
    benefits: [
      'Purifies and clarifies blemish-prone skin when applied as a soothing botanical face pack',
      'Helps maintain a clean, flake-free, and balanced scalp environment',
      'Classic Tikta (bitter) Ayurvedic botanical supporting internal seasonal purification',
      'Vibrant green color retained through controlled indoor shade drying',
    ],
    usageInstructions: {
      dailyRitual:
        'For skin & scalp: blend 1–2 teaspoons with rose water into a smooth paste, apply for 15 minutes, and rinse. For dietary use: ¼ to ½ teaspoon with warm water.',
      recommendedServing: 'Topical: 1–2 tsp · Internal: 1g–2g (¼–½ tsp)',
      anupanaOrMedium: 'Rose water / Multani Mitti (topical) or warm water',
      bestTime: 'Morning for internal ritual; evening for face pack',
    },
    packSizes: [
      { weight: '100g', priceINR: 155, priceUSD: 5, label: '100gm Jar' },
      { weight: '250g', priceINR: 320, priceUSD: 10, label: '250gm Jar' },
      { weight: '500g', priceINR: 590, priceUSD: 16, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1090, priceUSD: 29, label: '1kg Bulk' },
    ],
  },
  {
    id: 'pudina-powder',
    name: 'Pudina Powder',
    labelTitle: 'Pudina Powder',
    devanagariName: 'पुदीना पावडर',
    hindiName: 'Putiha Patra Churna',
    botanicalName: 'Mentha spicata',
    category: ProductCategory.DIGESTIVE_METABOLIC,
    featured: false,
    shortDescription:
      'Aromatic garden mint leaves gently dehydrated at low temperatures to lock in natural essential oils, cooling freshness, and digestive comfort.',
    ayurvedicProfile: 'Katu (Pungent) · Laghu · Deepana & Rochana',
    plantPartUsed: 'Aromatic Whole Mint Leaves',
    processingMethod: 'Aroma-Lock Low-Temp Drying · Fine Culinary-Grade Sieve',
    powderColorHex: '#52783C',
    powderSecondaryHex: '#6C9652',
    pouchTone: 'forest',
    studioImage: studioJarGreensImg,
    posterHighlights: [
      'Fresh Garden\nMint Aroma',
      'Supports\nCool Digestion',
      'Refreshes\nNaturally',
      'Great for\nDrinks & Packs',
    ],
    benefits: [
      'Refreshes the palate and supports light, comfortable digestion after heavy meals',
      'Retains the crisp, cooling aroma of fresh Indian garden mint year-round',
      'Elevates chaas (spiced buttermilk), jaljeera, raita, herbal teas, and chutneys',
      'Can also be combined with Multani Mitti for a cooling summer facial pack',
    ],
    usageInstructions: {
      dailyRitual:
        'Whisk ½ teaspoon into chilled buttermilk (chaas) with roasted cumin, or steep in warm water with lemon for a soothing mint infusion.',
      recommendedServing: '2g – 4g (½ to 1 teaspoon) as needed',
      anupanaOrMedium: 'Buttermilk, warm water with lemon, or chutneys',
      bestTime: 'With or immediately after lunch and dinner',
    },
    packSizes: [
      { weight: '100g', priceINR: 160, priceUSD: 5, label: '100gm Jar' },
      { weight: '250g', priceINR: 340, priceUSD: 10, label: '250gm Jar' },
      { weight: '500g', priceINR: 630, priceUSD: 17, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1180, priceUSD: 31, label: '1kg Bulk' },
    ],
  },
  {
    id: 'giloy-powder',
    name: 'Giloy Powder',
    labelTitle: 'Giloy Powder',
    devanagariName: 'गिलोय पावडर',
    hindiName: 'Guduchi / Amrita Churna',
    botanicalName: 'Tinospora cordifolia',
    category: ProductCategory.VITALITY_GREENS,
    featured: false,
    shortDescription:
      'Mature Giloy stems harvested at peak potency, dried, and pulverized into a classic Ayurvedic Amrita tonic for seasonal immunity and vitality.',
    ayurvedicProfile: 'Tikta-Kashaya · Tridosha Shamaka · Rasayana',
    plantPartUsed: 'Mature Climbing Stems (Kanda)',
    processingMethod: 'Neem-Host Stem Selection · Hygienic Sun-Shade Curing',
    powderColorHex: '#8E8462',
    powderSecondaryHex: '#A89E7B',
    pouchTone: 'forest',
    studioImage: studioJarAmlaImg,
    posterHighlights: [
      'Pure Mature\nGiloy Stems',
      'Supports\nStrong Immunity',
      'Promotes\nSeasonal Vitality',
      'Good for\nOverall Wellness',
    ],
    benefits: [
      'Known in Sanskrit as "Amrita" for supporting natural immune resilience',
      'Helps maintain seasonal vitality and balanced Pitta harmony',
      'Supports natural detoxification pathways and healthy metabolic function',
      'Prepared exclusively from mature stems rather than leaves for authentic Ayurvedic strength',
    ],
    usageInstructions: {
      dailyRitual:
        'Simmer ½ to 1 level teaspoon in 1 cup of water with Tulsi and ginger for a morning kadha, or take with lukewarm water.',
      recommendedServing: '3g (approx. ½ to 1 level teaspoon) once daily',
      anupanaOrMedium: 'Warm water, raw honey, or herbal kadha infusion',
      bestTime: 'Morning on an empty stomach',
    },
    packSizes: [
      { weight: '100g', priceINR: 180, priceUSD: 6, label: '100gm Jar' },
      { weight: '250g', priceINR: 380, priceUSD: 11, label: '250gm Jar' },
      { weight: '500g', priceINR: 700, priceUSD: 19, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1300, priceUSD: 34, label: '1kg Bulk' },
    ],
  },
  {
    id: 'shikakai-powder',
    name: 'Shikakai Powder',
    labelTitle: 'Shikakai Powder',
    devanagariName: 'शिकाकाई पावडर',
    hindiName: 'Saptala Phali Churna',
    botanicalName: 'Acacia concinna',
    category: ProductCategory.HAIR_SKIN,
    featured: true,
    shortDescription:
      'Whole sun-dried "Fruit for the Hair" pods triple-sieved into a silky botanical cleanser that gently washes hair while preserving natural scalp oils.',
    ayurvedicProfile: 'Keshya (Hair-Nourishing) · Mild Natural Saponins · pH Balanced',
    plantPartUsed: 'Whole Sun-Dried Pods',
    processingMethod: 'Triple-Sieved Micro-Fine Grind (Zero Grittiness)',
    powderColorHex: '#7A5037',
    powderSecondaryHex: '#966548',
    pouchTone: 'ivory',
    studioImage: studioJarBarkImg,
    posterHighlights: [
      'Natural Hair\nCleanser',
      'Strengthens\nHair Roots',
      'Adds Natural\nShine & Softness',
      'Supports\nHealthy Scalp',
    ],
    benefits: [
      'Naturally low-pH botanical hair cleanser that cleans without stripping protective scalp lipids',
      'Acts as a gentle detangler leaving hair soft, lustrous, and manageable',
      'Triple-sieved to rinse out cleanly from long hair without coarse residue',
      '100% sulfate-free, paraben-free traditional Indian hair care ritual',
    ],
    usageInstructions: {
      dailyRitual:
        'Mix 2–3 tablespoons with warm water to form a smooth paste. Steep for 15 minutes, massage gently onto wet scalp and hair, leave for 5–10 minutes, and rinse thoroughly.',
      recommendedServing: 'External Use: 20g – 30g per hair wash',
      anupanaOrMedium: 'Warm water, curd, or blended with Amla & Reetha',
      bestTime: '1–2 times weekly during bath ritual',
    },
    packSizes: [
      { weight: '100g', priceINR: 160, priceUSD: 5, label: '100gm Jar' },
      { weight: '250g', priceINR: 330, priceUSD: 10, label: '250gm Jar' },
      { weight: '500g', priceINR: 610, priceUSD: 17, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1140, priceUSD: 30, label: '1kg Bulk' },
    ],
  },
  {
    id: 'reetha-powder',
    name: 'Reetha Powder',
    labelTitle: 'Reetha Powder',
    devanagariName: 'रीठा पावडर',
    hindiName: 'Arishtaka Churna',
    botanicalName: 'Sapindus mukorossi',
    category: ProductCategory.HAIR_SKIN,
    featured: false,
    shortDescription:
      'Deseeded Himalayan soapnut shells rich in natural plant saponins, finely milled for gentle foaming hair washes and scalp clarification.',
    ayurvedicProfile: 'Natural Plant Saponin · Clarifying · Scalp Care',
    plantPartUsed: 'Deseeded Soapnut Fruit Shells',
    processingMethod: 'Seed-Free Shell Dehydration · Fine Mesh Milling',
    powderColorHex: '#8A6440',
    powderSecondaryHex: '#A67C54',
    pouchTone: 'ivory',
    studioImage: studioJarBarkImg,
    posterHighlights: [
      'Rich in Plant\nSaponins',
      'Gentle Foaming\nHair Wash',
      'Cleanses Scalp\nNaturally',
      'Promotes Silky\nLustrous Hair',
    ],
    benefits: [
      'Naturally rich in gentle botanical saponins that create a mild, chemical-free cleansing lather',
      'Effectively removes excess scalp oil, pre-wash hair oil, and environmental buildup',
      'Pairs synergistically with Shikakai and Amla for the complete traditional hair wash ritual',
      'Pure deseeded fruit pericarp—biodegradable, gentle, and free from synthetic surfactants',
    ],
    usageInstructions: {
      dailyRitual:
        'Combine 1 tablespoon each of Reetha, Shikakai, and Amla powder in warm water. Soak for 20 minutes, massage gently into wet hair and scalp, and rinse thoroughly.',
      recommendedServing: 'External Use: 10g – 20g per wash',
      anupanaOrMedium: 'Warm water or herbal infusion with Amla & Shikakai',
      bestTime: 'Weekly hair cleansing ritual',
    },
    packSizes: [
      { weight: '100g', priceINR: 165, priceUSD: 5, label: '100gm Jar' },
      { weight: '250g', priceINR: 340, priceUSD: 10, label: '250gm Jar' },
      { weight: '500g', priceINR: 630, priceUSD: 17, label: '500gm Jar' },
      { weight: '1kg', priceINR: 1180, priceUSD: 31, label: '1kg Bulk' },
    ],
  },
];

export const QUALITY_PILLARS = [
  {
    index: '01',
    title: 'Direct Farm & Forest Sourcing',
    subtitle: 'Indigenous Indian Terroir',
    description:
      'Every leaf, root, pod, and berry is ethically sourced directly from trusted cultivator networks across India at peak seasonal maturity.',
  },
  {
    index: '02',
    title: 'Controlled Shade-Drying',
    subtitle: 'Living Color & Nutrient Retention',
    description:
      'Delicate greens like Moringa, Neem, and Pudina are cured indoors in ventilated shade houses rather than harsh sun, preserving natural nutrients.',
  },
  {
    index: '03',
    title: 'Low-Temperature Fine Milling',
    subtitle: '100-Mesh Silky Texture',
    description:
      'Pulverized in small hygienic batches to prevent heat damage, then triple-sieved for effortless mixing into water, warm milk, or hair masks.',
  },
  {
    index: '04',
    title: '100% Pure Single-Ingredient',
    subtitle: 'Zero Fillers · Zero Preservatives',
    description:
      'No artificial flavour, no artificial colour, and no artificial preservatives. Every jar contains 100% pure botanical powder.',
  },
];

export const RITUAL_GUIDES = [
  {
    step: '01. Morning Wellness Drink',
    focus: 'Daily Vitality & Greens',
    herbs: 'Moringa · Amla · Giloy · Beetroot',
    instruction:
      'Whisk 1 level teaspoon into 200ml of lukewarm water or fresh citrus smoothie upon waking for natural daily nourishment and energy.',
    timing: 'Morning',
  },
  {
    step: '02. Pre & Post-Meal Digestive Harmony',
    focus: 'Digestive & Metabolic Support',
    herbs: 'Jamun Seed · Pudina · Arjun Chhal',
    instruction:
      'Take Jamun Seed powder with lukewarm water 20 minutes before meals, whisk aromatic Pudina powder into afternoon buttermilk, or simmer Arjun Chhal with warm milk.',
    timing: 'Around Meals',
  },
  {
    step: '03. Evening Restorative Tonic',
    focus: 'Adaptogenic Recovery & Overnight Cleanse',
    herbs: 'Ashwagandha · Shatavari · Triphala · Babool Phali',
    instruction:
      'Stir Ashwagandha or Shatavari into a cup of warm milk 30 minutes before sleep, or steep Triphala in warm water for gentle overnight digestive cleansing.',
    timing: 'Evening',
  },
  {
    step: '04. Natural Hair & Skin Care Packs',
    focus: 'Botanical Hair & Skin Care',
    herbs: 'Shikakai · Reetha · Amla · Neem',
    instruction:
      'Blend equal parts Shikakai, Reetha, and Amla in warm water for a chemical-free herbal hair wash. Combine Neem or Beetroot with rose water for a clarifying face pack.',
    timing: 'Weekly Care',
  },
];
