import GoodNewsHeader from "@/components/GoodNewsHeader";
import GoodNewsFooter from "@/components/GoodNewsFooter";
import { MoveRight, Clock, User, Share2, Facebook, Twitter, Instagram, Youtube, Play, Star, MessageCircle } from "lucide-react";
import Link from "next/link";

const heroPosts = [
  {
    category: "Lifestyle",
    title: "Mercedes' Lead Designer Talks to Euronews About the Future of EV Luxury",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#3bc492]"
  },
  {
    category: "Sports",
    title: "Harley Davidson: Bundle of Joy Crafted for Top Speed Experience",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    image: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=1200&auto=format&fit=crop",
    color: "bg-purple-500"
  },
  {
    category: "Health",
    title: "Scientists bid Goodbye to Virus With Latest Breakthrough Vaccine",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#3bc492]"
  }
];

const editorsChoice = [
  { title: "Remember! Bad Habits That Make a Big Impact on Your Lifestyle", date: "Jan 13, 2021", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop" },
  { title: "The Right Morning Routine Can Keep You Energized & Happy All Day", date: "Jan 13, 2021", image: "https://images.unsplash.com/photo-1490233027849-0d62abab1343?q=80&w=600&auto=format&fit=crop" },
  { title: "How to Make Perfume Last Longer Than Ever Before This Season", date: "Jan 13, 2021", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop" },
  { title: "Stay off Social Media and Still Keep an Online Social Life Intact", date: "Jan 13, 2021", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop" },
];

export default function GoodNewsPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#3bc492] selection:text-white">
      <GoodNewsHeader />

      {/* Hero Grid Section */}
      <section className="bg-black py-0.5 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0.5 h-[600px] lg:h-[700px]">
          <div className="md:col-span-6 relative group overflow-hidden cursor-pointer">
            <img src={heroPosts[0].image} alt={heroPosts[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <span className="bg-[#3bc492] text-white text-[10px] font-black uppercase tracking-[2px] px-2 py-1 mb-6 inline-block">Lifestyle</span>
              <h2 className="text-white text-4xl lg:text-5xl font-black leading-[1.05] mb-6 group-hover:text-[#3bc492] transition-colors">{heroPosts[0].title}</h2>
              <div className="flex items-center gap-4 text-[11px] font-bold text-white/50 uppercase tracking-[2px]">
                <span>By Shane Doe</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span>{heroPosts[0].date}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-0.5">
            {heroPosts.slice(1).map((post, idx) => (
              <div key={idx} className="relative group overflow-hidden cursor-pointer h-full">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className={`${post.color} text-white text-[10px] font-black uppercase tracking-[2px] px-2 py-1 mb-4 inline-block`}>{post.category}</span>
                  <h2 className="text-white text-xl lg:text-2xl font-black leading-tight mb-4 group-hover:text-[#3bc492] transition-colors line-clamp-3">{post.title}</h2>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-white/50 uppercase tracking-[2px]">
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-32">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-sm font-black uppercase tracking-[4px] flex items-center gap-2">
            EDITORS' <span className="text-[#3bc492]">CHOICE</span>
          </h3>
          <div className="flex-1 h-[1px] bg-gray-100"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {editorsChoice.map((post, idx) => (
            <div key={idx} className="group flex flex-col gap-5">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 {idx === 0 && <div className="absolute top-3 right-3 bg-[#3bc492] text-white p-2 rounded-full"><Star size={12} fill="white" /></div>}
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-black leading-snug group-hover:text-[#3bc492] transition-colors line-clamp-2 cursor-pointer">{post.title}</h4>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Banner Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="bg-black py-16 px-12 flex flex-col items-center justify-center relative overflow-hidden text-center group cursor-pointer">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2000&auto=format&fit=crop')] opacity-40 bg-center bg-cover scale-110 transition-transform duration-[10s] group-hover:scale-100"></div>
           <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[5px] text-[#3bc492] mb-4 block">TRUSTED BY</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-8 tracking-tight">OVER 12,000 USERS WORLDWIDE</h2>
              <button className="bg-white text-black text-[11px] font-black uppercase tracking-[3px] px-8 py-3 hover:bg-[#3bc492] hover:text-white transition-all">EXPLORE SMARTMAG</button>
           </div>
        </div>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
        <div className="lg:col-span-8">
           <div className="flex items-center gap-4 mb-12 border-b-2 border-gray-100 pb-4">
              <h3 className="text-[17px] font-black uppercase tracking-[1px]">LATEST IN <span className="text-[#3bc492]">TECH</span></h3>
           </div>
           
           <div className="space-y-16">
             {[
               { cat: "GADGETS", catColor: "bg-[#e54e53]", title: "Bose Line of Products on the Show: Showroom Open Now in Dubai", comments: 3, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop" },
               { cat: "TECHNOLOGY", catColor: "bg-[#3bc492]", title: "Airlines Face Billions in Losses As COVID will Wipe Out Even More Flights", comments: 3, image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f?q=80&w=800&auto=format&fit=crop" },
               { cat: "ROBOTICS", catColor: "bg-[#f39c12]", title: "Asimo Robot Unveils a New Tool For Simple Robot Programming Efficiency", comments: 3, image: "https://images.unsplash.com/photo-1531746790731-6c307f8cf926?q=80&w=800&auto=format&fit=crop" },
               { cat: "AUTOMOBILE", catColor: "bg-[#9b59b6]", title: "Our Review: Tesla's Sales Goals Focus for Fourth-Quarter Earnings", comments: 3, image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop", review: "72%" },
               { cat: "PODCAST", catColor: "bg-blue-600", title: "New Podcast Series: The Future of Renewable Energy in 2024", comments: 12, image: "https://images.unsplash.com/photo-1478737270239-2fccd27ee086?q=80&w=800&auto=format&fit=crop" },
               { cat: "AI", catColor: "bg-indigo-600", title: "OpenAI Announces New GPT-5 Framework for Advanced Reasoning", comments: 45, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" }
             ].map((post, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 group pb-12 border-b border-gray-100 last:border-0 grow">
                   <div className="md:w-[350px] aspect-[1.5/1] overflow-hidden bg-gray-100 relative shrink-0">
                      <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className={`absolute bottom-0 left-0 ${post.catColor} text-white text-[9px] font-black uppercase px-3 py-1.5`}>{post.cat}</span>
                      {post.review && (
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/60 border-2 border-[#3bc492] flex items-center justify-center text-white text-[13px] font-bold">
                           {post.review}
                        </div>
                      )}
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-[26px] font-black leading-[1.1] group-hover:text-[#3bc492] transition-colors cursor-pointer tracking-tight">{post.title}</h4>
                      <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 capitalize whitespace-nowrap">
                         <span className="text-gray-500">By Shane Doe</span>
                         <span className="text-gray-300">—</span>
                         <span>Jan 14, 2021</span>
                         <span className="flex items-center gap-1 ml-2"><MessageCircle size={12} /> {post.comments}</span>
                      </div>
                      <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-3">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the latest trends that define our era in modern journalism...</p>
                   </div>
                </div>
             ))}
           </div>
        </div>

        <aside className="lg:col-span-4 sticky top-[100px] self-start space-y-12 pb-10 z-10 w-full">
              <div className="bg-white border border-gray-100 p-0">
                 <div className="bg-black text-white px-5 py-3.5 flex items-center justify-between">
                   <h3 className="text-[14px] font-black uppercase tracking-[1.5px]">LIVING WITH COVID</h3>
                   <div className="w-2 h-2 bg-[#3bc492] rounded-full animate-pulse"></div>
                 </div>
                 <div className="p-0">
                    <div className="relative group overflow-hidden cursor-pointer">
                       <img src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=800&auto=format&fit=crop" className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-110" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-white text-[9px] font-bold uppercase px-3 py-1.5 z-10">HEALTH</span>
                    </div>
                    <div className="p-6 border-b border-gray-100">
                       <h4 className="text-[19px] font-black leading-[1.2] mb-4 hover:text-[#3bc492] cursor-pointer transition-colors">The 19 Best Hand Sanitizers That Meet Our Guidelines</h4>
                       <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                          <span className="text-gray-900">By Shane Doe</span>
                          <span className="text-gray-200">—</span>
                          <span>Jan 14, 2021</span>
                          <span className="flex items-center gap-1.5 ml-3"><MessageCircle size={11} className="fill-gray-300 text-gray-300" /> 3</span>
                       </div>
                    </div>
                    <div className="p-6 space-y-6">
                       {[
                         { title: "Doctors' Advise on Sanitizers You Should Not Use", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop" },
                         { title: "Apps Comparison Feb 2021 – Best Apps for Meetings", image: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=400&auto=format&fit=crop" },
                         { title: "How a Year of Living With Covid-19 Rewired Our Brains", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=400&auto=format&fit=crop" }
                       ].map((post, i) => (
                          <div key={i} className="flex gap-4 group cursor-pointer items-start">
                             <div className="w-[85px] h-[65px] overflow-hidden shrink-0">
                                <img src={post.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                             </div>
                             <div className="space-y-1.5 pt-0.5">
                                <h5 className="text-[13px] font-black leading-[1.3] group-hover:text-[#3bc492] transition-colors line-clamp-2">{post.title}</h5>
                                <div className="text-[10px] font-bold text-gray-400">Jan 14, 2021</div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div>
                 <div className="bg-black text-white px-5 py-3.5 mb-5">
                   <h3 className="text-[14px] font-black uppercase tracking-[1.5px]">WE ARE SOCIAL</h3>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#1877f2] p-3 text-white flex items-center gap-3 group cursor-pointer hover:brightness-110 transition-all border-b-2 border-black/10">
                       <Facebook size={18} fill="white" />
                       <div className="flex flex-col">
                          <span className="text-[13px] font-black leading-none">1.1K</span>
                          <span className="text-[9px] font-bold opacity-80 uppercase tracking-wider">Facebook</span>
                       </div>
                    </div>
                    <div className="bg-[#1da1f2] p-3 text-white flex items-center gap-3 group cursor-pointer hover:brightness-110 transition-all border-b-2 border-black/10">
                       <Twitter size={18} fill="white" />
                       <div className="flex flex-col">
                          <span className="text-[13px] font-black leading-none">68.9K</span>
                          <span className="text-[9px] font-bold opacity-80 uppercase tracking-wider">Twitter</span>
                       </div>
                    </div>
                    <div className="bg-[#e60023] p-3 text-white flex items-center gap-3 group cursor-pointer hover:brightness-110 transition-all border-b-2 border-black/10">
                       <Star size={18} fill="white" />
                       <div className="flex flex-col">
                          <span className="text-[13px] font-black leading-none">10.7K</span>
                          <span className="text-[9px] font-bold opacity-80 uppercase tracking-wider">Pinterest</span>
                       </div>
                    </div>
                    <div className="bg-[#c13584] p-3 text-white flex items-center gap-3 group cursor-pointer hover:brightness-110 transition-all border-b-2 border-black/10">
                       <Instagram size={18} />
                       <div className="flex flex-col">
                          <span className="text-[13px] font-black leading-none">46.4K</span>
                          <span className="text-[9px] font-bold opacity-80 uppercase tracking-wider">Instagram</span>
                       </div>
                    </div>
                    <div className="bg-[#ff0000] p-3 text-white flex items-center gap-3 group cursor-pointer hover:brightness-110 transition-all border-b-2 border-black/10">
                       <Youtube size={18} fill="white" />
                       <div className="flex flex-col">
                          <span className="text-[13px] font-black leading-none">105K</span>
                          <span className="text-[9px] font-bold opacity-80 uppercase tracking-wider">YouTube</span>
                       </div>
                    </div>
                    <div className="bg-[#00adef] p-3 text-white flex items-center gap-3 group cursor-pointer hover:brightness-110 transition-all border-b-2 border-black/10">
                       <Play size={18} fill="white" />
                       <div className="flex flex-col">
                          <span className="text-[13px] font-black leading-none">17.7K</span>
                          <span className="text-[9px] font-bold opacity-80 uppercase tracking-wider">Vimeo</span>
                       </div>
                    </div>
                 </div>
              </div>
        </aside>
      </section>

      <section className="bg-black text-white py-32 mb-32 overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-16">
               <h3 className="text-sm font-black uppercase tracking-[4px]">IN <span className="text-[#3bc492]">SPOTLIGHT</span></h3>
               <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               <div className="relative group overflow-hidden cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-[#3bc492] group-hover:border-[#3bc492] transition-all">
                        <Play fill="white" size={24} className="ml-1" />
                     </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                     <span className="bg-[#3bc492] text-white text-[10px] font-black uppercase tracking-[2px] px-2 py-1 mb-4 inline-block">Politics</span>
                     <h2 className="text-3xl lg:text-4xl font-black leading-tight group-hover:text-[#3bc492] transition-colors mb-4">Royal Good Announces a New Album, Share New Single, Typhoonsy</h2>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">By Shane Doe - Jan 12, 2021</div>
                  </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Little-Known Auction: Museum Gets City Support Success", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format&fit=crop" },
                    { title: "Anxiety Alley: Don't Make Work Your Life Experience", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&auto=format&fit=crop" },
                    { title: "The Wondrous Life and Mysterious Appearance of Eagles", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop" },
                    { title: "Latest Release of Video Song 'The Great Green Planet'", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop" }
                  ].map((post, i) => (
                     <div key={i} className="group cursor-pointer space-y-4">
                        <div className="aspect-[4/3] overflow-hidden bg-white/5 relative">
                           <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" />
                        </div>
                        <div className="space-y-2">
                           <h4 className="text-[13px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2">{post.title}</h4>
                           <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Jan 12, 2021</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* NEWEST SECTIONS: PRO LIFESTYLE + HOME DESIGN */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
        <div className="lg:col-span-8 space-y-16">
           <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-8">
                 <h3 className="text-lg font-black uppercase tracking-tight">PRO <span className="text-[#3bc492]">LIFESTYLE</span></h3>
                 <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:flex">
                    <span className="text-gray-900 cursor-pointer">All</span>
                    <span className="hover:text-[#3bc492] cursor-pointer transition-colors">Technology</span>
                    <span className="hover:text-[#3bc492] cursor-pointer transition-colors">Health</span>
                    <span className="hover:text-[#3bc492] cursor-pointer transition-colors">Mobiles</span>
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-5">
                       <img src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-white text-[8px] font-extrabold uppercase px-2 py-1">LIFESTYLE</span>
                    </div>
                    <h4 className="text-[24px] font-black leading-tight mb-4 group-hover:text-[#3bc492] transition-colors">Let's Flip Again: Skateboards Take Off For a New Generation</h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                       <span className="text-gray-900">By Shane Doe</span>
                       <span className="text-gray-200">—</span>
                       <span>Jan 14, 2021</span>
                       <span className="flex items-center gap-1 ml-2"><MessageCircle size={10} /> 3</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the...</p>
                 </div>
                 <div className="space-y-6">
                    {[
                      { title: "Latest View on Food Cultures: Sharing, not Snatching", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop" },
                      { title: "Modern Construction Unveils Latest Luxury Model", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop" },
                      { title: "The Inauguration Music: Fun With Singers You Actually Know", img: "https://images.unsplash.com/photo-1514525253361-bee8a18744ad?q=80&w=400&auto=format&fit=crop" },
                      { title: "Mercedes' Lead Designer Talks to Euronews About Future", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=400&auto=format&fit=crop" }
                    ].map((post, i) => (
                       <div key={i} className="flex gap-4 group cursor-pointer">
                          <img src={post.img} className="w-[100px] h-[70px] object-cover shrink-0" />
                          <div className="space-y-1">
                             <h5 className="text-[14px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2">{post.title}</h5>
                             <div className="text-[10px] font-bold text-gray-400">Jan 14, 2021</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="bg-[#8b1919] p-8 relative overflow-hidden group cursor-pointer flex items-center justify-between">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=1200&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
              <div className="relative z-10">
                 <span className="text-[10px] font-bold text-white/50 block mb-1">Trusted by</span>
                 <h3 className="text-white text-2xl font-black mb-0">Over 12000 Users</h3>
              </div>
              <div className="relative z-10 flex items-center gap-4">
                 <button className="bg-white text-black text-[10px] font-black uppercase px-6 py-2.5 rounded-full hover:bg-[#3bc492] hover:text-white transition-all">Explore Smartmag</button>
                 <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=200&auto=format&fit=crop" className="w-16 h-10 object-contain hidden md:block" />
              </div>
           </div>

           <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-8">
                 <h3 className="text-lg font-black uppercase tracking-tight">HOME <span className="text-[#3bc492]">DESIGN</span></h3>
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#3bc492] cursor-pointer">See More &gt;</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                 <div className="md:col-span-5 group cursor-pointer">
                    <div className="relative overflow-hidden mb-5 aspect-[4/5]">
                       <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-white text-[8px] font-extrabold uppercase px-2 py-1">INTERIOR</span>
                    </div>
                    <h4 className="text-[22px] font-black leading-tight mb-4 group-hover:text-[#3bc492] transition-colors">The Former Garage 2021 Transformed into Modern Luxury Home in Anreo Suburb</h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                       <span className="text-gray-900">By Shane Doe</span>
                       <span className="text-gray-200">—</span>
                       <span>Jan 14, 2021</span>
                       <span className="flex items-center gap-1 ml-2"><MessageCircle size={10} /> 3</span>
                    </div>
                 </div>
                 <div className="md:col-span-7 grid grid-cols-2 gap-x-6 gap-y-10">
                    {[
                      { title: "8 Fabulous Design Tips to Create a Luxurious Bedroom", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400&auto=format&fit=crop" },
                      { title: "The 21 Best Furniture Brands to Check Out Now", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop" },
                      { title: "Modern Condominiums Delivers Luxury Five-Star Living For Today", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop" },
                      { title: "The Interior Design Likely to Transform Your Home In This Season", img: "https://images.unsplash.com/photo-1616489953149-8088bc01d900?q=80&w=400&auto=format&fit=crop" }
                    ].map((post, i) => (
                       <div key={i} className="group cursor-pointer space-y-3">
                          <img src={post.img} className="w-full aspect-[4/3] object-cover" />
                          <h5 className="text-[13px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2">{post.title}</h5>
                          <div className="text-[9px] font-bold text-gray-400">Jan 14, 2021</div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <aside className="lg:col-span-4 sticky top-[100px] self-start">
           <div className="bg-black text-white px-5 py-3.5 mb-8">
              <h3 className="text-[13px] font-black uppercase tracking-[1.5px]">TRAVEL</h3>
           </div>
           <div className="space-y-12">
              {[
                { title: "Dubai Live Entertainment Ban Extends to Yachts", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400&auto=format&fit=crop", cat: "TRAVEL" },
                { title: "Museum to Display More New Artists in 2021", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=400&auto=format&fit=crop", cat: "TRAVEL" },
                { title: "Dubai Tourism Releases a Song Celebrating Dubai Tourism Festival 2021", img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=400&auto=format&fit=crop", cat: "TRAVEL", hasMusic: true }
              ].map((post, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-5 aspect-[16/10]">
                       <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#00adef] text-white text-[8px] font-black uppercase px-2 py-1">TRAVEL</span>
                       {post.hasMusic && <div className="absolute inset-0 flex items-center justify-center"><div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/30"><Play size={16} fill="white" className="text-white ml-0.5" /></div></div>}
                    </div>
                    <div className="flex gap-4 items-start">
                       <span className="text-5xl font-black text-gray-100 leading-none group-hover:text-[#3bc492] transition-colors">{i + 1}</span>
                       <div className="space-y-2">
                          <h4 className="text-[16px] font-black leading-tight group-hover:text-[#3bc492] transition-colors">{post.title}</h4>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 underline-offset-4 tracking-tight">
                             <span className="text-gray-600">By Shane Doe</span>
                             <span className="text-gray-200">—</span>
                             <span>Jan 14, 2021</span>
                          </div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </aside>
      </section>

      <section className="container mx-auto px-4 mb-32">
         <div className="flex items-center gap-6 mb-20">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <h3 className="text-[17px] font-black uppercase tracking-[1px] whitespace-nowrap">
              MOBILE <span className="text-[#3bc492]">TECH</span>
            </h3>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
         </div>

         <div className="space-y-8">
            {/* Top Row: Two Large Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-100">
               {/* Left Post */}
               <div className="relative group overflow-hidden cursor-pointer aspect-[16/10]">
                  <img src="https://images.unsplash.com/photo-1544244015-0cd4b3ff869d?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <Play size={20} fill="white" className="text-white ml-0.5" />
                     </div>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="bg-[#3bc492] text-white text-[9px] font-black uppercase px-2 py-1 mb-4 inline-block">MOBILES</span>
                     <h2 className="text-white text-3xl font-black leading-tight group-hover:text-[#3bc492] transition-colors mb-4">Huawei Planning World's First 3-Nanometer Advanced Mobile Chipset</h2>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                        <span>Shane Doe</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span>Jan 13, 2021</span>
                     </div>
                  </div>
               </div>
               {/* Right Post */}
               <div className="relative group overflow-hidden cursor-pointer aspect-[16/10]">
                  <img src="https://images.unsplash.com/photo-1610945661006-414223b2649b?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-[#3bc492] bg-black/60 flex items-center justify-center text-white font-black text-[15px]">
                     8.9
                  </div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="bg-[#3bc492] text-white text-[9px] font-black uppercase px-2 py-1 mb-4 inline-block">MOBILES</span>
                     <h2 className="text-white text-3xl font-black leading-tight group-hover:text-[#3bc492] transition-colors mb-4">Review: Mobile Carriers Eying on 5G Rollout in Generation Z Models</h2>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                        <span>Shane Doe</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span>Jan 13, 2021</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Row: Four Small Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "New Samsung Galaxy Receives Wi-Fi Certifications", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=400&auto=format&fit=crop" },
                 { title: "Digital Calendars & Organizers to Get You Organized in 2021", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e72ef?q=80&w=400&auto=format&fit=crop" },
                 { title: "Samsung Announces Galaxy Buds Pro, Most Premium Earbuds Yet", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop" },
                 { title: "Answers to Your Questions About the Galaxy S21 Series", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400&auto=format&fit=crop" }
               ].map((post, i) => (
                  <div key={i} className="group cursor-pointer flex flex-col gap-5">
                     <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     </div>
                     <div className="space-y-3">
                        <h4 className="text-[15px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-3">{post.title}</h4>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 capitalize">
                           <span>By Shane Doe</span>
                           <span className="text-gray-200">—</span>
                           <span>Jan 13, 2021</span>
                           <span className="flex items-center gap-1 ml-2"><MessageCircle size={10} /> 3</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* AD BANNER BETWEEN MOBILE TECH AND LATEST POSTS */}
      <section className="container mx-auto px-4 mb-24">
        <div className="bg-black py-20 px-12 flex flex-col items-center justify-center relative overflow-hidden text-center group cursor-pointer">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2000&auto=format&fit=crop')] opacity-40 bg-center bg-cover scale-110 transition-transform duration-[10s] group-hover:scale-100"></div>
           <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[5px] text-[#3bc492] mb-4 block">TRUSTED BY</span>
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tight">OVER 12,000 USERS WORLDWIDE</h2>
              <button className="bg-white text-black text-[11px] font-black uppercase tracking-[3px] px-10 py-4 hover:bg-[#3bc492] hover:text-white transition-all">EXPLORE SMARTMAG</button>
           </div>
        </div>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 py-32 items-start bg-[#f9f9f9]">
        <div className="lg:col-span-8 space-y-16">
           <div className="flex items-center gap-4 border-b-2 border-[#3bc492] pb-4 w-fit mb-12">
              <h3 className="text-[17px] font-black uppercase tracking-[1px]">LATEST <span className="text-[#3bc492]">POSTS</span></h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {[
                { cat: "BUSINESS", title: "Ryan Reynolds, Blake Lively Arrive at Film Festival", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop" },
                { cat: "POLITICS", title: "Santorini and Athens Make Most 'Instagrammable' Places", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop", hasVideo: true },
                { cat: "POLITICS", title: "Dubai Properties Review: Sales on An Upswing, Despite Covid-19", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop", rating: "85%" },
                { cat: "POLITICS", title: "Home Working Linked to Rise in Several Disorders", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" },
                { cat: "POLITICS", title: "Could 2021 Be The Year of Technology for Your Family?", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop" },
                { cat: "POLITICS", title: "Consider Yourself an Aesthete? Don't Miss These Houses", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" }
              ].map((post, i) => (
                 <div key={i} className="group cursor-pointer space-y-5">
                    <div className="relative aspect-[16/10] overflow-hidden">
                       <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-white text-[8px] font-black uppercase px-2 py-1">{post.cat}</span>
                       {post.hasVideo && (
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-pulse">
                                <Play size={18} fill="white" className="text-white ml-0.5" />
                             </div>
                          </div>
                       )}
                       {post.rating && (
                         <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border-2 border-[#3bc492] flex items-center justify-center text-white text-[11px] font-bold">
                            {post.rating}
                         </div>
                       )}
                    </div>
                    <div className="space-y-3">
                       <h4 className="text-[20px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2">{post.title}</h4>
                       <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 capitalize whitespace-nowrap">
                          <span className="text-gray-500">By Shane Doe</span>
                          <span className="text-gray-300">—</span>
                          <span>Jan 14, 2021</span>
                          <span className="flex items-center gap-1.5 ml-2"><MessageCircle size={10} /> 3</span>
                       </div>
                       <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the latest trends...</p>
                    </div>
                 </div>
              ))}
           </div>

           <button className="w-full py-4 border-2 border-gray-100 text-[11px] font-black uppercase tracking-[2px] text-gray-400 hover:bg-[#3bc492] hover:text-white hover:border-[#3bc492] transition-all flex items-center justify-center gap-2 group bg-white">
             LOAD MORE <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

        {/* Sidebar Column */}
        <aside className="lg:col-span-4 space-y-12 sticky top-[100px] self-start">
           {/* FAMILY & RELATIONS Widget */}
           <div>
              <div className="bg-black text-white px-5 py-3.5 mb-8">
                 <h3 className="text-[13px] font-black uppercase tracking-[1.5px]">FAMILY & RELATIONS</h3>
              </div>
              <div className="space-y-8">
                 <div className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-5">
                       <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-white text-[8px] font-black uppercase px-2 py-1">RELATIONS</span>
                    </div>
                    <h4 className="text-[17px] font-black leading-tight mb-4 group-hover:text-[#3bc492] transition-colors">The staggering, Sad Effect that COVID Lockdowns Had on Relationships</h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                       <span>By Shane Doe</span>
                       <span className="text-gray-200">—</span>
                       <span>Jan 13, 2021</span>
                       <span className="flex items-center gap-1 ml-2"><MessageCircle size={10} /> 3</span>
                    </div>
                    <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 mt-4">To understand the new smart watched and other pro devices of recent focus, we should...</p>
                 </div>
                 
                 <div className="space-y-6 pt-6 border-t border-gray-100">
                   {[
                     { title: "Lack of Sleep Can Lead to PCS-Like Symptoms", img: "https://images.unsplash.com/photo-1511222221650-7053e199d65d?q=80&w=400&auto=format&fit=crop" },
                     { title: "Reunited Long-Distance Couples Learn to Live Together", img: "https://images.unsplash.com/photo-1516589174184-c685836d393a?q=80&w=400&auto=format&fit=crop" },
                     { title: "Family Bound Keeps Kids Confident, Strong, and Safe", img: "https://images.unsplash.com/photo-1536640717429-44575ff2afad?q=80&w=400&auto=format&fit=crop" }
                   ].map((post, i) => (
                      <div key={i} className="flex gap-4 group cursor-pointer items-start">
                         <img src={post.img} className="w-[85px] h-[65px] object-cover shrink-0" />
                         <div className="space-y-1">
                            <h5 className="text-[13px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2">{post.title}</h5>
                            <div className="text-[10px] font-bold text-gray-400">Jan 13, 2021</div>
                         </div>
                      </div>
                   ))}
                 </div>
              </div>
           </div>

           {/* Newsletter Subscribe Widget */}
           <div className="bg-white border border-gray-100 p-8 text-center space-y-6 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#3bc492]"></div>
              <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                 <MoveRight size={24} className="-rotate-45" />
              </div>
              <div className="space-y-2">
                 <h4 className="text-2xl font-black tracking-tight">Subscribe to Updates</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">Get the latest creative news from SmartMag about art & design.</p>
              </div>
              <div className="space-y-4">
                 <input type="email" placeholder="Your email address.." className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:border-[#3bc492] transition-colors" />
                 <button className="w-full bg-[#3bc492] text-white text-[11px] font-black uppercase tracking-[2px] py-4 hover:bg-black transition-colors">SUBSCRIBE</button>
              </div>
              <label className="flex items-start gap-2 text-[10px] text-gray-400 text-left cursor-pointer">
                 <input type="checkbox" className="mt-0.5 rounded border-gray-300 text-[#3bc492] focus:ring-[#3bc492]" />
                 <span>By signing up, you agree to the our terms and our Privacy Policy agreement.</span>
              </label>
           </div>
        </aside>
      </section>

      <GoodNewsFooter />
    </main>
  );
}
