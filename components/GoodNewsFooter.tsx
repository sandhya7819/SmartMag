import { Facebook, Twitter, Instagram, PinIcon as Pinterest, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function GoodNewsFooter() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20 border-b border-white/5 pb-16">
          {/* About Us */}
          <div className="space-y-8">
            <h3 className="text-[13px] font-black uppercase tracking-[2px]">ABOUT US</h3>
            <div className="flex items-center gap-2">
               <span className="text-4xl font-black tracking-tighter">GO<span className="text-[#3bc492]">O</span>D</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're accepting new partnerships right now.
            </p>
            <div className="space-y-2 text-sm font-bold">
               <p><span className="text-[#3bc492]">Email Us:</span> <span className="text-gray-300">info@example.com</span></p>
               <p><span className="text-[#3bc492]">Contact:</span> <span className="text-gray-300">+1-320-0123-451</span></p>
            </div>
          </div>

          {/* Our Picks */}
          <div className="space-y-8">
            <h3 className="text-[13px] font-black uppercase tracking-[2px]">OUR PICKS</h3>
            <div className="space-y-6">
               {[
                 { title: "Remember! Bad Habits That Make a Big Impact on Your Lifestyle", date: "Jan 13, 2021", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop" },
                 { title: "The Right Morning Routine Can Keep You Energized & Happy All Day", date: "Jan 13, 2021", img: "https://images.unsplash.com/photo-1490233027849-0d62abab1343?q=80&w=400&auto=format&fit=crop" },
                 { title: "How to Make Perfume Last Longer Than Before", date: "Jan 13, 2021", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop" }
               ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                     <img src={post.img} className="w-[85px] h-[65px] object-cover shrink-0" />
                     <div className="space-y-1">
                        <h5 className="text-[13px] font-black leading-tight group-hover:text-[#3bc492] transition-colors line-clamp-2">{post.title}</h5>
                        <div className="text-[10px] font-bold text-gray-400 uppercase">{post.date}</div>
                     </div>
                  </div>
               ))}
            </div>
          </div>

          {/* New Comments */}
          <div className="space-y-8">
            <h3 className="text-[13px] font-black uppercase tracking-[2px]">NEW COMMENTS</h3>
            <div className="space-y-6">
               {[
                 { user: "JOHN DOE", post: "Royal Good Announces a New Album, Share New Single, Typhoonsy" },
                 { user: "SAM DOE", post: "Samsung Announces Galaxy Buds Pro, Most Premium Earbuds Yet" },
                 { user: "JANE DOE", post: "Welcome to the Future of SmartMag Gutenberg Editor" },
                 { user: "JANE DOE", post: "Latest Release of Video Song 'The Great Green Planet'" }
               ].map((comment, i) => (
                  <div key={i} className="flex gap-3 group cursor-pointer items-start border-b border-white/5 pb-6 last:border-0 grow">
                     <div className="w-2 h-2 rounded-full border border-gray-500 mt-1.5 shrink-0"></div>
                     <div className="text-[11px] leading-relaxed">
                        <span className="text-[#3bc492] font-black uppercase tracking-wider">{comment.user}</span>
                        <span className="text-gray-500 ml-1">on</span>
                        <p className="font-extrabold text-gray-100 group-hover:text-[#3bc492] transition-colors mt-0.5 line-clamp-1">{comment.post}</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center space-y-8">
           <div className="flex items-center gap-3">
              {[
                { icon: Facebook, color: "hover:bg-[#1877f2]" },
                { icon: Twitter, color: "hover:bg-[#1da1f2]" },
                { icon: Instagram, color: "hover:bg-[#c13584]" },
                { icon: Pinterest, color: "hover:bg-[#e60023]" }
              ].map((social, i) => (
                <div key={i} className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer transition-all ${social.color} hover:border-transparent group`}>
                   <social.icon size={16} className="text-white opacity-60 group-hover:opacity-100 transition-all" />
                </div>
              ))}
           </div>

           <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[11px] font-black uppercase tracking-[1.5px] text-gray-400">
              {['Home', 'Health', 'Travel', 'Sports', 'About', 'Contact'].map((link) => (
                <Link key={link} href="#" className="hover:text-[#3bc492] transition-colors">{link}</Link>
              ))}
           </div>

           <div className="text-[11px] font-bold text-gray-500">
              © 2021 ThemeSphere. Designed by ThemeSphere.
           </div>
        </div>
      </div>
    </footer>
  );
}
