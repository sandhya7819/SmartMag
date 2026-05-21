"use client";
import GadgetsMeHeader from "@/components/GadgetsMeHeader";
import Link from "next/link";

const B = "https://smartmag.theme-sphere.com/gadgets-me/wp-content/uploads/sites/60/2025/01/";

function SectionHead({ title, link, linkText }: { title: string; link?: string; linkText?: string }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4">
      <h4 className="font-bold text-[15px] uppercase tracking-wide">{title}</h4>
      {link && <Link href={link} className="text-[11px] text-gray-500 hover:text-black uppercase">{linkText}</Link>}
    </div>
  );
}

function GridPost({ img, title, date, cat }: { img: string; title: string; date?: string; cat?: string }) {
  return (
    <article className="group">
      <div className="overflow-hidden mb-2">
        <img src={img} alt={title} className="w-full aspect-video object-cover group-hover:saturate-150 transition-all duration-300" />
      </div>
      <div className="post-meta">
        {cat && <span className="text-[10px] font-bold uppercase text-[#0066ff] mr-2">{cat}</span>}
        <h2 className="font-bold text-[13px] leading-snug hover:text-[#0066ff] transition-colors cursor-pointer line-clamp-3">{title}</h2>
        {date && <p className="text-[11px] text-gray-400 mt-1">{date}</p>}
      </div>
    </article>
  );
}

function SmallPost({ img, title, date }: { img: string; title: string; date: string }) {
  return (
    <article className="flex gap-3 py-3 border-b border-gray-100 last:border-0">
      <img src={img} alt={title} className="w-[90px] h-[65px] object-cover flex-shrink-0" />
      <div>
        <h4 className="font-bold text-[12px] leading-snug hover:text-[#0066ff] transition-colors cursor-pointer line-clamp-3">{title}</h4>
        <p className="text-[10px] text-gray-400 mt-1">{date}</p>
      </div>
    </article>
  );
}

function ListPost({ img, title, date, cat, excerpt, views }: { img: string; title: string; date: string; cat?: string; excerpt?: string; views?: string }) {
  return (
    <article className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      <img src={img} alt={title} className="w-[140px] h-[95px] object-cover flex-shrink-0" />
      <div className="flex-1">
        <h2 className="font-bold text-[14px] leading-snug hover:text-[#0066ff] transition-colors cursor-pointer">{title}</h2>
        <div className="flex items-center gap-2 mt-1">
          {cat && <span className="text-[10px] font-bold uppercase text-[#0066ff]">{cat}</span>}
          <span className="text-[10px] text-gray-400">{date}</span>
          {views && <span className="text-[10px] text-gray-400">📊 {views} Views</span>}
        </div>
        {excerpt && <p className="text-[12px] text-gray-500 mt-1 line-clamp-2">{excerpt}</p>}
      </div>
    </article>
  );
}

