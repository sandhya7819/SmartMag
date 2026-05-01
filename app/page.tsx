import { MoveRight, Monitor, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const demos = [
  { name: "GoodNews", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Tech 1: iGadgets", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Tech 2: TheWire", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "TechBlog", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "News: SmartTimes", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "News: NationalPress", image: "https://images.unsplash.com/photo-1557992260-ec58e38d363c?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "Tech: GadgetsMe", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "Financial", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "News: NewsVerified", image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "News: Political", image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "CoinBase / Crypto", image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "News: TheVoiceDaily", image: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "DigitalHub", image: "https://images.unsplash.com/photo-1480506132288-68f7705954bd?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "News: NewsOne24", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "News: TribunePost", image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "CuratedMag", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "EverydayNews", image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "FridayMag", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "MorningPost News", image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "Health", image: "https://images.unsplash.com/photo-1505751172107-59c359f6b677?q=80&w=800&auto=format&fit=crop", tag: "NEW" },
  { name: "Cup Of Coffee", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Spotlight Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "SmartLife", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "CityToday", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "WorldMag", image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "MagazineCo", image: "https://images.unsplash.com/photo-1497005367839-6e852de72767?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "SmartPost", image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "NewsTime", image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "DailyScoop", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "FamilyMag", image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Discover!", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Al Arabiya", image: "https://images.unsplash.com/photo-1542401886-65d6c7304f47?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "News & Mag", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Be The Change", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "LazyBusy", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Insights Only", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "GeeksEmpire", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Blogger", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "DigiTech", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "TechDrop", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "GossipMag", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Muscle + Fitness", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "PrimeMag", image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "NewsBoard", image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "News Observer", image: "https://images.unsplash.com/photo-1557992260-ec58e38d363c?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "MagStudio", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "GameZone", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "ProMag", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Social Life", image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "TheZine", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "NewsBulletin", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "CityBuzz", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Informed", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Gaming", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Trendy/Lifestyle", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop", tag: null },
  { name: "Classic/Legacy", image: "https://images.unsplash.com/photo-1478641300939-01366286484c?q=80&w=800&auto=format&fit=crop", tag: null }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-red-500 selection:text-white">
      
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

      {/* Hero Section */}
      <section className="py-24 text-center bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black text-[#111] mb-6 tracking-tight leading-[1.1]">
            <span className="text-[#E54E53]">58+</span> Unique Designs, <span className="font-light">Unlimited</span> <br className="hidden md:block" /> Layout Variations
          </h1>
          <div className="w-20 h-1 bg-[#111] mx-auto mb-10"></div>
          <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-widest max-w-2xl mx-auto leading-relaxed mb-4">
            All demos below are <span className="text-[#111] border-b-2 border-[#111]">included</span> in the theme. Get future demos & updates for free.
          </p>
          <p className="text-gray-400 text-xs md:text-sm font-medium tracking-tight">
            Import with one click. Combine elements for unlimited unique layouts.
          </p>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {demos.map((demo, index) => {
              // Creating routing logic dynamically for matching specific demo names
              let href = "#";
              if (demo.name === "GoodNews") href = "/good-news";
              else if (demo.name.includes("iGadgets") || demo.name === "Tech 1: iGadgets") href = "/tech-1";
              else if (demo.name.includes("TheWire") || demo.name === "Tech 2: TheWire") href = "/tech-2";
              else if (demo.name === "TechBlog") href = "/tech-blog";
              else if (demo.name.includes("SmartTimes")) href = "/smart-times";
              else if (demo.name.includes("NationalPress")) href = "/national-press";
              else if (demo.name.includes("GadgetsMe")) href = "/gadgets-me";
              else if (demo.name === "Financial") href = "/financial";
              else if (demo.name.includes("NewsVerified")) href = "/news-verified";
              else if (demo.name.includes("Political")) href = "/political";
              else if (demo.name.includes("CoinBase") || demo.name.includes("Crypto")) href = "/coinbase";
              else if (demo.name.includes("TheVoiceDaily")) href = "/the-voice-daily";
              else if (demo.name === "DigitalHub") href = "/digital-hub";
              else if (demo.name.includes("NewsOne24")) href = "/news-one24";
              else if (demo.name.includes("TribunePost")) href = "/tribune-post";
              else if (demo.name === "CuratedMag") href = "/curated-mag";
              else if (demo.name === "EverydayNews") href = "/everyday-news";
              else if (demo.name === "FridayMag") href = "/friday-mag";
              else if (demo.name.includes("MorningPost")) href = "/morning-post";
              else if (demo.name === "Health") href = "/health";
              else if (demo.name === "Cup Of Coffee") href = "/cup-of-coffee";
              else if (demo.name === "Spotlight Fashion") href = "/spotlight";
              
              return (
                <div key={index} className="group flex flex-col items-center">
                  <Link 
                    href={href} 
                    className="relative w-full aspect-[4/5] bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] rounded-md overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] cursor-pointer border border-gray-100 block"
                  >
                    <div className="absolute top-0 left-0 w-full h-[30px] bg-gray-100 border-b border-gray-200 flex items-center px-3 space-x-1.5 z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <img 
                      src={demo.image} 
                      alt={demo.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mt-[30px]"
                    />
                    
                    {/* Tag */}
                    {demo.tag && (
                      <div className="absolute top-10 right-4 bg-[#E54E53] text-white text-[10px] font-black px-2 py-1 rounded-sm shadow-md z-20">
                        {demo.tag}
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                      <div className="bg-[#E54E53] text-white text-[11px] font-black uppercase tracking-widest px-8 py-4 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 rounded-sm">
                        Live Preview <Monitor size={14} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                  
                  <h3 className="mt-8 text-[15px] font-black text-[#111] group-hover:text-[#E54E53] transition-colors tracking-wide text-center">
                    {demo.name}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ThemeSphere Footer CTA */}
      <section className="py-24 bg-[#0a0b16] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-[54px] font-black mb-6 tracking-tight leading-none">
            Get the Perfect Theme for Your Site.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Free lifetime updates and 6 months of support included. Start your site now!
          </p>
          <button className="bg-[#E54E53] text-white text-sm font-black uppercase tracking-widest px-12 py-5 hover:bg-white hover:text-[#0a0b16] transition-all flex items-center gap-3 mx-auto rounded-sm shadow-xl">
            <ShoppingCart size={18} /> Purchase Now
          </button>
        </div>
      </section>

    </main>
  );
}
