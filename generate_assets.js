const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function createSvg(title, subtitle, color1, color2, iconSymbol) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}"/>
      <stop offset="100%" stop-color="${color2}"/>
    </linearGradient>
    <pattern id="pat" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <rect width="800" height="600" fill="url(#pat)"/>
  <circle cx="400" cy="240" r="90" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>
  <text x="400" y="265" font-family="'Segoe UI', sans-serif" font-size="70" text-anchor="middle" fill="#ffffff">${iconSymbol}</text>
  <text x="400" y="390" font-family="'Segoe UI', sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#ffffff">${title}</text>
  <text x="400" y="435" font-family="'Segoe UI', sans-serif" font-size="18" text-anchor="middle" fill="#e2e8f0">${subtitle}</text>
  <rect x="300" y="470" width="200" height="38" rx="19" fill="#d97706"/>
  <text x="400" y="494" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" letter-spacing="1" text-anchor="middle" fill="#ffffff">DHALI AGRO QUALITY</text>
</svg>`;
}

const assets = [
  ['hero-agriculture-bg.jpg', 'Modern Agriculture in Bangladesh', 'Growing Together, Building Tomorrow', '#13462b', '#1f7a4d', '🌾'],
  ['farmer-consultation-bg.jpg', 'Farmer Advisory & Field Care', 'Support For Every Harvest Season', '#0f3822', '#1b5e3a', '👨‍🌾'],
  ['dhan-28-plus.jpg', 'Dhali Hybrid Dhan-28 Plus', 'Premium Boro Rice Seed Variety', '#166534', '#15803d', '🌾'],
  ['tomato-lal-shonali.jpg', 'Dhali Lal Shonali Tomato', 'High-Yield Hybrid Vegetable Seed', '#991b1b', '#b91c1c', '🍅'],
  ['bottle-gourd-sabuj.jpg', 'Dhali Sabuj Shurjo Lau', 'Prolific Hybrid Bottle Gourd', '#166534', '#14532d', '🥒'],
  ['nutriboost-npk.jpg', 'Dhali NutriBoost 19-19-19', 'Foliar Soluble Plant Nutrition', '#047857', '#065f46', '💧'],
  ['borozinc-plus.jpg', 'Dhali Borozinc Plus Liquid', 'Chelated Micronutrient Fertilizer', '#0d9488', '#0f766e', '🧪'],
  ['defender-wdg.jpg', 'Dhali Defender 75 WDG', 'Dual Action Systemic Fungicide', '#1e3a8a', '#1e40af', '🛡️'],
  ['bioguard-neem.jpg', 'Dhali BioGuard Organic', 'Botanical Azadirachtin Neem Formula', '#15803d', '#166534', '🌿'],
  ['growpro-feed.jpg', 'Dhali GrowPro Cattle Feed', 'Steam-Pelleted Dairy Nutrition', '#b45309', '#92400e', '🐄'],
  ['aquamax-feed.jpg', 'Dhali AquaMax Fish Feed', 'Slow-Floating High-Protein Feed', '#0284c7', '#0369a1', '🐟'],
  ['solution-crop.jpg', 'Crop Farming Solutions', 'Agronomic Guidance & Protocols', '#1e3a2f', '#2a5c48', '🌱'],
  ['solution-livestock.jpg', 'Livestock & Dairy Development', 'Herd Health & Modern Nutrition', '#854d0e', '#713f12', '🐂'],
  ['solution-aqua.jpg', 'Aquaculture & Fisheries Care', 'Water Quality & Bio-Remediation', '#075985', '#0c4a6e', '🌊'],
  ['solution-soil.jpg', 'Soil Health & Plant Nutrition', 'Micronutrients & Soil Testing', '#365314', '#1a2e05', '🪴'],
  ['solution-distribution.jpg', 'Inputs Distribution Network', 'Nationwide Supply Chain Support', '#1e293b', '#0f172a', '🚚'],
  ['solution-training.jpg', 'Farmer Extension & Training', 'Field Demonstrations & Krishi Shomabesh', '#14532d', '#166534', '🎓'],
  ['project-rice-demo.jpg', 'Northern Rice Demo Program', 'Bogura & Rangpur Field Trials', '#15803d', '#14532d', '🌾'],
  ['project-farmer-training.jpg', 'Responsible Crop Care Training', 'Jashore & Cumilla Field Schools', '#0f766e', '#115e59', '📋'],
  ['project-saline-farming.jpg', 'Coastal Saline-Tolerant Cropping', 'Satkhira & Khulna Initiatives', '#1d4ed8', '#1e40af', '🌊'],
  ['news-boro-seedbed.jpg', 'Boro Rice Seedbed Preparation', 'Blast Prevention & Cold Care Guide', '#14532d', '#166534', '🌱'],
  ['news-micronutrients.jpg', 'Balanced Micronutrients (Zn & B)', 'Prevent Flower Drop & Boost Quality', '#065f46', '#047857', '🧪'],
  ['news-center-launch.jpg', 'New Advisory Centers Launch', 'Rangpur & Dinajpur Hubs', '#1e3a8a', '#1e40af', '🏢'],
  ['news-farmer-rafiqul.jpg', 'Farmer Rafiqul Success Story', 'High-Value Capsicum in Bogura', '#b45309', '#92400e', '⭐'],
  ['farmer-1.jpg', 'Md. Al-Amin Hossain', 'Shibganj, Bogura Farmer', '#1e3a2f', '#2a5c48', '👨‍🌾'],
  ['farmer-2.jpg', 'Haji Abdul Malek', 'Birol, Dinajpur Farmer', '#14532d', '#166534', '👨‍🌾'],
  ['farmer-3.jpg', 'Sultan Mahmud', 'Shahjadpur Dairy Farmer', '#854d0e', '#713f12', '👨‍🌾'],
  ['masud-dhali.jpg', 'Engr. Masud Dhali', 'Founder & Managing Director', '#0f172a', '#1e293b', '👔'],
  ['shamsuddin.jpg', 'Dr. AKM Shamsuddin', 'Director of Agronomy & R&D', '#0f172a', '#1e293b', '🔬'],
  ['moniruzzaman.jpg', 'Kazi Moniruzzaman', 'Head of Sales & Distribution', '#0f172a', '#1e293b', '💼'],
  ['nusrat-jahan.jpg', 'Dr. Nusrat Jahan', 'Senior Technical Lead (Animal Health)', '#0f172a', '#1e293b', '👩‍🔬'],
  ['seeds-cat.jpg', 'Quality Seeds', 'Hybrid & OP Seeds Catalog', '#14532d', '#166534', '🌻'],
  ['nutrition-cat.jpg', 'Crop Nutrition', 'Soluble Fertilizers & Stimulants', '#065f46', '#047857', '💧'],
  ['protection-cat.jpg', 'Crop Protection', 'Fungicides, Insecticides, Herbicides', '#1e3a8a', '#1e40af', '🛡️'],
  ['livestock-cat.jpg', 'Livestock & Feed', 'Pelleted Feeds & Supplements', '#92400e', '#b45309', '🐄'],
  ['aqua-cat.jpg', 'Aquaculture Solutions', 'Floating Feed & Water Conditioners', '#0369a1', '#0284c7', '🐟'],
  ['tech-cat.jpg', 'Farm Solutions & Tech', 'Precision Sprayers & Modern Kits', '#334155', '#475569', '⚙️'],
  ['gallery-training-1.jpg', 'Field Agronomy Workshop', 'Bogura Farmer Training School', '#14532d', '#166534', '📷'],
  ['gallery-field-1.jpg', 'Lush Hybrid Paddy Field', 'Demo Plot in Dinajpur', '#15803d', '#14532d', '📷'],
  ['gallery-training-2.jpg', 'Spray Equipment Calibration', 'Safe Agrochemical Handling', '#0f766e', '#115e59', '📷'],
  ['gallery-product-1.jpg', 'Quality Certified Packaging', 'Hermetically Sealed Seeds', '#065f46', '#047857', '📷'],
  ['gallery-lab-1.jpg', 'Seed Germination Testing Lab', 'R&D Quality Control Station', '#1e3a8a', '#1e40af', '📷'],
  ['gallery-field-2.jpg', 'Farmers Harvest Gathering', 'Bumper Harvest in Cumilla', '#854d0e', '#713f12', '📷']
];

assets.forEach(([fname, title, sub, c1, c2, icon]) => {
  const content = createSvg(title, sub, c1, c2, icon);
  fs.writeFileSync(path.join(dir, fname), content);
});

console.log('Successfully generated ' + assets.length + ' image assets.');
