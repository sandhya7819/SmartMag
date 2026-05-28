export interface Post {
  title: string;
  url: string;
  img: string;
  date: string;
  author?: string;
  cat?: string;
  excerpt?: string;
  isVideo?: boolean;
  isAudio?: boolean;
  isGallery?: boolean;
  rating?: string;
  views?: string;
}

const BASE_URL = "https://smartmag.theme-sphere.com/family-mag/wp-content/uploads/sites/50/2024/01/";

export const IMG = {
  hero_main: `${BASE_URL}1ade2787edc8ef099c43bd9b0231054b-768x512.jpeg`,
  messi: `${BASE_URL}50780ca7e67070f30f87c6c8339fe07a-450x300.jpeg`,
  vr_adv: `${BASE_URL}b00e745cfb9e384019953820aae3b855-450x300.jpeg`,
  meta_vr: `${BASE_URL}8247ef792c70f45bf36e469abe683b71-450x300.jpeg`,
  xbox: `${BASE_URL}5d9c3ff1f45b98368b12f271ada1edb6-450x300.jpeg`,
  dog_scratch: `${BASE_URL}f340e243a842dabdff59f1696723130f-450x300.jpeg`,
  dubai: `${BASE_URL}44647b1d15a04af780fe818f8a47e3a6-450x300.jpeg`,
  grooming: `${BASE_URL}2c0d2219611c17341489dff198a13f1e-450x300.jpeg`,
  olympic: `${BASE_URL}59467acc317229b35f7605257a027fc2-450x300.jpeg`,
  tmobile: `${BASE_URL}50e9759d4c8fee8e7e82d3f2bd1a7a7a-450x300.jpeg`,
  couple: `${BASE_URL}5715839e45cc34f4cc3ee19ef6232abf-450x300.jpeg`,
  retire: `${BASE_URL}52e8df359def61be6ace266d15fa1767-450x300.jpeg`,
  zodiac: `${BASE_URL}bd4e40484970069589aa848f51e020a5-450x300.jpeg`,
  stress: `${BASE_URL}b4a9fb7c919ea641ad5bab0748cbe846-450x300.jpeg`,
  caffeine: `${BASE_URL}8b67bba0242ab3b69951354a3e7f683f-450x300.jpeg`,
  generic: `https://smartmag.theme-sphere.com/family-mag/wp-content/uploads/sites/50/2021/01/d5c279c21fd7eb9bda49101c7f587195-450x300.jpeg`
};

export const megaMenuTech: Post[] = [
  {
    title: "Meta’s VR Latest Game Publisher is Now Called ‘Oculus Publishing’",
    url: "/family-mag",
    img: IMG.meta_vr,
    date: "Jan 11, 2020"
  },
  {
    title: "Hyperkin is Bringing Back the Iconic Xbox Controller S with Enhanced Duchess",
    url: "/family-mag",
    img: IMG.xbox,
    date: "Jan 11, 2020"
  },
  {
    title: "T-Mobile Commits to Android 13 Updates on These Flagship Mobile Phones",
    url: "/family-mag",
    img: IMG.tmobile,
    date: "Jan 10, 2020"
  },
  {
    title: "Things to Know About the Transformative Power of VR 3D Modeling",
    url: "/family-mag",
    img: IMG.vr_adv,
    date: "Jan 4, 2020"
  },
  {
    title: "Montreal Added the Most Tech Jobs in Canada in Recent Analysis Report",
    url: "/family-mag",
    img: IMG.generic,
    date: "Jan 7, 2020"
  }
];

export const megaMenuLifestyle: Post[] = [
  {
    title: "New York’s Metropolitan Museum will Return Stolen Ancient Sculptures",
    url: "/family-mag",
    img: IMG.hero_main,
    date: "Jan 6, 2020"
  },
  {
    title: "Why Does My Dog Scratch My Bed Sheets? Expert Insights & Behaviors",
    url: "/family-mag",
    img: IMG.dog_scratch,
    date: "Jan 15, 2020"
  },
  {
    title: "Sustainability Meets Luxury with New Dubai Villa Project The Acre",
    url: "/family-mag",
    img: IMG.dubai,
    date: "Jan 14, 2020"
  },
  {
    title: "This Is What Your Lifestyle Will Be Like If You Retire at 55 With $5 Million",
    url: "/family-mag",
    img: IMG.retire,
    date: "Jan 14, 2021"
  },
  {
    title: "Caffeine Problem? These are the key health warning signs to look out for",
    url: "/family-mag",
    img: IMG.caffeine,
    date: "Jan 18, 2024"
  }
];

export const heroMain: Post = {
  title: "New York’s Metropolitan Museum will Return Stolen Ancient Sculptures",
  url: "/family-mag",
  img: IMG.hero_main,
  cat: "Lifestyle",
  author: "Shane Doe",
  date: "Jan 6, 2020",
  excerpt: "New York’s Metropolitan Museum of Art announced that it will return 16 ancient sculptures to Cambodia and Thailand after they were linked to illicit trafficking network..."
};

