/**
 * NOTE: All product items and prices in this file are ILLUSTRATIVE SAMPLES
 * specifically created for this concept demo of Maximum Outfits (Lajpat Nagar).
 * They represent typical showroom offerings for presentation and testing purposes only.
 */

export const products = [
  // 1. Kurta Pajama & Ethnic
  {
    id: 'sample-kurta-set-cream',
    name: 'Sample Embroidered Kurta Set',
    categoryId: 'ethnic',
    price: 3499,
    imageKey: 'menswearEthnic',
    objectPosition: 'center 45%',
    colors: [
      { name: 'Cream', hex: '#FDF8EE' },
      { name: 'Maroon', hex: '#7B1818' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Festive silk-blend kurta and pajama set featuring fine tone-on-tone neckline embroidery.',
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'sample-sherwani-gold',
    name: 'Sample Traditional Sherwani',
    categoryId: 'ethnic',
    price: 6999,
    imageKey: 'menswearEthnic',
    objectPosition: 'center 70%',
    colors: [
      { name: 'Gold Ivory', hex: '#F3EAD3' },
      { name: 'Emerald', hex: '#1C4E3A' },
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Structured occasion sherwani tailored with intricate zardozi collar details.',
    isFeatured: false,
    isNew: false,
  },

  // 2. Coats, Blazers & Suits
  {
    id: 'sample-velvet-blazer-burgundy',
    name: 'Sample Velvet Partywear Blazer',
    categoryId: 'blazers',
    price: 4999,
    imageKey: 'blazersPartywear',
    objectPosition: 'left center',
    colors: [
      { name: 'Burgundy', hex: '#631322' },
      { name: 'Emerald Green', hex: '#133824' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Single-breasted festive velvet jacket crafted with a contrast satin shawl lapel.',
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'sample-formal-suit-navy',
    name: 'Sample Tailored Two-Piece Suit',
    categoryId: 'blazers',
    price: 5799,
    imageKey: 'blazersPartywear',
    objectPosition: 'center 40%',
    colors: [
      { name: 'Navy Blue', hex: '#1B2A4A' },
      { name: 'Charcoal Grey', hex: '#3A3D40' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Classic two-button slim-fit formal suit suitable for evening receptions.',
    isFeatured: false,
    isNew: false,
  },

  // 3. Waistcoats & Nehru Jackets
  {
    id: 'sample-brocade-nehru-jacket',
    name: 'Sample Brocade Nehru Jacket',
    categoryId: 'waistcoats',
    price: 2799,
    imageKey: 'waistcoatsNehru',
    objectPosition: 'center 40%',
    colors: [
      { name: 'Royal Blue', hex: '#1B3F73' },
      { name: 'Beige Gold', hex: '#E0C895' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Mandarin collar sleeveless jacket woven with subtle floral motifs.',
    isFeatured: true,
    isNew: false,
  },
  {
    id: 'sample-silk-bundee-jacket',
    name: 'Sample Raw Silk Waistcoat',
    categoryId: 'waistcoats',
    price: 2499,
    imageKey: 'waistcoatsNehru',
    objectPosition: 'right 40%',
    colors: [
      { name: 'Mustard', hex: '#C79224' },
      { name: 'Rust', hex: '#9E3D23' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Textured ethnic waistcoat detailed with metallic buttons and welt pockets.',
    isFeatured: false,
    isNew: true,
  },

  // 4. Ladies' Wear
  {
    id: 'sample-festive-kurti-green',
    name: 'Sample Anarkali Kurti Set',
    categoryId: 'ladies',
    price: 3299,
    imageKey: 'ladiesKurtisJeans',
    objectPosition: 'center 60%',
    colors: [
      { name: 'Emerald Green', hex: '#1C6B46' },
      { name: 'Rani Pink', hex: '#C2185B' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Flared ethnic festive kurti highlighted with delicate gota patti borders.',
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'sample-straight-kurti-silk',
    name: 'Sample Straight Tunic Kurti',
    categoryId: 'ladies',
    price: 1899,
    imageKey: 'ladiesKurtisJeans',
    objectPosition: 'left 40%',
    colors: [
      { name: 'Magenta', hex: '#A31545' },
      { name: 'Off White', hex: '#F8F5EE' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Straight-cut festive tunic featuring embroidered yoke and three-quarter sleeves.',
    isFeatured: false,
    isNew: false,
  },

  // 5. T-Shirts & Sweatshirts
  {
    id: 'sample-cotton-polo-tee',
    name: 'Sample Pique Cotton Polo',
    categoryId: 'casual',
    price: 999,
    imageKey: 'casualTeesWall',
    objectPosition: 'center 50%',
    colors: [
      { name: 'Olive', hex: '#52634F' },
      { name: 'Navy', hex: '#232F42' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Breathable ribbed polo collar t-shirt tailored for casual daytime wear.',
    isFeatured: false,
    isNew: false,
  },
  {
    id: 'sample-fleece-sweatshirt',
    name: 'Sample Crewneck Sweatshirt',
    categoryId: 'casual',
    price: 1499,
    imageKey: 'casualTeesWall',
    objectPosition: 'center 25%',
    colors: [
      { name: 'Warm Rust', hex: '#A85338' },
      { name: 'Heather Grey', hex: '#7E8287' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Soft brushed fleece pullover sweatshirt designed with relaxed dropped shoulders.',
    isFeatured: true,
    isNew: true,
  },

  // 6. Lowers & Track Suits
  {
    id: 'sample-tracksuit-set',
    name: 'Sample Warmup Tracksuit',
    categoryId: 'lowers',
    price: 2199,
    imageKey: 'signLowers',
    objectPosition: 'center 35%',
    colors: [
      { name: 'Black', hex: '#1E1E1E' },
      { name: 'Charcoal', hex: '#3A3C40' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Two-piece zip jacket and track pant set made from lightweight stretch fabric.',
    isFeatured: true,
    isNew: false,
  },
  {
    id: 'sample-cotton-joggers',
    name: 'Sample Tapered Jogger Pant',
    categoryId: 'lowers',
    price: 1199,
    imageKey: 'signLowers',
    objectPosition: 'left 55%',
    colors: [
      { name: 'Navy', hex: '#1C2538' },
      { name: 'Olive', hex: '#4A5243' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Everyday jogger pants with elasticated waistband and zippered side pockets.',
    isFeatured: false,
    isNew: true,
  },

  // 7. Footwear
  {
    id: 'sample-embroidered-jutti',
    name: 'Sample Embroidered Leather Jutti',
    categoryId: 'footwear',
    price: 1999,
    imageKey: 'footwearWall',
    objectPosition: 'center 60%',
    colors: [
      { name: 'Gold Velvet', hex: '#BF9B30' },
      { name: 'Maroon', hex: '#6E1B24' },
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    description: 'Handcrafted genuine leather ethnic slip-ons embellished with gold threadwork.',
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'sample-traditional-mojari',
    name: 'Sample Pointed Toe Mojari',
    categoryId: 'footwear',
    price: 1799,
    imageKey: 'footwearWall',
    objectPosition: 'center 20%',
    colors: [
      { name: 'Tan Brown', hex: '#8A542D' },
      { name: 'Black', hex: '#222222' },
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    description: 'Traditional occasion mojari with cushioned insole and curved toe design.',
    isFeatured: false,
    isNew: false,
  },

  // 8. Bags, Belts & Accessories
  {
    id: 'sample-leather-belt',
    name: 'Sample Genuine Leather Belt',
    categoryId: 'accessories',
    price: 899,
    imageKey: 'teesBeltsCaps',
    objectPosition: 'left 75%',
    colors: [
      { name: 'Classic Brown', hex: '#5C3A21' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    sizes: ['Free size'],
    description: 'Full-grain leather belt paired with an antique brass roller buckle.',
    isFeatured: false,
    isNew: false,
  },
  {
    id: 'sample-crossbody-bag',
    name: 'Sample Compact Crossbody Bag',
    categoryId: 'accessories',
    price: 1299,
    imageKey: 'teesBeltsCaps',
    objectPosition: 'center 45%',
    colors: [
      { name: 'Tan', hex: '#A66D3B' },
      { name: 'Navy', hex: '#202E42' },
    ],
    sizes: ['Free size'],
    description: 'Structured daily travel bag with adjustable strap and multiple zip compartments.',
    isFeatured: true,
    isNew: true,
  },
];

export default products;
