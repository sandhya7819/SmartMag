"use client";
import BeTheChangeHeader from "@/components/BeTheChangeHeader";
import BeTheChangeFooter from "@/components/BeTheChangeFooter";
import Link from "next/link";
import { MessageCircle, Star, TrendingUp, Calendar, Heart, Shield, Terminal, ArrowRight } from "lucide-react";
import { useState } from "react";

// Types
interface Post {
  title: string;
  category?: string;
  date: string;
  rating?: string;
  img: string;
  excerpt?: string;
}

// Data Sets
const heroPosts: Post[] = [
  {
    category: "Technology",
    title: "Most Teens Actually Have Healthy Relationship with Digital Technology: Study",
    date: "Jan 6, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/bd63b385cd05834dc72f3c4ff6305173-1024x683.jpeg"
  },
  {
    category: "Lifestyle",
    title: "This Is What Your Lifestyle Will Be Like If You Retire at 55 With $5 Million",
    date: "Jan 5, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/52e8df359def61be6ace266d15fa1767-768x512.jpeg"
  },
  {
    category: "Fashion & Celebs",
    title: "Runway Royalty: World's Top 10 Highest-Paid Models of 2023",
    date: "Jan 4, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/be53686c02fc88f4c9efc1b4993b3466-768x1152.jpeg"
  }
];

const featuredNowPosts: Post[] = [
  {
    category: "Fashion & Celebs",
    title: "Are Our TV Dramas Looking for Love in All the Wrong Places?",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/516d93a7ca3a5a4ce8315b3bca82e7ef-450x360.jpeg"
  },
  {
    category: "World",
    title: "Singapore to Triple AI Talent to 15000 Experts, Deputy PM Says",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/1f28f6dccf9e0ef0cbb267d1fea3df0b-450x300.jpeg"
  },
  {
    category: "Lifestyle",
    title: "Find Smart Home Décor Items and Collections We're Excited About Now",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/cd407154ccadcec3e1a2f83351aeaf7c-450x330.jpeg"
  },
  {
    category: "Lifestyle",
    title: "Coddled Junk-Eating Pets Getting Lifestyle Diseases Like Diabetes, BP",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/0efa8d468b335ca4e9946e2040442dc2-450x300.jpeg"
  },
  {
    category: "Fashion & Celebs",
    title: "Celebrity Hunted 2023: Who is Taking Part in the Channel 4 Show?",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/85b6705c951b68cf94ec72bda4d435af-450x296.jpeg"
  }
];

const mainWorldPost: Post = {
  category: "Fashion & Celebs",
  title: "Behind the Scenes Look at Stacy Martin's Film Festival Stunning Looks",
  date: "Jan 11, 2020",
  img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/42b2b4239b6c9363056004ee5280bdf0-999x1024.jpeg",
  excerpt: "To understand the new style and stunning designs shown at the recent global festivals, we should look to Stacy Martin's selection of custom dresses..."
};

const sideWorldPosts: Post[] = [
  {
    title: "7 Fashion Brands That Are Owned By Bollywood Celebrities",
    date: "Jan 11, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/07e75b31971e4b15017290ab29fd1135-768x576.jpeg"
  },
  {
    title: "What Color Should I Use for My Living Room Décor?",
    date: "Jan 11, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/collov-home-design-5HHAP5UWFM-unsplash-768x768.jpg"
  },
  {
    title: "11 Best Women's Perfumes You Can Get on Nordstrom",
    date: "Jan 11, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/2384121666d51c7df504941245768833-768x1024.jpeg"
  },
  {
    title: "Proof That the Adidas Samba Sneakers are Celebrity-Approved",
    date: "Jan 11, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/5887fcf0a48f273675744dcb4295c3de-768x443.jpeg"
  }
];

const whatsHotPosts: Post[] = [
  {
    title: "Fun Games: Kill The Boredom And Enjoy Your Family Time",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/b49fb6c176b4d7ec4cd12b2bad465588-1-300x185.jpeg"
  },
  {
    title: "Xbox Game Pass Is Practically Free in End of 2023 Deal",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/ef475228391d98c9021847c54e518dee-300x178.jpeg"
  },
  {
    title: "The Role of Flexible Roofing Membranes in Sustainable Building Design",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/8655bd68cc6deefc2da0e20c1271881d-300x200.jpeg"
  }
];

