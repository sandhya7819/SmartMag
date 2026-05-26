export interface Article {
  title: string;
  category: string;
  date: string;
  author: string;
  authorImg?: string;
  readTime?: string;
  views?: string;
  excerpt?: string;
  img: string;
  videoUrl?: string;
  rating?: number;
  isHot?: boolean;
}

// 1. Top main overlay post
export const topOverlayPost: Article = {
  title: "Teenage Girl Finds Mom’s Debit Card, Spends $64,000 on Mobile Games",
  category: "Technology",
  date: "Jan 6, 2020",
  author: "Shane Doe",
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile...",
  img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/90773f2227cb66fce248b6b2039a2468-1536x1024.jpeg"
};

// 2. Hero list (right side of the main post)
export const heroList: Article[] = [
  {
    title: "New High Tech Number Plate to Detect Uninsured Drivers",
    category: "Technology",
    date: "Jan 12, 2020",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/07e247c0095b36f4508462ef265133d9-300x220.jpeg"
  },
  {
    title: "The Best Gifts for Women to Receive for Mother’s Day and Beyond",
    category: "Lifestyle",
    date: "Jan 11, 2020",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/b181ee51b524f06820d0d8c0559b6d0c-300x200.jpeg"
  }
];

// 3. Trending posts (4-column grid row)
export const trendingPosts: Article[] = [
  {
    title: "Jabra’s Elite 4 Earbuds Forgo a Few Niceties for a $20 Price Cut",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/8d4256133a3d12605fc72c271295230d-450x300.jpeg"
  },
  {
    title: "HDR Photography Blew My Mind. It’s Complicated",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/01e570a920b5b49c473cd7dc16b9022b-450x300.jpeg"
  },
  {
    title: "How to Watch Euro 2024 Qualifier From Anywhere FREE",
    category: "Sports",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/c282e5b5e46c786646f5630004540f5e-450x300.jpeg"
  },
  {
    title: "In World 1st, Virus Spotted Attached to 2nd Virus",
    category: "Science",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/710b127db8e32ceb7ae55ccdd48dc025-450x312.jpeg"
  }
];

// 4. World News left main
export const worldNewsMain: Article = {
  title: "Global Banking Crisis Fears and Slowdown Approaching in 2024",
  category: "Finance",
  date: "Jan 12, 2020",
  author: "Shane Doe",
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile...",
  img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/b267d61dd5a1bf89cf998b73f428382f-450x300.jpeg"
};

// 5. World News side grid (2 posts stacked)
export const worldNewsGrid: Article[] = [
  {
    title: "How Faith and Spirituality Shape Modern Lifestyle",
    category: "Lifestyle",
    date: "Jan 11, 2020",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/52959fd023e49415a9c137a44ed8d2e0-450x300.jpeg"
  },
  {
    title: "Why Getting A Second Passport Is The Perfect Plan B",
    category: "Lifestyle",
    date: "Jan 11, 2020",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/dc3215b0bca24e1b0b0259ae2f3985cf-450x261.jpeg"
  }
];

// 6. Middle split-layout feed cards
export const middleFeed: Article[] = [
  {
    title: "Wall Street Ends Down This Weekend, Snaps Weekly Winning Streak",
    category: "Finance",
    date: "Jan 11, 2020",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    views: "57",
    excerpt: "To understand the new politics stance and other pro nationals...",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/3067824d8f4ce16b17f70c23c9f5a905-450x302.jpeg"
  },
  {
    title: "Digging Up Old Graves to Make Room for Newly Fallen Soldiers",
    category: "Politics",
    date: "Jan 11, 2020",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    views: "59",
    excerpt: "To understand the new politics stance and other pro nationals...",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/4b6d058ef8bad80d06f408ad27daa2da-450x300.jpeg"
  },
  {
    title: "The New CEO Stresses Commitment to Free Speech in First Speech",
    category: "World",
    date: "Jan 11, 2020",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    views: "2,498",
    excerpt: "To understand the new politics stance and other pro nationals...",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/b0ffe155281728061ccc9254ea933144-450x289.jpeg",
    isHot: true
  }
];

