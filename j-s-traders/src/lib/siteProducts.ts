export type BestSellerItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  discount: string;
  image: string;
};

export type TopPickProduct = {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  stock: number;
  material: 'Mesh' | 'Leather' | 'Fabric';
  color: 'Black' | 'Grey' | 'Brown';
  imagePrimary: string;
  imageSecondary: string;
};

export type ProductVariety = {
  id: string;
  title: string;
  image: string;
  oldPrice: number;
  price: number;
};

export type SubCategory = {
  name: string;
  basePrice: number;
};

export type CategoryGroup = {
  id: 'chair' | 'furniture' | 'chair-parts';
  title: string;
  subtitle: string;
  subcategories: SubCategory[];
};

const chairPhotos = [
  'https://images.unsplash.com/photo-1598298881114-e3c873dc50c7?w=900&h=700&fit=crop',
  'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900&h=700&fit=crop',
  'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=900&h=700&fit=crop',
  'https://images.unsplash.com/photo-1565182999555-2151db350642?w=900&h=700&fit=crop',
  'https://images.unsplash.com/photo-1594738367845-36c461f0ee4d?w=900&h=700&fit=crop',
];

const furniturePhotos = [
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=700&fit=crop',
  'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&h=700&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=700&fit=crop',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&h=700&fit=crop',
  'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=900&h=700&fit=crop',
];

const productImages: Record<string, string[]> = {
  'computer-chair': chairPhotos,
  'gaming-chair': chairPhotos,
  'conference-meeting-visitor-chair': chairPhotos,
  'bar-chair-stool': chairPhotos,
  'revolving-chair': chairPhotos,
  'cafeteria-chair': chairPhotos,
  'ergonomic-mesh-chair': chairPhotos,
  'office-chair': chairPhotos,
  'waiting-chair': chairPhotos,
  'cafeteria-furniture': furniturePhotos,
  'folding-table': furniturePhotos,
  'center-tables': furniturePhotos,
  'metal-furniture': furniturePhotos,
  'office-furniture': furniturePhotos,
  'work-station': furniturePhotos,
  'shoe-rack': furniturePhotos,
};

const chairSubcategories: SubCategory[] = [
  { name: 'Computer Chair', basePrice: 18000 },
  { name: 'Gaming Chair', basePrice: 22000 },
  { name: 'Conference/Meeting/Visitor Chair', basePrice: 17000 },
  { name: 'Bar Chair & Stool', basePrice: 14000 },
  { name: 'Revolving Chair', basePrice: 16000 },
  { name: 'Cafeteria Chair', basePrice: 15000 },
  { name: 'Ergonomic Mesh Chair', basePrice: 20000 },
  { name: 'Office Chair', basePrice: 21000 },
  { name: 'Waiting Chair', basePrice: 13000 },
];

const furnitureSubcategories: SubCategory[] = [
  { name: 'Cafeteria Furniture', basePrice: 35000 },
  { name: 'Folding Table', basePrice: 22000 },
  { name: 'Center Tables', basePrice: 26000 },
  { name: 'Metal Furniture', basePrice: 28000 },
  { name: 'Office Furniture', basePrice: 42000 },
  { name: 'Work Station', basePrice: 45000 },
  { name: 'Shoe Rack', basePrice: 12000 },
];

const chairPartsSubcategories: SubCategory[] = [];

export const categoryGroups: CategoryGroup[] = [
  {
    id: 'chair',
    title: '1. CHAIR',
    subtitle: 'Professional seating collections for every workspace need.',
    subcategories: chairSubcategories,
  },
  {
    id: 'furniture',
    title: '2. FURNITURE',
    subtitle: 'Functional and premium furniture crafted for modern interiors.',
    subcategories: furnitureSubcategories,
  },
  {
    id: 'chair-parts',
    title: '3. CHAIR PARTS',
    subtitle: 'Spare parts and accessories for various chairs.',
    subcategories: chairPartsSubcategories,
  },
];

