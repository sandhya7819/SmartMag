export const VD_BASE = "https://smartmag.theme-sphere.com/thevoice-daily/wp-content/uploads/sites/57/2024/07/";
export const VD_LOGO = `${VD_BASE}Logo-TheVoiceDaily-01@2x.png`;
export const VD_MID_AD = `${VD_BASE}Mid-NationalPress.jpg`;
export const VD_SIDEBAR_AD = `${VD_BASE}Tall-Woman.jpg`;
export const VD_TOP_AD = `${VD_BASE}CityToday-Top.jpg`;

export type VdPost = {
  title: string;
  cat?: string;
  date?: string;
  updated?: string;
  img?: string;
  excerpt?: string;
  author?: string;
  score?: string;
};

export const trendingHeadlines = [
  "Review: MotoAmerica Fans Will Be Able To Bet On Races In 2024",
  "Papua New Guinea Is In a State of Emergency As Riots Kill 16",
];

export const whatsHot: VdPost[] = [
  { title: "Modi-Gates Meeting: A Collaboration for Profit and Control Over India’s Digital Economy", img: `${VD_BASE}c6e37f92be00ce5868f86420e2b50732-300x221.jpeg` },
  { title: "South Korea’s Top Court Grants State Benefits To Gay Couples In Landmark Ruling", img: `${VD_BASE}484df2ed8232a177576f6a083072b2cd-300x169.jpeg` },
  { title: "Election 2024: What Will Markets Do With Trump Victory Over Biden?", img: `${VD_BASE}visuals-vnfyiXo0BR8-unsplash-300x210.jpg` },
];

export const featuredMain: VdPost = {
  title: "Demonstrators Call on US to Continue to Support Ukraine War Efforts Against Russia",
  cat: "Ukraine Conflict",
  updated: "Sep 12, 2024",
  img: `${VD_BASE}302fbffe31d2bc270c023156bbf7a6c8-1024x683.jpeg`,
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US-based journalist Peter Wilson,…",
};

export const featuredSide: VdPost[] = [
  { title: "Digital Economy to See Exponential Growth to USD 800 bn by 2030", cat: "Economy", date: "Jan 16, 2021" },
  { title: "WHO Sounds Alarm on Viral Hepatitis Infections Claiming 3500 Lives Each Day", cat: "Health", date: "Jan 15, 2021" },
  { title: "Review: AI Tops World Economic Forum’s List of Top 10 Emerging Technologies of 2024", cat: "Investments", date: "Jan 15, 2021" },
  { title: "Coronavirus Latest: Japan’s Vaccination Rate Tops 75% As Cases Drop Drastically", cat: "Vaccines", date: "Jan 15, 2021" },
  { title: "Celebrating Russian Art: Exhibition of Contemporary Works in the Capital Moscow", cat: "Politics", date: "Jan 15, 2021" },
];

export const gridSix: VdPost[] = [
  { title: "Rafael Nadal and Andy Murray Could be Bidding Adieu to Tennis", img: `${VD_BASE}fcdb165c1436ad73813305180360e6d7-450x281.jpeg` },
  { title: "Syrian Refugees Attacked in Turkey: ‘The Crisis Makes Us Perfect Scapegoats’s", img: `${VD_BASE}bb8c5e29d2d9df91dea8643dfaefd5ba-450x563.jpeg` },
  { title: "Climate Change: Four New Emperor Penguin Groups Found by Satellite", img: `${VD_BASE}09550a5c46410e13b3f393fa4eea1910-450x299.jpeg` },
  { title: "First F-16 Jets Heading to Ukraine After Months of Training and Negotiations", img: `${VD_BASE}86b2978e93a6545b187f8abee3927ecd-768x351.jpeg` },
  { title: "Just Stop Oil Activist Urges Jurors to Apply ‘Conscience’ in M25 Protest Trial", img: `${VD_BASE}b4dc89718c7860056b762f02b5e17bd4-450x296.jpeg` },
  { title: "Bill Gates Explains The ‘Safest’ Age to Give a Kid a Cellphone", img: `${VD_BASE}c6e37f92be00ce5868f86420e2b50732-450x332.jpeg` },
];

export const leftColumnPosts: VdPost[] = [
  { title: "New Government, New Opportunity To End The Hostile Environment For Refugees", cat: "Politics", date: "Jan 12, 2021" },
  { title: "Review: How Hard will it be to Defend Ukraine from Russia?", cat: "Ukraine Conflict", date: "Jan 12, 2021" },
  { title: "Europeans are Rushing to Distance Themselves from Putin", cat: "Ukraine Conflict", date: "Jan 12, 2021" },
];

export const blueMountains: VdPost = {
  title: "The Blue Mountains of Australia Are Ready to Welcome Tourists Back",
  author: "John Doe",
  updated: "Sep 12, 2024",
  img: `${VD_BASE}0b107c55eed4710e4936ac721ae53d68-450x300.jpeg`,
};

