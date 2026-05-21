export const DH_BASE =
  "https://smartmag.theme-sphere.com/digital-hub/wp-content/uploads/sites/42/2023/11/";
export const DH_LOGO = `${DH_BASE}Logo-DigitalHub-02@05x.png`;
export const DH_TOP_AD = `${DH_BASE}DigitalHub-Top.jpg`;

export type DhPost = {
  title: string;
  cat?: string;
  date?: string;
  author?: string;
  views?: string;
  viral?: boolean;
  img?: string;
  score?: string;
};

export const heroFeatured: DhPost = {
  title: "Tecno Spark 10 Launched With Up To 16GB RAM, 32MP Selfie Camera",
  author: "Shane Doe",
  date: "Jan 11, 2020",
  img: `${DH_BASE}aa39177765a46c093d98650713383fd5-768x960.jpeg`,
};

export const newsJustIn: DhPost[] = [
  {
    title: "Save $25 on Philips Headphone For A Great Sounding Over-Ear Headphone",
    cat: "Gadgets",
    date: "Mar 15, 2020",
    views: "103",
    img: `${DH_BASE}80cedabfa538fa28a06f339ba97bbc95-300x200.jpeg`,
  },
  {
    title: "Take Your Photography to The Next Level with This Drone",
    cat: "Drones",
    date: "Jan 13, 2020",
    views: "9,067",
    viral: true,
    img: `${DH_BASE}a492ab5e6f0fceb65438366ff24f9258-281x300.jpeg`,
  },
  {
    title: "The 15 Best Early Black Friday Smartwatch Deals",
    cat: "Smart Watches",
    date: "Jan 12, 2020",
    views: "12,042",
    viral: true,
    img: `${DH_BASE}f150071202406148beb0293def0a0708-300x240.jpeg`,
  },
  {
    title: "These Noise Canceling Earbuds Promise Two Full Days of Battery Life",
    cat: "Phone Accessories",
    date: "Jan 11, 2020",
    views: "81",
    img: `${DH_BASE}ca42c2999c701e880a4115b7104705a9-200x300.jpeg`,
  },
];

export const mobilePhones: DhPost[] = [
  {
    title: "Schools, Parents Disagree over Bans on Student Mobile Phones",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    img: `${DH_BASE}0e134db4f87218331a4d71aac2f855b3-450x286.jpeg`,
  },
  {
    title: "iPhone 11 Pro Max Price Slashed By 18%! Hurry Up, Grab It Now",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    img: `${DH_BASE}c9511f94e26637ac1169097002f00ea8-450x300.jpeg`,
  },
  {
    title: "HMD Global Announces New HMD Brand for New Mobile Phones",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    img: `${DH_BASE}7be1c47104f902923f06caa5b4e142d0-450x216.jpeg`,
  },
];

export const scienceInnovation: DhPost[] = [
  {
    title: "Bodily Harms: How AI and Biometrics Curtail Human Rights",
    cat: "Biometrics",
    date: "Mar 15, 2020",
    views: "45",
    img: `${DH_BASE}861024a898b0d3b05acd6fae2cdb78c6-300x200.jpeg`,
  },
  {
    title: "CarPlay Concept Shows Off a Modular UI Inspired by Next-Gen Design",
    cat: "Technology",
    date: "Mar 15, 2020",
    views: "585",
    img: `${DH_BASE}5510e3ce6f11a6aa1aaa46b5b62902b3-300x193.jpeg`,
  },
  {
    title: "Study: Earbuds Use, Youngsters at High Risk of Hearing Loss",
    cat: "Gadgets",
    date: "Mar 15, 2020",
    views: "34",
    img: `${DH_BASE}d45b42455fc7a1eaa7042786de6f19b9-200x300.jpeg`,
  },
  {
    title: "These Are The Best PC VR Games That You Must Play In 2023",
    cat: "Gaming VR",
    date: "Mar 15, 2020",
    views: "96",
    img: `${DH_BASE}Depositphotos_286775054_xl-2015-1-300x130.jpg`,
  },
];

