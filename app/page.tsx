import { MoveRight, Monitor, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const demos = [
  { name: "GoodNews", id: "good-news", tag: null },
  { name: "Tech 1: iGadgets", id: "tech-1", tag: null },
  { name: "Tech 2: TheWire", id: "tech-2", tag: null },
  { name: "TechBlog", id: "tech-blog", tag: null },
  { name: "News: SmartTimes", id: "smart-times", tag: null },
  { name: "News: NationalPress", id: "national-press", tag: "NEW" },
  { name: "Tech: GadgetsMe", id: "gadgets-me", tag: "NEW" },
  { name: "Financial", id: "financial", tag: null },
  { name: "News: NewsVerified", id: "news-verified", tag: "NEW" },
  { name: "News: Political", id: "political", tag: null },
  { name: "CoinBase / Crypto", id: "coinbase", tag: null },
  { name: "News: TheVoiceDaily", id: "thevoice-daily", tag: "NEW" },
  { name: "DigitalHub", id: "digital-hub", tag: null },
  { name: "News: NewsOne24", id: "new-one24", tag: null },
  { name: "News: TribunePost", id: "tribune-post", tag: null },
  { name: "CuratedMag", id: "curated-mag", tag: null },
  { name: "EverydayNews", id: "everyday-news", tag: null },
  { name: "FridayMag", id: "friday-mag", tag: null },
  { name: "MorningPost News", id: "morning-post", tag: null },
  { name: "Health", id: "health", tag: null },
  { name: "Cup Of Coffee", id: "cup-of-coffee", tag: null },
  { name: "Spotlight Fashion", id: "spotlight", tag: null },
  { name: "SmartLife", id: "smart-life", tag: null },
  { name: "CityToday", id: "city-today", tag: null },
  { name: "WorldMag", id: "world-mag", tag: null },
  { name: "MagazineCo", id: "magazine-co", tag: null },
  { name: "SmartPost", id: "smart-post", tag: null },
  { name: "NewsTime", id: "news-time", tag: null },
  { name: "DailyScoop", id: "daily-scoop", tag: null },
  { name: "FamilyMag", id: "family-mag", tag: null },
  { name: "Discover", id: "discover", tag: null },
  { name: "RTL/Arabic", id: "rtl", tag: null },
  { name: "NewsMag", id: "news-mag", tag: null },
  { name: "Be The Change", id: "be-the-change", tag: null },
  { name: "LazyBusy", id: "lazy-busy", tag: null },
  { name: "Insights Only", id: "insights-only", tag: null },
  { name: "GeeksEmpire / Entertainment", id: "geeks-empire", tag: null },
  { name: "Blogger", id: "blogger", tag: null },
  { name: "DigiTech", id: "digi-tech", tag: null },
  { name: "TechDrop", id: "tech-drop", tag: null },
  { name: "GossipMag / Celebrity", id: "gossip-mag", tag: null },
  { name: "Muscle + Fitness", id: "fitness", tag: null },
  { name: "PrimeMag", id: "prime-mag", tag: null },
  { name: "NewsBoard", id: "news-board", tag: null },
  { name: "News Observer", id: "news", tag: null },
  { name: "MagStudio", id: "mag-studio", tag: null },
  { name: "GameZone", id: "game-zone", tag: null },
  { name: "ProMag", id: "pro-mag", tag: null },
  { name: "Social Life", id: "social-life", tag: null },
  { name: "TheZine", id: "zine", tag: null },
  { name: "NewsBulletin", id: "news-bulletin", tag: null },
  { name: "CityBuzz", id: "citybuzz", tag: null },
  { name: "Informed News", id: "informed", tag: null },
  { name: "Gaming", id: "gaming", tag: null },
  { name: "Sports", id: "sports", tag: null },
  { name: "Trendy/Lifestyle", id: "trendy", tag: null },
  { name: "Classic/Legacy", id: "classic", tag: null },
  { name: "Dark Demo", id: "gaming-dark", tag: null }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#b3d4fc] selection:text-[#16171f] text-[#16171f]" style={{ fontFamily: '"proxima-nova", system-ui, sans-serif', fontSize: '18px', lineHeight: '1.62', letterSpacing: '-.01em' }}>
      
      {/* Envato Top Bar */}
      <div className="bg-[#262626] h-[54px] w-full flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <div className="flex items-center">
            <svg className="w-[110px] h-[18px] text-white" viewBox="0 0 110 18" fill="currentColor">
              <path d="M11.66 12.3c-.6-.7-1.12-1.32-1.74-2.18-.8-.94-1.2-1.63-1.63-2.6-.5-1.18-.8-2.66-.8-4.22V0h2.62v2.85c0 1.25.17 2.4.52 3.48.24.77.58 1.48 1.05 2.14.47.66 1.07 1.34 1.8 2.06.66.66 1.25 1.2 1.76 1.62.6.5 1.15 1 1.66 1.5l1.6 1.62c.76.8 1.37 1.7 1.83 2.68.46 1 .7 2.08.7 3.25v2.8h-2.64v-2.33c0-1.16-.2-2.22-.57-3.17-.37-.95-.92-1.84-1.62-2.65-.6-.72-1.2-1.37-1.82-1.95zm14.36.43h-2.65V6.76c0-.98-.22-1.72-.66-2.2-.44-.5-1.04-.74-1.82-.74-.58 0-1.1.13-1.58.4-.48.26-.85.6-1.12 1.03-.27.42-.4.92-.4 1.5v6.02H15.1V4.8h2.67v1.44c.54-1.1 1.45-1.66 2.7-1.66 1 0 1.83.32 2.45.96.63.63.95 1.53.95 2.7v4.5zm11.9.1l-3.32-8h2.8l1.96 4.96L31.32 4.8h2.7l-3.32 8h-2.77zm11.23-.1h-2.64V9.66c-.66 1-1.63 1.5-2.9 1.5-1.4 0-2.52-.45-3.33-1.33-.8-.9-1.2-2.13-1.2-3.72s.4-2.83 1.2-3.72c.8-.88 1.9-1.33 3.33-1.33 1.27 0 2.24.5 2.9 1.5V4.8h2.64v7.94zm-2.64-4.5c0-1.03-.23-1.83-.7-2.4-.47-.56-1.1-.84-1.92-.84s-1.45.28-1.92.84c-.47.57-.7 1.37-.7 2.4s.23 1.83.7 2.4c.47.56 1.1.84 1.92.84s1.45-.28 1.92-.84c.47-.57.7-1.37.7-2.4zm8.9.13h-3.4v2.48c0 .4.1.72.3.94.2.2.46.3.78.3h2.3v2.04h-2.88c-1.13 0-1.98-.3-2.55-.9-.57-.6-.85-1.54-.85-2.84V6.77h-1.6V4.8h1.6V2.5l2.64-.84v3.13h3.42l-.12 1.98h.04zM60.9 5.86c1.55 0 2.8.5 3.75 1.5.95 1 1.42 2.37 1.42 4.1 0 1.76-.47 3.12-1.42 4.1-.95 1-2.2 1.5-3.75 1.5s-2.8-.5-3.75-1.5c-.95-1-1.42-2.36-1.42-4.1s.47-3.1 1.42-4.1c.95-1 2.2-1.5 3.75-1.5zm0 2.24c-.75 0-1.34.33-1.77 1-.43.67-.65 1.5-.65 2.52s.22 1.85.65 2.52c.43.67 1.02 1 1.77 1s1.34-.33 1.77-1c.43-.67.65-1.5.65-2.52s-.22-1.85-.65-2.52c-.43-.67-1.02-1-1.77-1zm16.5-1.9v8.66h-2.5V8.62c0-1-.24-1.76-.7-2.28-.48-.52-1.12-.78-1.93-.78-.5 0-1 .15-1.45.45-.46.3-.8.7-1 1.17-.2.48-.3 1.05-.3 1.7v5.9h-2.5V5.2h2.5V6.7c.48-1.1 1.4-1.65 2.76-1.65 1 0 1.82.34 2.45 1 .63.68.95 1.63.95 2.83h-.04zm10.02.1l-3.32 8h-2.55l-2.02-4.9-2 4.9h-2.54l-3.32-8h2.64l2.05 5.57 2.08-5.58H83.8l2.05 5.58L87.9 6.3h2.64v.02zm11.2-.1h-2.5V9.45c-.64.93-1.58 1.4-2.8 1.4-1.35 0-2.45-.44-3.28-1.34-.84-.9-1.25-2.12-1.25-3.66s.4-2.8 1.25-3.67c.83-.87 1.93-1.32 3.28-1.32 1.22 0 2.16.47 2.8 1.4V4.8h2.5V12.7zm-2.5-4.4c0-1.06-.23-1.87-.7-2.44-.45-.57-1.06-.85-1.83-.85-.77 0-1.38.28-1.83.85-.45.57-.68 1.38-.68 2.44 0 1.06.23 1.87.68 2.44.45.57 1.06.85 1.83.85.77 0 1.38-.28 1.83-.85.47-.57.7-1.38.7-2.44zm7.98 4.54c-.66 0-1.2-.1-1.65-.33-.45-.22-.8-.5-1.02-.85-.24-.35-.35-.76-.35-1.23h2.46c.03.3.15.53.38.7.23.16.53.25.9.25.43 0 .76-.08.97-.24.2-.16.32-.38.32-.67 0-.27-.1-.48-.3-.62-.2-.14-.54-.26-1-.35l-.83-.16c-.85-.16-1.45-.44-1.82-.84-.37-.4-.56-.96-.56-1.66 0-.6.18-1.12.56-1.56.38-.44.87-.77 1.48-.98.6-.2 1.3-.32 2.1-.32.65 0 1.22.08 1.7.27.48.18.86.44 1.13.78.27.34.42.76.45 1.26h-2.4c-.03-.3-.15-.52-.37-.66-.2-.14-.5-.2-.9-.2-.36 0-.63.07-.8.2-.18.14-.27.33-.27.56 0 .23.1.4.28.53.18.13.5.24.93.3l1.1.2c.7.13 1.23.36 1.6.7s.54.83.54 1.5c0 .6-.2 1.14-.6 1.6-.4.46-.92.8-1.56 1.04-.64.22-1.36.33-2.18.33h-.05zm8.93-3.48c0 .54-.2.96-.58 1.26-.38.3-1.04.5-1.95.57l-1.35.1v1.63h-2.5v-7.9h3c1.3 0 2.25.26 2.83.77.58.5.88 1.2.88 2.12 0 .6-.18 1.1-.55 1.5zm-2.5-1.87c0-.4-.14-.7-.4-.87-.27-.18-.7-.27-1.3-.27h-1.7V8h1.8c.55 0 .95-.1 1.2-.26.25-.17.38-.43.38-.76v-.02z"></path>
            </svg>
          </div>
        </div>
        <div>
          <button className="bg-[#82b440] hover:bg-[#6f9a37] text-white text-[14px] font-semibold px-5 py-[6px] rounded-[4px] transition-colors shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
            Buy now
          </button>
        </div>
      </div>

      {/* ThemeSphere Header */}
      <div className="bg-[#0a0b16] h-[90px] w-full flex items-center justify-between px-4 lg:px-12 sticky top-0 z-50">
        
        {/* Logo */}
        <div className="flex items-center text-white cursor-pointer">
          <div className="w-[30px] h-[34px] relative mr-3 flex items-center justify-center">
            {/* Hexagon shape (simplified CSS representation) */}
            <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L22.3923 6V18L12 24L1.6077 18V6L12 0Z" />
            </svg>
            <span className="absolute text-[#E54E53] font-black text-xl z-10" style={{ transform: 'skewX(-10deg)' }}>S</span>
          </div>
          <span className="text-[20px] font-bold tracking-widest uppercase text-white">ThemeSphere</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="#" className="text-gray-300 hover:text-white text-[15px] font-bold transition-colors">Intro</Link>
          <Link href="#" className="text-white text-[15px] font-bold transition-colors">Demos</Link>
          <Link href="#" className="text-gray-300 hover:text-white text-[15px] font-bold transition-colors">Features</Link>
          <Link href="#" className="text-gray-300 hover:text-white text-[15px] font-bold transition-colors">Support</Link>
        </nav>

        {/* Buy Button */}
        <div>
          <button className="bg-white text-black text-[15px] font-bold px-8 py-3 rounded-sm hover:bg-gray-200 transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      {/* Hero Section / Demos Grid */}
      <section className="section section-center clearfix demos bg-[#f8f8f8]" id="demos" style={{ padding: '95px 0', borderBottom: '1px solid #e6e8ec' }}>
        <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">

          <div className="text-center mb-[65px]">
            <h2 className="text-[44px] font-black text-[#111] mb-5 tracking-[-.02em] leading-[1.1] relative inline-block pb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-[#111]">
              <strong className="text-[#ef2c32]">58+</strong> Unique Designs, <strong>Unlimited</strong><br /> Layout Variations
            </h2>
            <p className="text-[19px] text-[#555] font-normal leading-[1.7] mt-2">
              All demos below are <strong className="font-bold text-[#111]">included</strong> in the theme. Get future demos &amp; updates for <em className="italic">free</em>.
              <br />Import with one click. Combine elements for unlimited unique layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px]">
            {demos.map((demo, index) => {
              const demoUrl = `/${demo.id}`;
              const demoImg = `https://theme-sphere.com/demo/smartmag-landing/img/demos/${demo.id}.jpg`;
              const demoImg2x = `https://theme-sphere.com/demo/smartmag-landing/img/demos/${demo.id}@2x.jpg`;
              
              return (
                <div key={index} className="column text-center relative group">
                  {demo.tag && (
                    <span className="absolute top-[25px] right-[-15px] z-20 bg-[#ef2c32] text-white text-[11px] font-bold uppercase tracking-[1px] px-[12px] py-[6px] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                      {demo.tag}
                    </span>
                  )}
                  
                  <div className="relative mb-[20px] bg-white rounded-t-[5px] rounded-b-[4px] shadow-[0_5px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] transition-shadow duration-300 transform group-hover:-translate-y-1">
                    <img 
                      src="https://theme-sphere.com/demo/smartmag-landing/img/prev-frame.png" 
                      className="w-full h-auto block rounded-t-[5px]" 
                      alt="Browser Frame" 
                    />

                    <div className="relative overflow-hidden group/thumb cursor-pointer">
                      <a href={demoUrl} target="_blank" title={`Click to See This Demo: ${demo.name}`}>
                        <img 
                          src={demoImg} 
                          srcSet={`${demoImg} 1x, ${demoImg2x} 2x`} 
                          alt={demo.name} 
                          className="w-full h-auto block transform group-hover/thumb:scale-105 transition-transform duration-500 rounded-b-[4px]"
                        />
                      </a>

                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none rounded-b-[4px]">
                        <span className="bg-[#ef2c32] text-white text-[13px] font-bold uppercase tracking-[1px] px-[22px] py-[12px] rounded-[3px] transform translate-y-4 group-hover/thumb:translate-y-0 transition-transform duration-300">
                          View Now
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[20px] font-bold m-0 leading-[1.3] text-[#16171f]">
                    <a href={demoUrl} target="_blank" className="hover:text-[#ef2c32] transition-colors duration-200">
                      {demo.name}
                    </a>
                  </h3>
                </div>
              )
            })}

            <div className="column text-center relative flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-full h-full min-h-[350px] border-2 border-dashed border-[#d1d5db] rounded-[5px] flex items-center justify-center bg-[#f9fafb]">
                <span className="text-[20px] font-bold text-[#9ca3af] uppercase tracking-wider">Coming Soon</span>
              </div>
            </div>
            <div className="column text-center relative flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-full h-full min-h-[350px] border-2 border-dashed border-[#d1d5db] rounded-[5px] flex items-center justify-center bg-[#f9fafb]">
                <span className="text-[20px] font-bold text-[#9ca3af] uppercase tracking-wider">Coming Soon</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ThemeSphere Footer CTA */}
      <section className="py-24 bg-[#0a0b16] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-[54px] font-black mb-6 tracking-tight leading-none text-white">
            Get the Perfect Theme for Your Site.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Free lifetime updates and 6 months of support included. Start your site now!
          </p>
          <button className="bg-[#ef2c32] text-white text-sm font-black uppercase tracking-widest px-12 py-5 hover:bg-white hover:text-[#0a0b16] transition-all flex items-center gap-3 mx-auto rounded-sm shadow-xl">
            <ShoppingCart size={18} /> Purchase Now
          </button>
        </div>
      </section>

    </main>
  );
}

