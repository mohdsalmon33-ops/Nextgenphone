import { Product } from './types';

function createDummyReviews() {
  return [
    { id: '1', name: 'Alex Johnson', rating: 5, date: '2023-10-15', comment: 'Absolutely incredible device. The camera is mind-blowing.' },
    { id: '2', name: 'Sarah Williams', rating: 4, date: '2023-11-02', comment: 'Great phone, but the battery life could be slightly better for the price.' },
    { id: '3', name: 'Michael Chen', rating: 5, date: '2023-12-10', comment: 'A massive upgrade from my previous phone. Highly recommended!' }
  ];
}

const defaultImages = [
  'bg-gradient-to-br from-slate-800 to-black',
  'bg-gradient-to-br from-blue-600 to-indigo-900',
  'bg-gradient-to-br from-zinc-200 to-zinc-400',
  'bg-gradient-to-br from-purple-500 to-violet-900'
];

export const productsList: Product[] = [
  // APPLE (8)
  {
    id: 'a1', name: 'iPhone 15 Pro Max', brand: 'Apple', price: 1199, originalPrice: 1299, rating: 4.9, reviewCount: 12450,
    images: defaultImages, tags: ['New', '5G', 'Best Seller'],
    specs: { display: '6.7" Super Retina XDR', processor: 'A17 Pro', ram: '8GB', storage: '256GB', camera: '48MP Main | 12MP Ultra | 12MP Tele (5x)', battery: '4422 mAh', os: 'iOS 17' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'a2', name: 'iPhone 15 Pro', brand: 'Apple', price: 999, originalPrice: 1099, rating: 4.8, reviewCount: 9800,
    images: defaultImages, tags: ['New', '5G'],
    specs: { display: '6.1" Super Retina XDR', processor: 'A17 Pro', ram: '8GB', storage: '128GB', camera: '48MP Main | 12MP Ultra | 12MP Tele (3x)', battery: '3274 mAh', os: 'iOS 17' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'a3', name: 'iPhone 15', brand: 'Apple', price: 799, originalPrice: 899, rating: 4.7, reviewCount: 8500,
    images: defaultImages, tags: ['New', '5G', 'Sale'],
    specs: { display: '6.1" Super Retina XDR', processor: 'A16 Bionic', ram: '6GB', storage: '128GB', camera: '48MP Main | 12MP Ultra', battery: '3349 mAh', os: 'iOS 17' },
    stockStatus: 'Low Stock', reviews: createDummyReviews()
  },
  {
    id: 'a4', name: 'iPhone 14 Pro Max', brand: 'Apple', price: 899, originalPrice: 1099, rating: 4.8, reviewCount: 22000,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.7" Super Retina XDR', processor: 'A16 Bionic', ram: '6GB', storage: '256GB', camera: '48MP Main | 12MP Ultra | 12MP Tele (3x)', battery: '4323 mAh', os: 'iOS 16' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'a5', name: 'iPhone 14 Pro', brand: 'Apple', price: 799, originalPrice: 999, rating: 4.8, reviewCount: 18500,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.1" Super Retina XDR', processor: 'A16 Bionic', ram: '6GB', storage: '128GB', camera: '48MP Main | 12MP Ultra | 12MP Tele (3x)', battery: '3200 mAh', os: 'iOS 16' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'a6', name: 'iPhone 14', brand: 'Apple', price: 599, originalPrice: 799, rating: 4.6, reviewCount: 15000,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.1" Super Retina XDR', processor: 'A15 Bionic', ram: '6GB', storage: '128GB', camera: '12MP Main | 12MP Ultra', battery: '3279 mAh', os: 'iOS 16' },
    stockStatus: 'Out of Stock', reviews: createDummyReviews()
  },
  {
    id: 'a7', name: 'iPhone 13', brand: 'Apple', price: 499, originalPrice: 599, rating: 4.7, reviewCount: 35000,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.1" Super Retina XDR', processor: 'A15 Bionic', ram: '4GB', storage: '128GB', camera: '12MP Main | 12MP Ultra', battery: '3240 mAh', os: 'iOS 15' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'a8', name: 'iPhone SE (3rd Gen)', brand: 'Apple', price: 399, originalPrice: 429, rating: 4.5, reviewCount: 8900,
    images: defaultImages, tags: ['Budget', '5G'],
    specs: { display: '4.7" Retina HD', processor: 'A15 Bionic', ram: '4GB', storage: '64GB', camera: '12MP Main', battery: '2018 mAh', os: 'iOS 15' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },

  // SAMSUNG (8)
  {
    id: 's1', name: 'Galaxy S24 Ultra', brand: 'Samsung', price: 1299, originalPrice: 1399, rating: 4.9, reviewCount: 5600,
    images: defaultImages, tags: ['New', '5G', 'AI'],
    specs: { display: '6.8" QHD+ AMOLED', processor: 'Snapdragon 8 Gen 3', ram: '12GB', storage: '256GB', camera: '200MP Main | 50MP Tele (5x)', battery: '5000 mAh', os: 'Android 14 (OneUI 6.1)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 's2', name: 'Galaxy S24+', brand: 'Samsung', price: 999, originalPrice: 1049, rating: 4.8, reviewCount: 3200,
    images: defaultImages, tags: ['New', '5G', 'AI'],
    specs: { display: '6.7" QHD+ AMOLED', processor: 'Exynos 2400 / SD 8 Gen 3', ram: '12GB', storage: '256GB', camera: '50MP Main | 12MP Ultra', battery: '4900 mAh', os: 'Android 14 (OneUI 6.1)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 's3', name: 'Galaxy S24', brand: 'Samsung', price: 799, originalPrice: 859, rating: 4.7, reviewCount: 2800,
    images: defaultImages, tags: ['New', '5G'],
    specs: { display: '6.2" FHD+ AMOLED', processor: 'Exynos 2400 / SD 8 Gen 3', ram: '8GB', storage: '128GB', camera: '50MP Main | 12MP Ultra', battery: '4000 mAh', os: 'Android 14 (OneUI 6.1)' },
    stockStatus: 'Low Stock', reviews: createDummyReviews()
  },
  {
    id: 's4', name: 'Galaxy Z Fold 5', brand: 'Samsung', price: 1499, originalPrice: 1799, rating: 4.6, reviewCount: 4100,
    images: defaultImages, tags: ['Sale', '5G', 'Foldable'],
    specs: { display: '7.6" QXGA+ AMOLED (Inner) | 6.2" (Outer)', processor: 'Snapdragon 8 Gen 2', ram: '12GB', storage: '256GB', camera: '50MP Main | 12MP Ultra | 10MP Tele', battery: '4400 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 's5', name: 'Galaxy Z Flip 5', brand: 'Samsung', price: 899, originalPrice: 999, rating: 4.7, reviewCount: 6500,
    images: defaultImages, tags: ['Sale', '5G', 'Foldable'],
    specs: { display: '6.7" FHD+ AMOLED (Inner) | 3.4" (Outer)', processor: 'Snapdragon 8 Gen 2', ram: '8GB', storage: '256GB', camera: '12MP Main | 12MP Ultra', battery: '3700 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 's6', name: 'Galaxy S23 Ultra', brand: 'Samsung', price: 899, originalPrice: 1199, rating: 4.8, reviewCount: 19000,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.8" QHD+ AMOLED', processor: 'Snapdragon 8 Gen 2', ram: '8GB', storage: '256GB', camera: '200MP Main | 10MP Tele (10x)', battery: '5000 mAh', os: 'Android 13' },
    stockStatus: 'Out of Stock', reviews: createDummyReviews()
  },
  {
    id: 's7', name: 'Galaxy A54', brand: 'Samsung', price: 349, originalPrice: 449, rating: 4.5, reviewCount: 11000,
    images: defaultImages, tags: ['Budget', '5G'],
    specs: { display: '6.4" FHD+ AMOLED', processor: 'Exynos 1380', ram: '6GB', storage: '128GB', camera: '50MP Main | 12MP Ultra', battery: '5000 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 's8', name: 'Galaxy S23 FE', brand: 'Samsung', price: 499, originalPrice: 599, rating: 4.6, reviewCount: 4300,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.4" FHD+ AMOLED', processor: 'Snapdragon 8 Gen 1', ram: '8GB', storage: '128GB', camera: '50MP Main | 12MP Ultra', battery: '4500 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },

  // GOOGLE PIXEL (5)
  {
    id: 'p1', name: 'Pixel 8 Pro', brand: 'Google Pixel', price: 999, originalPrice: 999, rating: 4.8, reviewCount: 4500,
    images: defaultImages, tags: ['New', '5G', 'AI'],
    specs: { display: '6.7" QHD+ LTPO OLED', processor: 'Tensor G3', ram: '12GB', storage: '128GB', camera: '50MP Main | 48MP Ultra | 48MP Tele (5x)', battery: '5050 mAh', os: 'Android 14' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'p2', name: 'Pixel 8', brand: 'Google Pixel', price: 699, originalPrice: 699, rating: 4.7, reviewCount: 3100,
    images: defaultImages, tags: ['New', '5G', 'AI'],
    specs: { display: '6.2" FHD+ OLED', processor: 'Tensor G3', ram: '8GB', storage: '128GB', camera: '50MP Main | 12MP Ultra', battery: '4575 mAh', os: 'Android 14' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'p3', name: 'Pixel Fold', brand: 'Google Pixel', price: 1399, originalPrice: 1799, rating: 4.5, reviewCount: 1500,
    images: defaultImages, tags: ['Sale', '5G', 'Foldable'],
    specs: { display: '7.6" OLED (Inner) | 5.8" (Outer)', processor: 'Tensor G2', ram: '12GB', storage: '256GB', camera: '48MP Main | 10.8MP Ultra | 10.8MP Tele', battery: '4821 mAh', os: 'Android 13' },
    stockStatus: 'Low Stock', reviews: createDummyReviews()
  },
  {
    id: 'p4', name: 'Pixel 7 Pro', brand: 'Google Pixel', price: 599, originalPrice: 899, rating: 4.7, reviewCount: 12000,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.7" QHD+ LTPO OLED', processor: 'Tensor G2', ram: '12GB', storage: '128GB', camera: '50MP Main | 12MP Ultra | 48MP Tele (5x)', battery: '5000 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'p5', name: 'Pixel 7a', brand: 'Google Pixel', price: 399, originalPrice: 499, rating: 4.6, reviewCount: 8000,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.1" FHD+ OLED', processor: 'Tensor G2', ram: '8GB', storage: '128GB', camera: '64MP Main | 13MP Ultra', battery: '4385 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },

  // ONEPLUS (5)
  {
    id: 'o1', name: 'OnePlus 12', brand: 'OnePlus', price: 799, originalPrice: 899, rating: 4.8, reviewCount: 2100,
    images: defaultImages, tags: ['New', '5G'],
    specs: { display: '6.82" QHD+ LTPO AMOLED', processor: 'Snapdragon 8 Gen 3', ram: '12GB', storage: '256GB', camera: '50MP Main | 48MP Ultra | 64MP Tele (3x)', battery: '5400 mAh', os: 'Android 14 (OxygenOS 14)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'o2', name: 'OnePlus Open', brand: 'OnePlus', price: 1499, originalPrice: 1699, rating: 4.8, reviewCount: 1800,
    images: defaultImages, tags: ['Sale', '5G', 'Foldable'],
    specs: { display: '7.82" Flexi-fluid AMOLED (Inner) | 6.31" (Outer)', processor: 'Snapdragon 8 Gen 2', ram: '16GB', storage: '512GB', camera: '48MP Main | 48MP Ultra | 64MP Tele (3x)', battery: '4805 mAh', os: 'Android 13 (OxygenOS 13.2)' },
    stockStatus: 'Low Stock', reviews: createDummyReviews()
  },
  {
    id: 'o3', name: 'OnePlus 12R', brand: 'OnePlus', price: 499, originalPrice: 599, rating: 4.7, reviewCount: 1500,
    images: defaultImages, tags: ['New', '5G'],
    specs: { display: '6.78" 1.5K LTPO AMOLED', processor: 'Snapdragon 8 Gen 2', ram: '8GB', storage: '128GB', camera: '50MP Main | 8MP Ultra', battery: '5500 mAh', os: 'Android 14 (OxygenOS 14)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'o4', name: 'OnePlus 11', brand: 'OnePlus', price: 549, originalPrice: 699, rating: 4.6, reviewCount: 7000,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.7" QHD+ LTPO3 AMOLED', processor: 'Snapdragon 8 Gen 2', ram: '8GB', storage: '128GB', camera: '50MP Main | 48MP Ultra | 32MP Tele (2x)', battery: '5000 mAh', os: 'Android 13 (OxygenOS 13)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'o5', name: 'OnePlus Nord 3', brand: 'OnePlus', price: 399, originalPrice: 449, rating: 4.5, reviewCount: 3500,
    images: defaultImages, tags: ['Budget', '5G'],
    specs: { display: '6.74" 1.5K Fluid AMOLED', processor: 'Dimensity 9000', ram: '8GB', storage: '128GB', camera: '50MP Main | 8MP Ultra', battery: '5000 mAh', os: 'Android 13 (OxygenOS 13.1)' },
    stockStatus: 'Out of Stock', reviews: createDummyReviews()
  },

  // XIAOMI (5)
  {
    id: 'x1', name: 'Xiaomi 14 Ultra', brand: 'Xiaomi', price: 1299, originalPrice: 1499, rating: 4.9, reviewCount: 1100,
    images: defaultImages, tags: ['New', '5G', 'Photography'],
    specs: { display: '6.73" WQHD+ AMOLED', processor: 'Snapdragon 8 Gen 3', ram: '16GB', storage: '512GB', camera: 'Quad 50MP (Main, Ultra, Tele 3.2x, Tele 5x)', battery: '5000 mAh', os: 'HyperOS (Android 14)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'x2', name: 'Xiaomi 14', brand: 'Xiaomi', price: 899, originalPrice: 999, rating: 4.7, reviewCount: 2400,
    images: defaultImages, tags: ['New', '5G'],
    specs: { display: '6.36" 1.5K AMOLED', processor: 'Snapdragon 8 Gen 3', ram: '12GB', storage: '256GB', camera: 'Triple 50MP (Main, Ultra, Tele 3.2x)', battery: '4610 mAh', os: 'HyperOS (Android 14)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'x3', name: 'Xiaomi 13 Pro', brand: 'Xiaomi', price: 749, originalPrice: 1199, rating: 4.6, reviewCount: 5200,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.73" WQHD+ AMOLED', processor: 'Snapdragon 8 Gen 2', ram: '12GB', storage: '256GB', camera: 'Triple 50MP (Main 1-inch, Ultra, Tele 3.2x)', battery: '4820 mAh', os: 'MIUI 14 (Android 13)' },
    stockStatus: 'Low Stock', reviews: createDummyReviews()
  },
  {
    id: 'x4', name: 'Redmi Note 13 Pro+', brand: 'Xiaomi', price: 399, originalPrice: 450, rating: 4.5, reviewCount: 8900,
    images: defaultImages, tags: ['Budget', '5G'],
    specs: { display: '6.67" 1.5K AMOLED', processor: 'Dimensity 7200 Ultra', ram: '8GB', storage: '256GB', camera: '200MP Main | 8MP Ultra | 2MP Macro', battery: '5000 mAh', os: 'MIUI 14 (Android 13)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'x5', name: 'Poco X6 Pro', brand: 'Xiaomi', price: 299, originalPrice: 349, rating: 4.6, reviewCount: 4500,
    images: defaultImages, tags: ['Sale', '5G', 'Gaming'],
    specs: { display: '6.67" 1.5K AMOLED', processor: 'Dimensity 8300 Ultra', ram: '8GB', storage: '256GB', camera: '64MP Main | 8MP Ultra | 2MP Macro', battery: '5000 mAh', os: 'HyperOS (Android 14)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },

  // SONY (4)
  {
    id: 'so1', name: 'Xperia 1 V', brand: 'Sony', price: 1199, originalPrice: 1399, rating: 4.6, reviewCount: 1500,
    images: defaultImages, tags: ['Creator', '5G'],
    specs: { display: '6.5" 4K HDR OLED', processor: 'Snapdragon 8 Gen 2', ram: '12GB', storage: '256GB', camera: '48MP Main | 12MP Ultra | 12MP Tele (Continuous)', battery: '5000 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'so2', name: 'Xperia 5 V', brand: 'Sony', price: 899, originalPrice: 999, rating: 4.5, reviewCount: 900,
    images: defaultImages, tags: ['Compact', '5G'],
    specs: { display: '6.1" FHD+ HDR OLED', processor: 'Snapdragon 8 Gen 2', ram: '8GB', storage: '128GB', camera: '48MP Main | 12MP Ultra', battery: '5000 mAh', os: 'Android 13' },
    stockStatus: 'Low Stock', reviews: createDummyReviews()
  },
  {
    id: 'so3', name: 'Xperia 10 V', brand: 'Sony', price: 399, originalPrice: 449, rating: 4.3, reviewCount: 1200,
    images: defaultImages, tags: ['Budget', '5G'],
    specs: { display: '6.0" FHD+ OLED', processor: 'Snapdragon 695', ram: '6GB', storage: '128GB', camera: '48MP Main | 8MP Ultra | 8MP Tele', battery: '5000 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'so4', name: 'Xperia Pro-I', brand: 'Sony', price: 999, originalPrice: 1799, rating: 4.4, reviewCount: 800,
    images: defaultImages, tags: ['Sale', 'Creator', '5G'],
    specs: { display: '6.5" 4K HDR OLED', processor: 'Snapdragon 888', ram: '12GB', storage: '512GB', camera: '12MP Main (1-inch) | 12MP Ultra | 12MP Tele', battery: '4500 mAh', os: 'Android 11' },
    stockStatus: 'Out of Stock', reviews: createDummyReviews()
  },

  // MOTOROLA (4)
  {
    id: 'm1', name: 'Edge 40 Pro', brand: 'Motorola', price: 799, originalPrice: 899, rating: 4.7, reviewCount: 2200,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.67" FHD+ pOLED 165Hz', processor: 'Snapdragon 8 Gen 2', ram: '12GB', storage: '256GB', camera: '50MP Main | 50MP Ultra | 12MP Tele (2x)', battery: '4600 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'm2', name: 'Razr 40 Ultra', brand: 'Motorola', price: 899, originalPrice: 999, rating: 4.6, reviewCount: 3100,
    images: defaultImages, tags: ['Sale', '5G', 'Foldable'],
    specs: { display: '6.9" FHD+ pOLED (Inner) | 3.6" (Outer)', processor: 'Snapdragon 8+ Gen 1', ram: '8GB', storage: '256GB', camera: '12MP Main | 13MP Ultra', battery: '3800 mAh', os: 'Android 13' },
    stockStatus: 'Low Stock', reviews: createDummyReviews()
  },
  {
    id: 'm3', name: 'Moto G84', brand: 'Motorola', price: 299, originalPrice: 349, rating: 4.5, reviewCount: 5400,
    images: defaultImages, tags: ['Budget', '5G'],
    specs: { display: '6.5" FHD+ pOLED 120Hz', processor: 'Snapdragon 695', ram: '12GB', storage: '256GB', camera: '50MP Main | 8MP Ultra', battery: '5000 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'm4', name: 'Edge 40 Neo', brand: 'Motorola', price: 349, originalPrice: 399, rating: 4.6, reviewCount: 4100,
    images: defaultImages, tags: ['Budget', '5G'],
    specs: { display: '6.55" FHD+ pOLED 144Hz', processor: 'Dimensity 7030', ram: '12GB', storage: '256GB', camera: '50MP Main | 13MP Ultra', battery: '5000 mAh', os: 'Android 13' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },

  // NOTHING (3)
  {
    id: 'n1', name: 'Phone (2)', brand: 'Nothing', price: 599, originalPrice: 699, rating: 4.7, reviewCount: 4500,
    images: defaultImages, tags: ['Sale', '5G', 'Unique'],
    specs: { display: '6.7" FHD+ LTPO OLED 120Hz', processor: 'Snapdragon 8+ Gen 1', ram: '12GB', storage: '256GB', camera: '50MP Main | 50MP Ultra', battery: '4700 mAh', os: 'Nothing OS 2.0 (Android 13)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'n2', name: 'Phone (2a)', brand: 'Nothing', price: 349, originalPrice: 349, rating: 4.6, reviewCount: 2100,
    images: defaultImages, tags: ['New', '5G', 'Budget'],
    specs: { display: '6.7" FHD+ AMOLED 120Hz', processor: 'Dimensity 7200 Pro', ram: '8GB', storage: '128GB', camera: '50MP Main | 50MP Ultra', battery: '5000 mAh', os: 'Nothing OS 2.5 (Android 14)' },
    stockStatus: 'In Stock', reviews: createDummyReviews()
  },
  {
    id: 'n3', name: 'Phone (1)', brand: 'Nothing', price: 299, originalPrice: 399, rating: 4.5, reviewCount: 8900,
    images: defaultImages, tags: ['Sale', '5G'],
    specs: { display: '6.55" FHD+ OLED 120Hz', processor: 'Snapdragon 778G+', ram: '8GB', storage: '128GB', camera: '50MP Main | 50MP Ultra', battery: '4500 mAh', os: 'Nothing OS 1.5 (Android 13)' },
    stockStatus: 'Out of Stock', reviews: createDummyReviews()
  }
];