export const mostReadPosts: DhPost[] = [
  { title: "PS5 vs Xbox Series XS vs Switch Launch Sales Comparison" },
  { title: "New Oculus VR Kills IRL If Your Game Character Dies" },
  { title: "Hologate VR Serves Its Five Millionth Customer" },
  { title: "The Nintendo Switch Can't Seem To Handle Pokémon" },
  { title: "The Fujifilm X-T30 is The Perfect Camera for Gaming" },
];

export const trendingFeatured: DhPost = {
  title: "Rise Of The Robots Raises A Big Question: What Will Workers Do?",
  author: "Shane Doe",
  date: "Sep 13, 2020",
  img: `${DH_BASE}04b14f3f5c9fbe2fac1ba38f7c8c6987-1200x800.jpeg`,
};

export const trendingGrid: DhPost[] = [
  {
    title: "Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?",
    date: "Sep 12, 2020",
    img: `${DH_BASE}e3ac378f7cd6066d4d9ce35a2af14443-768x514.jpeg`,
  },
  {
    title: "T-Mobile US Faces Class-Action Suit From AT&T and Verizon Subscribers",
    date: "Sep 11, 2020",
    img: `${DH_BASE}e7ce131632d204e132a0168b35e017ca-768x533.jpg`,
  },
  {
    title: "Apple Watch's ECG Can Help Diagnose Heart Problem: Research",
    date: "Sep 10, 2020",
    img: `${DH_BASE}79d34b0cdcf7be65e623f9061935d5d5-768x665.jpeg`,
  },
  {
    title: "Massive Tech Glitch Gives Out 'Free Money' From Cash Machines",
    date: "Sep 9, 2020",
    img: `${DH_BASE}18f0b132ee35df545fbfe4c0c5fc0e92-768x512.jpeg`,
  },
];

export const techNewsFeatured: DhPost = {
  title: "Here's What Apple Really Means When It Says \"Shot On iPhone\"",
  author: "Shane Doe",
  date: "Nov 19, 2022",
  img: `${DH_BASE}2366be18ca1b723028734270c71c8fad-768x432.jpeg`,
};

export const techNewsList: DhPost[] = [
  {
    title: "HTC Launches a Vive VR Headset Into Space for Astronaut Mental Health",
    cat: "Gaming VR",
    date: "Mar 10, 2022",
    views: "68",
    img: `${DH_BASE}68ddd17b2ff21fb543e45fd45f45e7f0-300x200.jpg`,
  },
  {
    title: "Samsung is Developing Bright MicroLED on Displays for AR Headsets",
    cat: "Phones",
    date: "Mar 10, 2022",
    views: "62",
    img: `${DH_BASE}18fb7f8de4e851fa7fbe24e4c9b287b2-300x200.jpeg`,
  },
  {
    title: "The Best Early Black Friday Deals on Gadgets, Laptops and Accessories",
    cat: "Smart Watches",
    date: "Mar 10, 2022",
    views: "58",
    img: `${DH_BASE}75fedfdd6642f98c78d87a03a7c78c4a-300x150.jpeg`,
  },
  {
    title: "Simple Tips and Tricks to Take Care of Your Expensive DSLR Camera",
    cat: "HDR Cameras",
    date: "Mar 12, 2021",
    views: "89",
    img: `${DH_BASE}e7518da83bff87a96d8724886f3bfa1d-300x200.jpeg`,
  },
  {
    title: "4 Collaboration Security Mistakes Companies Are Still Making",
    cat: "Technology",
    date: "Jan 19, 2021",
    views: "54",
    img: `${DH_BASE}4c2a652eef8a29d58df05127874350ef-300x200.jpeg`,
  },
  {
    title: "The Best Wireless Earbuds for the Samsung Galaxy S25 & Other Models in 2024",
    cat: "Phone Accessories",
    date: "Jan 16, 2021",
    views: "117",
    img: `${DH_BASE}8d4256133a3d12605fc72c271295230d-300x200.jpeg`,
  },
];