export const leftListPosts: VdPost[] = [
  { title: "Hospital Fined for Allowing Medical Student to Suture Patient", cat: "Careers", date: "Jan 12, 2021" },
  { title: "Russian Satellite Breaks up in Space, Forces ISS Astronauts to Shelter", cat: "Technology", date: "Jan 11, 2021" },
  { title: "Large Study of COVID Vaccine Side Effects in Sweden", cat: "Research", date: "Jan 11, 2021" },
  { title: "AMD Mobile Reboot: New Ryzen AI 300-Series Laptop Chips Are Beasts", cat: "Gaming", date: "Jan 11, 2021" },
  { title: "Review: Denmark Proposes Corona Pass Mandate for Workers", cat: "Health", date: "Jan 11, 2021" },
  { title: "World’s Top Military Powers All Facing Issues with Fifth-Gen Fighters", cat: "Technology", date: "Jan 11, 2021" },
  { title: "New Shapes of Photons Open Doors to New Advanced Optical Technologies", cat: "Technology", date: "Jan 10, 2021" },
  { title: "Does CBD Live Up to Its Claims of Health Benefits?", cat: "Fitness", date: "Jan 9, 2021" },
  { title: "Greece’s Famous Beach May Close Due to Safety Risk", cat: "Tourism", date: "Jan 8, 2021" },
  { title: "Women Living In More Walkable Neighborhoods Have Lower Rates of Some Cancers", cat: "Tourism", date: "Jan 8, 2021" },
  { title: "Covid-Resistant People Inspire New Vaccine Tactic", cat: "Vaccines", date: "Jan 7, 2021" },
  { title: "Record-Breaking Hudson Valley Real Estate Market Pace Continues", cat: "Economy", date: "Jan 5, 2021" },
];

export const rightListFeatured: VdPost[] = [
  { title: "Here’s What Is Known About the Suspect Who Tried to Assassinate Trump", cat: "US & Canada", date: "Jan 4, 2021", img: `${VD_BASE}1bd51c153e019db22af2001dccd53a2b-300x206.jpeg`, excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and…" },
  { title: "Defiant Biden Doubles Down on Pledge to Stay in White House Race", cat: "US Elections", date: "Jan 4, 2021", img: `${VD_BASE}b8f92d6d6007d5e3c3a2b007d89c2f68-300x167.jpeg`, excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and…" },
];

export const overlayHero: VdPost = {
  title: "Car Crash Statistics: Insight Into the Latest Car Crash Fatality Stats",
  author: "John Doe",
  date: "Feb 11, 2021",
  img: `${VD_BASE}fb408f78c22d6136f425b48dee5c21bd-683x1024.jpeg`,
};

export const sidebarSmall: VdPost[] = [
  { title: "North East Politician Speak Out About Election Abuse", img: `${VD_BASE}ef7814d8cc2137899e9c2372ce86a5bc-150x100.jpeg` },
  { title: "Bitcoin ETF Inflow: Fidelity Overtakes BlackRock In Surprise Move", img: `${VD_BASE}aeb320d31079c7690eb239ef0c01052e-150x92.jpeg` },
  { title: "Growing Democratic Concerns Over Biden’s 2024 Re-Election Bid", img: `${VD_BASE}09edc406fba218d70d9d04df09c046d1-150x94.jpeg`, score: "7.2" },
  { title: "Tourism Industry of Costa Rica Soaring With 14.5% Increase", img: `${VD_BASE}4cffe0548fc3073c2c86d694c9758c02-150x100.jpeg` },
  { title: "A Crisis of One’s Own: The Politics of Trauma in Europe’s Election Year", img: `${VD_BASE}0614cc992ea6f725abe46c5d99e5d1e8-150x70.jpeg` },
];

export const climatePosts: VdPost[] = [
  { title: "What is Desertification and Why is it Important to Understand?", img: `${VD_BASE}21634925dadf56388713aca2e969be04-450x301.jpeg` },
  { title: "Indoor Farming: A Climate Solution with Hidden Dangers for Workers", img: `${VD_BASE}12f7140ebb6e4777f5c19ade9f1b6493-450x300.jpeg` },
  { title: "Canada Wildfires Drive Hundreds from Homes as More Scorching Heat Forecast", img: `${VD_BASE}f63357cab88ff4efc490857746e2f8c7-450x675.jpeg` },
  { title: "World’s Largest Iceberg Breaks Free, Heads Toward Southern Ocean", img: `${VD_BASE}5c774eb708c6e42bda9165dcae176365-450x600.jpeg` },
];

export const moneyBusiness: VdPost = {
  title: "EU Central Bank Holds Interest Rates, Says Domestic Price Pressures ‘Still High’",
  cat: "Uk & Europe",
  date: "Mar 11, 2022",
  img: `${VD_BASE}Depositphotos_415219156_XL-1-768x512.jpg`,
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest…",
};

export const sportsMain: VdPost = {
  title: "British Soccer Clubs Barred From Traveling to Germany, TCL is Disrupted",
  cat: "Football",
  date: "Jul 18, 2024",
  updated: "Sep 12, 2024",
  img: `${VD_BASE}d3e037ae0ac042874d07c34a4f26f8ed-768x488.jpeg`,
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon…",
};

export const worldFeatured: VdPost = {
  title: "Modi-Gates Meeting: A Collaboration for Profit and Control Over India’s Digital Economy",
  cat: "Politics",
  date: "Jul 18, 2024",
  updated: "Sep 12, 2024",
  img: `${VD_BASE}c6e37f92be00ce5868f86420e2b50732-768x567.jpeg`,
  excerpt: "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest…",
};

export const EXCERPT =
  "To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and…";
