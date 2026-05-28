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
  rating?: number;
  isVideo?: boolean;
  isAudio?: boolean;
  isGallery?: boolean;
  views?: string;
}

// Mega Menu Items
export const megaMenuTech: Post[] = [
  {
    title: "Bill Gates Flew Economy Class For 10 Years After Becoming A Billionaire",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "Jan 11, 2020",
  },
  {
    title: "Best Black Friday Smartwatch and Fitness Tracker Deals of 2023",
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&auto=format&fit=crop&q=60",
    cat: "Gadgets",
    author: "Shane Doe",
    date: "Nov 24, 2023",
  },
  {
    title: "AMD Unveils Ryzen Mobile 7040U Series: Smaller Cores, Bigger Efficiency",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "May 15, 2023",
    isVideo: true,
  },
  {
    title: "Elon Musk: Twitter Says Parts of Source Code Leaked Online",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "Mar 26, 2023",
  },
  {
    title: "Google’s Holographic Video Chat Feels Like the Opposite of VR",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&auto=format&fit=crop&q=60",
    cat: "Gadgets",
    author: "Shane Doe",
    date: "Oct 14, 2023",
  }
];

export const megaMenuLifestyle: Post[] = [
  {
    title: "World Music Day 2023: What Is It and Why Do We Celebrate It?",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Jun 21, 2023",
  },
  {
    title: "Top Fun Games: Kill The Boredom And Enjoy Your Family Time",
    img: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=400&auto=format&fit=crop&q=60",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Jul 18, 2023",
  },
  {
    title: "An Analysis on How Leading Apparel Brands are Framing the Future of Fashion",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&auto=format&fit=crop&q=60",
    cat: "Apparel",
    author: "Shane Doe",
    date: "Aug 12, 2023",
  },
  {
    title: "How the Lack of Russian Tourists has Impacted Countries Across Europe",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop&q=60",
    cat: "Tourism",
    author: "Shane Doe",
    date: "Sep 05, 2023",
  },
  {
    title: "HDR Photography Blew My Mind. It’s Glorious & Complicated",
    img: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400&auto=format&fit=crop&q=60",
    cat: "Arts & Culture",
    author: "Shane Doe",
    date: "Jan 16, 2021",
    isAudio: true,
  }
];

// SECTION 1: Hero Block
export const heroMain: Post = {
  title: "World Music Day 2023: What Is It and Why Do We Celebrate It?",
  img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80",
  cat: "Lifestyle",
  author: "Shane Doe",
  authorImg: "https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg",
  date: "Jan 11, 2020",
  excerpt: "Music has the power to soothe the soul, unite communities, and bring joy. Discover the origins of World Music Day and how people celebrate this beautiful art form across the globe every single year."
};

export const heroGrid: Post[] = [
  {
    title: "Bill Gates Flew Economy Class For 10 Years After Becoming A Billionaire",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=70",
    cat: "Technology",
    author: "Shane Doe",
    date: "Jan 11, 2020"
  },
  {
    title: "Best Black Friday Smartwatch and Fitness Tracker Deals of 2023",
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=70",
    cat: "Gadgets",
    author: "Shane Doe",
    date: "Nov 24, 2023"
  },
  {
    title: "Thousands of Penguins Die in Antarctic Ice Breakup",
    img: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&auto=format&fit=crop&q=70",
    cat: "Climate Change",
    author: "Shane Doe",
    date: "Aug 29, 2023"
  }
];

export const peoplesFavorite: Post[] = [
  {
    title: "An Analysis on How Leading Apparel Brands are Framing the Future of Fashion E-commerce",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&auto=format&fit=crop&q=60",
    cat: "Apparel",
    author: "Shane Doe",
    date: "Jul 10, 2023",
    readTime: "6 Mins Read"
  },
  {
    title: "Top Fun Games: Kill The Boredom And Enjoy Your Family Time",
    img: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=300&auto=format&fit=crop&q=60",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Jun 15, 2023",
    readTime: "6 Mins Read"
  },
  {
    title: "How Does Your Gut Microbiome Impact Your Overall Health?",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&auto=format&fit=crop&q=60",
    cat: "Arts & Culture",
    author: "Shane Doe",
    date: "May 28, 2023",
    readTime: "6 Mins Read"
  },
  {
    title: "Lionel Messi Selected as US Soccer Hall of Fame Finalists",
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&auto=format&fit=crop&q=60",
    cat: "Sports",
    author: "Shane Doe",
    date: "Apr 20, 2023",
    readTime: "6 Mins Read"
  }
];

