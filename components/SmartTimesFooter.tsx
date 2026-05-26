import { Facebook, Twitter, Instagram, ArrowRight, Video, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function SmartTimesFooter() {
  return (
    <footer className="bg-[#212121] text-white font-sans selection:bg-[#e21c23] selection:text-white pt-[60px] pb-[40px]">
      
      {/* ══ 1. TOP HEADER LOGO & SOCIALS ══ */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Footer Logo */}
          <Link href="/smart-times" className="block max-w-[250px]">
            <img
              src="https://smartmag.theme-sphere.com/smart-times/wp-content/uploads/sites/30/2022/03/TheSmartTimes-logo-footer@2x.png"
              alt="The Smart Times Logo"
              width={250}
              height={37}
              className="object-contain"
            />
          </Link>

          {/* Social Icons Block */}
          <div className="flex gap-3 justify-center items-center">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Video, href: "#", label: "Vimeo" },
              { icon: MessageCircle, href: "#", label: "WhatsApp" }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <Link
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#e21c23] hover:border-transparent hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Icon size={13} />
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="w-full h-[1px] bg-white/10" />
      </div>

      {/* ══ 2. FOOTER FOUR COLUMNS ══ */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: News */}
          <div className="space-y-5">
            <div className="border-b-2 border-[#e21c23] pb-3 inline-block">
              <h4 className="text-[12px] font-black uppercase tracking-[2px] text-white">News</h4>
            </div>
            <ul className="space-y-3.5 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
              {["World", "US Politics", "EU Politics", "Business", "Opinions", "Connections", "Science"].map((item) => (
                <li key={item} className="hover:text-white transition-colors duration-200">
                  <Link href="#" className="flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 bg-white/10 group-hover:bg-[#e21c23] transition-colors rounded-full" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-5">
            <div className="border-b-2 border-[#e21c23] pb-3 inline-block">
              <h4 className="text-[12px] font-black uppercase tracking-[2px] text-white">Company</h4>
            </div>
            <ul className="space-y-3.5 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
              {["Information", "Advertising", "Classified Ads", "Contact Info", "Do Not Sell Data", "GDPR Policy", "Media Kits"].map((item) => (
                <li key={item} className="hover:text-white transition-colors duration-200">
                  <Link href="#" className="flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 bg-white/10 group-hover:bg-[#e21c23] transition-colors rounded-full" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-5">
            <div className="border-b-2 border-[#e21c23] pb-3 inline-block">
              <h4 className="text-[12px] font-black uppercase tracking-[2px] text-white">Services</h4>
            </div>
            <ul className="space-y-3.5 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
              {["Subscriptions", "Customer Support", "Bulk Packages", "Newsletters", "Sponsored News", "Work With Us"].map((item) => (
                <li key={item} className="hover:text-white transition-colors duration-200">
                  <Link href="#" className="flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 bg-white/10 group-hover:bg-[#e21c23] transition-colors rounded-full" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-5">
            <div className="border-b-2 border-[#e21c23] pb-3 inline-block">
              <h4 className="text-[12px] font-black uppercase tracking-[2px] text-white">Subscribe to Updates</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get the latest creative news from FooBar about art, design and business.
            </p>
            <form
              method="post"
              action="https://exocrew.us2.list-manage.com/subscribe/post?u=80cb35f637e636563aeaa0499&id=77f92c609a"
              className="space-y-4"
              target="_blank"
              rel="noopener"
            >
              <div className="relative flex">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email address.."
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#e21c23] transition-all text-white placeholder:text-gray-500 rounded-sm"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 bg-[#e21c23] px-4 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-r-sm duration-300"
                >
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Privacy Disclaimer Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer text-gray-500 text-[11px] select-none leading-normal">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-0.5 rounded-sm bg-white/5 border border-white/10 checked:bg-[#e21c23] checked:border-transparent cursor-pointer"
                />
                <span>
                  By signing up, you agree to our terms and our{" "}
                  <Link href="#" className="underline text-gray-400 hover:text-[#e21c23] transition-colors">
                    Privacy Policy
                  </Link>{" "}
                  agreement.
                </span>
              </label>
            </form>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="w-full h-[1px] bg-white/10" />
      </div>

      {/* ══ 3. BOTTOM COPYRIGHT BAR ══ */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] font-bold text-gray-500 uppercase tracking-widest">
          <p>
            © 2026 ThemeSphere. Designed by{" "}
            <Link href="https://theme-sphere.com" className="hover:text-white transition-colors duration-200">
              ThemeSphere
            </Link>
            .
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Accessibility</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
