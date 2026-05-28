export interface MagazineCoPost {
  title: string;
  category?: string;
  image: string;
  date?: string;
  views?: string;
  readTime?: string;
  author?: string;
  excerpt?: string;
  rating?: number; // e.g. 8.5 stars
  isVideo?: boolean;
  isAudio?: boolean;
}

// Mega Menu (Lifestyle)
export const lifestyleMegaMenu: MagazineCoPost[] = [
  {
    title: "Should you Begin Your Day with a Detox Drink? Experts Answer",
    category: "Health & Diet",
    image: "https://images.unsplash.com/photo-1610970881699-44a55b4cfd87?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Scents for All: Unisex Perfumes are Growing in Popularity",
    category: "Perfumes",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Top Secrets: Top Hacks That Make Perfume Last Longer",
    category: "Perfumes",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Social Norms Study: Urban Life & Complexities of Real Friendship",
    category: "Urban Life",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Tragic Story of Famous Singer will Bring Tears into Your Eyes",
    category: "Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  }
];

// Mega Menu (News)
export const newsMegaMenu: MagazineCoPost[] = [
  {
    title: "How Abortion Became an ‘Achilles Heel’ for US Republicans",
    category: "World",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=60",
    date: "Jan 22, 2021"
  },
  {
    title: "Wall Street Falls to Close Out its First Losing Week in the Last Six Weeks",
    category: "Business",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&auto=format&fit=crop&q=60",
    date: "Mar 15, 2020"
  },
  {
    title: "Digging Up Old Graves to Make Room for Newly Fallen Soldiers",
    category: "World",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=60",
    date: "Mar 15, 2020"
  },
  {
    title: "Lionel Messi Selected as US Soccer Hall of Fame Finalists",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&auto=format&fit=crop&q=60",
    date: "Mar 15, 2020"
  },
  {
    title: "Champions League Final 2023: Who Really Owns European Football?",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2020"
  }
];

// Off-Canvas "What's Hot"
export const offCanvasHot: MagazineCoPost[] = [
  {
    title: "Remote Work Appears to be Here To Stay, Especially for Women",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&auto=format&fit=crop&q=60",
    date: "Jun 22, 2023"
  },
  {
    title: "Extreme Travel Is Inspiring New Types of Insurance",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&auto=format&fit=crop&q=60",
    date: "Jan 22, 2021"
  },
  {
    title: "How Abortion Became an ‘Achilles Heel’ for US Republicans",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&auto=format&fit=crop&q=60",
    date: "Jan 22, 2021"
  }
];

// Section 1: Left Main
export const sec1LeftMain: MagazineCoPost = {
  title: "Rise Of The Robots Raises A Big Question: What Will Workers Do?",
  category: "Technology",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
  author: "Shane Doe",
  date: "Jan 11, 2020",
  views: "2,591",
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US-based robotics developments, machines are starting to perform complex manual tasks, sparking key worker concerns."
};

// Section 1: Left Grid
export const sec1LeftGrid: MagazineCoPost[] = [
  {
    title: "How Aquatic Sports Can Help Develop Your Creativity and Writing Skills",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop&q=60",
    date: "Mar 15, 2020"
  },
  {
    title: "How Faith and Spirituality Shape Modern Lifestyle",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Increase in LED Lighting ‘Risks Harming Human Health’",
    category: "Health",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  }
];

// Section 1: Right Main
export const sec1RightMain: MagazineCoPost = {
  title: "Fun Games: Kill The Boredom And Enjoy Your Family Time",
  category: "Lifestyle",
  image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=500&auto=format&fit=crop&q=70",
  date: "Jan 7, 2020",
  views: "345",
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should explore standard gaming styles and family activities."
};

// Section 1: Right List
export const sec1RightList: MagazineCoPost[] = [
  {
    title: "How Reading Improves Your Mental Health and Wellbeing",
    category: "Health",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=200&auto=format&fit=crop&q=60",
    views: "145"
  },
  {
    title: "How Much Credit Card Debt Does the Average Canadian Have?",
    category: "Business",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=200&auto=format&fit=crop&q=60",
    views: "105"
  },
  {
    title: "Have Fun Learning Piano with This Play-Anywhere Music App",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=200&auto=format&fit=crop&q=60",
    views: "71"
  }
];

// Section 2: Trending Row
export const trendingPosts: MagazineCoPost[] = [
  {
    title: "New High Tech Number Plate to Detect Uninsured Drivers",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1558441719-ff34b0524a24?w=300&auto=format&fit=crop&q=60",
    date: "Jan 11, 2020",
    views: "9,847"
  },
  {
    title: "Wall Street Ends Down, Snaps Weekly Winning Streak",
    category: "Business",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=300&auto=format&fit=crop&q=60",
    date: "Jan 11, 2020",
    views: "9,818"
  },
  {
    title: "Best Drill Machine for Your Home Tool Kit Essentials",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&auto=format&fit=crop&q=60",
    date: "Jan 11, 2020",
    views: "9,774"
  }
];

// Section 3: Sports Left & Right Main
export const sportsMainLeft: MagazineCoPost = {
  title: "Lionel Messi Selected as US Soccer Hall of Fame Finalists",
  category: "Sports",
  image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=70",
  author: "Shane Doe",
  date: "Mar 15, 2020",
  views: "61"
};

export const sportsMainRight: MagazineCoPost = {
  title: "Champions League Final 2023: Who Really Owns European Football?",
  category: "Sports",
  image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format&fit=crop&q=70",
  author: "Shane Doe",
  date: "Jan 14, 2020",
  views: "36"
};

// Section 3: Sports Grid
export const sportsGrid: MagazineCoPost[] = [
  {
    title: "Ricardo Ferreira Switches Soccer Allegiance to Canada",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&auto=format&fit=crop&q=60",
    views: "55",
    isVideo: true
  },
  {
    title: "TUH World Cup Match Halted Over the Issue of Deflated Balls",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&auto=format&fit=crop&q=60",
    views: "7,700"
  },
  {
    title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1431324155629-1a6edd1d141d?w=300&auto=format&fit=crop&q=60",
    views: "5,310"
  },
  {
    title: "MLS Players Reach CBA Deal with League Pending Vote",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&auto=format&fit=crop&q=60",
    views: "37"
  }
];

// Section 3: Don't Miss List
export const dontMissList: MagazineCoPost[] = [
  {
    title: "Tech Platforms CharterXE, FlyPJX to Ease Private Jet Booking",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=300&auto=format&fit=crop&q=60",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    readTime: "7 Mins Read",
    excerpt: "To understand the new politics stance and other pro nationals of regional travel booking platforms."
  },
  {
    title: "Wall Street Falls to Close Out its First Losing Week in the Last Six Weeks",
    category: "Business",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=300&auto=format&fit=crop&q=60",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    readTime: "7 Mins Read",
    excerpt: "To understand the new politics stance and other pro nationals of global market developments."
  },
  {
    title: "Digging Up Old Graves to Make Room for Newly Fallen Soldiers",
    category: "World",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&auto=format&fit=crop&q=60",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    readTime: "7 Mins Read",
    excerpt: "To understand the new politics stance and other pro nationals of local defense operations."
  },
  {
    title: "The New CEO Stresses Commitment to Free Speech in First Speech",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=60",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    readTime: "7 Mins Read",
    excerpt: "To understand the new politics stance and other pro nationals of digital media regulations."
  }
];

// Section 3 Sidebar: Editor's Picks Carousel
export const editorsPicks: MagazineCoPost[] = [
  {
    title: "Emmys 2023: Guest Actress in a Series — Our Dream Nominees!",
    category: "Celebs",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500&auto=format&fit=crop&q=70",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    excerpt: "To understand the new politics stance and other pro nationals of recent entertainment indicators."
  },
  {
    title: "8 Reasons Why You Should Visit Albania This Summer",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=70",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    excerpt: "To understand the new politics stance and other pro nationals of regional tourism rebound."
  },
  {
    title: "10 Best Dramas of 2023: Bloodhounds, The Glory and More",
    category: "Celebs",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=70",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    excerpt: "To understand the new politics stance and other pro nationals of global television streaming."
  }
];

// Section 3 Sidebar: Perfumes Grid
export const perfumesGrid: MagazineCoPost[] = [
  {
    title: "The Best Wedding Perfumes, According to Beauty Insiders",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&auto=format&fit=crop&q=60",
    isVideo: true
  },
  {
    title: "How to Apply Perfume and Make It Last Longer",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&auto=format&fit=crop&q=60"
  },
  {
    title: "The 14 Best Citrus Perfumes for Women in 2023, Tried and Tested",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&auto=format&fit=crop&q=60"
  },
  {
    title: "The Best Perfumes for Under $80, According to Twitter",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&auto=format&fit=crop&q=60"
  }
];

// Section 4: Style & Fashion Overlay
export const fashionMain: MagazineCoPost = {
  title: "How Leading Apparel Brands are Framing the Future of Fashion E-commerce",
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=85",
  author: "Shane Doe",
  date: "Jan 13, 2021"
};

// Section 4: Style & Fashion Grid Carousel
export const fashionGrid: MagazineCoPost[] = [
  {
    title: "Report Offers Tactics to Weather Fashion Apparel Challenges",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&auto=format&fit=crop&q=60"
  },
  {
    title: "From Pandemic to Recession – How Will the Industry Cope?",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop&q=60"
  },
  {
    title: "15 Best Tennis Dresses 2023 — Tennis Dress to Wear This Summer",
    image: "https://images.unsplash.com/photo-1554062614-6c62c9363056?w=400&auto=format&fit=crop&q=60"
  },
  {
    title: "Are Your Fashion Accessories Getting Old? Here's How To Upgrade",
    image: "https://images.unsplash.com/photo-1509630841775-53994a69daeb?w=400&auto=format&fit=crop&q=60"
  },
  {
    title: "6 Hottest Sunglasses Trends Inspired by Celebrities for Summer 2023",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&auto=format&fit=crop&q=60"
  }
];

// Section 5: Diet & Health Main
export const dietMain: MagazineCoPost = {
  title: "Why Being Stressed Makes Us Crave Junk Food",
  category: "Junk Food",
  image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80",
  author: "Shane Doe",
  readTime: "7 Mins Read",
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the physiological metrics of stress-triggered craving indices."
};

// Section 5: Diet & Health Grid
export const dietGrid: MagazineCoPost[] = [
  {
    title: "The 'Great American Baking Show' Is Actually Good This Time",
    category: "Baking",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&auto=format&fit=crop&q=60"
  },
  {
    title: "Mud Cakes And Beyond: 7 Unusual Food Sources For Survival",
    category: "Baking",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=60"
  },
  {
    title: "How To Pick Fish High in Omega-3 and Low in Mercury",
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1534604973900-c41ab4c2d0ab?w=400&auto=format&fit=crop&q=60"
  },
  {
    title: "A Pepper Steak Recipe to Convert the Haters",
    category: "Food",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=60"
  }
];

// Section 5: Latest In Tech
export const latestTech: MagazineCoPost[] = [
  {
    title: "Samsung Galaxy A52 5G Receives Wi-Fi Certification",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=300&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021",
    isAudio: true
  },
  {
    title: "Innovative VR Screen and Control Tech Debuts at CES 2021",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Review: T-Mobile Winning 5G Race Around the World",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=300&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021",
    isVideo: true
  },
  {
    title: "Why Are iPhones More Expensive Than Android Phones?",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=300&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "OnePlus Will Focus on a Premium Build Over Camera Performance",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  }
];

// Section 5: Lifestyle Grid
export const lifestylePosts: MagazineCoPost[] = [
  {
    title: "Social Norms Study: Urban Life & Complexities of Real Friendship",
    category: "Urban Life",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Tragic Story of Famous Singer will Bring Tears into Your Eyes",
    category: "Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  }
];

// Section 5 Sidebar: Popular Posts
export const popularPosts: MagazineCoPost[] = [
  {
    title: "Should you Begin Your Day with a Detox Drink? Experts Answer",
    author: "Shane Doe",
    image: "https://images.unsplash.com/photo-1610970881699-44a55b4cfd87?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Scents for All: Unisex Perfumes are Growing in Popularity",
    author: "Shane Doe",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Top Secrets: Top Hacks That Make Perfume Last Longer",
    author: "Shane Doe",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  }
];

// Section 7: Celebs News Carousel
export const celebsNews: MagazineCoPost[] = [
  {
    title: "Meet the Real-life Mother and Son Co-starring in Movie",
    image: "https://images.unsplash.com/photo-152202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=60",
    date: "Jan 15, 2021"
  },
  {
    title: "Red Notice Has Too Many Movie Stars & Not Enough Actors",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Winter Movies 2021: Here’s What’s Coming Soon to Streaming & Theaters",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Celebrity Hunted 2023: Who is Taking Part in the Channel 4 Show?",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Marvel Movies in Order: How to Watch Chronologically",
    image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Review: Winter Movies 2023 Streaming in Theaters",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021",
    rating: 8.5
  },
  {
    title: "The 10 Most Unappreciated Movies From The ’90s",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  },
  {
    title: "Actress Receive Achievement Award at Film Festival",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=60",
    date: "Jan 14, 2021"
  }
];

// Footer Widgets
export const footerPicks: MagazineCoPost[] = [
  {
    title: "Remote Work Appears to be Here To Stay, Especially for Women",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&auto=format&fit=crop&q=60",
    date: "Jun 22, 2023"
  },
  {
    title: "Extreme Travel Is Inspiring New Types of Insurance",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&auto=format&fit=crop&q=60",
    date: "Jan 22, 2021"
  },
  {
    title: "How Abortion Became an ‘Achilles Heel’ for US Republicans",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&auto=format&fit=crop&q=60",
    date: "Jan 22, 2021"
  }
];

export const footerPopular: MagazineCoPost[] = [
  {
    title: "New High Tech Number Plate to Detect Uninsured Drivers",
    image: "https://images.unsplash.com/photo-1558441719-ff34b0524a24?w=200&auto=format&fit=crop&q=60",
    date: "Jan 11, 2020",
    views: "9,847"
  },
  {
    title: "Wall Street Ends Down, Snaps Weekly Winning Streak",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=200&auto=format&fit=crop&q=60",
    date: "Jan 11, 2020",
    views: "9,818"
  },
  {
    title: "Best Drill Machine for Your Home Tool Kit Essentials",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200&auto=format&fit=crop&q=60",
    date: "Jan 11, 2020",
    views: "9,774"
  }
];

// Latest Posts Loop for Section 5
export const latestPostsLoop: MagazineCoPost[] = [
  {
    title: "Remote Work Appears to be Here To Stay, Especially for Women",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=60",
    author: "Shane Doe",
    date: "Jun 22, 2023",
    readTime: "7 Mins Read",
    excerpt: "To understand the new politics stance and other pro nationals of remote working models."
  },
  {
    title: "Extreme Travel Is Inspiring New Types of Insurance",
    category: "Tourism",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&auto=format&fit=crop&q=60",
    author: "Shane Doe",
    date: "Jan 22, 2021",
    readTime: "3 Mins Read",
    excerpt: "To understand the new politics stance and other pro nationals of niche travel risk coverages."
  },
  {
    title: "How Abortion Became an ‘Achilles Heel’ for US Republicans",
    category: "World",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=60",
    author: "Shane Doe",
    date: "Jan 22, 2021",
    readTime: "7 Mins Read",
    excerpt: "To understand the new politics stance and other pro nationals of public policy debates."
  },
  {
    title: "How To Style Joggers As More Than Just Athleisure Wear",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1554062614-6c62c9363056?w=400&auto=format&fit=crop&q=60",
    author: "Shane Doe",
    date: "Jan 19, 2021",
    readTime: "7 Mins Read",
    excerpt: "To understand the new politics stance and other pro nationals of urban fashion trends."
  },
  {
    title: "Tourism Sector on Track to Inject $200 Billion into Economy",
    category: "Business",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&auto=format&fit=crop&q=60",
    author: "Shane Doe",
    date: "Jan 18, 2021",
    readTime: "5 Mins Read",
    excerpt: "To understand the new politics stance and other pro nationals of national finance indicators."
  }
];