// SECTION 2: World News (Left) & Sidebar (Right)
export const worldNewsMain: Post = {
  title: "Red Notice Gala has Too Many Movie Stars but Not Enough Actors",
  img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80",
  cat: "Arts & Culture",
  author: "Shane Doe",
  date: "Nov 15, 2023",
  excerpt: "To understand the new blockbusters and other artistic choices of recent focus, we should look past the celebrity hype to the core of character screenplays..."
};

export const worldNewsList: Post[] = [
  {
    title: "Explainer: Why are Space Agencies Racing to the Moon’s South Pole?",
    img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=300&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Aug 20, 2023"
  },
  {
    title: "Hungary Bans Teens from Visiting World Exhibition over LGBTQ Images",
    img: "https://images.unsplash.com/photo-1572945281869-7023f827738c?w=300&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Oct 12, 2023"
  },
  {
    title: "AMD Unveils Ryzen Mobile 7040U Series: Smaller Cores, Bigger Efficiency",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "May 10, 2023",
    isVideo: true
  }
];

// Most Read Sidebar (Points Review style)
export const mostReadSidebar: Post[] = [
  {
    title: "Greece Tourism Receipts on Record Breaking Track for 2023",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300&auto=format&fit=crop&q=60",
    cat: "Tourism",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    rating: 8.9
  },
  {
    title: "Singer Hints he May Never Go on a Tour as Calls Experience ‘Isolating’",
    img: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60",
    cat: "Music",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    rating: 8.2
  },
  {
    title: "Here Are the Best High-Tech New Car Features You Can Buy Today",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&auto=format&fit=crop&q=60",
    cat: "Automotive",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    rating: 7.9
  }
];

// SECTION 3: Editor's Picks Grid
export const editorsPicks: Post[] = [
  {
    title: "Can You Take Ozempic on the Same Day You Get a COVID Vaccine?",
    img: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop&q=70",
    cat: "Health",
    author: "Shane Doe",
    date: "Nov 04, 2023",
    isAudio: true,
    excerpt: "Health experts clarify safety guidelines regarding diabetes medications and vaccine scheduling guidelines."
  },
  {
    title: "Steve Jobs: A Visionary Who Transformed Apple and the Tech Industry",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=70",
    cat: "Lifestyle",
    author: "Shane Doe",
    date: "Oct 18, 2023",
    excerpt: "Reflecting on the unique product leadership, creative constraints, and relentless drive of Apple's cofounder."
  },
  {
    title: "France Lays Out Strategy to Combat 'Overtourism' in Landmarks",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=70",
    cat: "Tourism",
    author: "Shane Doe",
    date: "Sep 22, 2023",
    excerpt: "New initiatives aim to protect fragile ecosystems and distribute tourist flows away from congested locations."
  }
];

// SECTION 4: Don't Miss (Review points etc.)
export const dontMissGrid: Post[] = [
  {
    title: "Review: What We Know About the White House’s Executive Order on AI",
    img: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=400&auto=format&fit=crop&q=60",
    cat: "Politics",
    author: "Shane Doe",
    date: "Oct 31, 2023",
    rating: 85 // Percent
  },
  {
    title: "Gamers Are Mistaking PS5 Motorcycle Footage for Real Life",
    img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&auto=format&fit=crop&q=60",
    cat: "Gadgets",
    author: "Shane Doe",
    date: "Nov 02, 2023"
  },
  {
    title: "Anti-Abortion Activists Attend First March for Life With Fresh Resolve",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=60",
    cat: "Climate Change",
    author: "Shane Doe",
    date: "Jan 22, 2023"
  },
  {
    title: "How Well Do You Know Relations with Your Best Friends? Let’s Test It!",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&auto=format&fit=crop&q=60",
    cat: "Arts & Culture",
    author: "Shane Doe",
    date: "Sep 12, 2023"
  },
  {
    title: "3T MRI Sentient Suite Offers Relaxing Experience for Patient",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Jul 05, 2023"
  },
  {
    title: "Are Cakes Healthy? Benefits and Facts – Nutritional Facts",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=60",
    cat: "Healthy Diet",
    author: "Shane Doe",
    date: "Jun 18, 2023"
  }
];

// SECTION 5: Just In Block
export const justInMain: Post = {
  title: "Here’s What Happens to Your Body if You Eat Pizza Every Week",
  img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
  cat: "Health",
  author: "Shane Doe",
  authorImg: "https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg",
  date: "Mar 10, 2022",
  excerpt: "Pizza is one of the world's most popular comfort foods, but regular consumption has complex impacts on weight, blood sugar levels, and heart metrics. Let's analyze the nutritional profile."
};

