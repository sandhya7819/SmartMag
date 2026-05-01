import DigitalHubHeader from "@/components/DigitalHubHeader";
import DigitalHubFooter from "@/components/DigitalHubFooter";
import Link from "next/link";
import { ChevronRight, Play, TrendingUp, Mail as MailIcon, ExternalLink, Zap, Star } from "lucide-react";

export default function DigitalHubPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#00d1ac] selection:text-white">
      <DigitalHubHeader />

      {/* 1. Trending Bar */}
      <div className="bg-[#00d1ac] text-[#111] py-2.5 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center gap-6">
          <div className="flex items-center gap-2 shrink-0 bg-white/20 px-3 py-0.5 text-[10px] font-black uppercase tracking-widest rounded-sm border border-white/10">
            <Zap size={12} fill="currentColor" />
            <span>Trending Now</span>
          </div>
          <div className="flex gap-12 whitespace-nowrap animate-marquee font-bold text-[13px] tracking-tight">
            {[
              "The 15 Best Early Black Friday Smartwatch Deals You Can Grab Now",
              "New AI Models Changing the Way We Code and Create Art",
              "Sony Announces High-Resolution Audio Player for Audiophiles",
              "Google's Latest Update Improves Battery Life on Pixel Devices",
              "Top 10 Cybersecurity Threats to Watch Out for in 2024"
            ].map((text, i) => (
              <Link key={i} href="#" className="hover:underline cursor-pointer">{text}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        
        {/* 2. Hero Grid (2/3 Main Feature, 1/3 List) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Main Feature */}
          <div className="lg:col-span-2 group cursor-pointer relative overflow-hidden bg-gray-900 aspect-[16/9] rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
              alt="Main Tech Feature"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="bg-[#00d1ac] text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 inline-block mb-4">
                Special Review
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 group-hover:text-[#00d1ac] transition-colors">
                The Best High-End Gaming Laptops to Buy in Late 2023
              </h2>
              <div className="flex items-center gap-4 text-[12px] font-bold text-white/60 uppercase tracking-widest">
                <span>By Sarah Tech</span>
                <span>•</span>
                <span>Oct 15, 2023</span>
              </div>
            </div>
          </div>

          {/* News Just In List */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-2">
              <h3 className="text-[14px] font-black uppercase tracking-widest text-[#111]">News Just In</h3>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00d1ac] animate-pulse"></div>
            </div>
            <div className="space-y-6">
              {[
                { title: "Apple to Integrate Generative AI in Next iOS Update", cat: "AI News", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200&auto=format&fit=crop" },
                { title: "Top 5 VPNs for Ultimate Privacy and Speed in 2024", cat: "Privacy", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=200&auto=format&fit=crop" },
                { title: "NVIDIA Unveils New Cloud Gaming Infrastructure", cat: "Cloud", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200&auto=format&fit=crop" },
                { title: "The Rise of Foldable Smartphones: Market Analysis", cat: "Mobile", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=200&auto=format&fit=crop" }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer items-start">
                  <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm bg-gray-100">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] font-black text-[#00d1ac] uppercase tracking-widest">{post.cat}</div>
                    <h4 className="text-[14px] font-bold text-[#111] leading-tight group-hover:text-[#00d1ac] transition-colors line-clamp-2">{post.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Area */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Tech News Grid */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">Technology News</h3>
                <div className="flex-1 h-[1px] bg-gray-50"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { title: "Google's New Pixel Watch: Is it Finally a True Apple Watch Competitor?", img: "https://images.unsplash.com/photo-1508685096489-7aac241bd9b2?q=80&w=800&auto=format&fit=crop", cat: "Reviews" },
                  { title: "Tesla Model 3 Refresh: What's New and What's Improved", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop", cat: "EV News" },
                  { title: "AMD vs Intel: The Processor War Heats Up in 2024", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop", cat: "Hardware" },
                  { title: "Modern Web Frameworks: Which One Should You Choose?", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop", cat: "Dev Tech" }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer space-y-4">
                    <div className="aspect-video overflow-hidden rounded-sm bg-gray-100 relative">
                      <img src={post.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={post.title} />
                      <div className="absolute top-3 left-3 bg-[#00d1ac] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">
                        {post.cat}
                      </div>
                    </div>
                    <h4 className="text-[18px] font-black leading-tight group-hover:text-[#00d1ac] transition-colors">{post.title}</h4>
                    <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2">The technology industry is moving faster than ever, and we have analyzed the latest shifts in the market to bring you...</p>
                    <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest pt-2">
                      <span>Oct 14, 2023</span>
                      <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                      <span className="flex items-center gap-1"><Play size={10} fill="currentColor" /> Watch Video</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Software Section (Clean Horizontal) */}
            <section className="space-y-8 bg-[#f8fafc] p-10 rounded-sm">
              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">Software & Productivity</h3>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Slack vs Discord: Which is Better for Your Remote Team?", img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format&fit=crop" },
                  { title: "Mastering Notion: 10 Advanced Tips for Power Users", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=400&auto=format&fit=crop" },
                  { title: "The Best Free Image Editors for Windows and macOS", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-6 group cursor-pointer items-center">
                    <div className="w-32 h-20 shrink-0 overflow-hidden rounded-sm">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[16px] font-black group-hover:text-[#00d1ac] transition-colors leading-tight">{post.title}</h4>
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Oct 12, 2023</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. AI & Future Tech (Immersive Section) */}
            <section className="bg-[#0b0c10] text-white p-12 -mx-4 md:-mx-12 rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-black uppercase tracking-widest text-[#00d1ac]">AI & Future Tech</h3>
                  <Link href="#" className="text-[11px] font-black uppercase tracking-widest hover:text-white transition-colors">Explore Intelligence</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4 cursor-pointer group">
                    <div className="aspect-video overflow-hidden rounded-sm bg-gray-900 border border-white/5">
                      <img src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                    </div>
                    <h4 className="text-2xl font-black group-hover:text-[#00d1ac] transition-colors leading-tight">How Generative AI is Reshaping the Creative Industry</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">From digital art to professional copywriting, AI models are becoming indispensable tools for creators worldwide...</p>
                  </div>
                  <div className="space-y-6">
                    {[
                      { title: "The Ethics of Artificial Intelligence in Healthcare", time: "2 Hours Ago" },
                      { title: "New Quantum Computing Milestone Reached by Researchers", time: "5 Hours Ago" },
                      { title: "Autonomous Vehicles: The Path to Level 5 Autonomy", time: "8 Hours Ago" },
                      { title: "Humanoid Robots: Coming to a Home Near You Soon?", time: "12 Hours Ago" }
                    ].map((item, i) => (
                      <div key={i} className="group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <h5 className="text-[15px] font-bold group-hover:text-[#00d1ac] transition-colors leading-snug">{item.title}</h5>
                        <span className="text-[10px] text-gray-500 font-bold uppercase mt-2 block">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Gadget Reviews & Buying Guides */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">Gadget Reviews</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "iPhone 15 Pro Review: Titanium Performance", score: "9.5", img: "https://images.unsplash.com/photo-1695048133142-1a20484d256e?q=80&w=600&auto=format&fit=crop" },
                  { title: "Sony WH-1000XM5: The King of Noise Cancelling", score: "9.8", img: "https://images.unsplash.com/photo-1670055742186-09257d079339?q=80&w=600&auto=format&fit=crop" },
                  { title: "Kindle Scribe: The Best Reading Experience Yet?", score: "8.9", img: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=600&auto=format&fit=crop" }
                ].map((review, i) => (
                  <div key={i} className="group cursor-pointer space-y-4">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                      <img src={review.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 right-4 bg-black text-[#00d1ac] w-12 h-12 rounded-full flex items-center justify-center font-black text-sm shadow-xl border border-white/10">
                        {review.score}
                      </div>
                    </div>
                    <h4 className="text-[16px] font-black group-hover:text-[#00d1ac] transition-colors leading-tight">{review.title}</h4>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Digital Deals (Horizontal Grid) */}
            <section className="bg-gray-50 p-10 rounded-sm space-y-8">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">Digital Deals</h3>
                <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-[#00d1ac] flex items-center gap-1 hover:underline">See All Deals <ChevronRight size={14} /></Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { title: "MacBook Air M2", old: "$1,199", new: "$999", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop" },
                  { title: "AirPods Pro 2", old: "$249", new: "$199", img: "https://images.unsplash.com/photo-1588423770574-910ae27c853f?q=80&w=400&auto=format&fit=crop" },
                  { title: "PS5 Console", old: "$499", new: "$449", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=400&auto=format&fit=crop" },
                  { title: "Dell XPS 13", old: "$1,099", new: "$899", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=400&auto=format&fit=crop" }
                ].map((deal, i) => (
                  <div key={i} className="group cursor-pointer space-y-3">
                    <div className="aspect-square overflow-hidden rounded-sm bg-white border border-gray-100">
                      <img src={deal.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="text-center space-y-1">
                      <h5 className="text-[13px] font-bold text-gray-800 line-clamp-1 group-hover:text-[#00d1ac] transition-colors">{deal.title}</h5>
                      <div className="flex justify-center gap-2 items-center">
                        <span className="text-[11px] text-gray-400 line-through">{deal.old}</span>
                        <span className="text-[13px] font-black text-red-500">{deal.new}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Cybersecurity & Privacy */}
            <section className="space-y-8 pt-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-black uppercase tracking-widest text-[#111]">Cybersecurity & Privacy</h3>
              </div>
              <div className="space-y-10">
                {[
                  { title: "How to Protect Your Home Network from Advanced Persistent Threats", cat: "Security", img: "https://images.unsplash.com/photo-1558494949-ef01091551d4?q=80&w=800&auto=format&fit=crop" },
                  { title: "The Top 5 Encrypted Messaging Apps for Private Communication", cat: "Privacy", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
                  { title: "Understanding Zero-Knowledge Proofs in Modern Cryptography", cat: "Encryption", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer">
                    <div className="md:w-[240px] aspect-video shrink-0 overflow-hidden rounded-sm relative shadow-md">
                      <img src={post.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={post.title} />
                    </div>
                    <div className="space-y-2 py-1">
                      <div className="text-[9px] font-black text-[#00d1ac] uppercase tracking-widest">{post.cat}</div>
                      <h4 className="text-[20px] font-black leading-tight group-hover:text-[#00d1ac] transition-colors">{post.title}</h4>
                      <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2">Security experts are warning about new vulnerabilities discovered in common consumer hardware...</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            
            {/* Numbered Most Read Sidebar */}
            <div className="space-y-6">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-[#111] inline-block pb-1">Most Read Posts</h3>
              <div className="space-y-6">
                {[
                  "iPhone 15 Pro Max Review: The Best Smartphone Ever?",
                  "Why Every Developer Should Learn TypeScript in 2024",
                  "Top 10 Mechanical Keyboards for Gaming and Work",
                  "The Future of AI: How LLMs Are Changing Everything",
                  "Best Early Black Friday Tech Deals You Can't Miss"
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <span className="text-[32px] font-black text-gray-100 group-hover:text-[#00d1ac] transition-colors leading-none">{i + 1}</span>
                    <h4 className="text-[14px] font-bold text-gray-800 leading-snug group-hover:text-[#00d1ac] transition-colors pt-1">{title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Sidebar */}
            <div className="bg-[#111] text-white p-8 rounded-sm relative overflow-hidden group border-t-4 border-[#00d1ac]">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00d1ac]/10 rounded-full group-hover:scale-125 transition-transform"></div>
              <MailIcon size={40} className="mb-4 text-[#00d1ac] opacity-50" />
              <h3 className="text-xl font-black uppercase tracking-tight mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-[14px] leading-relaxed mb-6">Join our tech community and never miss a critical update.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d1ac] transition-colors" />
                <button className="w-full bg-[#00d1ac] text-[#111] font-black uppercase tracking-widest text-[11px] py-3.5 hover:bg-white transition-colors">JOIN NOW</button>
              </form>
            </div>

            {/* Gaming News (Boxed Widget with Light Green Border) */}
            <div className="bg-[#f0fdfa] border border-[#ccfbf1] p-6 rounded-sm">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={18} className="text-[#00d1ac]" />
                <h3 className="text-[14px] font-black uppercase tracking-widest text-[#111]">Gaming News</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "GTA 6 Release Date Leaks", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200&auto=format&fit=crop" },
                  { title: "New Xbox Game Pass Titles", img: "https://images.unsplash.com/photo-1605906302474-f60df68a6791?q=80&w=200&auto=format&fit=crop" },
                  { title: "Best Mods for Elden Ring", img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=200&auto=format&fit=crop" },
                  { title: "The State of PS5 Pro Rumors", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=200&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer space-y-2">
                    <div className="aspect-square overflow-hidden rounded-sm">
                      <img src={post.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h4 className="text-[12px] font-bold text-gray-800 leading-tight group-hover:text-[#00d1ac] transition-colors line-clamp-2">{post.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Editor's Choice Sidebar */}
            <div className="space-y-6">
              <h3 className="text-[14px] font-black uppercase tracking-widest border-b-2 border-[#111] inline-block pb-1">Editor's Choice</h3>
              <div className="space-y-6">
                {[
                  { title: "The Ultimate Guide to Custom PC Building", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=400&auto=format&fit=crop" },
                  { title: "Top 5 Mechanical Keyboards for Coders", img: "https://images.unsplash.com/photo-1618384881928-bbcd38efeb5a?q=80&w=400&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer space-y-3">
                    <div className="aspect-[16/9] overflow-hidden rounded-sm relative">
                      <img src={post.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute top-0 left-0 bg-[#00d1ac] p-2 text-white">
                        <Star size={12} fill="currentColor" />
                      </div>
                    </div>
                    <h4 className="text-[15px] font-bold text-gray-800 leading-tight group-hover:text-[#00d1ac] transition-colors">{post.title}</h4>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      <DigitalHubFooter />
    </main>
  );
}
