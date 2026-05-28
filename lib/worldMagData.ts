export interface Post {
  title: string;
  img: string;
  cat: string;
  catUrl?: string;
  author: string;
  authorImg?: string;
  date: string;
  excerpt?: string;
  readTime?: string;
  rating?: number; // e.g. 72 (percent) or 8.5 (stars)
  isPercent?: boolean;
  isVideo?: boolean;
  isAudio?: boolean;
  isGallery?: boolean;
  views?: string;
  comments?: number;
}

// Mega Menu Items (Technology)
export const megaMenuTech: Post[] = [
  {
    title: "Apple Watch’s ECG Can Help Diagnose Heart Problem: Research",
    img: "https://images.unsplash.com/photo-1544265853-dfa3b40f5d55?w=400&auto=format&fit=crop&q=60",
    cat: "Gadgets",
    author: "Shane Doe",
    date: "Jan 15, 2021",
  },
  {
    title: "Microsoft’s Xbox Mobile Gaming Store Could Launch as Early as Mid 2024",
    img: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&auto=format&fit=crop&q=60",
    cat: "Gaming",
    author: "Shane Doe",
    date: "Jan 15, 2021",
  },
  {
    title: "Latest Windows 11 Preview Build Lets You Search for Copied Text",
    img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&auto=format&fit=crop&q=60",
    cat: "PC & Tablets",
    author: "Shane Doe",
    date: "Jan 14, 2021",
  },
  {
    title: "Thousands Of PC Games Discounted In New Black Friday Sale",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=60",
    cat: "Gaming",
    author: "Shane Doe",
    date: "Jan 14, 2021",
  },
  {
    title: "New Ryzen Laptop Chips Swap Smaller Cores for Bigger Efficiency",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&auto=format&fit=crop&q=60",
    cat: "PC & Tablets",
    author: "Shane Doe",
    date: "Jan 14, 2021",
  }
];

// Mega Menu Items (World)
export const megaMenuWorld: Post[] = [
  {
    title: "Photos: Climate Activists Briefly Disrupt Fed Chair’s Speech",
    img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Nov 9, 2023",
  },
  {
    title: "Why Do So Many People Hate Wearing Masks?",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Nov 9, 2023",
  },
  {
    title: "Police Sniffer Dogs Get New Life After Policy Change",
    img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Nov 9, 2023",
  }
];