export const justInList: Post[] = [
  {
    title: "The 15 Best Watches for Men at Every Price Point, According to Experts",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "Mar 10, 2022",
    excerpt: "Watch experts review premium horology choices ranging from entry-level daily wear to heirloom luxury timepieces."
  },
  {
    title: "How To Become A Journalist: A Step-By-Step Guide For Beginners",
    img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Mar 10, 2022",
    excerpt: "An essential roadmap for aspiring writers looking to master research, formatting, ethical guidelines, and publication pitches."
  },
  {
    title: "Women March in Latin American Cities Calling for Abortion Rights",
    img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Sep 28, 2023",
    excerpt: "Thousands gather in capital cities demanding reproductive legislative reform and access guidelines."
  }
];

export const healthSidebar: Post[] = [
  {
    title: "Orange Juice And Beyond: Review of Unusual Food Sources for Survival",
    img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Jan 15, 2021",
  },
  {
    title: "Maximizing the Benefits of Supplements for an Active Lifestyle",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Nov 02, 2023",
  },
  {
    title: "Why Being Stressed Makes Us Crave Junk Food",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Nov 12, 2023",
    isVideo: true,
  },
  {
    title: "6 Dietary Changes That Can Help Prevent The Risk of Cancer",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Aug 14, 2023",
  }
];

export const trendingSidebar: Post[] = [
  {
    title: "Boiled Egg vs Omelets, Which One Has More Nutrition?",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&auto=format&fit=crop&q=60",
    cat: "Healthy Diet",
    author: "Shane Doe",
    date: "Nov 18, 2023",
    readTime: "6 Mins Read"
  },
  {
    title: "8 Easy Deep-Cleansing Mud Masks For A Healthy Glow",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Sep 22, 2023",
    readTime: "6 Mins Read"
  },
  {
    title: "Decoding AI: Risks, Safeguards and Development Management",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "Oct 05, 2023",
    readTime: "6 Mins Read"
  },
  {
    title: "60 Chic Home Décor Ideas to Try From Designers",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&auto=format&fit=crop&q=60",
    cat: "Home Decor",
    author: "Shane Doe",
    date: "Jan 17, 2021",
    readTime: "6 Mins Read"
  }
];

// SECTION 6: Lifestyle Block (Bottom Grid)
export const lifestyleBottom: Post[] = [
  {
    title: "Tragic Story of Famous Singer will Bring Tears into Your Eyes",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=70",
    cat: "Arts & Culture",
    author: "Shane Doe",
    date: "Jan 17, 2021",
    excerpt: "Behind the flashing cameras, sold-out stadiums, and platinum records lied a narrative of profound struggle, isolation, and redemption."
  },
  {
    title: "How Faith and Spirituality Shape Modern Lifestyle",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=70",
    cat: "Arts & Culture",
    author: "Shane Doe",
    date: "Jan 16, 2021",
    excerpt: "In a hyper-connected, fast-paced world, an increasing number of individuals turn to meditation, silent retreats, and structured beliefs for balance."
  },
  {
    title: "HDR Photography Blew My Mind. It’s Glorious & Complicated",
    img: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=600&auto=format&fit=crop&q=70",
    cat: "Tourism",
    author: "Shane Doe",
    date: "Jan 16, 2021",
    excerpt: "High Dynamic Range photography allows stunning details in shadows and highlights, but editing workflows require careful tonal balance."
  }
];

// Footer Picks and Popular lists
export const footerPicks: Post[] = [
  {
    title: "Here’s What Happens to Your Body if You Eat Pizza Every Week",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&auto=format&fit=crop&q=60",
    cat: "Health",
    author: "Shane Doe",
    date: "Mar 10, 2022",
  },
  {
    title: "The 15 Best Watches for Men at Every Price Point, According to Experts",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=150&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "Mar 10, 2022",
  },
  {
    title: "How To Become A Journalist: A Step-By-Step Guide For Beginners",
    img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=150&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Mar 10, 2022",
  }
];

export const footerPopular: Post[] = [
  {
    title: "Explainer: Why are Space Agencies Racing to the Moon’s South Pole?",
    img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=150&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Aug 20, 2023",
    views: "9,898"
  },
  {
    title: "Hungary Bans Teens from Visiting World Exhibition over LGBTQ Images",
    img: "https://images.unsplash.com/photo-1572945281869-7023f827738c?w=150&auto=format&fit=crop&q=60",
    cat: "World",
    author: "Shane Doe",
    date: "Oct 12, 2023",
    views: "9,225"
  },
  {
    title: "AMD Unveils Ryzen Mobile 7040U Series: Smaller Cores, Bigger Efficiency",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=150&auto=format&fit=crop&q=60",
    cat: "Technology",
    author: "Shane Doe",
    date: "May 10, 2023",
    views: "8,943"
  }
];
