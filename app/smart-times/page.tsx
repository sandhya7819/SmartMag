import SmartTimesHeader from "@/components/SmartTimesHeader";
import SmartTimesFooter from "@/components/SmartTimesFooter";
import { Play, FileImage, Star, Volume2 } from "lucide-react";
import Link from "next/link";

/* ─── Image assets (direct SmartTimes URLs from original CDN) ─── */
const IMG = {
  spacex: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/spacex-Ptd-iTdrCJM-unsplash-300x200.jpg",
  china:  "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/arron-choi-cMyTiCrgnbE-unsplash-300x169.jpg",
  antiwar:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/gayatri-malhotra-fhxGJj9lz-k-unsplash-1-300x200.jpg",
  nato:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/cibi-chakravarthi-WPEx2mvZg20-unsplash-300x137.jpg",
  hero:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_536809216_XL-1-1024x683.jpg",
  tank:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_61395557_XL-1-450x300.jpg",
  opinion:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_481566624_XL-1-450x300.jpg",
  bush:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_287440426_XL-1-450x304.jpg",
  bitcoin:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_373474714_XL-1-300x169.jpg",
  ukraine:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/kedar-gadge-A69UZJ5cnaQ-unsplash-11-300x200.jpg",
  europeans:"https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_442034052_XL-1-300x202.jpg",
  pharma: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/angelo-abear-RHyJdCu9YbU-unsplash-200x300.jpg",
  covid:  "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_49700347_XL-2-300x212.jpg",
  oil:    "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_286561994_XL-1-300x139.jpg",
  durant: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_527742458_XL-300x200.jpg",
  senate: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/daniel-eledut-yk9qMOst4jk-unsplash-300x200.jpg",
  oxford: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/jp-valery-BjbCnw18kpQ-unsplash-300x225.jpg",
  moto:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_375698458_xl-2015-12-450x300.jpg",
  bball:  "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/john-torcasio-GM4sf9ltjFE-unsplash-11-300x225.jpg",
  wisc:   "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/sheri-hooley-tkwfu4R1Lxk-unsplash-300x219.jpg",
  horse:  "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_174144472_xl-2015-11-300x200.jpg",
  rcb:    "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/6efcd9fdf4b988e8b3e8dc852e16b0f0-1-300x200.jpg",
  womens_tennis: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_24601495_xl-2015-11-300x233.jpg",
  
  // Missing Section 5 Images
  finance_main: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_235246358_xl-2015-1-450x300.jpg",
  finance_sub1: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/lukasz-radziejewski-RsRZRQZX868-unsplash-450x299.jpg",
  finance_sub2: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_8866595_XL-2-450x285.jpg",
  finance_small1: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_415955346_xl-2015-11-300x200.jpg",
  finance_small2: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_197508910_xl-2015-300x188.jpg",
  
  tech_main: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/francesco-boncompagni-dEBvDbDH4P4-unsplash-450x300.jpg",
  tech_sub1: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_199433998_XL-1-450x300.jpg",
  tech_sub2: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/pexels-tiago-l-br-2497926-450x220.jpg",
  tech_sub3: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_546107018_XL-1-450x308.jpg",
  tech_sub4: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/zhanjiang-chen-1m5JO9IASgI-unsplash-450x253.jpg",
  
  picks_main: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_285455556_XL-1-450x293.jpg",
  
  // Category featured images
  travel_main: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_434727862_xl-2015-11-450x300.jpg",
  uknews_main: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Depositphotos_75295857_xl-2015-11-450x299.jpg",
  science_main: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/freestocks-hRVrvH9-dG0-unsplash-1-450x300.jpg",
  economy_main: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/sharon-mccutcheon-rItGZ4vquWk-unsplash-450x300.jpg",

  // Banner Ads
  banner: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/TheSmartTimes-wide-middle.jpg",
  banner_mid_small: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/SmartTimes-Mid.jpg",
  banner_bottom: "https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/Single-page-top-01.jpg"
};

