import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 19999,
    originalPrice: 24999,
    discountPercentage: 20,
    description: "Experience crystal-clear sound with our flagship wireless noise-canceling headphones. Features 30-hour battery life and touch controls.",
    category: "Electronics",
    brand: "SoundMaster",
    colors: ["Black", "Silver", "Blue"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80"
    ],
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    rating: { rate: 4.8, count: 120 },
    reviews: [
      { id: 'r1', userId: 'u1', userName: 'Amit S.', rating: 5, comment: 'Amazing sound quality!', date: '2024-03-20', images: ['https://picsum.photos/seed/review1/200/200'] }
    ]
  },
  {
    id: 2,
    title: "Minimalist Leather Watch",
    price: 12500,
    description: "A timeless piece for the modern professional. Genuine Italian leather strap and scratch-resistant sapphire crystal.",
    category: "Accessories",
    brand: "TimeStyle",
    colors: ["Brown", "Black"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80"
    ],
    rating: { rate: 4.5, count: 85 }
  },
  {
    id: 3,
    title: "Smart Fitness Tracker",
    price: 5999,
    originalPrice: 7499,
    discountPercentage: 20,
    description: "Monitor your health 24/7. Tracks heart rate, sleep patterns, and over 50 different workout types.",
    category: "Electronics",
    brand: "FitTech",
    colors: ["Black", "Rose Gold", "Navy"],
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
      "https://images.unsplash.com/photo-1557166983-5939644443a0?w=800&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80"
    ],
    rating: { rate: 4.2, count: 210 }
  },
  {
    id: 4,
    title: "Eco-Friendly Yoga Mat",
    price: 3750,
    description: "Non-slip, biodegradable TPE material. Perfect for all types of yoga and floor exercises.",
    category: "Fitness",
    brand: "EcoFlow",
    colors: ["Green", "Purple", "Blue"],
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
    ],
    rating: { rate: 4.7, count: 150 }
  },
  {
    id: 5,
    title: "Professional DSLR Camera",
    price: 98099,
    originalPrice: 108999,
    discountPercentage: 10,
    description: "Capture life's moments in stunning detail. 24.2MP sensor, 4K video recording, and fast autofocus.",
    category: "Electronics",
    brand: "OpticPro",
    colors: ["Black"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&q=80"
    ],
    rating: { rate: 4.9, count: 45 }
  },
  {
    id: 6,
    title: "Canvas Travel Backpack",
    price: 6250,
    description: "Durable, water-resistant canvas with multiple compartments. Ideal for weekend trips or daily commute.",
    category: "Accessories",
    brand: "PackGo",
    colors: ["Khaki", "Navy"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
      "https://images.unsplash.com/photo-1581605405669-fec815d5c28e?w=800&q=80"
    ],
    rating: { rate: 4.4, count: 130 }
  },
  {
    id: 7,
    title: "Organic Cotton T-Shirt",
    price: 1499,
    originalPrice: 1999,
    discountPercentage: 25,
    description: "Soft, breathable, and sustainably sourced. Available in multiple colors.",
    category: "Clothing",
    brand: "PureCotton",
    colors: ["White", "Grey", "Navy"],
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"
    ],
    rating: { rate: 4.6, count: 320 }
  },
  {
    id: 8,
    title: "Ceramic Coffee Pour-Over",
    price: 2850,
    description: "The perfect way to brew your morning coffee. Elegant design that looks great in any kitchen.",
    category: "Home",
    brand: "BrewArt",
    colors: ["White", "Cream"],
    image: "https://images.unsplash.com/photo-1544787210-228394c3d3e2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544787210-228394c3d3e2?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1517088455889-bfa75135412c?w=800&q=80"
    ],
    rating: { rate: 4.8, count: 95 }
  },
  {
    id: 9,
    title: "Ergonomic Gaming Mouse",
    price: 2499,
    originalPrice: 3499,
    discountPercentage: 28,
    description: "High-precision optical sensor with customizable RGB lighting and programmable buttons.",
    category: "Mice",
    brand: "GamerX",
    colors: ["Black", "White"],
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&q=80"
    ],
    rating: { rate: 4.6, count: 210 }
  },
  {
    id: 10,
    title: "Wireless Office Mouse",
    price: 1299,
    description: "Compact and silent wireless mouse for everyday office productivity.",
    category: "Mice",
    brand: "LogiWork",
    colors: ["Grey", "Blue", "Red"],
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80"
    ],
    rating: { rate: 4.3, count: 150 }
  },
  {
    id: 11,
    title: "Premium Phone Case",
    price: 199,
    originalPrice: 999,
    discountPercentage: 80,
    description: "Sleek and protective phone case for all models. Part of Big Million Days Deal!",
    category: "Big Million Days",
    brand: "CaseIt",
    colors: ["Clear", "Black", "Blue"],
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80",
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80"
    ],
    rating: { rate: 4.5, count: 1200 }
  },
  {
    id: 12,
    title: "USB-C Fast Cable",
    price: 199,
    originalPrice: 799,
    discountPercentage: 75,
    description: "High-speed data transfer and charging cable. Part of Big Million Days Deal!",
    category: "Big Million Days",
    brand: "PowerLink",
    colors: ["White", "Black"],
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&q=80",
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    ],
    rating: { rate: 4.3, count: 850 }
  },
  {
    id: 13,
    title: "Microfiber Cleaning Cloth",
    price: 199,
    originalPrice: 499,
    discountPercentage: 60,
    description: "Ultra-soft cleaning cloth for screens and lenses. Part of Big Million Days Deal!",
    category: "Big Million Days",
    brand: "CleanTech",
    colors: ["Blue", "Grey"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      "https://images.unsplash.com/photo-1585336139118-132f7f21503e?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
    ],
    rating: { rate: 4.7, count: 450 }
  },
  {
    id: 14,
    title: "Desktop Phone Stand",
    price: 199,
    originalPrice: 899,
    discountPercentage: 78,
    description: "Adjustable and foldable phone stand for your desk. Part of Big Million Days Deal!",
    category: "Big Million Days",
    brand: "DeskMate",
    colors: ["Black", "Silver"],
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80",
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80"
    ],
    rating: { rate: 4.4, count: 670 }
  },
  {
    id: 15,
    title: "Luxury Smart Watch Gen 5",
    price: 24999,
    originalPrice: 29999,
    discountPercentage: 17,
    description: "The ultimate companion for your wrist. Features always-on retina display, ECG app, and fall detection.",
    category: "Electronics",
    brand: "WristTech",
    colors: ["Space Grey", "Silver", "Gold"],
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aac291ba597?w=800&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80"
    ],
    rating: { rate: 4.8, count: 450 }
  },
  {
    id: 16,
    title: "Classic Denim Jacket",
    price: 4500,
    originalPrice: 5999,
    discountPercentage: 25,
    description: "A versatile staple for any wardrobe. Made from premium heavy-duty denim with a vintage wash.",
    category: "Clothing",
    brand: "UrbanWear",
    colors: ["Light Blue", "Dark Indigo", "Black"],
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80",
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80"
    ],
    rating: { rate: 4.5, count: 180 }
  },
  {
    id: 17,
    title: "Portable Bluetooth Speaker",
    price: 8999,
    originalPrice: 12999,
    discountPercentage: 31,
    description: "Powerful 360-degree sound in a compact design. Waterproof and dustproof with 20-hour playtime.",
    category: "Electronics",
    brand: "SonicBoom",
    colors: ["Ocean Blue", "Forest Green", "Midnight Black"],
    image: "https://images.unsplash.com/photo-1608156639585-34052e81c99f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608156639585-34052e81c99f?w=800&q=80",
      "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=800&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80"
    ],
    rating: { rate: 4.7, count: 290 }
  },
  {
    id: 18,
    title: "Studio Monitoring Headset",
    price: 15999,
    originalPrice: 18999,
    discountPercentage: 16,
    description: "Professional-grade open-back headphones for mixing and mastering. Exceptional detail and soundstage.",
    category: "Electronics",
    brand: "AudioPure",
    colors: ["Black"],
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1520170350707-b2da59970118?w=800&q=80"
    ],
    rating: { rate: 4.9, count: 110 }
  },
  {
    id: 19,
    title: "Vintage Gold Analog Watch",
    price: 18500,
    description: "A statement piece with a classic gold finish and sunray dial. Perfect for formal occasions.",
    category: "Accessories",
    brand: "TimeStyle",
    colors: ["Gold"],
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80"
    ],
    rating: { rate: 4.6, count: 65 }
  },
  {
    id: 20,
    title: "Premium Linen Summer Shirt",
    price: 3200,
    originalPrice: 3999,
    discountPercentage: 20,
    description: "Stay cool and stylish with our 100% organic linen shirt. Relaxed fit for maximum comfort.",
    category: "Clothing",
    brand: "PureCotton",
    colors: ["Sand", "Sky Blue", "White"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1621072156002-e2fcc103e81e?w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80"
    ],
    rating: { rate: 4.4, count: 140 }
  }
];