const editorsPicksPosts: Post[] = [
  {
    category: "Travel",
    title: "Greece's Famous Beach May Close Due to Safety Risk",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/3aba9ae044b7304c585ef9897b18c28b-450x253.jpeg"
  },
  {
    category: "Health",
    title: "How to Integrate Lifestyle Medicine in Primary Care",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/3ebd6a9eb26fbd389a21398463340818-450x300.jpeg"
  },
  {
    category: "Fitness",
    title: "10 Best Foods To Increase Your Physical Fitness as You Age",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/13759863902338e4b1e9f90547842d02-450x674.jpeg"
  },
  {
    category: "Automobile",
    title: "How AI in Self-Driving Cars Changing the Automobile Industry",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/49623cd0775addc18ca4ba837e6642c7-450x300.jpeg"
  },
  {
    category: "Mobiles",
    title: "Schools, Parents Disagree over Bans on Student Mobile Phones",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/af8488e1bcf32dfcead42abf2afc7d7a-450x287.jpeg"
  },
  {
    category: "Fashion",
    title: "Fashion Brand to Design NASA's New Spacesuits for Astronauts",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/361032d11552b16282e0ffa605ebb18f-450x300.jpeg"
  },
  {
    category: "Technology",
    title: "Samsung is Developing Bright MicroLED on Displays for AR Headsets",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/fc28d739e8a36584f2a69ba687bda887-450x300.jpeg"
  },
  {
    category: "Technology",
    title: "Non-Tesla EVs to Get Free First Supercharging Session in 18 Countries",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/384770f270b69d29739d1f28ad811eca-450x300.jpeg"
  }
];

const trendingNowPosts: Post[] = [
  {
    category: "Gaming",
    title: "Best PS5 Deals This Week: Save On Games, Gear, And More",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/a0e44599c3a27097077488d56f90c045-450x300.jpeg"
  },
  {
    category: "World",
    title: "France to Deploy 90,000 Police Officers to Patrol New Year's Eve Festivities",
    date: "Jan 22, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/0d297b8ad976e63e64c7cd084c7c7c59-450x269.jpeg"
  },
  {
    category: "Lifestyle",
    title: "Hard Rock Steps into Next Era of Lionel Messi Partnership",
    date: "Jan 16, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/022497246c47d77ffdab651bbfbc8279-450x300.jpeg"
  }
];

const darkTourismPosts: Post[] = [
  {
    title: "Boats & Water Sports Items: Most Exported Sporting Goods in 2023",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/a27d1f3a38864526826396d8c1c95977-450x300.jpeg"
  },
  {
    title: "International Companies Eye Singapore as Regional Hub for Tourism",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/fa7d341111b3ae06e0a2859911b74924-450x338.jpeg"
  },
  {
    title: "Greek Islands Fight for Identity Amid Tourism Boom",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/f960496770b716c7d7092b84e2986382-450x300.jpeg"
  },
  {
    title: "How Underwater and Deep-Sea Tourism Became so Popular",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/shutterstock_133697111-450x300.jpg"
  },
  {
    title: "Switzerland Wants to Allow Sunday Work in Urban Tourist Hotspots",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/354e52d5e31c98724ae6b18bacc73fa4-450x300.jpeg"
  }
];

const mainCulturePost: Post = {
  category: "Culture",
  title: "Weekly Round Up: Fashion and Culture News That Stole The Spotlight",
  date: "Mar 15, 2020",
  img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/ee34b3dc19115ad6f68c552513007886-1024x595.jpeg",
  excerpt: "Catch up on the latest happenings in modern photography, high fashion releases, and cultural milestones from this weekend..."
};

const sideCulturePosts: Post[] = [
  {
    title: "Greece's Famous Cultural Center Close Due to Safety Risk",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/ae114a8daf5f4d2b31feebd100e7e828-768x526.jpeg"
  },
  {
    title: "Fun Games: Kill The Boredom And Enjoy Your Family Time",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/1cac8aaa729fbd1dde5e180b681065c1-768x512.jpg"
  },
  {
    title: "The 10 Key Spring 2024 Fashion Trends To Know Now",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/189ceb16574b98b1d5e6bbb34ea79a3b-768x501.jpeg"
  },
  {
    title: "Famous Singers to Host Auditions for Spring Season Jan. 22-23",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/36b532a3fc152e4c47039700a731186c-768x510.jpg"
  }
];