export const heroGrid: Post[] = [
  {
    title: "Lionel Messi Selected as US Soccer Hall of Fame Popular Finalists 2024",
    url: "/family-mag",
    img: IMG.messi,
    cat: "World",
    author: "Shane Doe",
    date: "Jan 5, 2020"
  },
  {
    title: "Things to Know About the Transformative Power of VR 3D Modeling in Advertising",
    url: "/family-mag",
    img: IMG.vr_adv,
    cat: "Technology",
    author: "Shane Doe",
    date: "Jan 4, 2020"
  }
];

export const technologySection: Post[] = [
  {
    title: "Meta’s VR Latest Game Publisher is Now Called ‘Oculus Publishing’",
    url: "/family-mag",
    img: IMG.meta_vr,
    cat: "Technology",
    author: "Shane Doe",
    date: "Jan 11, 2020",
    excerpt: "To understand the new VR gaming publishing setup and other pro virtual spaces, Oculus has officially changed names to Oculus Publishing..."
  },
  {
    title: "Hyperkin is Bringing Back the Iconic Xbox Controller S with Enhanced Duchess",
    url: "/family-mag",
    img: IMG.xbox,
    cat: "Technology",
    date: "Jan 11, 2020"
  },
  {
    title: "T-Mobile Commits to Android 13 Updates on These Flagship Mobile Phones",
    url: "/family-mag",
    img: IMG.tmobile,
    cat: "Technology",
    date: "Jan 10, 2020"
  },
  {
    title: "Montreal Added the Most Tech Jobs in Canada in Recent Analysis Report",
    url: "/family-mag",
    img: IMG.generic,
    cat: "Technology",
    date: "Jan 7, 2020"
  }
];

export const tvDramaSection: Post[] = [
  {
    title: "The Flash TV Show Succeeded Where the Movie Did Not",
    url: "/family-mag",
    img: IMG.couple,
    cat: "TV & Drama",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    excerpt: "The long-running CW superhero series managed to build deep character arcs and consistency that the blockbusters simply couldn't replicate in under three hours..."
  },
  {
    title: "Stranger Things Season 5 Cast Won’t Have Actor Eduardo Franco",
    url: "/family-mag",
    img: IMG.zodiac,
    cat: "TV & Drama",
    date: "Mar 15, 2020"
  },
  {
    title: "The Courier - a Spy Movie with Actor Benedict Cumberbatch",
    url: "/family-mag",
    img: IMG.generic,
    cat: "TV & Drama",
    date: "Mar 15, 2020"
  },
  {
    title: "The Top 10 Scariest Horror Movie Moments of All Time",
    url: "/family-mag",
    img: IMG.stress,
    cat: "TV & Drama",
    date: "Mar 15, 2020"
  }
];

export const sportsSection: Post[] = [
  {
    title: "Double Olympic Champion 'Not Ashamed of Being Different'",
    url: "/family-mag",
    img: IMG.olympic,
    cat: "Sports",
    author: "Shane Doe",
    date: "Jan 14, 2021",
    excerpt: "Double Olympic gold medalist opens up about identity, fighting societal norms and setting new standards in international sports arenas..."
  },
  {
    title: "Lionel Messi Selected as US Soccer Hall of Fame Popular Finalists 2024",
    url: "/family-mag",
    img: IMG.messi,
    cat: "World",
    date: "Jan 5, 2020"
  },
  {
    title: "Freestyle Pet Grooming Competition Brings Worldwide Artists to Ocoee",
    url: "/family-mag",
    img: IMG.grooming,
    cat: "Events",
    date: "Jan 12, 2020"
  }
];

export const celebritiesSection: Post[] = [
  {
    title: "Stranger Things Season 5 Cast Won’t Have Actor Eduardo Franco",
    url: "/family-mag",
    img: IMG.zodiac,
    cat: "Celebrities",
    author: "Shane Doe",
    date: "Mar 15, 2020",
    excerpt: "Fans were left disappointed as the character Eduardo Franco confirmed he has not received any call for the final season shooting schedule..."
  },
  {
    title: "The Courier - a Spy Movie with Actor Benedict Cumberbatch",
    url: "/family-mag",
    img: IMG.generic,
    cat: "TV & Drama",
    date: "Mar 15, 2020"
  },
  {
    title: "The Top 10 Scariest Horror Movie Moments of All Time",
    url: "/family-mag",
    img: IMG.stress,
    cat: "TV & Drama",
    date: "Mar 15, 2020"
  }
];