/* ─── Reusable Section Heading ─── */
function SectionHead({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-0 mb-6 border-b border-gray-200">
      <h4 className="text-[13px] font-black uppercase tracking-[2px] border-b-[3px] border-black pb-2.5 pr-6 font-sans whitespace-nowrap -mb-[1px]">
        {title}
      </h4>
    </div>
  );
}

/* ─── Small Post with Image ─── */
function SmallPost({
  img,
  title,
  date,
  review,
  category
}: {
  img: string;
  title: string;
  date?: string;
  review?: string;
  category?: string;
}) {
  return (
    <div className="flex gap-4 group cursor-pointer items-start border-b border-gray-100 py-4 last:border-0 last:pb-0">
      <div className="relative w-[85px] h-[64px] shrink-0 overflow-hidden bg-gray-100 rounded-sm">
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={title}
        />
        {review && (
          <div className="absolute bottom-1 right-1 bg-[#e21c23] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm">
            ★ {review}
          </div>
        )}
      </div>
      <div className="flex-1 space-y-0.5 min-w-0">
        {category && (
          <span className="text-[9px] font-black text-[#e21c23] uppercase tracking-widest block mb-0.5">
            {category}
          </span>
        )}
        <h4 className="text-[13.5px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors line-clamp-2">
          {title}
        </h4>
        {date && (
          <div className="text-[10px] text-gray-400 font-bold font-sans uppercase tracking-widest">{date}</div>
        )}
      </div>
    </div>
  );
}

/* ─── Text-Only List Post ─── */
function TextPost({ title, date, excerpt }: { title: string; date: string; excerpt?: string }) {
  return (
    <div className="group cursor-pointer border-b border-gray-100 py-5 last:border-0 last:pb-0">
      <h4 className="text-[14.5px] font-black leading-[1.35] group-hover:text-[#e21c23] transition-colors mb-1.5">
        {title}
      </h4>
      {excerpt && (
        <p className="text-[12.5px] text-gray-500 leading-normal line-clamp-2 mb-2">
          {excerpt}
        </p>
      )}
      <div className="text-[9.5px] text-gray-400 font-black font-sans uppercase tracking-wider">{date}</div>
    </div>
  );
}