const dontMissPosts: Post[] = [
  {
    category: "Lifestyle",
    title: "Annual Winter Wonderland Returns to Downtown Main Street",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/b49fb6c176b4d7ec4cd12b2bad465588-300x185.jpeg",
    excerpt: "The yearly magical attraction returned with a spectacular lighting ceremony, welcoming thousands of visitors in its opening weekend..."
  },
  {
    category: "Technology",
    title: "Jabra's Elite 4 Earbuds Forgo a Few Niceties for a $20 Price Cut",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/8d4256133a3d12605fc72c271295230d-300x200.jpeg",
    excerpt: "Jabra scales down some high-end features to provide a premium budget wireless entry, with remarkable sound signature and battery longevity..."
  },
  {
    category: "World",
    title: "The Fight for Abortion Rights: What to Know Going into 2024",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/b50116d056bcc3567112c8355ab8c560-300x200.jpeg",
    excerpt: "An inside analysis of recent legislature updates, public sentiments, and organizational milestones that set the tone for the upcoming year..."
  },
  {
    category: "World",
    title: "Trade Ministers Ready Deal to Lower China Dependence",
    date: "Mar 15, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/3247a99fa449de9bac6c71f872f55f52-300x200.jpeg",
    excerpt: "Major economic bodies align to establish diversified supply chain strategies, aiming to enhance localized manufacture capacity across member states..."
  }
];

const topRatedPosts: Post[] = [
  {
    title: "Check Out the Celebrities From the International Film Festival Awards 2023",
    date: "Jan 10, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/8f5881950a6d47fe8bdf7b8ef08945c9-450x300.jpeg",
    rating: "9.2"
  },
  {
    title: "HDR Photography Blew My Mind. It's Complicated",
    date: "Jan 9, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/shutterstock_299813909-450x300.jpg",
    rating: "8.5"
  },
  {
    title: "New Design Concept: Falls Hotel & Spa, North England",
    date: "Jan 8, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/bd096bad122e8f2f982bf880cae03448-450x303.jpeg",
    rating: "8.8"
  },
  {
    title: "Microwave Your Citrus Fruits For More Productive Juicing",
    date: "Jan 7, 2020",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/a0964f7498bc18260f34110bd2866d72-450x300.jpeg",
    rating: "7.9"
  }
];

const celebritiesPosts: Post[] = [
  {
    title: "10 Things You Didn't See on TV During the 2021 Latin Grammys",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/f1aa1aa376d50a27b70daec07aaa8ef9-450x376.jpeg"
  },
  {
    title: "Hollywood Actress Hits 4.5 Million Followers on Instagram",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/Depositphotos_274169818_XL-1-450x300.jpg"
  },
  {
    title: "Marvel Movies in Order: How to Watch Chronologically",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/Depositphotos_344357462_XL-3-450x377.jpg"
  }
];

const mostViewedPosts: Post[] = [
  {
    title: "Which Bridges are Closing for the New Year's Eve Celebrations?",
    date: "Jan 13, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/1bff89516c96c7b5a3019e964dddfbfe-300x212.jpeg"
  },
  {
    title: "How Do I Get Better at Money Without Overhauling My Life?",
    date: "Jan 13, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/32e6c4cc58b14aa398767a73b3f80e7c-300x200.jpeg"
  },
  {
    title: "AMD's Excellent Ryzen 5 5600X Processor is Currently at Half-Price",
    date: "Jan 12, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/cf3d2a0d3ad8541f04ff2a03a461c6a3-300x169.jpeg"
  },
  {
    title: "Daring Looks Celebrities Wore to Paris Fashion Week this Year",
    date: "Jan 12, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/572e54158c21cfb3d8011b027009e7f0-300x169.jpeg"
  }
];