export const lifestyleSection: Post[] = [
  {
    title: "Why Does My Dog Scratch My Bed Sheets? Expert Insights & Behaviors",
    url: "/family-mag",
    img: IMG.dog_scratch,
    cat: "Lifestyle",
    date: "Jan 15, 2020"
  },
  {
    title: "Sustainability Meets Luxury with New Dubai Villa Project The Acre",
    url: "/family-mag",
    img: IMG.dubai,
    cat: "Lifestyle",
    date: "Jan 14, 2020"
  },
  {
    title: "This Is What Your Lifestyle Will Be Like If You Retire at 55 With $5 Million",
    url: "/family-mag",
    img: IMG.retire,
    cat: "Lifestyle",
    date: "Jan 14, 2021"
  },
  {
    title: "Caffeine Problem? These are the key health warning signs to look out for",
    url: "/family-mag",
    img: IMG.caffeine,
    cat: "Lifestyle",
    date: "Jan 18, 2024"
  }
];

export const postsJustIn: Post[] = [
  {
    title: "Why Does My Dog Scratch My Bed Sheets? Expert Insights",
    url: "/family-mag",
    img: IMG.dog_scratch,
    date: "Jan 15, 2020",
    excerpt: "To understand your dog's nesting habits, we should look into ancient behaviors, claw filing, and territorial scents left in the sheets..."
  },
  {
    title: "Sustainability Meets Luxury with New Dubai Villa Project The Acre",
    url: "/family-mag",
    img: IMG.dubai,
    date: "Jan 14, 2020",
    excerpt: "A look inside the latest green-friendly luxury residential expansion in the heart of Dubai combining solar setups and marble architecture..."
  },
  {
    title: "Freestyle Pet Grooming Competition Brings Worldwide Artists to Ocoee",
    url: "/family-mag",
    img: IMG.grooming,
    date: "Jan 12, 2020",
    excerpt: "Artists showcase unique canine shapes, dye gradients, and scissor techniques in this year's highly competitive championship..."
  },
  {
    title: "Double Olympic Champion 'Not Ashamed of Being Different'",
    url: "/family-mag",
    img: IMG.olympic,
    date: "Jan 14, 2021",
    excerpt: "Double Olympic gold medalist opens up about identity, fighting societal norms and setting new standards in international sports arenas..."
  },
  {
    title: "T-Mobile Commits to Android 13 Updates on These Flagship Mobile Phones",
    url: "/family-mag",
    img: IMG.tmobile,
    date: "Jan 10, 2020",
    excerpt: "The telecom giant releases a schedule of firmware push releases for Samsung, Google, and Motorola models throughout the quarter..."
  },
  {
    title: "Stranger Things Season 5 Cast Won’t Have Actor Eduardo Franco",
    url: "/family-mag",
    img: IMG.zodiac,
    date: "Mar 15, 2020",
    excerpt: "Fans were left disappointed as the character Eduardo Franco confirmed he has not received any call for the final season shooting schedule..."
  }
];

export const trendingSidebar: Post[] = [
  { title: "Why Does My Dog Scratch My Bed Sheets? Expert Insights", url: "/family-mag", img: IMG.dog_scratch, date: "Jan 15, 2020" },
  { title: "Sustainability Meets Luxury with New Dubai Villa Project The Acre", url: "/family-mag", img: IMG.dubai, date: "Jan 14, 2020" },
  { title: "Double Olympic Champion 'Not Ashamed of Being Different'", url: "/family-mag", img: IMG.olympic, date: "Jan 14, 2021" },
  { title: "T-Mobile Commits to Android 13 Updates on These Flagship Mobile Phones", url: "/family-mag", img: IMG.tmobile, date: "Jan 10, 2020" }
];

export const whatsHotSidebar: Post[] = [
  { title: "Caffeine Problem? These are the signs to look out for", url: "/family-mag", img: IMG.caffeine, date: "Jan 18, 2024" },
  { title: "Why Being Stressed Makes Us Crave Junk Food, Study Shows", url: "/family-mag", img: IMG.stress, date: "Jan 18, 2024" },
  { title: "The 3 Zodiac Signs Most Likely To Initiate A Friendship Breakup", url: "/family-mag", img: IMG.zodiac, date: "Jan 18, 2024" }
];

export const footerPicks: Post[] = [
  { title: "Why Does My Dog Scratch My Bed Sheets? Expert Insights", url: "/family-mag", img: IMG.dog_scratch, date: "Jan 15, 2020" },
  { title: "Sustainability Meets Luxury with New Dubai Villa Project The Acre", url: "/family-mag", img: IMG.dubai, date: "Jan 14, 2020" },
  { title: "Double Olympic Champion 'Not Ashamed of Being Different'", url: "/family-mag", img: IMG.olympic, date: "Jan 14, 2021" }
];

export const footerPopular: Post[] = [
  { title: "Lionel Messi Selected as US Soccer Hall of Fame Popular Finalists", url: "/family-mag", img: IMG.messi, date: "Jan 5, 2020", views: "1,204" },
  { title: "Things to Know About the Transformative Power of VR 3D Modeling", url: "/family-mag", img: IMG.vr_adv, date: "Jan 4, 2020", views: "859" },
  { title: "Stranger Things Season 5 Cast Won’t Have Actor Eduardo Franco", url: "/family-mag", img: IMG.zodiac, date: "Mar 15, 2020", views: "710" }
];