// 7. Sidebar 1 featured carousel list
export const sidebarFeatured: Article[] = [
  {
    title: "US Gives Go-Ahead for Orsted’s New Jersey Offshore Wind Farm",
    category: "World",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    excerpt: "To understand the new politics stance and other pro nationals of recent times, we should...",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/0a5e81933e3526b94d80c168fa20e4c1-450x302.jpeg"
  },
  {
    title: "You Can Now Call An Uber For Hot Air Balloon Rides In Turkey",
    category: "World",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    excerpt: "To understand the new politics stance and other pro nationals of recent times, we should...",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2021/01/tansu-topuzoglu-umLoA4lK9cw-unsplash-450x674.jpg"
  }
];

// 8. Sidebar 1 "Don't Miss!" list
export const sidebarDontMiss: Article[] = [
  {
    title: "What Happened to the Apple Watch Being About Fashion?",
    category: "Technology",
    date: "Jan 16, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/79d34b0cdcf7be65e623f9061935d5d5-300x260.jpeg"
  },
  {
    title: "25 Incredible Experiences You Can Only Have in Sea on a Small Ship",
    category: "Lifestyle",
    date: "Jan 16, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/c41f292ca643abc3290c92e552b29488-300x200.jpeg"
  },
  {
    title: "Greece & Austria Join the Ranks of Top 10 International Tourist Hotspots in 2022",
    category: "Lifestyle",
    date: "Jan 16, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/4d539b0a48424ff4809ad10d4f6e990a-300x200.jpeg"
  },
  {
    title: "Singapore Tourism Board Appoints New Regional Director Europe",
    category: "Lifestyle",
    date: "Jan 16, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/1f28f6dccf9e0ef0cbb267d1fea3df0b-300x200.jpeg"
  }
];

// 9. Fashion trends section
export const fashionMain: Article = {
  title: "The 10 Key Spring/Summer 2024 Fashion Trends To Know Now",
  category: "Fashion",
  date: "Mar 15, 2020",
  author: "Shane Doe",
  authorImg: "https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg",
  img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/8fcf25444b580c9665354153201398ef-768x443.jpeg"
};

export const fashionGrid: Article[] = [
  {
    title: "6 Hottest Sunglasses Trends Inspired by Bollywood Celebrities for Summer 2024",
    category: "Fashion",
    date: "Mar 15, 2020",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/40127e6c4716c8ac030335db59b4f19a-450x300.jpeg"
  },
  {
    title: "Shop The Key Autumn/Winter 2023 Bag Trends To Know Now",
    category: "Fashion",
    date: "Mar 15, 2020",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/5a45a396b25b0ac49f23b09a2a950880-450x300.jpeg"
  },
  {
    title: "Shoe Trends That Are Popular and Going Out This Fall",
    category: "Fashion",
    date: "Mar 15, 2020",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/c963ebb8cbe06e5a4a95567867e826fc-450x328.jpeg"
  },
  {
    title: "6 Best Sunglasses Trends of 2023 to Keep Wearing Next Year",
    category: "Fashion",
    date: "Mar 15, 2020",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/153043b65bd880d10318496299422da0-450x300.jpeg"
  }
];

// 10. World Politics left main
export const politicsMain: Article = {
  title: "Putin Approves New Media Restrictions Ahead of Presidential Election",
  category: "Politics",
  date: "Mar 16, 2020",
  author: "Shane Doe",
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile...",
  img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/2ed5e04eccfd2e3dee5adb11715b4998-450x302.jpeg"
};