// Section 1: Top horizontal carousel ticker (8 items)
export const tickerCarousel: Post[] = [
  {
    title: "Double Olympic Champion 'Not Ashamed of Being Different'",
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300&auto=format&fit=crop&q=60",
    cat: "Sports",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Home Décor Tips to Champ Contemporary Interiors",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&auto=format&fit=crop&q=60",
    cat: "Home Decor",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Celebrating Good Times Between The Bad Times – Relations",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&auto=format&fit=crop&q=60",
    cat: "Relations",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "A Diverse Collection of Museum Quality Artifacts Sculptures",
    img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=300&auto=format&fit=crop&q=60",
    cat: "Arts",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Fun Games: Kill The Boredom And Enjoy Your Family Time",
    img: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=300&auto=format&fit=crop&q=60",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Tokyo Officials Plan For a Safe Olympic Games Without Quarantines",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "5 Ways Your Passport Can Ruin Your Cool Holiday Trip",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&auto=format&fit=crop&q=60",
    cat: "Travel",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "5 Simple Tips to Take Care of Larger Air Balloons",
    img: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=300&auto=format&fit=crop&q=60",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  }
];

// Section 2 Left: Highlights Block
export const highlightsMain: Post = {
  title: "New Virtual Reality Tool Allows Users to Build and Control Shapes",
  img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format&fit=crop&q=80",
  cat: "VR Technology",
  author: "Shane Doe",
  date: "Nov 19, 2023",
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US-based journalist Peter Wilson, developers revealed a next-gen shape compiler that brings tactile responses to virtual worlds.",
};

export const highlightsGrid: Post[] = [
  {
    title: "Brands are Creating Facial Skin Care Equivalents for the Body",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop&q=60",
    cat: "Skin Care",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Fun Games: Kill The Boredom And Enjoy Your Family Time",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "All iPhone 15 Phones Compared: Base Vs Plus Vs Pro Vs Pro Max",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  }
];

// Section 2 Right: Sticky Column
export const sidebarMain: Post = {
  title: "CT Child Education Advocates Hope to Blunt Impacts of New Law",
  img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&auto=format&fit=crop&q=70",
  cat: "Education",
  author: "Shane Doe",
  date: "Nov 19, 2023",
};

export const sidebarList: Post[] = [
  {
    title: "Riot Games Acquires a Wargaming Studio to Help With Live Game Development",
    img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=150&auto=format&fit=crop&q=60",
    cat: "Gaming",
    author: "Shane Doe",
    date: "Mar 15, 2020",
  },
  {
    title: "How T-Mobile is Winning 5G Race Around the World, an Analysis",
    img: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=150&auto=format&fit=crop&q=60",
    cat: "Telecom",
    author: "Shane Doe",
    date: "Mar 15, 2020",
  },
  {
    title: "The New CEO Stresses Commitment to Free Speech in First Speech",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=60",
    cat: "Corporate",
    author: "Shane Doe",
    date: "Mar 15, 2020",
  },
  {
    title: "New Formula 1 Chief Urges Drivers to Lead by Example",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=150&auto=format&fit=crop&q=60",
    cat: "Sports",
    author: "Shane Doe",
    date: "Jan 14, 2020",
  },
  {
    title: "Flash Sale Knocks $400 Off this Lenovo Gaming PC with an RTX 3060",
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=150&auto=format&fit=crop&q=60",
    cat: "Gadgets",
    author: "Shane Doe",
    date: "Jan 14, 2020",
  }
];

// Section 4 Left: World News Split
export const worldNewsMain: Post = {
  title: "CL Final 2023: Who Really Owns European Basketball?",
  img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=80",
  cat: "World",
  author: "Shane Doe",
  date: "Nov 19, 2023",
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. How club ownership structures dictate continental growth strategies.",
};

export const worldNewsList: Post[] = [
  {
    title: "Kenya Hosts Camel Derby Amid Pledge to Boost Int’l Cultural Tourism",
    img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=400&auto=format&fit=crop&q=60",
    cat: "Tourism",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Smart Watches: The Fever that’s Changing the Rules of Luxury",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  }
];

// Section 4 Left Bottom: Overlay block (WMag Mornings)
export const morningsMain: Post = {
  title: "Scarcity of International Collaboration Hampers Japan’s Innovation",
  img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
  cat: "World",
  author: "Shane Doe",
  date: "Nov 19, 2023",
};

export const morningsGrid: Post[] = [
  {
    title: "Online Education for Girls on Rise, but Students Not Satisfied",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Europe’s Tourism Displays a Strong Rebound, but Remains Uneven",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&auto=format&fit=crop&q=60",
    cat: "Tourism",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Engineering Students Connect with Industry at Leadership Conference",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    isVideo: true,
  }
];

// Section 4 Left: The Lifestyle list layout
export const lifestyleList: Post[] = [
  {
    title: "China Travel Growth Slows During Y23 Dragon Holidays",
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&auto=format&fit=crop&q=60",
    cat: "Travel & Tourism",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to trends in regional transport networks.",
  },
  {
    title: "Save $90 on The HS700E 4K Drone, An Ideal Beginner",
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&auto=format&fit=crop&q=60",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    isAudio: true,
    excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to drone tech regulations.",
  },
  {
    title: "5 Flavoursome Pizza Shops you Should Check Out in Toronto",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60",
    cat: "Food & Diet",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to urban gastronomy indicators.",
  }
];

// Section 4 Right Sidebar: Don't Miss!
export const dontMissSidebar: Post[] = [
  {
    title: "US and South Korea Close Ranks on Common Global Issues",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=150&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    views: "13,004",
  },
  {
    title: "Tips And Tricks To Give Your Home A Festive Look",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=150&auto=format&fit=crop&q=60",
    cat: "Home Decor",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    views: "12,953",
  },
  {
    title: "8 Reasons Why Black Coffee is the Best Drink on an Empty Stomach",
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=150&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    views: "516",
  },
  {
    title: "How Indigenous Model Zaya Uses Her Platform for Good",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    views: "618",
  }
];

// Section 4 Right Sidebar: Top Stories (Numbered List)
export const topStoriesSidebar: Post[] = [
  {
    title: "The Doobie Brothers to Serve as Opener for Eagles Concert",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&auto=format&fit=crop&q=60",
    cat: "Music",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    isVideo: true,
  },
  {
    title: "Nasa’s Perseverance Rover Captures Strange 'Blue Sunset' on Mars",
    img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=150&auto=format&fit=crop&q=60",
    cat: "Science",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    isVideo: true,
  },
  {
    title: "Climate Change: Thousands of Penguins Die in Antarctic Ice Breakup",
    img: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=150&auto=format&fit=crop&q=60",
    cat: "Climate",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  }
];

// Section 6: Dark Review Post Grid (Rating circle percentages)
export const reviewsGrid: Post[] = [
  {
    title: "Review: The Courier – a New Song with Benedict Cumberbatch",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=60",
    cat: "TV & Music",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    rating: 72,
    isPercent: true,
  },
  {
    title: "Scents for All: Unisex Perfumes are Growing in Popularity",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop&q=60",
    cat: "Perfumes",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Watch this New Amazon TV Series: Its An Ambitious Fantasy",
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&auto=format&fit=crop&q=60",
    cat: "TV & Music",
    author: "Shane Doe",
    date: "Nov 19, 2023",
    isVideo: true,
  },
  {
    title: "How Leading Apparel Brands are Framing the Future of Fashion E-commerce",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&auto=format&fit=crop&q=60",
    cat: "Fashion",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Top Secrets: Top Hacks That Make Perfume Last Longer",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop&q=60",
    cat: "Perfumes",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  }
];

// Section 7 Left: Travel & Tourism
export const travelMain: Post = {
  title: "Extra Running Time of Trains in Timetable Cost Millions to National Exchequer",
  img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80",
  cat: "Tourism",
  author: "Shane Doe",
  date: "Jan 17, 2021",
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. Rising transit delays represent a massive hidden tariff on public commute efficiency.",
};

export const travelGrid: Post[] = [
  {
    title: "U.S. to Finally Have a Secretary-Level Position for Tourism",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&auto=format&fit=crop&q=60",
    cat: "US Travel",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Annual Winter Wonderland Returns to Downtown Main Street",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop&q=60",
    cat: "Tourism",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Pretty Euro Town which Puts Off Tourists with its Ugly Seaside",
    img: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=400&auto=format&fit=crop&q=60",
    cat: "Tourism",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  }
];

// Section 7 Left: Science & Tech (Mixed Highlights)
export const techHighlightsMain: Post[] = [
  {
    title: "Rise Of The Robots Raises A Big Question: What Will Workers Do?",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=70",
    cat: "Technology",
    author: "Shane Doe",
    date: "Jan 13, 2020",
    comments: 3,
    excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to automation trends affecting the global workforce.",
  },
  {
    title: "Tablet PC Market Witness Exponential Growth in 2023, Sources Say",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=70",
    cat: "PC & Tablets",
    author: "Shane Doe",
    date: "Jan 12, 2020",
    comments: 3,
    excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to changing post-pandemic consumer electronics queries.",
  }
];

export const techHighlightsSmall: Post[] = [
  {
    title: "Take Your Photography to The Next Level with This Drone",
    img: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=150&auto=format&fit=crop&q=60",
    cat: "Gadgets",
    author: "Shane Doe",
    date: "Jan 11, 2020",
  },
  {
    title: "The Best Early Black Friday Deals on Gaming Laptops and Accessories",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=150&auto=format&fit=crop&q=60",
    cat: "Gaming",
    author: "Shane Doe",
    date: "Jan 11, 2020",
  },
  {
    title: "Oculus Founder Makes a VR Headset That Can Literally Kill You",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=150&auto=format&fit=crop&q=60",
    cat: "VR Technology",
    author: "Shane Doe",
    date: "Jan 11, 2020",
  },
  {
    title: "AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=150&auto=format&fit=crop&q=60",
    cat: "PC & Tablets",
    author: "Shane Doe",
    date: "Jan 11, 2020",
  }
];

// Section 7 Right: Fitness Grid
export const fitnessGrid: Post[] = [
  {
    title: "These Delicious Juices Can Promote Hair Growth",
    img: "https://images.unsplash.com/photo-1610970881699-44a55b4cfd87?w=300&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "6 Different Type Of Vinegar To Elevate Your Cooking",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&auto=format&fit=crop&q=60",
    cat: "Cooking",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "Vegan Diet Not a Healthy Option for Kids, Here’s Why",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=60",
    cat: "Diet",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  },
  {
    title: "How to Understand & Use the Nutrition Facts Label",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&auto=format&fit=crop&q=60",
    cat: "Diet",
    author: "Shane Doe",
    date: "Nov 19, 2023",
  }
];

// Footer Widgets: About Us / Featured / Worldwide
export const footerPicks: Post[] = [
  {
    title: "5 Simple Tips to Take Care of Larger Air Balloons",
    img: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=150&auto=format&fit=crop&q=60",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Jan 4, 2020",
  },
  {
    title: "5 Ways Your Passport Can Ruin Your Cool Holiday Trip",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=150&auto=format&fit=crop&q=60",
    cat: "Travel",
    author: "Shane Doe",
    date: "Jan 5, 2020",
  },
  {
    title: "Tokyo Officials Plan For a Safe Olympic Games Without Quarantines",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=150&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Jan 6, 2020",
  }
];

export const footerPopular: Post[] = [
  {
    title: "8 Reasons Why Black Coffee is the Best Drink on an Empty Stomach",
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=150&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Jan 12, 2021",
    views: "516",
  },
  {
    title: "How Indigenous Model Zaya Uses Her Platform for Good",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Jan 12, 2021",
    views: "618",
  },
  {
    title: "Tips And Tricks To Give Your Home A Festive Look",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=150&auto=format&fit=crop&q=60",
    cat: "Home Decor",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    views: "12,953",
  }
];
