import NewsVerifiedHeader from "@/components/NewsVerifiedHeader";
import NewsVerifiedFooter from "@/components/NewsVerifiedFooter";
import { ChevronRight, Mail as MailIcon } from "lucide-react";

export default function NewsVerifiedPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#e91e63] selection:text-white pb-0">
      <NewsVerifiedHeader />

      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-9">
          
          {/* Main Content Area (66%) */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Hero Section */}
            <section className="space-y-4 group cursor-pointer">
              <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 image-link">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop" 
                  alt="Hero Featured" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#e91e63] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                  World News
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <h1 className="text-3xl md:text-[40px] font-bold text-[#111] leading-tight group-hover:text-[#e91e63] transition-colors">
                  Global Leaders Meet to Discuss the Future of Renewable Energy
                </h1>
                <div className="flex items-center gap-3 text-[12px] text-gray-500 font-medium">
                  <span className="text-[#e91e63] font-semibold uppercase">By John Doe</span>
                  <span>•</span>
                  <span>October 15, 2023</span>
                </div>
                <p className="text-[#444] text-[16px] leading-relaxed">
                  In a historic gathering, leaders from over 50 nations have convened to outline a comprehensive strategy for transitioning to 100% renewable energy by 2050. The summit addresses critical challenges in infrastructure, funding, and international cooperation.
                </p>
              </div>
            </section>

            {/* Around the World Section */}
            <section className="space-y-8">
              <div className="border-t-2 border-[#e91e63] pt-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#111]">Around the World</h2>
                <a href="#" className="text-[12px] font-bold text-gray-500 hover:text-[#e91e63] flex items-center transition-colors">
                  VIEW ALL <ChevronRight size={14} />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "New Economic Policies Shift Global Markets", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop", category: "Economy" },
                  { title: "Breakthrough Vaccine Shows Promise in Trials", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop", category: "Health" },
                  { title: "Mars Rover Discovers Signs of Ancient Rivers", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=600&auto=format&fit=crop", category: "Science" },
                  { title: "Tech Stocks Rally After Strong Quarter Earnings", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop", category: "Business" }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer space-y-3">
                    <div className="aspect-[3/2] overflow-hidden bg-gray-100 relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute bottom-3 left-3 bg-[#e91e63] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                        {post.category}
                      </div>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#111] leading-snug group-hover:text-[#e91e63] transition-colors">{post.title}</h3>
                    <div className="text-[11px] text-gray-500">October 14, 2023</div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Sidebar (33%) */}
          <div className="lg:w-1/3 space-y-10">
            
            {/* Ad/Banner Widget */}
            <div className="bg-[#f9f9f9] border border-gray-100 p-8 flex flex-col items-center justify-center text-center h-[400px] relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10 space-y-4">
                <div className="text-[10px] font-bold text-[#e91e63] uppercase tracking-widest">ADVERTISEMENT</div>
                <h3 className="text-2xl font-bold text-[#111]">Premium Theme</h3>
                <p className="text-gray-500 text-sm">Build your perfect news site today.</p>
                <button className="bg-[#111] text-white px-6 py-2 text-[12px] font-bold uppercase rounded-md hover:bg-[#e91e63] transition-colors mt-2">Purchase Now</button>
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="space-y-6">
              <div className="border-t-2 border-[#e91e63] pt-4">
                <h3 className="text-lg font-bold text-[#111]">Recent Posts</h3>
              </div>
              <div className="space-y-5 bg-[#f9f9f9] p-5 border border-gray-100">
                {[
                  { title: "Local Elections Bring Surprising Results Across the Board", img: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=200&auto=format&fit=crop" },
                  { title: "New Cultural Festival Attracts Thousands of Visitors", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop" },
                  { title: "Study Shows Benefits of Mediterranean Diet", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=200&auto=format&fit=crop" },
                  { title: "City Council Approves New Infrastructure Budget", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop" },
                  { title: "Record Breaking Heatwave Expected This Weekend", img: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=200&auto=format&fit=crop" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-[80px] h-[80px] shrink-0 overflow-hidden bg-gray-200">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={post.title} />
                    </div>
                    <div className="space-y-1.5 flex-1 pt-1">
                      <h4 className="text-[14px] font-bold text-[#111] leading-snug group-hover:text-[#e91e63] transition-colors">{post.title}</h4>
                      <div className="text-[11px] text-gray-500 uppercase font-medium">Oct 14, 2023</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-[#111] p-8 text-center text-white rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#e91e63] rounded-full blur-[60px] opacity-40"></div>
              <MailIcon size={32} className="mx-auto text-[#e91e63] mb-4" />
              <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
              <p className="text-gray-400 text-sm mb-6">Get our daily newsletter filled with the most important news.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#e91e63] transition-colors" />
                <button className="w-full bg-[#e91e63] text-white font-bold uppercase tracking-wider text-sm py-2.5 hover:bg-pink-700 transition-colors">Subscribe</button>
              </form>
            </div>

          </div>
        </div>

        {/* Full Width Grid Section (Health & Lifestyle) */}
        <section className="mt-16 space-y-8">
          <div className="border-t-2 border-[#e91e63] pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-[#111]">Health & Lifestyle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Yoga Retreats Gain Popularity Among Professionals", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop" },
              { title: "The Truth About Intermittent Fasting", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop" },
              { title: "Mental Health Apps: Do They Really Work?", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop" },
              { title: "Best Running Shoes for Marathon Training", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer space-y-3">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-[16px] font-bold text-[#111] leading-snug group-hover:text-[#e91e63] transition-colors">{post.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Tech & Innovation (Grid) */}
        <section className="mt-20 space-y-8 bg-[#fdf2f8] p-12 -mx-4 md:-mx-12 rounded-sm border-y border-[#fce7f3]">
          <div className="border-l-4 border-[#e91e63] pl-4">
            <h2 className="text-2xl font-black text-[#111] uppercase tracking-tighter">Tech & Innovation</h2>
            <p className="text-gray-500 text-sm mt-1">Exploring the cutting edge of human progress.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "AI Models Reach New Milestone in Logical Reasoning", cat: "AI", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop" },
              { title: "Quantum Computing: The Race for Supremacy Heats Up", cat: "Computing", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop" },
              { title: "Sustainable Tech: New Solar Glass Could Power Skyscrapers", cat: "Energy", img: "https://images.unsplash.com/photo-1509391366360-fe5bb658589b?q=80&w=400&auto=format&fit=crop" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer space-y-4">
                <div className="aspect-video overflow-hidden rounded-sm relative shadow-lg">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-0 right-0 bg-[#e91e63] text-white text-[9px] font-black px-2 py-1 uppercase">{post.cat}</div>
                </div>
                <h3 className="text-[18px] font-bold text-[#111] leading-tight group-hover:text-[#e91e63] transition-colors">{post.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Entertainment & Arts */}
        <section className="mt-20 space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-[#111] shrink-0">Entertainment & Arts</h2>
            <div className="flex-1 h-[1px] bg-gray-100"></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 group cursor-pointer space-y-6">
              <div className="aspect-[16/9] overflow-hidden rounded-sm bg-gray-100 relative">
                <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-3xl font-bold leading-tight group-hover:text-[#e91e63] transition-colors">The Renaissance of Classic Cinema in the Digital Streaming Age</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed">Film critics are noting a significant shift in audience preferences as classic cinematic techniques find a new home in modern production workflows...</p>
            </div>
            <div className="lg:w-1/2 space-y-8">
              {[
                { title: "New Modern Art Gallery Opens in Downtown Metro Area", time: "2 Hours Ago", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=200&auto=format&fit=crop" },
                { title: "Music Streaming Platforms Battle for Exclusive Content", time: "4 Hours Ago", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop" },
                { title: "The Rise of Immersive Theater: What to Expect in 2024", time: "6 Hours Ago", img: "https://images.unsplash.com/photo-1514525253361-bee8a4874aad?q=80&w=200&auto=format&fit=crop" }
              ].map((post, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                  <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm bg-gray-50">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-2 py-1">
                    <h4 className="text-[16px] font-bold group-hover:text-[#e91e63] transition-colors leading-snug">{post.title}</h4>
                    <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{post.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Special Investigations (Immersive) */}
        <section className="mt-20 bg-[#111] text-white p-12 -mx-4 md:-mx-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="relative z-10 space-y-8 max-w-4xl mx-auto text-center">
            <div className="inline-block border border-[#e91e63] text-[#e91e63] text-[10px] font-black px-4 py-1.5 tracking-[0.2em] uppercase">Special Report</div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight italic">The Hidden Cost of the Global Supply Chain Crisis</h2>
            <p className="text-white/60 text-lg leading-relaxed">Our investigative team spent six months tracking the flow of goods across three continents to reveal the human impact of global logistics breakdowns...</p>
            <button className="bg-[#e91e63] text-white px-10 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Read the Full Investigation</button>
          </div>
        </section>

        {/* 5. Economy Desk */}
        <section className="mt-20 space-y-8">
          <div className="border-t-2 border-[#e91e63] pt-4">
            <h2 className="text-xl font-bold text-[#111]">Economy Desk</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Inflation Rates Stabilization Brings Hope to Markets", cat: "Analysis", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop" },
              { title: "Central Banks Signal Potential Rate Cuts in Q3", cat: "Banking", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=400&auto=format&fit=crop" },
              { title: "Emerging Markets Resilience in a Volatile Year", cat: "Global", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop" },
              { title: "The Impact of Artificial Intelligence on Productivity", cat: "Future", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer space-y-4">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm relative">
                  <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[9px] font-black text-[#e91e63] bg-white px-2 py-0.5 inline-block mb-2 uppercase tracking-widest">{post.cat}</div>
                    <h4 className="text-[14px] font-bold text-white leading-tight shadow-text">{post.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <NewsVerifiedFooter />
    </main>
  );
}