// 11. World Politics side grid ("The Lifestyle" grid)
export const politicsGrid: Article[] = [
  {
    title: "Women`s World Boxing: 4 Women Boxers Reached Semi Finals 2024",
    category: "Lifestyle",
    date: "Jan 13, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/5fff1bf20c5da627d2ad99b109721319-450x299.jpeg"
  },
  {
    title: "New Design Concept: Falls Hotel & Spa, North England",
    category: "Lifestyle",
    date: "Jan 13, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/2fac268031327dcb5fce75a2990185bd-450x518.jpeg"
  },
  {
    title: "Most Kids Getting Too Much Screen Time While Traveling, Study Finds",
    category: "Lifestyle",
    date: "Jan 13, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/3ea032f40ea5819f4d7bf05119ae0cc9-450x300.jpeg"
  },
  {
    title: "Ways by Which Your Partner Impacts Your Life: Therapist Explains",
    category: "Lifestyle",
    date: "Jan 13, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/b4d838207b633ec132d0c0adfd028926-450x291.jpg"
  },
  {
    title: "Why Being Stressed Makes Us Crave Junk Food",
    category: "Lifestyle",
    date: "Jan 13, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/8d767af99cafe2513ec57f9923f764c0-450x300.jpeg"
  },
  {
    title: "Your Best Companions to Make Working from Home Less Lonely",
    category: "Lifestyle",
    date: "Jan 13, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/08ba4a96fde07ecf5b825cfe9227637d-450x300.jpg"
  }
];

// 12. Tech block (3 main with reviews)
export const techFeatured: Article[] = [
  {
    title: "Review: Xiaomi Redmi 13C: Small Upgrades, Big Value",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    readTime: "2 Mins Read",
    rating: 8.5,
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/af8488e1bcf32dfcead42abf2afc7d7a-450x287.jpeg"
  },
  {
    title: "Get this 4K HD Dual-Camera Drone with WiFi for $75",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/d5c279c21fd7eb9bda49101c7f587195-450x300.jpeg"
  },
  {
    title: "Tips To Get The Most Out Of Your New Nvidia RTX 2060",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/c925205784e6fb2aed675f1893f989ed-450x212.jpeg"
  }
];

// 13. Tech grid below
export const techGrid: Article[] = [
  {
    title: "Hologram Breakthrough – New Technology Transforms Ordinary 2D Images",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/659c1c12bf2e0edbea1af64fa0a2b56f-450x776.jpeg"
  },
  {
    title: "Healthcare Group Calls for Return of Face Mask Guidance",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/e349d70df4d6621f01f289a3c22fe9a0-450x300.jpeg"
  },
  {
    title: "Fortnite Refer a Friend 3.0: Play Together & Earn Rewards!",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/51fdc9ad7f4a430749f0b278912aa9eb-450x237.jpg"
  },
  {
    title: "Meta’s AlbedoGAN Advances Realistic 3D Face Generation",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/8ef216c927861f1724730e84cb1a66b7-450x338.jpeg"
  }
];

// 14. Everyday News feed (bottom layout)
export const everydayFeed: Article[] = [
  {
    title: "Daring Looks Celebrities Wore to Paris Fashion Week this Year",
    category: "Fashion",
    date: "Jan 22, 2021",
    author: "Shane Doe",
    readTime: "3 Mins Read",
    views: "308",
    excerpt: "Jungfrau A. Bietschhorn This region is a magnificent area with...",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/33e3cacaba86eaca751f44748886d19a-450x344.jpeg"
  },
  {
    title: "Travel Demand Fuels a Boom in Asia Pacific — Hotel Rooms",
    category: "Lifestyle",
    date: "Jan 16, 2021",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    views: "72",
    excerpt: "To understand the new politics stance and other pro nationals...",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/40121fa8873d28011548cfbe26f781ce-450x300.jpg"
  },
  {
    title: "Why Are iPhones More Expensive Than Android Phones?",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/5fd48e89c0dba8fb3db8c5dc06a9c071-450x253.jpeg"
  },
  {
    title: "OnePlus Will Focus on a Premium Build Over Camera Performance",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/569a9b21b79b7a25fa3333af1e144612-300x200.jpeg"
  },
  {
    title: "Meta’s VR Game Publisher is Now Called ‘Oculus Publishing’",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/c5283335815e4d091ae0a9535cfddd04-300x200.jpg"
  }
];

