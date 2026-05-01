import CupOfCoffeeHeader from "@/components/CupOfCoffeeHeader";
import CupOfCoffeeFooter from "@/components/CupOfCoffeeFooter";
import { Play, ChevronRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CupOfCoffeePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#111]">
      <CupOfCoffeeHeader />

      <main className="container mx-auto px-4 lg:px-8 max-w-[1200px] py-8">
        
        {/* Hero Section (1+2 layout) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-12">
          {/* Left Large */}
          <div className="relative aspect-[4/3] lg:aspect-auto h-full group overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop" 
              alt="Coffee main" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="bg-[#e21d23] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4 inline-block">Lifestyle</span>
              <h2 className="text-white text-[28px] lg:text-[36px] font-bold leading-tight mb-3 group-hover:text-[#e21d23] transition-colors">
                The Art of Slow Living: Why Your Morning Coffee Ritual Matters More Than Ever
              </h2>
              <div className="flex items-center text-gray-300 text-[12px] font-semibold uppercase tracking-wider space-x-4">
                <span>By Shane Doe</span>
                <span>•</span>
                <span>May 12, 2026</span>
              </div>
            </div>
          </div>

          {/* Right Stacked */}
          <div className="grid grid-rows-2 gap-2">
            {[
              {
                title: "10 Minimalist Desk Setups to Inspire Your Productivity Today",
                cat: "Design",
                img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Exploring the Hidden Cafes of Paris: A Weekend Guide",
                cat: "Travel",
                img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
              }
            ].map((post, i) => (
              <div key={i} className="relative aspect-[16/9] group overflow-hidden cursor-pointer">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="bg-[#e21d23] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-3 inline-block">{post.cat}</span>
                  <h2 className="text-white text-[20px] font-bold leading-tight mb-2 group-hover:text-[#e21d23] transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-gray-300 text-[11px] font-semibold uppercase tracking-wider space-x-4">
                    <span>May 10, 2026</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column - Main Articles */}
          <div className="lg:w-[68%]">
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-3">
              <h3 className="text-[18px] font-black uppercase tracking-wider relative after:absolute after:-bottom-[13px] after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Latest Articles</h3>
              <Link href="#" className="text-[12px] font-bold uppercase tracking-wider text-gray-500 hover:text-[#e21d23] flex items-center transition-colors">
                View All <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "How to Create the Perfect Home Office Environment for Deep Work",
                  excerpt: "In today's fast-paced world, carving out a space dedicated solely to focus and productivity is essential. We explore simple yet effective ways to transform...",
                  img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
                  cat: "Lifestyle"
                },
                {
                  title: "The Ultimate Guide to Brewing the Perfect Pour Over Coffee at Home",
                  excerpt: "Mastering the pour over technique doesn't have to be intimidating. With the right gear and a little patience, you can achieve coffee shop quality results...",
                  img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
                  cat: "Food & Drink"
                },
                {
                  title: "A Weekend in Kyoto: Discovering the Best Matcha Cafes and Hidden Gardens",
                  excerpt: "Kyoto offers a serene escape from the bustling modern world. From historic matcha tea houses to tranquil zen gardens, this city is a haven for those seeking...",
                  img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
                  cat: "Travel"
                },
                {
                  title: "Why Film Photography is Making a Massive Comeback in 2026",
                  excerpt: "In an era of instant digital gratification, the slow, deliberate process of shooting on film is capturing the hearts of a new generation. Here is why the analog...",
                  img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
                  cat: "Culture"
                }
              ].map((post, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-gray-100 pb-8 last:border-0">
                  <div className="md:w-[45%] shrink-0 relative aspect-[4/3] overflow-hidden rounded-sm">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-4 left-4 bg-[#e21d23] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">{post.cat}</span>
                  </div>
                  <div className="md:w-[55%] flex flex-col justify-center">
                    <div className="flex items-center text-gray-400 text-[11px] font-semibold uppercase tracking-wider space-x-3 mb-3">
                      <span className="text-[#111] font-bold">Shane Doe</span>
                      <span>•</span>
                      <span>May 5, 2026</span>
                    </div>
                    <h2 className="text-[22px] font-bold leading-snug mb-3 group-hover:text-[#e21d23] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#111] group-hover:text-[#e21d23] transition-colors flex items-center">
                      Read More <ChevronRight size={12} className="ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="mt-10 text-center">
              <button className="bg-gray-100 text-[#111] text-[12px] font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#e21d23] hover:text-white transition-colors w-full md:w-auto">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-[32%] space-y-10">
            
            {/* Social Widget */}
            <div>
              <h3 className="text-[14px] font-black uppercase tracking-wider mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Follow Us</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#3b5998] text-white p-4 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                  <span className="font-bold text-[14px]">125k</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold mt-1 opacity-80">Fans</span>
                </div>
                <div className="bg-[#1da1f2] text-white p-4 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                  <span className="font-bold text-[14px]">84k</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold mt-1 opacity-80">Followers</span>
                </div>
                <div className="bg-[#e1306c] text-white p-4 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                  <span className="font-bold text-[14px]">240k</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold mt-1 opacity-80">Followers</span>
                </div>
                <div className="bg-[#ff0000] text-white p-4 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                  <span className="font-bold text-[14px]">1.2M</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold mt-1 opacity-80">Subscribers</span>
                </div>
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-gray-50 p-8 border border-gray-100 text-center">
              <Mail className="w-10 h-10 text-[#e21d23] mx-auto mb-4" />
              <h3 className="text-[18px] font-bold mb-2">Subscribe to Updates</h3>
              <p className="text-gray-500 text-[13px] mb-6 leading-relaxed">
                Get the latest lifestyle news and articles delivered straight to your inbox every week.
              </p>
              <input 
                type="email" 
                placeholder="Your email address..." 
                className="w-full bg-white border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-[#e21d23] transition-colors mb-3"
              />
              <button className="w-full bg-[#111] text-white text-[12px] font-bold uppercase tracking-widest py-3 hover:bg-[#e21d23] transition-colors">
                Subscribe
              </button>
            </div>

            {/* Popular Posts */}
            <div>
              <h3 className="text-[14px] font-black uppercase tracking-wider mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Popular Right Now</h3>
              <div className="space-y-5">
                {[
                  { title: "Top 5 Espresso Machines for the Home Barista", num: "1" },
                  { title: "How to Build a Capsule Wardrobe for Spring", num: "2" },
                  { title: "A Guide to the Best Independent Bookstores in London", num: "3" },
                  { title: "Simple Daily Habits to Improve Your Mental Wellbeing", num: "4" },
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="text-[32px] font-black text-gray-200 leading-none group-hover:text-[#e21d23] transition-colors italic">
                      {post.num}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold leading-snug group-hover:text-[#e21d23] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1 block">May 1, 2026</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ad Banner */}
            <div className="bg-gray-100 h-[250px] flex flex-col items-center justify-center border border-gray-200">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">- Advertisement -</span>
              <div className="w-[300px] h-[200px] bg-white flex items-center justify-center text-gray-300 font-bold text-xl border border-gray-200">
                300 x 250
              </div>
            </div>

          </div>
        </div>

        {/* Editor's Choice Grid */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8 pb-3">
            <h3 className="text-[18px] font-black uppercase tracking-wider relative inline-block after:absolute after:-bottom-[13px] after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Editor's Choice</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Finding Inspiration in Everyday Moments",
                img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop",
                cat: "Lifestyle"
              },
              {
                title: "The Rise of Plant-Based Diets: What You Need to Know",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
                cat: "Health"
              },
              {
                title: "Exploring the Architecture of Modern Tokyo",
                img: "https://images.unsplash.com/photo-1542051812-ba32e6c89ca6?q=80&w=600&auto=format&fit=crop",
                cat: "Travel"
              },
              {
                title: "Essential Gadgets for the Modern Digital Nomad",
                img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600&auto=format&fit=crop",
                cat: "Tech"
              }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-[#111] text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">{post.cat}</span>
                </div>
                <h4 className="text-[15px] font-bold leading-snug group-hover:text-[#e21d23] transition-colors mb-2">
                  {post.title}
                </h4>
                <div className="text-gray-400 text-[11px] font-semibold uppercase tracking-wider">
                  May 2, 2026
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <CupOfCoffeeFooter />
    </div>
  );
}
