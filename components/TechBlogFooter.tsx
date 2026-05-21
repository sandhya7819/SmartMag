import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

const mostPopular = [
  { title: "Schools, Parents Disagree over Bans on Student Mobile Phones", img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-300x191.jpg", views: "7,783" },
  { title: "PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More", img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-300x178.jpg", views: "6,885" },
  { title: "Electric Car Owners to Pay Road Tax from 2025, Hunt Announces", img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-300x200.jpg", views: "4,385" },
];

const ourPicks = [
  { title: "Oculus Founder Makes a VR Headset That Can Literally Kill You", img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-300x130.jpg", date: "Jan 13, 2021" },
  { title: "Study: Earbuds Use, Youngsters at High Risk of Hearing Loss", img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-450x255.jpg", date: "Mar 15, 2020" },
  { title: "Telescope is Revealing the Galaxies of the Universe Like Never Before", img: "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/greg-rakozy-oMpAz-DN-9I-unsplash-450x300.jpg", date: "Mar 15, 2020" },
];

export default function TechBlogFooter() {
  return (
    <footer className="font-sans">
      {/* Top Dark Section */}
      <div className="bg-[#0f121a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Most Popular */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h4 className="text-[13px] font-black uppercase tracking-[2px] whitespace-nowrap">MOST POPULAR</h4>
                <div className="flex-1 h-[1px] bg-white/10"></div>
              </div>
              <div className="space-y-6">
                {mostPopular.map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <img src={post.img} className="w-[80px] h-[60px] object-cover shrink-0" />
                    <div className="space-y-1.5">
                      <h5 className="text-[13px] font-black leading-tight group-hover:text-[#ab07ab] transition-colors line-clamp-2">{post.title}</h5>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-red-400">
                        <Eye size={10} />
                        <span>{post.views} Views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Picks */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h4 className="text-[13px] font-black uppercase tracking-[2px] whitespace-nowrap">OUR PICKS</h4>
                <div className="flex-1 h-[1px] bg-white/10"></div>
              </div>
              <div className="space-y-6">
                {ourPicks.map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <img src={post.img} className="w-[80px] h-[60px] object-cover shrink-0" />
                    <div className="space-y-1.5">
                      <h5 className="text-[13px] font-black leading-tight group-hover:text-[#ab07ab] transition-colors line-clamp-2">{post.title}</h5>
                      <div className="text-[10px] font-bold text-gray-500 uppercase">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h4 className="text-[13px] font-black uppercase tracking-[2px] whitespace-nowrap">SUBSCRIBE TO UPDATES</h4>
                <div className="flex-1 h-[1px] bg-white/10"></div>
              </div>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-8">
                Get the latest creative news from FooBar about art, design and business.
              </p>
              <div className="relative mb-4">
                <input
                  type="email"
                  placeholder="Your email address.."
                  className="w-full bg-white/5 border border-white/10 px-5 py-3.5 text-[13px] focus:outline-none focus:border-[#ab07ab] transition-all text-white placeholder:text-gray-600"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-[#ab07ab] px-4 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <ArrowRight size={16} />
                </button>
              </div>
              <label className="flex items-start gap-3 text-[11px] text-gray-500 cursor-pointer">
                <input type="checkbox" className="mt-0.5" />
                <span>By signing up, you agree to the our terms and our <Link href="#" className="underline hover:text-[#ab07ab]">Privacy Policy</Link> agreement.</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <div key={i} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#ab07ab] hover:border-transparent transition-all">
                <Icon size={13} className="text-white/50" />
              </div>
            ))}
          </div>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-[2px] text-white/50">
            <Link href="#" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Phones</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-[11px] font-bold text-gray-600 uppercase tracking-[1px]">© 2026 ThemeSphere. Designed by ThemeSphere.</p>
        </div>
      </div>
    </footer>
  );
}