export const getBestSellerItems = (): BestSellerItem[] => [
  {
    id: 'best-vertex-mesh-pro',
    name: 'Vertex Mesh Pro',
    category: 'Chair',
    price: 13000,
    oldPrice: 20000,
    discount: '-35%',
    image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'best-dl40-executive-black',
    name: 'DL40 Executive Black',
    category: 'Executive',
    price: 9500,
    oldPrice: 12000,
    discount: '-21%',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'best-boom-neck-support',
    name: 'Boom Neck Support',
    category: 'Chair',
    price: 6500,
    oldPrice: 8000,
    discount: '-19%',
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'best-visitor-mesh-1101',
    name: 'Visitor Mesh 1101',
    category: 'Visitor',
    price: 3500,
    oldPrice: 4500,
    discount: '-22%',
    image: 'https://images.unsplash.com/photo-1561677978-583a8c7a4b43?auto=format&fit=crop&w=900&q=80',
  },
];

export const getTopPickProducts = (): TopPickProduct[] => [
  {
    id: 'executive-pro-x1',
    name: 'Executive Pro X1',
    price: 48900,
    rating: 4.9,
    reviews: 128,
    stock: 3,
    material: 'Leather',
    color: 'Black',
    imagePrimary: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=80',
    imageSecondary: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'mesh-aero-2',
    name: 'Mesh Aero 2',
    price: 32900,
    rating: 4.7,
    reviews: 94,
    stock: 7,
    material: 'Mesh',
    color: 'Grey',
    imagePrimary: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    imageSecondary: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'lumbar-signature',
    name: 'Lumbar Signature',
    price: 39900,
    rating: 4.8,
    reviews: 112,
    stock: 2,
    material: 'Fabric',
    color: 'Brown',
    imagePrimary: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1000&q=80',
    imageSecondary: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'boardroom-prime',
    name: 'Boardroom Prime',
    price: 52900,
    rating: 4.9,
    reviews: 86,
    stock: 4,
    material: 'Leather',
    color: 'Brown',
    imagePrimary: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1000&q=80',
    imageSecondary: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'studio-task-pro',
    name: 'Studio Task Pro',
    price: 26900,
    rating: 4.6,
    reviews: 76,
    stock: 9,
    material: 'Mesh',
    color: 'Black',
    imagePrimary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
    imageSecondary: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'ergofit-classic',
    name: 'ErgoFit Classic',
    price: 29900,
    rating: 4.7,
    reviews: 67,
    stock: 5,
    material: 'Fabric',
    color: 'Grey',
    imagePrimary: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80',
    imageSecondary: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80',
  },
];

export const createVarieties = (subCategory: SubCategory, categoryPrefix: CategoryGroup['id']): ProductVariety[] => {
  const imageKey = subCategory.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const fallbackImages = productImages[
    categoryPrefix === 'furniture' ? 'office-furniture' : 'office-chair'
  ];
  const images = productImages[imageKey] || fallbackImages;

  return Array.from({ length: 5 }, (_, index) => {
    const old = subCategory.basePrice + index * 1000;
    const current = old - 2000;

    return {
      id: `${categoryPrefix}-${imageKey}-${index + 1}`,
      title: `${subCategory.name} Model ${index + 1}`,
      image: images[index % images.length],
      oldPrice: old,
      price: current,
    };
  });
};

export const getAllWebsiteEditableItems = () => {
  const best = getBestSellerItems().map((item) => ({
    id: item.id,
    title: item.name,
    image: item.image,
    price: item.price,
    section: 'best-sellers' as const,
  }));

  const top = getTopPickProducts().map((item) => ({
    id: item.id,
    title: item.name,
    image: item.imagePrimary,
    price: item.price,
    section: 'top-picks' as const,
  }));

  const catalog = categoryGroups.flatMap((group) =>
    group.subcategories.flatMap((sub) =>
      createVarieties(sub, group.id).map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        section: 'catalog' as const,
      })),
    ),
  );

  return [...best, ...top, ...catalog];
};