export const gamingNews: DhPost[] = [
  {
    title: "Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched",
    img: `${DH_BASE}a1cd0aabb95349119fa92372ce487b21-450x253.jpg`,
  },
  {
    title: "Thousands Of PC Games Discounted In New Black Friday Sale",
    img: `${DH_BASE}c2108086a4ee041630c93aeda239e86d-450x253.jpeg`,
  },
  {
    title: "A Piece of The Wrecked 1986 Challenger Space Shuttle was Found",
    img: `${DH_BASE}155771d18a8d65e0dc2992a6b2251584-450x253.jpeg`,
  },
  {
    title: "Security Cameras Make Us Feel Safe, but Are They Worth the Invasion?",
    img: `${DH_BASE}a4ebdc6c8fabaa831c7747d3707c6bf0-450x253.jpeg`,
  },
];

export const editorsPicksMain: DhPost[] = [
  {
    title: "PC Controllers 2024: DigitalHub Buyer's Guide to Gamepads",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    img: `${DH_BASE}3c76e1877f095ba8ebca8a6c106327bd-450x300.jpeg`,
  },
  {
    title: "Apple Wants To Make It Easier To Buy An iPhone 15 Pro For The Holidays",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    score: "8.5",
    img: `${DH_BASE}f8dfadc475ab06e4e81c280edf363546-450x800.jpeg`,
  },
  {
    title: "Smart Watch Vs Fitness Tracker: How To Find The Perfect Fit",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    score: "8.5",
    img: `${DH_BASE}687a23d4d1f760dd3254bbf68637f26b-450x563.jpeg`,
  },
];

export const editorsPicksSmall: DhPost[] = [
  {
    title: "Audi Q3 40 TFSI: Top Reasons to Consider Buying This SUV in 2023",
    date: "Jan 12, 2021",
    img: `${DH_BASE}7187e2811b1c0a78fe5aa0228a571cd2-450x253.jpeg`,
  },
  {
    title: "G PlayStore Will Ask You to Update Apps if They Crash",
    date: "Jan 12, 2021",
    img: `${DH_BASE}f823573f2acbe1f9b2fbd34b8a456c8e-450x300.jpeg`,
  },
  {
    title: "Apple's Beats SP Headphones Listed in FCC Database Ahead of Launch",
    date: "Jan 12, 2021",
    img: `${DH_BASE}5715839e45cc34f4cc3ee19ef6232abf-450x300.jpeg`,
  },
  {
    title: "How AI Automation are Transforming Train Food Delivery Aggregators",
    date: "Jan 12, 2021",
    img: `${DH_BASE}069370fe1a09b2f07c006d5c2cda159b-450x296.jpeg`,
  },
];

export const footerPopular: DhPost[] = [
  {
    title: "The 15 Best Early Black Friday Smartwatch Deals",
    date: "Jan 12, 2020",
    views: "12,044",
    viral: true,
    img: `${DH_BASE}f150071202406148beb0293def0a0708-300x240.jpeg`,
  },
  {
    title: "Take Your Photography to The Next Level with This Drone",
    date: "Jan 13, 2020",
    views: "9,067",
    viral: true,
    img: `${DH_BASE}a492ab5e6f0fceb65438366ff24f9258-281x300.jpeg`,
  },
  {
    title: "Popular New Xbox Game Pass Game Being Review Bombed With \"0s\"",
    date: "Jan 14, 2021",
    views: "7,730",
    viral: true,
    img: "https://smartmag.theme-sphere.com/digital-hub/wp-content/uploads/sites/42/2021/01/jose-gil-2pNdTBn4C7U-unsplash-450x300.jpg",
  },
];

export const footerPicks: DhPost[] = [
  {
    title: "Here's What Apple Really Means When It Says \"Shot On iPhone\"",
    date: "Nov 19, 2022",
    img: `${DH_BASE}2366be18ca1b723028734270c71c8fad-300x169.jpeg`,
  },
  {
    title: "HTC Launches a Vive VR Headset Into Space for Astronaut Mental Health",
    date: "Mar 10, 2022",
    img: `${DH_BASE}68ddd17b2ff21fb543e45fd45f45e7f0-300x200.jpg`,
  },
  {
    title: "Samsung is Developing Bright MicroLED on Displays for AR Headsets",
    date: "Mar 10, 2022",
    img: `${DH_BASE}18fb7f8de4e851fa7fbe24e4c9b287b2-300x200.jpeg`,
  },
];