// 15. Sidebar 2 "Most Viewed" list (rank 1-5)
export const sidebarMostViewed: Article[] = [
  {
    title: "The 30 Hottest Models in the World Today (Updated 2023)",
    category: "Lifestyle",
    date: "Jan 12, 2021",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    img: ""
  },
  {
    title: "Daring Looks Celebrities Wore to Paris Fashion Week this Year",
    category: "Fashion",
    date: "Jan 12, 2021",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    img: ""
  },
  {
    title: "Dubai-Based Yacht Company is Offering Socially-Distanced Luxury",
    category: "Lifestyle",
    date: "Jan 12, 2021",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    img: ""
  },
  {
    title: "First Ever Pet Grooming Qualifications Launched in UK",
    category: "Lifestyle",
    date: "Jan 12, 2021",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    img: ""
  },
  {
    title: "Ways by Which Your Partner Impacts Your Life: Therapist Explains",
    category: "Lifestyle",
    date: "Mar 16, 2020",
    author: "Shane Doe",
    readTime: "8 Mins Read",
    img: ""
  }
];

// 16. Featured Videos block
export const featuredVideosMain: Article = {
  title: "These Beats EP On-Ear Stylish Headphones Are a Sound Way to Upgrade Your Street Style",
  category: "Technology",
  date: "Jan 14, 2021",
  author: "Shane Doe",
  img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/53caf1eb9d6c351697dcae959ac1e029-1024x683.jpg",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Standard video embed
};

export const featuredVideosList: Article[] = [
  {
    title: "Rumor Roundup: War Games teams, Randy Orton return, CM Punk Speculation",
    category: "Sports",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/97bd7433c4c2ec9c12d07a2fb4ff6d23-450x255.jpg"
  },
  {
    title: "Travel Demand Fuels a Boom in Asia Pacific — Hotel Rooms",
    category: "Lifestyle",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/46c4cdb33b3144637541e60754d8b597-450x225.jpeg"
  },
  {
    title: "Metaverse Hype Stalls While VR, AR Technology Advances",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/e3ac378f7cd6066d4d9ce35a2af14443-450x301.jpeg"
  },
  {
    title: "Climate Change: Thousands of Penguins Die in Antarctic Ice Breakup",
    category: "Science",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/09550a5c46410e13b3f393fa4eea1910-450x299.jpeg"
  },
  {
    title: "Average Mobile Data Usage Now Exceeds 10GB Per Month",
    category: "Technology",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/f823573f2acbe1f9b2fbd34b8a456c8e-450x300.jpeg"
  },
  {
    title: "World Music Day 2023: What Is It and Why Do We Celebrate It?",
    category: "Lifestyle",
    date: "Jan 14, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/36b532a3fc152e4c47039700a731186c-450x299.jpg"
  }
];

// 17. Footer articles
export const footerPicks: Article[] = [
  {
    title: "Daring Looks Celebrities Wore to Paris Fashion Week this Year",
    category: "Fashion",
    date: "Jan 22, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/33e3cacaba86eaca751f44748886d19a-150x115.jpeg"
  },
  {
    title: "Travel Demand Fuels a Boom in Asia Pacific — Hotel Rooms",
    category: "Lifestyle",
    date: "Jan 16, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/40121fa8873d28011548cfbe26f781ce-150x100.jpg"
  },
  {
    title: "Check Out the Celebrities From the International Film Festival Awards 2023",
    category: "Entertainment",
    date: "Jan 16, 2021",
    author: "Shane Doe",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/70ff5866eee596e0689484f9fb66333b-150x100.jpg"
  }
];

export const footerPopular: Article[] = [
  {
    title: "First Ever Pet Grooming Qualifications Launched in UK",
    category: "Lifestyle",
    date: "Jan 12, 2021",
    author: "Shane Doe",
    views: "36",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2021/01/Depositphotos_160109084_xl-2015-1-150x100.jpg"
  },
  {
    title: "Daring Looks Celebrities Wore to Paris Fashion Week this Year",
    category: "Fashion",
    date: "Jan 12, 2021",
    author: "Shane Doe",
    views: "38",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2021/01/david-suarez-b9wr9ICcNOg-unsplash-3-3-150x103.jpg"
  },
  {
    title: "Your Best Companions to Make Working from Home Less Lonely",
    category: "Lifestyle",
    date: "Jan 13, 2021",
    author: "Shane Doe",
    views: "38",
    img: "https://smartmag.theme-sphere.com/everyday-news/wp-content/uploads/sites/44/2023/11/08ba4a96fde07ecf5b825cfe9227637d-150x100.jpg"
  }
];