const techReviewsPosts: Post[] = [
  {
    category: "Technology",
    title: "Top Tried & Tested Ways, You Can Increase Mobile Battery Life by 30%",
    date: "Jan 16, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/59467acc317229b35f7605257a027fc2-450x300.jpeg",
    excerpt: "Improving daily battery performance of high-refresh screen mobile devices doesn't require compromising on functionality. Here is our detailed setup guide..."
  },
  {
    category: "Technology",
    title: "Review of Oculus Studios: These 9 VR Studios Are Now Owned by Meta",
    date: "Jan 15, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/e3ac378f7cd6066d4d9ce35a2af14443-450x301.jpeg",
    rating: "8.9",
    excerpt: "With VR taking center stage in the digital landscape, Meta's strategic acquisitions of leading virtual reality developers outline future gaming ambitions..."
  },
  {
    category: "Technology",
    title: "T-Mobile Commits to Android 13 Updates on These Flagship Mobile Phones",
    date: "Jan 15, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/37c050137ecef4cdb13f88004de19bb0-450x313.jpeg",
    excerpt: "Mobile users on the magenta carrier will receive optimized builds of the latest OS starting next month, including multiple design language tweaks..."
  },
  {
    category: "Technology",
    title: "Review: Keep Mobile Technologies Safe with Adaptive Protection",
    date: "Jan 15, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/ea716788019796a95595b99247743b96-450x450.jpeg",
    rating: "7.2",
    excerpt: "Evaluating the latest localized machine learning shields that dynamically isolate rogue applications before they compromise private databases..."
  },
  {
    category: "Technology",
    title: "Can Earbuds Work Like Over-The-Counter Hearing Aids?",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/bf5614e25959c61aa70b385b4d8baa1e-450x252.jpeg",
    excerpt: "Medical standards evolve to approve consumer earwear with customized software filters as viable devices for mild to moderate hearing losses..."
  },
  {
    category: "Technology",
    title: "Tech Startup Strategies Now Every Business Can Embrace",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/bb48da7519f3c8999ef6a545d5b30e14-450x300.jpeg",
    excerpt: "Agile methodologies, sprint review cycles, and continuous feedback integration are no longer reserved strictly for software divisions..."
  },
  {
    category: "Technology",
    title: "Review: Animation Software Business Share, Market Size and Growth",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/5e4158b8b64b811e69339285bd86193c-450x300.jpeg",
    rating: "8.5",
    excerpt: "An extensive market study dissecting top visual creation platforms, cloud rendering solutions, and projected revenues through 2030..."
  },
  {
    category: "Technology",
    title: "HP Omen Gaming Laptops and PCs Got Huge Price Cuts This New Year",
    date: "Jan 14, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/0176627ded2cdab1858fc881c8339a89-450x253.jpeg",
    excerpt: "Looking for high frame rates on a budget? HP unloads stock on Intel 13th-generation setups with substantial discounts this winter..."
  }
];

const topAuthorsPosts: Post[] = [
  {
    title: "Fun Games: Kill The Boredom And Enjoy Your Family Time",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/b49fb6c176b4d7ec4cd12b2bad465588-1-450x278.jpeg"
  },
  {
    title: "Xbox Game Pass Is Practically Free in End of 2023 Deal",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/ef475228391d98c9021847c54e518dee-450x267.jpeg"
  },
  {
    title: "The Role of Flexible Roofing Membranes in Sustainable Building Design",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/8655bd68cc6deefc2da0e20c1271881d-450x300.jpeg"
  }
];

const gridNoHeadPosts: Post[] = [
  {
    title: "Street Style is Back! The 8 Biggest Trends at the Spring 2022 Shows",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/395bb9b447bd421d0623c8f713a6f1e1-450x300.jpeg"
  },
  {
    title: "85 Surprising Flower Meanings – Flower Language and Symbolism",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/09f3a250afb2cb4ca54b1ad287e3b4ad-450x276.jpeg"
  },
  {
    title: "Life After COVID: How Can People Be So Lonely Yet So Nervous",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/56627ef1b5d830a718df77c61e725c07-450x237.jpeg"
  },
  {
    title: "How to Get Over a Breakup: 9 Tips to Heal a Broken Heart",
    date: "Dec 7, 2023",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/b4d838207b633ec132d0c0adfd028926-450x291.jpg"
  }
];

const trendingTrendsPosts: Post[] = [
  {
    category: "Health & Care",
    title: "8 Morning Detox Drinks to Fight Air Pollution",
    date: "Jan 13, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/a9cf21d689d7ee7cf8bc3027b7b24b3f-450x300.jpeg"
  },
  {
    category: "Lifestyle",
    title: "The Five Best Coffee Mugs to Enjoy Your Morning Brew",
    date: "Jan 13, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/50795e02b4ff79664fab8d26424c187c-450x275.jpeg"
  },
  {
    category: "Science",
    title: "Ways by Which Supplements Impact Your Life: Therapist Explains",
    date: "Jan 13, 2021",
    img: "https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/d462e8b2547bfba22c9d36c77620a00a-450x300.jpeg"
  }
];

// Helper Section Header Component
function SectionTitle({ title, accentText }: { title: string; accentText?: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h3 className="text-[17px] font-black uppercase tracking-[2.5px] font-sans flex items-center gap-2 text-gray-900">
        <span className="w-2 h-2 bg-[#2ab391] rounded-full"></span>
        {title} {accentText && <span className="text-[#2ab391]">{accentText}</span>}
      </h3>
      <div className="flex-1 h-[1px] bg-gray-100"></div>
    </div>
  );
}