/* ─── List Post with Horizontal Image Left ─── */
function ListPost({
  img,
  title,
  date,
  excerpt,
  audio
}: {
  img: string;
  title: string;
  date: string;
  excerpt: string;
  audio?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 group cursor-pointer items-start border-b border-gray-100 py-6 last:border-0 last:pb-0">
      <div className="relative w-full sm:w-[150px] aspect-[15/10] shrink-0 overflow-hidden bg-gray-100 rounded-sm">
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={title}
        />
        {audio && (
          <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Play size={12} fill="black" className="text-black ml-0.5" />
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 space-y-1.5 min-w-0">
        <h3 className="text-[16px] font-black leading-[1.25] group-hover:text-[#e21c23] transition-colors">
          {title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <div className="text-[9.5px] text-gray-400 font-black uppercase tracking-wider">{date}</div>
      </div>
    </div>
  );
}

/* ─── Column Category Block (Bottom) ─── */
function BottomCategoryBlock({
  title,
  mainPost,
  posts
}: {
  title: string;
  mainPost: { title: string; img: string; excerpt: string; date: string };
  posts: Array<{ title: string; date: string }>;
}) {
  return (
    <div className="space-y-6">
      <SectionHead title={title} />
      <div className="space-y-5">
        
        {/* Main Category Post */}
        <div className="group cursor-pointer space-y-3.5">
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-sm">
            <img
              src={mainPost.img}
              alt={mainPost.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-[15.5px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors line-clamp-3">
              {mainPost.title}
            </h3>
            <p className="text-[13px] text-gray-500 leading-normal line-clamp-2">
              {mainPost.excerpt}
            </p>
            <div className="text-[9.5px] text-gray-400 font-black uppercase tracking-wider">{mainPost.date}</div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-100" />

        {/* Category List Posts */}
        <div className="space-y-0 divide-y divide-gray-100">
          {posts.map((p, idx) => (
            <TextPost key={idx} title={p.title} date={p.date} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default function SmartTimesPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#e21c23] selection:text-white">
      <SmartTimesHeader />

      {/* ══ 1. TOP 4-COLUMN SNIPPET BAR ══ */}
      <section className="border-b border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { cat: "Science",  title: "SpaceX Launches Starlink Satellites on 'American Broomstick' and Lands Rocket at Sea", img: IMG.spacex },
              { cat: "Politics", title: "The China-Built Ship that Pulled a US Navy Jet Wreck from the South China Sea", img: IMG.china },
              { cat: "Europe",   title: "Anti-War Protests Intensify in World Along with Crackdown", img: IMG.antiwar },
              { cat: "World",    title: "US Nod to Nato for Sending Fighter Jets to Ukraine Finds no Takers", img: IMG.nato },
            ].map((p, i) => (
              <div key={i} className={`flex gap-4 group cursor-pointer items-center py-4 md:py-0 ${i > 0 ? 'lg:pl-6' : ''} ${i < 3 ? 'lg:pr-6' : ''}`}>
                <div className="flex-1 space-y-1 min-w-0">
                  <span className="text-[9.5px] font-black text-[#e21c23] uppercase tracking-widest block font-sans">{p.cat}</span>
                  <h4 className="text-[13px] font-bold leading-[1.3] group-hover:text-[#e21c23] transition-colors line-clamp-2">{p.title}</h4>
                </div>
                <div className="w-[80px] h-[60px] shrink-0 overflow-hidden bg-gray-50 rounded-sm">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={p.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 2. MAIN 3-COLUMN CONTENT AREA ══ */}
      <section className="container mx-auto px-4 pt-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* ─ LEFT: Large Hero + 4 List Posts (col-span-6) ─ */}
          <div className="lg:col-span-6 space-y-8 border-r-0 lg:border-r border-gray-200 lg:pr-8">
            
            {/* Hero article */}
            <div className="group cursor-pointer space-y-5">
              <div className="space-y-2.5">
                <h2 className="text-[32px] md:text-[38px] font-black leading-[1.1] group-hover:text-[#e21c23] transition-colors tracking-tight">
                  EU&apos;s New Sanctions Aim to Cut Russia Off From World Bank, IMF
                </h2>
                <div className="flex items-center gap-2 text-[10.5px] font-black text-gray-400 font-sans uppercase tracking-wider">
                  <span className="text-[#e21c23]">Europe</span>
                  <span>·</span>
                  <span>By <strong className="text-black font-black">John Doe</strong></span>
                  <span>· Jan 4, 2021</span>
                </div>
              </div>
              <div className="aspect-[16/10] overflow-hidden bg-gray-50 rounded-sm">
                <img src={IMG.hero} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" alt="hero" />
              </div>
              <p className="text-[14.5px] leading-relaxed text-gray-600">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation. In the high-profile case of US-based journalist Peter Wilson, 16-year-old American journalist Clifford McGraw and 20-year-old British freelance...
              </p>
              <button className="text-[10px] font-black uppercase tracking-[2px] border border-gray-300 px-6 py-3 rounded-sm hover:bg-[#e21c23] hover:text-white hover:border-transparent transition-all font-sans">
                Read More
              </button>
            </div>

            {/* List Posts */}
            <div className="border-t border-gray-100 pt-6 space-y-0">
              <ListPost img={IMG.oil} title="Oil Rises as Investors Look Past Possible Reserve Releases" date="Jan 3, 2021" excerpt="To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..." />
              <ListPost img={IMG.durant} title="Kevin Durant Pulled from Game Due to H&S Protocols" date="Jan 3, 2021" excerpt="To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..." />
              <ListPost img={IMG.senate} title="U.S. Senate Passes $1.5 Trillion Gov't Funding Bill with Ukraine" date="Jan 3, 2021" excerpt="To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..." />
              <ListPost img={IMG.oxford} title="Oxford University Launches Covid-19 Vaccine Study on Children" date="Jan 3, 2021" excerpt="To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest..." audio={true} />
            </div>
          </div>

          {/* ─ CENTRE: Grid Card + Opinion (col-span-3) ─ */}
          <div className="lg:col-span-3 space-y-8 border-r-0 lg:border-r border-gray-200 lg:px-6">
            
            {/* Featured card */}
            <div className="group cursor-pointer space-y-4">
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                <img src={IMG.tank} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="tank" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[17px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors">
                  Battle Analysis: Russian Tank Armada vs Ukraine
                </h3>
                <div className="flex items-center gap-2 text-[9.5px] font-black font-sans uppercase tracking-wider text-gray-400">
                  <span className="text-[#e21c23]">World</span><span>· Jan 4, 2021</span>
                </div>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation...
              </p>
            </div>

            {/* Sub text posts */}
            <div className="border-t border-gray-100 pt-4 space-y-0">
              <TextPost title="US HY Defaults Return as Rate Inches Up to 0.5%; Forecasts" date="Jan 3, 2021" />
              <TextPost title="E.U. Leaders Consider Faster Vaccine Funds Rollouts" date="Jan 3, 2021" />
            </div>

            {/* Opinion */}
            <div className="border-t border-gray-100 pt-6 space-y-5">
              <SectionHead title="Opinion" />
              <div className="group cursor-pointer space-y-3.5">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                  <img src={IMG.opinion} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="opinion" />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-[17px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors">
                    France&apos;s Largest Business Summit to Conclude on Mar 22
                  </h3>
                  <div className="flex items-center gap-2 text-[9.5px] font-black font-sans uppercase tracking-wider text-gray-400">
                    <span className="text-[#e21c23]">Europe</span><span>· Jan 4, 2021</span>
                  </div>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                  To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley...
                </p>
              </div>
              <div className="space-y-0 border-t border-gray-100 pt-4">
                <TextPost title="AI in Basketball: Could an Algorithm Really Predict Injuries?" date="Jan 4, 2021" />
                <TextPost title="Can Cash-Strapped Barcelona Afford to Keep Messi?" date="Jan 4, 2021" />
                <TextPost title="Ricardo Ferreira Switches Soccer Allegiance to Canada" date="Jan 4, 2021" />
              </div>
            </div>
          </div>

          {/* ─ RIGHT: Just In + another card (col-span-3) ─ */}
          <div className="lg:col-span-3 space-y-6 lg:pl-6">
            <SectionHead title="Just In" />
            <div className="space-y-0 divide-y divide-gray-100">
              <SmallPost img={IMG.bitcoin} title="A New Asset Class? Bitcoin's Bid to Go Mainstream" date="Jan 12, 2021" />
              <SmallPost img={IMG.ukraine} title="Review: How Hard will it be to Defend Ukraine from Russia?" date="Jan 12, 2021" review="8.5" />
              <SmallPost img={IMG.europeans} title="Europeans are Rushing to Distance Themselves from Putin" date="Jan 12, 2021" />
              <SmallPost img={IMG.pharma} title="German Pharmacies Will Start to Get a Big Infusion of Vaccines" date="Jan 12, 2021" />
              <SmallPost img={IMG.covid} title="President Presses for $1.9 Trillion COVID Relief Plan 2023" date="Jan 12, 2021" />
            </div>

            {/* Second card */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div className="group cursor-pointer space-y-3">
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                  <img src={IMG.bush} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="bush" />
                </div>
                <h3 className="text-[16px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors">
                  Statement by President Bush on Ukraine | Bush Center
                </h3>
                <div className="flex items-center gap-2 text-[9.5px] font-black font-sans uppercase tracking-wider text-gray-400">
                  <span className="text-[#e21c23]">Money</span><span>· Jan 8, 2021</span>
                </div>
                <p className="text-[13px] text-gray-500 leading-normal line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley...</p>
              </div>
              <div className="space-y-0 border-t border-gray-100 pt-4">
                <TextPost title="SEC Sets Clock for Delisting Chinese Companies Over US Audit" date="Jan 8, 2021" />
                <TextPost title="Europe's Central Bank Speeding Up End to Economic Stimulus" date="Jan 7, 2021" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 3. WIDE BANNER AD ══ */}
      <section className="container mx-auto px-4 py-8">
        <Link href="#" className="block hover:opacity-95 transition-opacity">
          <img src={IMG.banner} className="w-full h-auto rounded-sm shadow-sm" alt="SmartMag Banner" />
        </Link>
      </section>

      {/* ══ 4. SPORTS SECTION ══ */}
      <section className="container mx-auto px-4 pt-10 pb-12 border-t-[3px] border-black">
        <SectionHead title="Sports" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left: Featured Sports - Text Left, Image Right (col-span-9) */}
          <div className="lg:col-span-9 space-y-8">
            <div className="group cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  <span className="text-[9.5px] font-black text-[#e21c23] uppercase tracking-widest block font-sans">Sports</span>
                  <h2 className="text-[24px] md:text-[28px] font-black leading-[1.2] group-hover:text-[#e21c23] transition-colors">
                    Marquez Explains Lack of Confidence During Qatar GP Race
                  </h2>
                  <div className="text-[10px] font-bold text-gray-400 font-sans uppercase tracking-widest">Jan 15, 2021</div>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement. Apple&apos;s Watch...
                  </p>
                  <button className="text-[10px] font-black uppercase tracking-[2px] border border-gray-300 px-6 py-2.5 rounded-sm hover:bg-[#e21c23] hover:text-white hover:border-transparent transition-all font-sans">
                    Read More
                  </button>
                </div>
                <div className="md:col-span-5 overflow-hidden bg-gray-50 rounded-sm aspect-[1.33]">
                  <img src={IMG.moto} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" alt="sports" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-150 pt-8">
              {[
                { title: "Young Teen Sucker-punches Opponent During Basketball Game", date: "Jan 15, 2021", excerpt: "To understand the new politics stance and other pro nationals of recent..." },
                { title: "China May Start Reopening After Winter Olympics: Top Adviser", date: "Jan 15, 2021", excerpt: "To understand the new politics stance and other pro nationals of recent..." },
                { title: "2022 NCAA Women's Hockey Tournament: Schedule & Scores", date: "Jan 14, 2021", excerpt: "To understand the new politics stance and other pro nationals of recent..." },
              ].map((p, i) => (
                <TextPost key={i} title={p.title} date={p.date} excerpt={p.excerpt} />
              ))}
            </div>
          </div>

          {/* Right: Small Sports Posts (col-span-3) */}
          <div className="lg:col-span-3 space-y-0 border-l-0 lg:border-l border-gray-200 lg:pl-8">
            <div className="divide-y divide-gray-100">
              <SmallPost img={IMG.bball} title="It's Time for Basketball: Spurs at Timberwolves" date="Jan 14, 2021" />
              <SmallPost img={IMG.wisc}  title="Can Wisconsin Clinch the Big Ten West this Weekend" date="Jan 14, 2021" />
              <SmallPost img={IMG.horse} title="Olympic Great Todd Loses Training License for Hitting Horse" date="Jan 13, 2021" />
              <SmallPost img={IMG.rcb}   title="Royal Challengers Bangalore Announce Faf du Plessis as New Captain" date="Jan 13, 2021" />
              <SmallPost img={IMG.womens_tennis} title="Women’s Tennis Association Could Pull Out of China" date="Jan 12, 2021" />
            </div>
          </div>

        </div>
      </section>

      {/* ══ 5. MONEY, TECH & EDITOR'S PICKS SECTION ══ */}
      <section className="container mx-auto px-4 pt-14 pb-12 border-t-[3px] border-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT AREA: Money + Tech (col-span-9) */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Money block */}
            <div className="space-y-6">
              <SectionHead title="Money" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Money Main Post */}
                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                    <img src={IMG.finance_main} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Money" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-[20px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors">
                      U.S. Warns Financial Institutions to be on Watch for Russian Sanctions
                    </h3>
                    <div className="text-[10px] font-black text-gray-400 font-sans uppercase tracking-widest">
                      Mar 11, 2022
                    </div>
                  </div>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation...
                  </p>
                  <button className="text-[10px] font-black uppercase tracking-[2px] border border-gray-300 px-6 py-2 rounded-sm hover:bg-[#e21c23] hover:text-white hover:border-transparent transition-all font-sans">
                    Read More
                  </button>
                </div>

                {/* Money Sub-Grid + Small List */}
                <div className="space-y-6">
                  
                  {/* Two columns images */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group cursor-pointer space-y-2">
                      <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                        <img src={IMG.finance_sub1} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="finance" />
                      </div>
                      <h4 className="text-[13px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors line-clamp-2">
                        Everything You Need to Know About Personal Finance: Pocket-sized Edition
                      </h4>
                    </div>
                    <div className="group cursor-pointer space-y-2">
                      <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                        <img src={IMG.finance_sub2} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="tax" />
                      </div>
                      <h4 className="text-[13px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors line-clamp-2">
                        EXCLUSIVE: US Tax Reform to Focus on Individuals, Natural
                      </h4>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-100" />

                  {/* Two small list items with image */}
                  <div className="space-y-0 divide-y divide-gray-100">
                    <SmallPost img={IMG.finance_small1} title="Healthcare Alliance’s CFO to Scale, Lock Down Finance Functions" date="Mar 11, 2022" />
                    <SmallPost img={IMG.finance_small2} title="Bitcoin Boom or Crypto Winter? Some New Technical Levels to Watch" date="Jan 19, 2021" />
                  </div>

                </div>

              </div>
            </div>

            {/* Mini Ad Banner inside columns */}
            <div className="py-2">
              <Link href="#" className="block hover:opacity-95 transition-opacity">
                <img src={IMG.banner_mid_small} className="w-full h-auto mx-auto rounded-sm shadow-sm" alt="SmartMag Banner Mid" />
              </Link>
            </div>

            {/* Tech & Innovation block */}
            <div className="space-y-6">
              <SectionHead title="Tech & Innovation" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Tech Featured Card */}
                <div className="group cursor-pointer space-y-4">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                    <img src={IMG.tech_main} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Tech" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-[20px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors">
                      US Extends Technology Restrictions to the Russian Oil Industry
                    </h3>
                    <div className="text-[10px] font-black text-gray-400 font-sans uppercase tracking-widest">
                      Mar 11, 2022
                    </div>
                  </div>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation...
                  </p>
                  <button className="text-[10px] font-black uppercase tracking-[2px] border border-gray-300 px-6 py-2 rounded-sm hover:bg-[#e21c23] hover:text-white hover:border-transparent transition-all font-sans">
                    Read More
                  </button>
                </div>

                {/* Tech List Items with Images */}
                <div className="divide-y divide-gray-100">
                  <SmallPost img={IMG.tech_sub1} title="Microsoft Surface Laptop: A Transforming Windows PC for Business" date="Feb 11, 2021" />
                  <SmallPost img={IMG.tech_sub2} title="Gravity Sketch VR 3D Modeling is Now Free to Use" date="Feb 11, 2021" />
                  <SmallPost img={IMG.tech_sub3} title="LimeWire Announces Comeback as Web3 NFT Marketplace" date="Feb 11, 2021" />
                  <SmallPost img={IMG.tech_sub4} title="Tech, Financials Lead Resurgent Wall Street as Oil Plunges" date="Feb 11, 2021" />
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT AREA: Editor's Picks Sidebar (col-span-3) */}
          <div className="lg:col-span-3 space-y-6 border-l-0 lg:border-l border-gray-200 lg:pl-8">
            <SectionHead title="Editor's Picks" />
            
            <div className="space-y-6">
              
              {/* Featured Editor Pick Card */}
              <div className="group cursor-pointer space-y-3.5">
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm">
                  <img src={IMG.picks_main} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="pick" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-[17px] font-black leading-[1.3] group-hover:text-[#e21c23] transition-colors">
                    Review: Record Shares of Voters Turned Out for 2020 election
                  </h3>
                  <div className="text-[9.5px] font-black text-gray-400 font-sans uppercase tracking-wider">
                    Jan 11, 2021
                  </div>
                </div>
                <p className="text-[13px] text-gray-500 leading-normal line-clamp-3">
                  To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified...
                </p>
              </div>

              <div className="w-full h-[1px] bg-gray-150" />

              {/* Text links */}
              <div className="space-y-0 divide-y divide-gray-100">
                <TextPost title="Melbourne: All Refugees Held in Hotel Detention to be Released" date="Jan 11, 2021" />
                <TextPost title="US Army to Award Production Contract for Light Tank this Summer" date="Jan 11, 2021" />
                <TextPost title="US Seven-day Average of New Cases Drops" date="Jan 10, 2021" />
                <TextPost title="Landmark EU Settlement Scheme Reaches 5m Applications" date="Jan 9, 2021" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ══ 6. BOTTOM WIDE AD BANNER ══ */}
      <section className="container mx-auto px-4 py-6">
        <Link href="#" className="block hover:opacity-95 transition-opacity">
          <img src={IMG.banner_bottom} className="w-full h-auto mx-auto rounded-sm shadow-sm" alt="SmartTimes Ad Bottom" />
        </Link>
      </section>

      {/* ══ 7. BOTTOM 4-COLUMN CATEGORY SECTION ══ */}
      <section className="container mx-auto px-4 pt-12 pb-20 border-t-[3px] border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y lg:divide-y-0 md:divide-x divide-gray-200">
          {[
            {
              title: "Travel",
              mainPost: {
                title: "Is It Safe to Travel to Europe Now Due to War in Ukraine?",
                img: IMG.travel_main,
                excerpt: "To understand the new politics stance and other pro nationals of recent...",
                date: "Mar 11, 2022"
              },
              posts: [
                { title: "Booking, Airbnb See Pent-Up Travel Demand Unrestrained", date: "Mar 11, 2022" },
                { title: "As Travel Bookings Rise, Hotel Room Rates Zoom in Leisure Destinations", date: "Mar 11, 2022" },
                { title: "Shipwreck Discoveries and a Crowdfunded Country: Travel This Week", date: "Mar 11, 2022" },
              ]
            },
            {
              title: "UK News",
              mainPost: {
                title: "UK's Queen Elizabeth Pulls Out of Commonwealth Service",
                img: IMG.uknews_main,
                excerpt: "To understand the new politics stance and other pro nationals of recent...",
                date: "Mar 11, 2022"
              },
              posts: [
                { title: "UK Online Safety Bill Puts Internet Ad Scams Under Microscope", date: "Mar 11, 2022" },
                { title: "UK Commit to Enhanced India Ties in Indo-Pacific Talks", date: "Mar 11, 2022" },
                { title: "UK Announces Plan to Ban Exports of Luxury Goods to Russia", date: "Mar 11, 2022"  },
              ]
            },
            {
              title: "Science",
              mainPost: {
                title: "Science and Tech Reforms Priority for New Year",
                img: IMG.science_main,
                excerpt: "To understand the new politics stance and other pro nationals of recent...",
                date: "Mar 11, 2022"
              },
              posts: [
                { title: "Top Chinese Science and Tech Official Urges Priority on Research", date: "Mar 11, 2022" },
                { title: "Virtual Reality Gaming Gets Bigger with Zero Latency’s Entry", date: "Mar 11, 2022" },
                { title: "Pfizer Planning to Submit Data on 4th Covid Shot Soon", date: "Mar 11, 2022" },
              ]
            },
            {
              title: "Economy",
              mainPost: {
                title: "Charting the Global Economy: Central Bankers Face Inflation",
                img: IMG.economy_main,
                excerpt: "To understand the new politics stance and other pro nationals of recent...",
                date: "Jan 18, 2021"
              },
              posts: [
                { title: "The Global Economic System is in Dire Need of an Overhaul", date: "Jan 17, 2021" },
                { title: "Digital Economy to See Exponential Growth to USD 800 bn by 2030", date: "Jan 16, 2021" },
                { title: "World Economic Forum: The Pandemic is Not the End of Problems", date: "Jan 15, 2021" },
              ]
            }
          ].map((col, i) => (
            <div key={i} className={`${i > 0 ? 'lg:pl-8' : ''}`}>
              <BottomCategoryBlock title={col.title} mainPost={col.mainPost} posts={col.posts} />
            </div>
          ))}
        </div>
      </section>

      <SmartTimesFooter />
    </main>
  );
}
