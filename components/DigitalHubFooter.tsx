import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export default function DigitalHubFooter() {
  return (
    <footer className="bg-[#0b0c10] text-white pt-20 pb-10 font-sans mt-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/digital-hub" className="flex items-center gap-1 group">
              <span className="text-[28px] font-black tracking-tight text-white">DIGITAL</span>
              <span className="text-[28px] font-black tracking-tight text-[#00d1ac]">HUB</span>
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Your ultimate source for the latest tech trends, gadget reviews, and digital innovation. We simplify technology for the modern generation.
            </p>
            <div className="flex gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#00d1ac] hover:text-[#111] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#00d1ac]">Main Sections</h4>
            <ul className="grid grid-cols-2 gap-y-3">
              {["Smartphones", "Laptops", "Gaming", "Cybersecurity", "Artificial Intelligence", "Blockchain", "Digital Deals", "Software Reviews"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-6">
            <h4 className="text-[14px] font-black uppercase tracking-widest text-[#00d1ac]">Newsletter</h4>
            <p className="text-gray-400 text-[14px] leading-relaxed">
              Get the most important tech updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col gap-3 mt-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d1ac] transition-colors"
              />
              <button className="w-full bg-[#00d1ac] text-[#111] font-black uppercase tracking-widest text-[11px] py-3.5 hover:bg-white transition-colors">
                JOIN THE HUB
              </button>
            </form>
          </div>

        </div>

        <div className="h-[1px] w-full bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Digital Hub Magazine. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