export default function GadgetsMePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <GadgetsMeHeader />

      <div className="container mx-auto px-4 py-6">

        {/* HERO: Full-width big article + 2 list posts */}
        <section className="mb-8">
          <div className="mb-4">
            <img src={`${B}59ef371e987dc6f2e16a3930d61e05c3-1536x864.jpeg`} alt="OnePlus" className="w-full aspect-[21/9] object-cover" />
            <div className="mt-2">
              <span className="text-[10px] font-bold uppercase text-[#0066ff]">Mobile Phones</span>
              <span className="text-[10px] text-gray-400 ml-2">Jan 12, 2020</span>
              <span className="text-[10px] text-gray-400 ml-2">Shane Doe</span>
              <h2 className="font-bold text-[22px] leading-tight mt-1 hover:text-[#0066ff] cursor-pointer">Leak reveals details of upcoming OnePlus mid-range phone with Dimensity SoC</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ListPost img={`${B}79d34b0cdcf7be65e623f9061935d5d5-300x260.jpeg`} title="The Ultimate Guide to Select Which Apple Smartwatch Is Best for You" date="Jan 11, 2020" cat="Gadgets" />
            <ListPost img={`${B}327cf3f7835b8642b4f44802eae72c3f-292x300.jpeg`} title="Scientists Create First Map of DNA Modification in the Developing Human Brain" date="Jan 11, 2020" cat="Science & Tech" />
          </div>
        </section>

        {/* DON'T MISS: 5-col grid */}
        <section className="mb-8">
          <SectionHead title="Don't Miss!" link="#" linkText="More from Technology" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <GridPost img={`${B}61c91cd7df90242c53806a9aef3fdb87-450x300.jpeg`} title="China's 'Black Panther 2.0' Robot Dog Can Even Outrun Usain Bolt" date="Mar 15, 2020" />
            <GridPost img={`${B}d154030ca512c3dc8cc48a9176440dbb-450x295.jpeg`} title="ChatGPT: Everything You Need to Know About the AI-Powered Chatbot" date="Mar 15, 2020" />
            <GridPost img={`${B}298682b4f5a73cc625123c63fa145159-450x300.jpeg`} title="Keto vs Mediterranean: Which Diet is Best for Metabolic Health?" date="Mar 15, 2020" />
            <GridPost img={`${B}247c852814dafa14d7f0d630bf59e9e5-450x253.jpeg`} title="How to Take a Screenshot on an iPhone or Android Phone, Unknown Tricks" date="Mar 15, 2020" />
            <GridPost img={`${B}46426208935d2c7627d98df2909d4ed1-450x300.jpeg`} title="Electric Bikes: The Future of Urban Mobility? Discover the Game-Changer!" date="Jan 13, 2020" />
          </div>
        </section>

        <hr className="border-gray-200 mb-8" />

        {/* LATEST TECH (col-66) + SIDEBAR (col-33) */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left col-66 */}
            <div className="lg:col-span-2">
              <SectionHead title="Latest Tech." />
              <div className="grid grid-cols-2 gap-4 mb-6">
                <GridPost img={`${B}8d2bf4b9bcafb1c64c54cadd7a20ed67-450x300.jpeg`} title="Maximize Your Old iPhone's Battery Life with These Tips" />
                <GridPost img={`${B}3c76e1877f095ba8ebca8a6c106327bd-450x300.jpeg`} title="How To Make a PS4 Or PS5 Controller Work with PC Games" />
              </div>
              <div>
                <ListPost img={`${B}4cf613cd40528a84446d5094ba34699f-450x300.jpeg`} title="The Less We Know About Fumito Ueda's New Game The Better" date="Mar 15, 2020" cat="Gaming" excerpt="To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley..." views="85" />
                <ListPost img={`${B}017e376abde3fe20db1dd761d58aad19-450x300.jpeg`} title="Indigenous Gamers Group Aims to Show How to Make a Living While Uplifting Culture" date="Mar 15, 2020" cat="Gaming" excerpt="To understand the new smart watched and other pro devices of recent focus..." views="75" />
                <ListPost img={`${B}9e2d5e8cf5d164bbaed4070f4ac83f47-450x350.jpeg`} title="Feb. 01, Today in History: Space Shuttle Columbia Destroyed During Re-Entry" date="Mar 15, 2020" cat="Science & Tech" excerpt="To understand the new smart watched and other pro devices of recent focus..." views="63" />
                <ListPost img={`${B}44647b1d15a04af780fe818f8a47e3a6-450x300.jpeg`} title="Team's Hip Replacement Surgery Invention is Set to be World First" date="Mar 15, 2020" cat="Science & Tech" excerpt="To understand the new smart watched and other pro devices of recent focus..." views="45" />
                <ListPost img={`${B}e253e6f7064f66096e6982a72f30eddb-450x368.jpeg`} title="How to Pair Wireless Headphones and Earphones to Your Phone or Computer" date="Mar 15, 2020" cat="Gadgets" excerpt="To understand the new smart watched and other pro devices of recent focus..." views="101" />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <SectionHead title="People's Favorite" />
              <div className="mb-6">
                <SmallPost img={`${B}f52840e274442a5849ef5ce0c27fcbf4-300x200.jpeg`} title="Teens & Video Games: New Research on Teenage Video Game Addiction" date="Sep 13, 2020" />
                <SmallPost img={`${B}5715839e45cc34f4cc3ee19ef6232abf-300x200.jpeg`} title="Grab the Latest Beats Solo Wireless Headphones for Half Off Right Now" date="Sep 12, 2020" />
                <SmallPost img={`${B}69fe0e732eabda515997ed0d9cc630ea-300x200.jpeg`} title="Bali Airport Autogates Make Tourist Arrival Process Super Speedy" date="Sep 10, 2020" />
                <SmallPost img={`${B}cf3d2a0d3ad8541f04ff2a03a461c6a3-1-300x169.jpg`} title="AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem" date="Sep 9, 2020" />
                <SmallPost img={`${B}d0c46f2ae574244aef1bab471c8fc181-300x226.jpeg`} title="Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched" date="Sep 8, 2020" />
                <SmallPost img={`${B}ec78bd918862ce35bc611c122eec29e0-300x200.jpeg`} title="Road Trip Essentials: Must-Have Gadgets For Your Next Adventure" date="Apr 18, 2020" />
              </div>
              <SectionHead title="Our Picks" />
              <div className="grid grid-cols-2 gap-3">
                <GridPost img={`${B}590b2b0baef98da285dd9240471f63de-450x338.jpeg`} title="ASUS Vs Dell Laptops: Discover Which Brand Offers Better Performance?" />
                <GridPost img={`${B}1a3f5e4f691cc0f0d9053466bd6db0ca-450x675.jpeg`} title="Best Smartwatches with SIM Cards in 2025: Stay Connected on the Go" />
                <GridPost img={`${B}04b14f3f5c9fbe2fac1ba38f7c8c6987-450x300.jpeg`} title="Figure AI Plans to Ship 100,000 Humanoid Robots Over Next Few Years" />
                <GridPost img={`${B}102a6a8a1b4fa77224dce8ef7e993c00-450x675.jpeg`} title="Advertisement Feature: 10 Great Gadgets to Make Life a Little Easier" />
              </div>
            </div>
          </div>
        </section>

        {/* 3-col section: EV article + 3 small | Related Articles */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="mb-4 relative">
                <img src={`${B}7c0865ea509ad611f17953a92972ea8c-1024x576.jpeg`} alt="Electric Car" className="w-full aspect-[21/9] object-cover" />
                <span className="absolute bottom-2 left-2 bg-[#0066ff] text-white text-[10px] px-2 py-0.5 font-bold">Science & Tech</span>
              </div>
              <h2 className="font-bold text-[14px] mb-4 hover:text-[#0066ff] cursor-pointer">Electric Car Chargers and Charging your EV on the Road: All You Need to Know in 2025</h2>
              <div className="grid grid-cols-3 gap-2">
                <GridPost img={`${B}256b06f2dcada492261de3d990d71b96-450x300.jpeg`} title="Apple's New 'Game Changer' iPhone Update Brings Starlink Satellite Access" />
                <GridPost img={`${B}48e1dfe67f2c5c6542b8bce284ee349f-450x300.jpeg`} title="Integrating 3D printing technology in Surgical Planning and Prosthetic Development" />
                <GridPost img={`${B}6fce487e77ec6174f5b00b29e5d31b47-450x300.jpeg`} title="Developing Design Solutions for Smart Homes Through User-Centered Scenarios" />
              </div>
            </div>

            <div className="lg:col-span-2">
              <SectionHead title="Related Articles" />
              {[
                { t: "Redmi Series Launched With 200MP Camera and a Fast Charging", d: "Jan 13, 2021" },
                { t: "Oculus Founder Makes a VR Headset That Can Literally Kill You", d: "Jan 13, 2021" },
                { t: "T-Mobile US Faces Class-Action Suit From AT&T and Verizon Subscribers", d: "Jan 13, 2021" },
                { t: "Google Pixel 7, iPhone 14 Compared: Check Out 5 Major Differences", d: "Jan 13, 2021" },
                { t: "The Excellent EarFun Air Wireless Earbuds are Down to Just $4", d: "Jan 12, 2021" },
                { t: "Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed", d: "Jan 12, 2021" },
                { t: "Black Ops 6 guide: Best settings for Nvidia RTX 2060 and RTX 2060 Super", d: "Jan 12, 2021" },
                { t: "Sony Leads Mirrorless Camera Sales While Canon Dominates DSLRs", d: "Jan 12, 2021" },
              ].map((a, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <h4 className="font-bold text-[13px] hover:text-[#0066ff] cursor-pointer">{a.t}</h4>
                  <span className="text-[11px] text-gray-400 ml-4 whitespace-nowrap">{a.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner Ad */}
        <section className="mb-8">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener">
            <img src="https://smartmag.theme-sphere.com/gadgets-me/wp-content/uploads/sites/60/2025/01/Blue-Wide.png" alt="SmartMag Ad" className="w-full" />
          </a>
        </section>

        {/* Science & Tech (col-66) + Popular Now (col-33) */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionHead title="Science & Tech" />
              <ListPost img={`${B}6e778db1db32676c0070efa76595ea57-450x338.jpeg`} title="Discover the Secrets of Mars: NASA's Perseverance Rover Unveils Surprising New Sample!" date="Jan 14, 2021" cat="Science & Tech" excerpt="To understand the new smart watched and other pro devices of recent focus..." views="1,024" />
              <ListPost img={`${B}782eac980d3c8ec34b96c67f97f437b0-450x630.jpeg`} title="Drone Threats to IoT Security: Dealing with the Growing Concern" date="Jan 14, 2021" cat="Gadgets" excerpt="To understand the new smart watched and other pro devices of recent focus..." views="527" />
              <ListPost img={`${B}aa39177765a46c093d98650713383fd5-450x563.jpeg`} title="Samsung Galaxy A36 Prepares to Launch with a Selfie Camera Upgrade" date="Jan 14, 2021" cat="Mobile Phones" excerpt="To understand the new smart watched and other pro devices of recent focus..." views="52" />
              <ListPost img={`${B}5b4f3a80b07273fec581b7973c6049b5-450x338.jpeg`} title="Redmi Note 14 5G vs Realme 13 5G: Price, Specifications, and Features Compared" date="Jan 14, 2021" cat="Mobile Phones" excerpt="To understand the new smart watched and other pro devices of recent focus..." views="49" />
              <ListPost img={`${B}930cfc38faa4854368d86e24ca4a6c43-450x300.jpeg`} title="Building the Foundations That will Empower Africa's Youth Using Education and Technology" date="Jan 14, 2021" cat="Science & Tech" excerpt="To understand the new smart watched and other pro devices of recent focus..." views="33" />
            </div>
            <div className="lg:col-span-1">
              <SectionHead title="Popular Now" />
              {[
                { img: `${B}21a449971597174ed076f95bb4364488-450x300.jpeg`, t: "Acer Predator Helios Neo 14 Launched: Powerful Core Ultra 7 Gaming & Creative Laptop" },
                { img: `${B}e065564fd6bcc46324f41fd6b03fe5a8-450x300.jpeg`, t: "DJI Air 3S Now Available For Registration In Japan: Release Imminent" },
                { img: `${B}099514691be0cb79bf824544379738cd-450x338.jpeg`, t: "How Do the New Mobiles Brands Compare with the Equivalent iPhones?" },
              ].map((p, i) => (
                <div key={i} className="flex gap-3 py-3 border-b border-gray-100 last:border-0 items-start">
                  <span className="font-black text-3xl text-gray-200 leading-none w-8 flex-shrink-0">{i + 1}</span>
                  <div>
                    <img src={p.img} alt={p.t} className="w-full aspect-video object-cover mb-2" />
                    <h4 className="font-bold text-[13px] line-clamp-3 hover:text-[#0066ff] cursor-pointer">{p.t}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Videos */}
        <section className="mb-8">
          <SectionHead title="Trending Videos." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GridPost img={`${B}20d09e2862acd0d8c93dc499c7157acb-768x334.jpeg`} title="Apple and Sony Still Working to Bring VR Gaming Controller Support to Vision Pro" />
            <div className="relative group cursor-pointer">
              <img src={`${B}d36f32e67d2ab293c4efe4a65aa3bba0-768x512.jpeg`} alt="Skyscrapers" className="w-full aspect-video object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <span className="text-black text-lg ml-1">▶</span>
                </div>
              </div>
              <h2 className="font-bold text-[13px] mt-2 hover:text-[#0066ff]">The Cities with The Most Skyscrapers in 2024: Hong Kong, Dubai, New York City & More</h2>
            </div>
          </div>
        </section>

        {/* More from Tech + Sidebar */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionHead title="More from Tech..." />
              <ListPost img={`${B}0330eaab1b5261c0c2a3843607821efe-450x300.jpeg`} title="Top Features of RedMagic Nova Gaming Tablet Review: An Android Gaming Powerhouse" date="Mar 12, 2021" cat="Gaming" excerpt="To understand the new smart watched and other pro devices of recent focus..." />
              <ListPost img={`${B}a83cd8c72961415a5f55eb01b4d5e5b6-200x300.jpeg`} title="Why Is Crypto Going Down? Fake DeepSeek Tokens Affect Thousands of Traders" date="Jan 16, 2021" cat="Science & Tech" excerpt="To understand the new smart watched and other pro devices of recent focus..." />
              <ListPost img={`${B}21a449971597174ed076f95bb4364488-450x300.jpeg`} title="Acer Predator Helios Neo 14 Launched: Powerful Core Ultra 7 Gaming & Creative Laptop" date="Jan 14, 2021" cat="Mobile Phones" excerpt="To understand the new smart watched and other pro devices of recent focus..." />
              <ListPost img={`${B}099514691be0cb79bf824544379738cd-450x338.jpeg`} title="How Do the New Mobiles Brands Compare with the Equivalent iPhones?" date="Jan 14, 2021" cat="Mobile Phones" excerpt="To understand the new smart watched and other pro devices of recent focus..." />
            </div>
            <div className="lg:col-span-1">
              <SectionHead title="What's Hot" />
              <SmallPost img={`${B}0330eaab1b5261c0c2a3843607821efe-300x200.jpeg`} title="Top Features of RedMagic Nova Gaming Tablet Review: An Android Gaming Powerhouse" date="Mar 12, 2021" />
              <SmallPost img={`${B}a83cd8c72961415a5f55eb01b4d5e5b6-200x300.jpeg`} title="Why Is Crypto Going Down? Fake DeepSeek Tokens Affect Thousands of Traders" date="Jan 16, 2021" />
              <SmallPost img={`${B}sahej-brar-6Pg2e3W1KDY-unsplash-300x300.jpg`} title="Tech Study Reveals Effects of Mobile Technology on Professionals" date="Jan 15, 2021" />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
          <img src="https://smartmag.theme-sphere.com/gadgets-me/wp-content/uploads/sites/60/2025/02/LOGO-GadgetsMe-01@15x.png" alt="GadgetsMe" className="h-5 mx-auto mb-4 opacity-80" />
          <p className="text-gray-400 text-[12px]">© 2025 GadgetsMe. All rights reserved. Powered by SmartMag.</p>
        </div>
      </footer>
    </main>
  );
}