export default function BeTheChangePage() {
  const [likes, setLikes] = useState<Record<string, number>>({});

  const handleLike = (title: string) => {
    setLikes(prev => ({
      ...prev,
      [title]: (prev[title] || 0) + 1
    }));
  };

  return (
    <main className="min-h-screen bg-white text-[#16171f] font-sans selection:bg-[#2ab391] selection:text-black antialiased">
      <BeTheChangeHeader />

      <div className="container mx-auto px-4 lg:px-8 py-6">

        {/* HERO SECTION: Block 4 */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5 h-auto lg:h-[580px]">
            
            {/* Left Large Card (col-6) */}
            <div className="lg:col-span-6 relative group overflow-hidden bg-gray-900 rounded-sm cursor-pointer aspect-video lg:aspect-auto h-full">
              <img 
                src={heroPosts[0].img} 
                alt={heroPosts[0].title} 
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 opacity-85 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 lg:p-10 w-full space-y-3">
                <span className="bg-[#2ab391] text-black text-[9px] font-black uppercase tracking-[2px] px-2.5 py-1 inline-block rounded-sm">
                  {heroPosts[0].category}
                </span>
                <h2 className="text-white text-xl lg:text-3xl font-bold leading-tight group-hover:text-[#2ab391] transition-colors line-clamp-3">
                  {heroPosts[0].title}
                </h2>
                <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span className="text-white">Shane Doe</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span>{heroPosts[0].date}</span>
                </div>
              </div>
            </div>

            {/* Right Two Cards (col-6) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-1.5 h-full">
              {heroPosts.slice(1).map((post, idx) => (
                <div key={idx} className="relative group overflow-hidden bg-gray-900 rounded-sm cursor-pointer aspect-video lg:aspect-auto h-full">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 opacity-85 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-5 w-full space-y-2">
                    <span className="bg-[#2ab391] text-black text-[8px] font-black uppercase tracking-[2px] px-2 py-0.5 inline-block rounded-sm">
                      {post.category}
                    </span>
                    <h3 className="text-white text-base lg:text-lg font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-3">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                      <span className="text-white">Shane Doe</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FEATURED NOW: Block 5 (5-column Row) */}
        <section className="mb-16">
          <SectionTitle title="Featured" accentText="Now" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredNowPosts.map((post, idx) => (
              <div key={idx} className="group cursor-pointer space-y-3">
                <div className="aspect-[4/3] rounded-sm overflow-hidden bg-gray-50 shadow-sm relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" 
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase text-[#2ab391] tracking-wider block">{post.category}</span>
                  <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-3">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MAIN BODY AREA: col-66 (Main content) & col-33 (Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Column - col-66 */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* The World Focus Grid: Block 6 */}
            <div>
              <SectionTitle title="The" accentText="World" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left Large Post (col-7) */}
                <div className="md:col-span-7 group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded bg-gray-50 shadow-sm relative">
                    <img 
                      src={mainWorldPost.img} 
                      alt={mainWorldPost.title} 
                      className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105" 
                    />
                    <span className="absolute bottom-0 left-0 bg-[#2ab391] text-black text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-tr">
                      {mainWorldPost.category}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-bold leading-tight text-gray-900 group-hover:text-[#2ab391] transition-colors">
                      {mainWorldPost.title}
                    </h3>
                    <div className="flex items-center gap-2.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <span className="text-gray-900">Shane Doe</span>
                      <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                      <span>{mainWorldPost.date}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {mainWorldPost.excerpt}
                    </p>
                  </div>
                </div>

                {/* Right Small List (col-5) */}
                <div className="md:col-span-5 space-y-5 border-t md:border-t-0 pt-6 md:pt-0">
                  {sideWorldPosts.map((post, idx) => (
                    <div key={idx} className="flex gap-4 group cursor-pointer">
                      <div className="w-[88px] h-[66px] rounded overflow-hidden bg-gray-50 shrink-0">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[12.5px] font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 block font-semibold">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Banner CTA: Between columns */}
            <div className="bg-[#0a0b16] py-14 px-8 rounded-sm text-center relative overflow-hidden group shadow-lg border border-white/5">
              <div className="absolute inset-0 bg-[url('https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/354e52d5e31c98724ae6b18bacc73fa4-1024x683.jpeg')] opacity-10 bg-center bg-cover transition-transform duration-[12s] group-hover:scale-105"></div>
              <div className="relative z-10 space-y-4 max-w-xl mx-auto">
                <span className="text-[10px] font-black uppercase text-[#2ab391] tracking-[4px] block">Premium Layout Demo</span>
                <h3 className="text-white text-2xl lg:text-3xl font-bold leading-tight">Empowering Content Creators Worldwide</h3>
                <p className="text-gray-400 text-sm">Join over 12,000 satisfied users building dynamic, responsive blogs, magazines, and review stores with SmartMag.</p>
                <div className="pt-2">
                  <a 
                    href="https://theme-sphere.com/buy/go.php?theme=smartmag" 
                    target="_blank" 
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-[#2ab391] hover:bg-white hover:text-[#0a0b16] text-black font-black uppercase text-[11px] tracking-widest px-8 py-3.5 rounded transition-all duration-300 shadow-md"
                  >
                    Purchase SmartMag <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Editor's Picks Grid: Block 9 */}
            <div>
              <SectionTitle title="Editor's" accentText="Picks" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {editorsPicksPosts.map((post, idx) => (
                  <div key={idx} className="group cursor-pointer space-y-3">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden bg-gray-50 shadow-sm relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" 
                      />
                      <span className="absolute top-2 left-2 bg-black/75 text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[13.5px] font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-3">
                        {post.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 block font-semibold">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar - col-33 */}
          <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-[100px]">
            
            {/* Widget 1: What's Hot */}
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[2px] text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2ab391] rounded-full"></span> What's Hot
              </h4>
              <div className="space-y-5">
                {whatsHotPosts.map((post, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer items-start">
                    <div className="w-[72px] h-[54px] rounded overflow-hidden shrink-0 bg-gray-100">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-[12px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2 text-gray-900">
                        {post.title}
                      </h5>
                      <span className="text-[10px] text-gray-400 block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2: Newsletter Block */}
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm text-center space-y-4">
              <h4 className="text-[15px] font-black text-gray-900 uppercase tracking-wider">Subscribe to Updates</h4>
              <p className="text-gray-500 text-[12.5px] leading-relaxed">Get the latest creative news from FooBar about art, design and business.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address.." 
                  required
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-2.5 text-xs focus:outline-none focus:border-[#2ab391] text-gray-800 rounded text-center"
                />
                <button type="submit" className="w-full bg-[#2ab391] hover:bg-black hover:text-white text-black font-black uppercase text-[11px] py-3 rounded transition-colors tracking-widest">
                  Subscribe
                </button>
                <label className="flex items-start gap-2.5 cursor-pointer text-gray-400 text-[10px] leading-normal select-none text-left">
                  <input type="checkbox" required className="mt-0.5 rounded-sm" />
                  <span>By signing up, you agree to our terms and our privacy agreement.</span>
                </label>
              </form>
            </div>

            {/* Widget 3: Most Viewed */}
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[2px] text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2ab391] rounded-full"></span> Most Viewed
              </h4>
              <div className="space-y-5">
                {mostViewedPosts.map((post, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer items-start">
                    <span className="text-2xl font-black text-gray-200 w-6 leading-none shrink-0 text-center font-sans group-hover:text-[#2ab391] transition-colors">{idx + 1}</span>
                    <div className="space-y-1">
                      <h5 className="text-[12.5px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2 text-gray-900">
                        {post.title}
                      </h5>
                      <span className="text-[10px] text-gray-400 block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

        {/* TRENDING NOW: Block 10 */}
        <section className="mb-16">
          <SectionTitle title="Trending" accentText="Now" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingNowPosts.map((post, idx) => (
              <div key={idx} className="group cursor-pointer relative rounded overflow-hidden aspect-[4/3] bg-gray-900">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105 opacity-80 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full space-y-2">
                  <span className="bg-[#2ab391] text-black text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <h4 className="text-white text-base lg:text-lg font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <span className="text-[9px] text-gray-400 block font-semibold">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WALKABLE NEIGHBORHOODS BANNER: Block 11 */}
        <section className="mb-16">
          <div className="relative group overflow-hidden bg-gray-900 rounded aspect-[21/9] lg:aspect-[24/8] cursor-pointer shadow-lg">
            <img 
              src="https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/e62def8d8c44e9261b86fe478e57a964.jpeg" 
              alt="Walkable Neighborhoods" 
              className="w-full h-full object-cover transition-transform duration-[12s] group-hover:scale-102 opacity-75 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 lg:p-12 w-full max-w-3xl space-y-3">
              <span className="bg-[#2ab391] text-black text-[9px] font-black uppercase tracking-[2px] px-3 py-1 inline-block rounded">
                Lifestyle
              </span>
              <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-tight group-hover:text-[#2ab391] transition-colors">
                Women Living In More Walkable Neighborhoods Have Lower Rates of Some Cancers
              </h2>
              <div className="flex items-center gap-3 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                <span>By Shane Doe</span>
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                <span>Jan 5, 2020</span>
              </div>
            </div>
          </div>
        </section>

        {/* IMMERSIVE DARK SECTION: Block 12 */}
        <section className="bg-[#0b0c13] text-white p-8 lg:p-12 rounded shadow-2xl mb-16 overflow-hidden relative">
          <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-[17px] font-black uppercase tracking-[2.5px] flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-[#2ab391] rounded-full animate-pulse"></span>
                Explore <span className="text-[#2ab391]">Tourism</span>
              </h3>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider hover:text-[#2ab391] cursor-pointer transition-colors">View All</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {darkTourismPosts.map((post, idx) => (
                <div key={idx} className="group cursor-pointer space-y-3">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-white/5 relative">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[13px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-3">
                      {post.title}
                    </h4>
                    <span className="text-[10px] text-gray-500 block font-semibold">{post.date || "Dec 7, 2023"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPLIT AREA 2: col-66 (Culture/Don't Miss/Tech) & col-33 (Sidebar Widgets) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Column - col-66 */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Culture Focus Grid: Block 13 */}
            <div>
              <SectionTitle title="Culture" accentText="Weekly" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left Large (col-7) */}
                <div className="md:col-span-7 group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded bg-gray-50 shadow-sm relative">
                    <img 
                      src={mainCulturePost.img} 
                      alt={mainCulturePost.title} 
                      className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105" 
                    />
                    <span className="absolute bottom-0 left-0 bg-[#2ab391] text-black text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-tr">
                      {mainCulturePost.category}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-bold leading-tight text-gray-900 group-hover:text-[#2ab391] transition-colors">
                      {mainCulturePost.title}
                    </h3>
                    <div className="flex items-center gap-2.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <span className="text-gray-900">Shane Doe</span>
                      <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                      <span>{mainCulturePost.date}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {mainCulturePost.excerpt}
                    </p>
                  </div>
                </div>

                {/* Right Small List (col-5) */}
                <div className="md:col-span-5 space-y-5 border-t md:border-t-0 pt-6 md:pt-0">
                  {sideCulturePosts.map((post, idx) => (
                    <div key={idx} className="flex gap-4 group cursor-pointer">
                      <div className="w-[88px] h-[66px] rounded overflow-hidden bg-gray-50 shrink-0">
                        <img 
                          src={post.img} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[12.5px] font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 block font-semibold">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Don't Miss List Block: Block 16 */}
            <div>
              <SectionTitle title="Don't" accentText="Miss" />
              <div className="space-y-8">
                {dontMissPosts.map((post, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 group pb-8 border-b border-gray-100 last:border-0 last:pb-0 grow">
                    <div className="md:w-[260px] aspect-[4/3] md:aspect-auto md:h-[180px] overflow-hidden bg-gray-50 shrink-0 rounded relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <span className="absolute bottom-0 left-0 bg-[#2ab391] text-black text-[9px] font-black uppercase px-2.5 py-1.5 rounded-tr">
                        {post.category}
                      </span>
                    </div>
                    <div className="space-y-3 pt-1 flex-1">
                      <h4 className="text-xl font-bold leading-snug text-gray-900 group-hover:text-[#2ab391] transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        <span className="text-gray-900">Shane Doe</span>
                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                        <span>{post.date}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Reviews List: Block 22 */}
            <div>
              <SectionTitle title="Technology" accentText="Reviews" />
              <div className="space-y-8">
                {techReviewsPosts.map((post, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 group pb-8 border-b border-gray-100 last:border-0 last:pb-0 grow">
                    <div className="md:w-[260px] aspect-[4/3] md:aspect-auto md:h-[180px] overflow-hidden bg-gray-50 shrink-0 rounded relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <span className="absolute bottom-0 left-0 bg-black text-[#2ab391] border-r border-t border-white/10 text-[9px] font-black uppercase px-3 py-1.5 rounded-tr">
                        {post.category}
                      </span>
                      {post.rating && (
                        <div className="absolute top-3 right-3 bg-black/90 text-white border border-[#2ab391] w-11 h-11 rounded-full flex items-center justify-center font-black text-xs font-sans shadow-lg">
                          {post.rating}
                        </div>
                      )}
                    </div>
                    <div className="space-y-3 pt-1 flex-1">
                      <h4 className="text-xl font-bold leading-snug text-gray-900 group-hover:text-[#2ab391] transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        <span className="text-gray-900">Shane Doe</span>
                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                        <button 
                          onClick={() => handleLike(post.title)} 
                          className="flex items-center gap-1 text-gray-400 hover:text-[#2ab391] transition-colors normal-case font-bold"
                        >
                          <Heart size={11} className={likes[post.title] ? "text-[#2ab391] fill-[#2ab391]" : ""} /> 
                          <span>{likes[post.title] || 0} Likes</span>
                        </button>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column 2 */}
          <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-[100px]">
            
            {/* Social Channels follow count */}
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[2px] text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2ab391] rounded-full"></span> Social Channels
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Facebook", count: "14.2K", color: "bg-[#1877f2]" },
                  { name: "Twitter/X", count: "64.8K", color: "bg-[#0f1419]" },
                  { name: "Instagram", count: "89.2K", color: "bg-[#e1306c]" },
                  { name: "YouTube", count: "105.0K", color: "bg-[#ff0000]" }
                ].map((item, idx) => (
                  <div key={idx} className={`${item.color} p-4 rounded text-white flex flex-col items-center justify-center text-center cursor-pointer hover:brightness-105 transition-all shadow-md`}>
                    <span className="text-base font-black font-sans leading-none">{item.count}</span>
                    <span className="text-[10px] font-bold opacity-75 uppercase tracking-wider mt-1">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar banner ad */}
            <div className="border border-gray-100 p-4 rounded bg-gray-50">
              <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase block text-center mb-2">Advertisement</span>
              <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener" className="block relative overflow-hidden group">
                <img 
                  src="https://smartmag.theme-sphere.com/be-the-change/wp-content/uploads/sites/46/2023/12/361032d11552b16282e0ffa605ebb18f-450x300.jpeg" 
                  alt="SmartMag banner" 
                  className="w-full h-auto rounded transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#2ab391] text-black text-[10px] font-black uppercase px-4 py-2 rounded shadow-lg">Purchase Theme</span>
                </div>
              </a>
            </div>

            {/* Top Rated Post Widget */}
            <div className="bg-white border border-gray-100 p-6 rounded shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-[2px] text-gray-900 mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2ab391] rounded-full"></span> Top Rated Reviews
              </h4>
              <div className="space-y-4">
                {topRatedPosts.map((post, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer items-start">
                    <div className="w-[72px] h-[54px] rounded overflow-hidden bg-gray-100 shrink-0 relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <span className="absolute bottom-0 right-0 bg-[#2ab391] text-black text-[9px] font-black px-1 rounded-tl shadow-md">
                        {post.rating}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-[12px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2 text-gray-900">
                        {post.title}
                      </h5>
                      <span className="text-[10px] text-gray-400 block">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

        {/* WIDE SECTION: Celebrities Block (Block 18) */}
        <section className="mb-16">
          <SectionTitle title="Entertainment" accentText="Spotlight" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {celebritiesPosts.map((post, idx) => (
              <div key={idx} className="group cursor-pointer space-y-4">
                <div className="aspect-[4/3] rounded overflow-hidden bg-gray-50 shadow-sm relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" 
                  />
                  <span className="absolute bottom-2 left-2 bg-[#2ab391] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    Celebs
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2.5 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                    <span className="text-[#2ab391]">Hot Post</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WIDE GRID: Top Authors & No Head Grid Block 23 & 24 */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle title="Top" accentText="Authors Posts" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {topAuthorsPosts.map((post, idx) => (
                <div key={idx} className="group cursor-pointer space-y-3">
                  <div className="aspect-[4/3] rounded overflow-hidden bg-gray-50 shadow-sm">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <h4 className="text-[12.5px] font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-3">
                    {post.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <SectionTitle title="More" accentText="Trending Stories" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gridNoHeadPosts.map((post, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-[84px] h-[64px] rounded overflow-hidden bg-gray-100 shrink-0">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-[12.5px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2 text-gray-900">
                      {post.title}
                    </h5>
                    <span className="text-[10px] text-gray-400 block">{post.date || "Dec 7, 2023"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* BOTTOM SECTION: Trending Trends Block 25 */}
        <section className="mb-12">
          <SectionTitle title="Trending" accentText="Trends" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingTrendsPosts.map((post, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer items-start pb-6 border-b border-gray-100 md:border-b-0 md:pb-0 last:border-0 grow">
                <div className="w-[100px] h-[75px] rounded overflow-hidden bg-gray-50 shrink-0">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <span className="text-[8.5px] font-black uppercase text-[#2ab391] tracking-widest">{post.category}</span>
                  <h4 className="text-[13.5px] font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <span className="text-[10px] text-gray-400 block font-semibold">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <BeTheChangeFooter />
    </main>
  );
}
