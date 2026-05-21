import GoodNewsHeader from "@/components/GoodNewsHeader";
import GoodNewsFooter from "@/components/GoodNewsFooter";
import { MoveRight, Clock, User, Share2, Facebook, Twitter, Instagram, Youtube, Play, Star, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

const heroPosts = [
  {
    category: "Lifestyle",
    title: "Mercedes' Lead Designer Talks to Euronews About Future",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/shutterstock_259758266-1-1024x705.jpg",
    color: "bg-[#3bc492]"
  },
  {
    category: "Sports",
    title: "Harley Davidson: Bundle of Joy Crafted for Top Speed",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/shutterstock_451680796-1-768x522.jpg",
    color: "bg-[#a855f7]"
  },
  {
    category: "Health",
    title: "Scientists bid Goodbye to Virus With Latest Vaccine",
    author: "Shane Doe",
    date: "Jan 13, 2021",
    image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/shutterstock_475480765-1-768x512.jpg",
    color: "bg-[#00adef]"
  }
];

const editorsChoice = [
  { title: "Remember! Bad Habits That Make a Big Impact on Your Lifestyle", date: "Jan 13, 2021", image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_437955496_xl-2015-450x300.jpg" },
  { title: "The Right Morning Routine Can Keep You Energized & Happy", date: "Jan 13, 2021", image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/pexels-karolina-grabowska-4466208-1-450x592.jpg" },
  { title: "How to Make Perfume Last Longer Than Before", date: "Jan 13, 2021", image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_295262448_xl-2015-450x300.jpg" },
  { title: "Stay off Social Media and Still Keep an Online Social Life", date: "Jan 13, 2021", image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_248109862_xl-2015-450x300.jpg" },
];

export default function GoodNewsPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#3bc492] selection:text-white">
      <GoodNewsHeader />

      {/* Hero Grid Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 h-[500px] lg:h-[650px] gap-0.5">
          {/* Left Large Post (50%) */}
          <div className="md:col-span-6 relative group overflow-hidden cursor-pointer">
            <img src={heroPosts[0].image} alt={heroPosts[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 lg:p-14 w-full">
              <span className={`bg-[#3bc492] text-black text-[10px] font-black uppercase tracking-[2px] px-3 py-1 mb-5 inline-block rounded-sm`}>{heroPosts[0].category}</span>
              <h2 className="text-white text-3xl lg:text-5xl font-black leading-tight mb-5 group-hover:text-[#3bc492] transition-colors font-outfit tracking-tight">{heroPosts[0].title}</h2>
              <div className="flex items-center gap-4 text-[11px] font-bold text-white/50 uppercase tracking-widest">
                <span className="text-white">By {heroPosts[0].author}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span>{heroPosts[0].date}</span>
              </div>
            </div>
          </div>
          {/* Right Two Posts (25% each) */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 h-full gap-0.5">
            {heroPosts.slice(1).map((post, idx) => (
              <div key={idx} className="relative group overflow-hidden cursor-pointer h-full">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 lg:p-10 w-full">
                  <span className={`${post.color} text-white text-[9px] font-black uppercase tracking-[2px] px-2.5 py-1 mb-4 inline-block rounded-sm`}>{post.category}</span>
                  <h2 className="text-white text-xl lg:text-3xl font-black leading-tight mb-4 group-hover:text-[#3bc492] transition-colors font-outfit tracking-tight">{post.title}</h2>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-white/50 uppercase tracking-widest">
                    <span className="text-white">{post.author}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-32">
        <div className="flex items-center gap-6 mb-16">
          <h3 className="text-sm font-black uppercase tracking-[4px] flex items-center gap-3 font-outfit">
             <span className="w-2 h-2 bg-[#3bc492] rounded-full"></span>
             EDITORS' <span className="text-[#3bc492]">CHOICE</span>
          </h3>
          <div className="flex-1 h-[1px] bg-gray-100"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {editorsChoice.map((post, idx) => (
            <div key={idx} className="group flex flex-col gap-6">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative rounded-sm">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 {idx === 0 && <div className="absolute top-4 right-4 bg-[#3bc492] text-black p-2.5 rounded-full shadow-xl"><Star size={14} fill="black" /></div>}
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-black leading-snug group-hover:text-[#3bc492] transition-colors line-clamp-2 cursor-pointer font-outfit tracking-tight">{post.title}</h4>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[2px]">
                   <span>{post.date}</span>
                   <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                   <span className="flex items-center gap-1"><MessageCircle size={10} /> 0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad Banner Section */}
      <section className="container mx-auto px-4 mb-24 flex justify-center">
        <Link href="#" className="block max-w-[1200px] w-full hover:opacity-95 transition-opacity">
          <img src="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/SMARTMAG-BANNER-1200-15@2x-1.jpg" alt="SmartMag Banner" className="w-full h-auto shadow-sm" />
        </Link>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
        <div className="lg:col-span-8">
           <div className="flex items-center gap-4 mb-14 border-b border-gray-100 pb-4">
              <h3 className="text-[20px] font-black uppercase tracking-tight font-outfit">LATEST IN <span className="text-[#3bc492]">TECH</span></h3>
           </div>
           
           <div className="space-y-16">
             {[
               { cat: "GADGETS", catColor: "bg-[#e54e53]", title: "Bose Line of Products on the Show: Showroom Open Now in Dubai", comments: 3, image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_138978856_xl-2015-300x200.jpg" },
               { cat: "TECHNOLOGY", catColor: "bg-[#3bc492]", title: "Airlines Face Billions in Losses As COVID will Wipe Out Even More Flights", comments: 3, image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_98826716_xl-2015-300x200.jpg" },
               { cat: "ROBOTICS", catColor: "bg-[#f39c12]", title: "Asimo Robot Unveils a New Tool For Simple Robot Programming", comments: 3, image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/possessed-photography-g29arbbvPjo-unsplash-300x205.jpg" },
               { cat: "AUTOMOBILE", catColor: "bg-[#9b59b6]", title: "Our Review: Tesla's Sales Goals Focus for Fourth-Quarter Earnings", comments: 3, image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-275x300.jpg", review: "72" }
             ].map((post, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-10 group pb-14 border-b border-gray-100 last:border-0 grow">
                   <div className="md:w-[320px] aspect-[1.4/1] overflow-hidden bg-gray-100 relative shrink-0 rounded-sm">
                      <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className={`absolute bottom-0 left-0 ${post.catColor} text-white text-[9px] font-black uppercase px-3 py-2`}>{post.cat}</span>
                      {post.review && (
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/80 border-2 border-[#3bc492] flex items-center justify-center text-white text-[13px] font-black font-outfit shadow-2xl">
                           {post.review}
                        </div>
                      )}
                   </div>
                   <div className="space-y-4 pt-1">
                      <h4 className="text-[28px] font-black leading-[1.15] group-hover:text-[#3bc492] transition-colors cursor-pointer tracking-tight font-outfit">{post.title}</h4>
                      <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                         <span className="text-gray-900">By Shane Doe</span>
                         <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                         <span>Jan 14, 2021</span>
                         <span className="flex items-center gap-1.5 ml-1"><MessageCircle size={12} className="text-[#3bc492]" /> {post.comments}</span>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-3">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the latest trends that define our era in modern journalism...</p>
                   </div>
                </div>
             ))}
           </div>
        </div>

        <aside className="lg:col-span-4 sticky top-[100px] self-start space-y-16 pb-10 z-10 w-full">
              <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                 <div className="bg-[#111] text-white px-6 py-4 flex items-center justify-between">
                   <h3 className="text-[13px] font-black uppercase tracking-[2px] font-outfit">LIVING WITH COVID</h3>
                   <div className="w-2 h-2 bg-[#3bc492] rounded-full animate-pulse"></div>
                 </div>
                 <div className="p-0">
                    <div className="relative group overflow-hidden cursor-pointer">
                       <img src="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/pexels-nilay-ramoliya-3964833-1-450x300.jpg" className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-110" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-black text-[9px] font-black uppercase px-3 py-2 z-10">HEALTH</span>
                    </div>
                    <div className="p-8 border-b border-gray-100">
                       <h4 className="text-[20px] font-black leading-[1.2] mb-5 hover:text-[#3bc492] cursor-pointer transition-colors font-outfit tracking-tight">The 19 Best Hand Sanitizers That Meet Our Guidelines</h4>
                       <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          <span className="text-gray-900">By Shane Doe</span>
                          <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                          <span>Jan 14, 2021</span>
                       </div>
                    </div>
                    <div className="p-8 space-y-8">
                       {[
                         { title: "Doctors' Advise on Sanitizers You Should Not Use", image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_416102608_xl-2015-450x300.jpg" },
                         { title: "Apps Comparison Feb. 2021 – Best Apps for Meetings", image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/man-with-headphones-looking-on-the-monitor-with-zoom-cloud-meetings-logo-business-cloud-communication_t20_vL06Jv-1-450x300.jpg" },
                         { title: "How a Year of Living With Covid-19 Rewired Our Brains", image: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/erin-agius-LZVpFT8d504-unsplash-450x675.jpg" }
                       ].map((post, i) => (
                          <div key={i} className="flex gap-5 group cursor-pointer items-start">
                             <div className="w-[85px] h-[65px] overflow-hidden shrink-0 rounded-sm">
                                <img src={post.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                             </div>
                             <div className="space-y-2 pt-0.5">
                                <h5 className="text-[14px] font-black leading-[1.3] group-hover:text-[#3bc492] transition-colors line-clamp-2 font-outfit tracking-tight">{post.title}</h5>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Jan 14, 2021</div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-[13px] font-black uppercase tracking-[2px] font-outfit">WE ARE SOCIAL</h3>
                    <div className="flex-1 h-[1px] bg-gray-100"></div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Facebook, count: "1.1K", label: "Fans", color: "bg-[#1877f2]" },
                      { icon: Twitter, count: "68.9K", label: "Followers", color: "bg-[#1da1f2]" },
                      { icon: Instagram, count: "46.4K", label: "Followers", color: "bg-[#c13584]" },
                      { icon: Youtube, count: "105K", label: "Subscribers", color: "bg-[#ff0000]" }
                    ].map((social, i) => (
                      <div key={i} className={`${social.color} p-4 text-white flex flex-col items-center gap-1 group cursor-pointer hover:brightness-110 transition-all rounded-sm shadow-lg shadow-black/5`}>
                         <social.icon size={20} fill={social.icon !== Instagram ? "currentColor" : "none"} />
                         <span className="text-[14px] font-black mt-1 leading-none">{social.count}</span>
                         <span className="text-[9px] font-bold opacity-60 uppercase tracking-wider">{social.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
        </aside>
      </section>

      <section className="bg-[#111] text-white py-32 mb-32 overflow-hidden relative">
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-6 mb-16">
               <h3 className="text-sm font-black uppercase tracking-[4px] flex items-center gap-3 font-outfit">
                  <span className="w-2 h-2 bg-[#3bc492] rounded-full animate-pulse"></span>
                  IN <span className="text-[#3bc492]">SPOTLIGHT</span>
               </h3>
               <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="relative group overflow-hidden cursor-pointer h-full rounded-sm min-h-[450px]">
                  <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-[#3bc492] group-hover:border-[#3bc492] transition-all group-hover:scale-110 duration-500 backdrop-blur-sm">
                        <Play fill="white" size={28} className="ml-1 text-white" />
                     </div>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="bg-[#3bc492] text-black text-[10px] font-black uppercase tracking-[2.5px] px-3 py-1.5 mb-5 inline-block rounded-sm">POLITICS</span>
                     <h2 className="text-3xl lg:text-4xl font-black leading-tight group-hover:text-[#3bc492] transition-colors mb-5 font-outfit tracking-tight">Royal Good Announces a New Album, Share New Single, Typhoonsy</h2>
                     <div className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] flex items-center gap-3">
                        <span className="text-white">Shane Doe</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span>Jan 12, 2021</span>
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {[
                    { title: "Little-Known Auction: Museum Gets City Support Success", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format&fit=crop" },
                    { title: "Anxiety Alley: Don't Make Work Your Life Experience", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&auto=format&fit=crop" },
                    { title: "The Wondrous Life and Mysterious Appearance of Eagles", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop" },
                    { title: "Latest Release of Video Song 'The Great Green Planet'", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop" }
                  ].map((post, i) => (
                     <div key={i} className="group cursor-pointer space-y-5">
                        <div className="aspect-[4/3] overflow-hidden bg-white/5 relative rounded-sm">
                           <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                        </div>
                        <div className="space-y-3">
                           <h4 className="text-[15px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2 font-outfit tracking-tight">{post.title}</h4>
                           <div className="text-[9px] font-bold text-white/30 uppercase tracking-[2.5px]">Jan 12, 2021</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* NEWEST SECTIONS: PRO LIFESTYLE + HOME DESIGN */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
        <div className="lg:col-span-8 space-y-20">
           <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-10">
                 <h3 className="text-xl font-black uppercase tracking-tight font-outfit">PRO <span className="text-[#3bc492]">LIFESTYLE</span></h3>
                 <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-[2px] hidden sm:flex">
                    <span className="text-black cursor-pointer border-b-2 border-[#3bc492] pb-4 -mb-[18px]">All</span>
                    <span className="hover:text-[#3bc492] cursor-pointer transition-colors pb-4 -mb-[18px]">Technology</span>
                    <span className="hover:text-[#3bc492] cursor-pointer transition-colors pb-4 -mb-[18px]">Health</span>
                    <span className="hover:text-[#3bc492] cursor-pointer transition-colors pb-4 -mb-[18px]">Mobiles</span>
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-6 rounded-sm shadow-premium">
                       <img src="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/shutterstock_356210414-1-450x251.jpg" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-black text-[9px] font-black uppercase px-3 py-1.5">LIFESTYLE</span>
                    </div>
                    <h4 className="text-[26px] font-black leading-tight mb-5 group-hover:text-[#3bc492] transition-colors font-outfit tracking-tight">Let's Flip Again: Skateboards Take Off For a New Generation</h4>
                    <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">
                       <span className="text-black">By Shane Doe</span>
                       <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                       <span>Jan 14, 2021</span>
                       <span className="flex items-center gap-1.5 ml-2"><MessageCircle size={10} className="text-[#3bc492]" /> 3</span>
                    </div>
                    <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the...</p>
                 </div>
                 <div className="space-y-8">
                    {[
                      { title: "Latest View on Food Cultures: Sharing, not Snatching", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_66237793_xl-2015-450x300.jpg" },
                      { title: "Modern Construction Unveils Latest Luxury Model", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/thomas-drouault-Y1UtWeiRmhE-unsplash-1-450x300.jpg" },
                      { title: "The Inauguration Music: Fun With Singers You Actually Know", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_33852689_xl-2015-450x338.jpg" },
                      { title: "Mercedes' Lead Designer Talks to Euronews About Future", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/shutterstock_259758266-1-1024x705.jpg" }
                    ].map((post, i) => (
                       <div key={i} className="flex gap-5 group cursor-pointer">
                          <div className="w-[110px] h-[75px] rounded-sm overflow-hidden shrink-0">
                            <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="space-y-2 pt-0.5">
                             <h5 className="text-[15px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2 font-outfit tracking-tight">{post.title}</h5>
                             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Jan 14, 2021</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="bg-[#111] p-10 relative overflow-hidden group cursor-pointer flex items-center justify-between rounded-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=1200&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
              <div className="relative z-10 space-y-1">
                 <span className="text-[11px] font-black text-[#3bc492] uppercase tracking-[3px]">Trusted by</span>
                 <h3 className="text-white text-3xl font-black font-outfit tracking-tight">Over 12,000 Users Worldwide</h3>
              </div>
              <div className="relative z-10 flex items-center gap-6">
                 <button className="bg-white text-black text-[11px] font-black uppercase tracking-[2px] px-8 py-3.5 rounded-sm hover:bg-[#3bc492] hover:text-black transition-all shadow-xl">Explore Smartmag</button>
              </div>
           </div>

           <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-10">
                 <h3 className="text-xl font-black uppercase tracking-tight font-outfit">HOME <span className="text-[#3bc492]">DESIGN</span></h3>
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px] hover:text-[#3bc492] cursor-pointer transition-colors">See More &gt;</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                 <div className="md:col-span-5 group cursor-pointer">
                    <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-sm">
                       <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-black text-[9px] font-black uppercase px-3 py-1.5">INTERIOR</span>
                    </div>
                    <h4 className="text-[24px] font-black leading-tight mb-5 group-hover:text-[#3bc492] transition-colors font-outfit tracking-tight">The Former Garage 2021 Transformed into Modern Luxury Home in Anreo Suburb</h4>
                    <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                       <span className="text-black">By Shane Doe</span>
                       <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                       <span>Jan 14, 2021</span>
                    </div>
                 </div>
                 <div className="md:col-span-7 grid grid-cols-2 gap-x-8 gap-y-12">
                    {[
                      { title: "8 Fabulous Design Tips to Create a Luxurious Bedroom", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400&auto=format&fit=crop" },
                      { title: "The 21 Best Furniture Brands to Check Out Now", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop" },
                      { title: "Modern Condominiums Delivers Luxury Five-Star Living For Today", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop" },
                      { title: "The Interior Design Likely to Transform Your Home In This Season", img: "https://images.unsplash.com/photo-1616489953149-8088bc01d900?q=80&w=400&auto=format&fit=crop" }
                    ].map((post, i) => (
                       <div key={i} className="group cursor-pointer space-y-4">
                          <div className="rounded-sm overflow-hidden">
                            <img src={post.img} className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <h5 className="text-[15px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2 font-outfit tracking-tight">{post.title}</h5>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Jan 14, 2021</div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <aside className="lg:col-span-4 sticky top-[100px] self-start space-y-10">
           <div className="bg-[#111] text-white px-6 py-4 mb-8 rounded-sm">
              <h3 className="text-[13px] font-black uppercase tracking-[2px] font-outfit">TRAVEL</h3>
           </div>
           <div className="space-y-12">
              {[
                { title: "Dubai Live Entertainment Ban Extends to Yachts", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400&auto=format&fit=crop", cat: "TRAVEL" },
                { title: "Museum to Display More New Artists in 2021", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=400&auto=format&fit=crop", cat: "TRAVEL" },
                { title: "Dubai Tourism Releases a Song Celebrating Dubai Tourism Festival 2021", img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=400&auto=format&fit=crop", cat: "TRAVEL", hasMusic: true }
              ].map((post, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-6 aspect-[16/10] rounded-sm">
                       <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#00adef] text-white text-[9px] font-black uppercase px-2 py-1">TRAVEL</span>
                       {post.hasMusic && <div className="absolute inset-0 flex items-center justify-center"><div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/30"><Play size={18} fill="white" className="text-white ml-0.5" /></div></div>}
                    </div>
                    <div className="flex gap-6 items-start">
                       <span className="text-6xl font-black text-gray-100 leading-none group-hover:text-[#3bc492] transition-colors font-outfit">{i + 1}</span>
                       <div className="space-y-2 pt-1">
                          <h4 className="text-[17px] font-black leading-tight group-hover:text-[#3bc492] transition-colors font-outfit tracking-tight">{post.title}</h4>
                          <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                             <span className="text-black">By Shane Doe</span>
                             <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                             <span>Jan 14, 2021</span>
                          </div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </aside>
      </section>      <section className="container mx-auto px-4 mb-32">
         <div className="flex items-center gap-4 border-b border-gray-100 pb-5 w-full mb-14">
            <h3 className="text-xl font-black uppercase tracking-tight font-outfit">MOBILE <span className="text-[#3bc492]">TECH</span></h3>
            <div className="flex-1 h-[1px] bg-gray-100"></div>
         </div>

         <div className="space-y-1">
            {/* Top Row: Two Large Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 overflow-hidden">
               {/* Left Post */}
               <div className="relative group overflow-hidden cursor-pointer aspect-[16/10]">
                  <img src="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-450x744.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-[#3bc492] group-hover:border-transparent transition-all">
                        <Play size={24} fill="white" className="text-white ml-1" />
                     </div>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="bg-[#3bc492] text-black text-[9px] font-black uppercase px-2 py-1 mb-5 inline-block">MOBILES</span>
                     <h2 className="text-white text-3xl font-black leading-tight group-hover:text-[#3bc492] transition-colors mb-5 font-outfit tracking-tight">Huawei Planning World's First 3-Nanometer Advanced Mobile Chipset</h2>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-3">
                        <span className="text-white">Shane Doe</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span>Jan 13, 2021</span>
                     </div>
                  </div>
               </div>
               {/* Right Post */}
               <div className="relative group overflow-hidden cursor-pointer aspect-[16/10]">
                  <img src="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_430988634_xl-2015-450x388.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-8 right-8 w-14 h-14 rounded-full border-2 border-[#3bc492] bg-black/80 flex items-center justify-center text-white font-black text-[16px] font-outfit shadow-2xl">
                     8.9
                  </div>
                  <div className="absolute bottom-10 left-10 right-10">
                     <span className="bg-[#3bc492] text-black text-[9px] font-black uppercase px-2 py-1 mb-5 inline-block">MOBILES</span>
                     <h2 className="text-white text-3xl font-black leading-tight group-hover:text-[#3bc492] transition-colors mb-5 font-outfit tracking-tight">Review: Mobile Carriers Eying on 5G Rollout in Generation Z Models</h2>
                     <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-3">
                        <span className="text-white">Shane Doe</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span>Jan 13, 2021</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Row: Four Small Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
               {[
                 { title: "New Samsung Galaxy Receives Wi-Fi Certifications", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/screen-post-c7_blgDvOOs-unsplash-450x286.jpg" },
                 { title: "Digital Calendars & Organizers to Get You Organized in 2021", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/freestocks-hRVrvH9-dG0-unsplash-1-450x300.jpg" },
                 { title: "Samsung Announces Galaxy Buds Pro, Most Premium Earbuds Yet", img: "https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/daniel-romero-GHtkPDDgfwY-unsplash-1-450x252.jpg" },
                 { title: "Answers to Your Questions About the Galaxy S21 Series", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400&auto=format&fit=crop" }
               ].map((post, i) => (
                  <div key={i} className="group cursor-pointer flex flex-col gap-5">
                     <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm">
                        <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     </div>
                     <div className="space-y-3">
                        <h4 className="text-[16px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-3 font-outfit tracking-tight">{post.title}</h4>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                           <span className="text-black">By Shane Doe</span>
                           <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                           <span>Jan 13, 2021</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* AD BANNER: BIG CALL TO ACTION */}
      <section className="container mx-auto px-4 mb-32">
        <div className="bg-[#111] py-24 px-12 flex flex-col items-center justify-center relative overflow-hidden text-center group cursor-pointer rounded-sm">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2000&auto=format&fit=crop')] opacity-30 bg-center bg-cover scale-110 transition-transform duration-[15s] group-hover:scale-100"></div>
           <div className="relative z-10 space-y-6">
              <span className="text-[11px] font-black uppercase tracking-[6px] text-[#3bc492] mb-4 block">TRUSTED BY</span>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight font-outfit">OVER 12,000 USERS WORLDWIDE</h2>
              <button className="bg-[#3bc492] text-black text-[12px] font-black uppercase tracking-[3px] px-12 py-5 hover:bg-white transition-all rounded-sm shadow-2xl">EXPLORE SMARTMAG</button>
           </div>
        </div>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32 items-start">
        <div className="lg:col-span-8 space-y-20">
           <div className="flex items-center gap-6 border-b border-gray-100 pb-5 w-full mb-14">
              <h3 className="text-xl font-black uppercase tracking-tight font-outfit">LATEST <span className="text-[#3bc492]">POSTS</span></h3>
              <div className="flex-1 h-[1px] bg-gray-100"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {[
                { cat: "BUSINESS", title: "Ryan Reynolds, Blake Lively Arrive at Film Festival", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop" },
                { cat: "POLITICS", title: "Santorini and Athens Make Most 'Instagrammable' Places", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop", hasVideo: true },
                { cat: "POLITICS", title: "Dubai Properties Review: Sales on An Upswing, Despite Covid-19", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop", rating: "85%" },
                { cat: "POLITICS", title: "Home Working Linked to Rise in Several Disorders", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" },
                { cat: "POLITICS", title: "Could 2021 Be The Year of Technology for Your Family?", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop" },
                { cat: "POLITICS", title: "Consider Yourself an Aesthete? Don't Miss These Houses", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" }
              ].map((post, i) => (
                 <div key={i} className="group cursor-pointer space-y-6">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-premium">
                       <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-black text-[9px] font-black uppercase px-2.5 py-1.5">{post.cat}</span>
                       {post.hasVideo && (
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                <Play size={20} fill="white" className="text-white ml-0.5" />
                             </div>
                          </div>
                       )}
                       {post.rating && (
                         <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-black/80 border-2 border-[#3bc492] flex items-center justify-center text-white text-[13px] font-black font-outfit shadow-2xl">
                            {post.rating}
                         </div>
                       )}
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-[22px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2 font-outfit tracking-tight">{post.title}</h4>
                       <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          <span className="text-black">By Shane Doe</span>
                          <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                          <span>Jan 14, 2021</span>
                          <span className="flex items-center gap-1.5 ml-2"><MessageCircle size={12} className="text-[#3bc492]" /> 3</span>
                       </div>
                       <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2">To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the latest trends...</p>
                    </div>
                 </div>
              ))}
           </div>

           <button className="w-full py-5 border-2 border-gray-100 text-[11px] font-black uppercase tracking-[3px] text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center gap-3 group bg-white rounded-sm shadow-sm">
             LOAD MORE POSTS <MoveRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
           </button>
        </div>

        {/* Sidebar Column */}
        <aside className="lg:col-span-4 space-y-16 sticky top-[100px] self-start">
           {/* FAMILY & RELATIONS Widget */}
           <div>
              <div className="bg-[#111] text-white px-6 py-4 mb-10 rounded-sm">
                 <h3 className="text-[13px] font-black uppercase tracking-[2px] font-outfit">FAMILY & RELATIONS</h3>
              </div>
              <div className="space-y-10">
                 <div className="group cursor-pointer">
                    <div className="relative overflow-hidden mb-6 rounded-sm shadow-premium">
                       <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
                       <span className="absolute bottom-0 left-0 bg-[#3bc492] text-black text-[9px] font-black uppercase px-3 py-1.5">RELATIONS</span>
                    </div>
                    <h4 className="text-[19px] font-black leading-tight mb-5 group-hover:text-[#3bc492] transition-colors font-outfit tracking-tight">The staggering, Sad Effect that COVID Lockdowns Had on Relationships</h4>
                    <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                       <span className="text-black">By Shane Doe</span>
                       <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                       <span>Jan 13, 2021</span>
                    </div>
                    <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2 mt-5">To understand the new smart watched and other pro devices of recent focus, we should...</p>
                 </div>
                 
                 <div className="space-y-8 pt-8 border-t border-gray-100">
                   {[
                     { title: "Lack of Sleep Can Lead to PCS-Like Symptoms", img: "https://images.unsplash.com/photo-1511222221650-7053e199d65d?q=80&w=400&auto=format&fit=crop" },
                     { title: "Reunited Long-Distance Couples Learn to Live Together", img: "https://images.unsplash.com/photo-1516589174184-c685836d393a?q=80&w=400&auto=format&fit=crop" },
                     { title: "Family Bound Keeps Kids Confident, Strong, and Safe", img: "https://images.unsplash.com/photo-1536640717429-44575ff2afad?q=80&w=400&auto=format&fit=crop" }
                   ].map((post, i) => (
                      <div key={i} className="flex gap-5 group cursor-pointer items-start">
                         <div className="w-[85px] h-[65px] rounded-sm overflow-hidden shrink-0">
                           <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                         </div>
                         <div className="space-y-2 pt-0.5">
                            <h5 className="text-[14px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2 font-outfit tracking-tight">{post.title}</h5>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Jan 13, 2021</div>
                         </div>
                      </div>
                   ))}
                 </div>
              </div>
           </div>

           {/* Newsletter Subscribe Widget */}
           <div className="bg-white border border-gray-100 p-10 text-center space-y-8 shadow-premium relative overflow-hidden group rounded-sm">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#3bc492]"></div>
              <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-[#3bc492] group-hover:scale-110 transition-transform duration-500 shadow-inner">
                 <Mail size={32} />
              </div>
              <div className="space-y-3">
                 <h4 className="text-2xl font-black tracking-tight font-outfit">Subscribe to Updates</h4>
                 <p className="text-[14px] text-gray-500 leading-relaxed">Get the latest creative news from SmartMag about art & design.</p>
              </div>
              <form className="space-y-4">
                 <input type="email" placeholder="Your email address.." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:border-[#3bc492] transition-colors rounded-sm" />
                 <button className="w-full bg-[#3bc492] text-black text-[12px] font-black uppercase tracking-[3px] py-5 hover:bg-black hover:text-white transition-all rounded-sm shadow-xl">SUBSCRIBE NOW</button>
              </form>
              <label className="flex items-start gap-3 text-[10px] text-gray-400 text-left cursor-pointer">
                 <input type="checkbox" className="mt-1 rounded border-gray-300 text-[#3bc492] focus:ring-[#3bc492]" />
                 <span className="leading-relaxed">By signing up, you agree to the our terms and our <Link href="#" className="underline hover:text-[#3bc492]">Privacy Policy</Link> agreement.</span>
              </label>
           </div>
        </aside>
      </section>
      <GoodNewsFooter />
    </main>
  );
}
