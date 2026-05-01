import SpotlightHeader from "@/components/SpotlightHeader";
import SpotlightFooter from "@/components/SpotlightFooter";
import { Play, ChevronRight, Mail, Search, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function SpotlightPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#111]">
      <SpotlightHeader />

      <main className="container mx-auto px-4 lg:px-8 max-w-[1200px] py-10">
        
        {/* Hero Section (1 Large + Sidebar) */}
        <section className="flex flex-col lg:flex-row gap-8 mb-16">
          
          {/* Main Large Article */}
          <div className="lg:w-[70%] relative group cursor-pointer overflow-hidden rounded-sm shadow-sm">
            <div className="aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9]">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" 
                alt="Main Spotlight Feature" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
              <span className="bg-[#e21d23] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4 inline-block">Fashion</span>
              <h2 className="text-white text-[24px] md:text-[36px] lg:text-[42px] font-bold leading-tight mb-4 group-hover:text-[#e21d23] transition-colors w-full md:w-[80%]">
                The New Rules of Autumn Style: Essential Pieces to Elevate Your Wardrobe
              </h2>
              <div className="flex items-center text-gray-300 text-[11px] font-bold uppercase tracking-wider space-x-4">
                <span>By Emma Watson</span>
                <span>•</span>
                <span>May 12, 2026</span>
              </div>
            </div>
          </div>

          {/* Trending Now Sidebar */}
          <div className="lg:w-[30%] bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
              <h3 className="text-[14px] font-black uppercase tracking-wider relative after:absolute after:-bottom-[17px] after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">
                Trending Now
              </h3>
            </div>
            <div className="flex-1 flex flex-col justify-between space-y-6">
              {[
                { title: "Inside the Biggest Fashion Events of the Year", cat: "Events" },
                { title: "How to Build a Capsule Wardrobe on a Budget", cat: "Style" },
                { title: "Top 10 Accessories Every Woman Should Own", cat: "Guides" },
                { title: "The Return of Vintage Denim: What You Need to Know", cat: "Trends" },
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div className="text-[28px] font-black text-gray-200 leading-none group-hover:text-[#e21d23] transition-colors mt-1">
                    0{i + 1}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#e21d23] block mb-1">
                      {post.cat}
                    </span>
                    <h4 className="text-[14px] font-bold leading-snug group-hover:text-[#e21d23] transition-colors">
                      {post.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Guides & Advice Section (3 Columns) */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-2 border-b border-gray-200">
            <h3 className="text-[18px] font-black uppercase tracking-wider relative inline-block after:absolute after:-bottom-[9px] after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Guides & Advice</h3>
            <Link href="#" className="text-[12px] font-bold uppercase tracking-wider text-gray-500 hover:text-[#e21d23] flex items-center transition-colors">
              View All <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "A Complete Guide to Skincare for the Changing Seasons",
                img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop",
                cat: "Beauty"
              },
              {
                title: "How to Transition Your Home Decor for Spring",
                img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop",
                cat: "Home"
              },
              {
                title: "Essential Tips for the Solo Female Traveler",
                img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
                cat: "Travel"
              }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100 pb-6 transition-all hover:shadow-md">
                <div className="relative aspect-[16/9] overflow-hidden mb-5">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-[#e21d23] text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">{post.cat}</span>
                </div>
                <div className="px-6">
                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-wider space-x-2 mb-2">
                    <span>May {i + 5}, 2026</span>
                  </div>
                  <h4 className="text-[18px] font-bold leading-snug group-hover:text-[#e21d23] transition-colors mb-3">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                    Discover the essential tips and tricks you need to know. We explore the best methods for achieving perfect results every single time...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column - Latest Articles */}
          <div className="lg:w-[68%]">
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-3">
              <h3 className="text-[18px] font-black uppercase tracking-wider relative after:absolute after:-bottom-[13px] after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Latest Articles</h3>
            </div>

            <div className="space-y-10">
              {[
                {
                  title: "Why Minimalist Architecture is Defining Modern Living Spaces",
                  excerpt: "Minimalism isn't just about owning fewer things; it's a design philosophy that is completely reshaping how we experience modern architecture and interior spaces...",
                  img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
                  cat: "Lifestyle"
                },
                {
                  title: "The Ultimate Guide to Plant-Based Diets and Nutrition",
                  excerpt: "Switching to a plant-based diet can seem daunting at first, but the health and environmental benefits are immense. Here is everything you need to know to get started...",
                  img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
                  cat: "Health"
                },
                {
                  title: "Exploring the World's Most Stunning Hidden Beaches",
                  excerpt: "Leave the crowded tourist traps behind. We've scoured the globe to find the most breathtaking, secluded beaches that offer a true slice of untouched paradise...",
                  img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop",
                  cat: "Travel"
                },
                {
                  title: "How to Build a Sustainable and Ethical Wardrobe",
                  excerpt: "Fast fashion is taking a toll on our planet. Learn how to curate a closet full of high-quality, ethically produced garments that look great and last a lifetime...",
                  img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop",
                  cat: "Fashion"
                }
              ].map((post, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 group cursor-pointer bg-white p-4 md:p-6 rounded-sm shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="md:w-[45%] shrink-0 relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-sm">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 bg-[#111] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">{post.cat}</span>
                  </div>
                  <div className="md:w-[55%] flex flex-col justify-center">
                    <div className="flex items-center text-gray-400 text-[11px] font-bold uppercase tracking-wider space-x-3 mb-3">
                      <span className="text-[#e21d23]">Spotlight Team</span>
                      <span>•</span>
                      <span>May {i + 1}, 2026</span>
                    </div>
                    <h2 className="text-[20px] md:text-[22px] font-bold leading-snug mb-3 group-hover:text-[#e21d23] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#111] group-hover:text-[#e21d23] transition-colors flex items-center">
                      Read Full Story <ChevronRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination / Load More */}
            <div className="mt-12 text-center">
              <button className="bg-white border-2 border-[#111] text-[#111] text-[12px] font-black uppercase tracking-widest px-8 py-4 hover:bg-[#111] hover:text-white transition-colors w-full md:w-auto">
                Load More Content
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-[32%] space-y-10">
            
            {/* Social Follow Widget */}
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-[14px] font-black uppercase tracking-wider mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Connect With Us</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-100 hover:border-[#3b5998] hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#3b5998] flex items-center justify-center text-white mr-3">
                      <Facebook size={14} />
                    </div>
                    <span className="text-[13px] font-bold text-[#111]">Facebook</span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#3b5998]">125K Fans</span>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-100 hover:border-[#e1306c] hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#e1306c] flex items-center justify-center text-white mr-3">
                      <Instagram size={14} />
                    </div>
                    <span className="text-[13px] font-bold text-[#111]">Instagram</span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#e1306c]">240K Follows</span>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-100 hover:border-[#1da1f2] hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#1da1f2] flex items-center justify-center text-white mr-3">
                      <Twitter size={14} />
                    </div>
                    <span className="text-[13px] font-bold text-[#111]">Twitter</span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#1da1f2]">84K Follows</span>
                </div>
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-[#111] p-8 text-center text-white rounded-sm shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e21d23]"></div>
              <Mail className="w-10 h-10 text-[#e21d23] mx-auto mb-4" />
              <h3 className="text-[20px] font-bold mb-2">Join the Club</h3>
              <p className="text-gray-400 text-[13px] mb-6 leading-relaxed">
                Subscribe to our newsletter and get exclusive content and updates delivered to your inbox.
              </p>
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-[#222] border border-[#333] px-4 py-3 text-[13px] text-white outline-none focus:border-[#e21d23] transition-colors mb-3"
              />
              <button className="w-full bg-[#e21d23] text-white text-[12px] font-black uppercase tracking-widest py-3 hover:bg-white hover:text-[#111] transition-colors">
                Subscribe Now
              </button>
            </div>

            {/* Most Popular */}
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-[14px] font-black uppercase tracking-wider mb-6 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#e21d23]">Popular Articles</h3>
              <div className="space-y-6">
                {[
                  { title: "The 10 Best Skincare Products for Glowing Skin", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=200&auto=format&fit=crop" },
                  { title: "How to Achieve the Perfect Beach Waves Hair", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=200&auto=format&fit=crop" },
                  { title: "Top 5 Destinations for a Weekend Getaway", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=200&auto=format&fit=crop" },
                  { title: "A Beginner's Guide to Pilates and Core Strength", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=200&auto=format&fit=crop" },
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-[80px] h-[80px] shrink-0 overflow-hidden rounded-sm relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-0 left-0 w-6 h-6 bg-[#111] text-white flex items-center justify-center text-[10px] font-black">
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="text-[13px] font-bold leading-snug group-hover:text-[#e21d23] transition-colors line-clamp-3">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ad Banner */}
            <div className="bg-gray-100 h-[300px] flex flex-col items-center justify-center border border-gray-200">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">- Advertisement -</span>
              <div className="w-[300px] h-[250px] bg-white flex items-center justify-center text-gray-300 font-bold text-xl border border-gray-200">
                300 x 250
              </div>
            </div>

          </div>
        </div>

      </main>

      <SpotlightFooter />
    </div>
  );
}
