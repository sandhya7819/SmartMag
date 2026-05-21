import Link from "next/link";
import { Facebook, Twitter, Instagram, Share2 } from "lucide-react";
import { VD_LOGO } from "@/lib/voiceDailyData";

const socialIcons = [Facebook, Twitter, Share2, Share2, Share2, Instagram];

const newsLinks = ["World", "US Politics", "EU Politics", "Business", "Opinions", "Connections", "Science"];
const companyLinks = ["Information", "Advertising", "Classified Ads", "Contact Info", "Do Not Sell Data", "GDPR Policy", "Media Kits"];
const serviceLinks = ["Subscriptions", "Customer Support", "Bulk Packages", "Newsletters", "Sponsored News", "Work With Us"];

export default function VoiceDailyFooter() {
  return (
    <footer className="bg-[#161616] text-white font-[Faustina,system-ui,sans-serif]">
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/10">
          <Link href="/thevoice-daily">
            <img src={VD_LOGO} alt="The Voice Daily" width={209} height={35} className="h-[32px] w-auto brightness-0 invert" />
          </Link>
          <div className="flex items-center gap-3">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
                aria-label="Social"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 border-b border-white/10">
          <div>
            <h4 className="text-[13px] font-black uppercase tracking-[1px] mb-5 pb-2 border-b-2 border-white/20">News</h4>
            <ul className="space-y-2.5">
              {newsLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-[14px] text-white/60 hover:text-[#0c77e2] transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-black uppercase tracking-[1px] mb-5 pb-2 border-b-2 border-white/20">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-[14px] text-white/60 hover:text-[#0c77e2] transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-black uppercase tracking-[1px] mb-5 pb-2 border-b-2 border-white/20">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-[14px] text-white/60 hover:text-[#0c77e2] transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-black uppercase tracking-[1px] mb-4">Subscribe to Updates</h4>
            <p className="text-[13px] text-white/50 mb-4 leading-relaxed">
              Get the latest creative news from FooBar about art, design and business.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address.."
                required
                className="w-full bg-white/10 border border-white/15 px-3 py-2.5 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#0c77e2]"
              />
              <button type="submit" className="w-full bg-[#0c77e2] text-white text-[12px] font-bold py-2.5 hover:bg-[#0960b8] transition-colors">
                Subscribe
              </button>
              <label className="flex items-start gap-2 text-[11px] text-white/40">
                <input type="checkbox" required className="mt-0.5" />
                <span>
                  By signing up, you agree to our terms and our{" "}
                  <Link href="#" className="underline hover:text-white">
                    Privacy Policy
                  </Link>{" "}
                  agreement.
                </span>
              </label>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 text-[13px] text-white/40">
          <p>© {new Date().getFullYear()} ThemeSphere. Designed by ThemeSphere.</p>
          <ul className="flex flex-wrap gap-6">
            {["Privacy Policy", "Terms", "Accessibility"].map((l) => (
              <li key={l}>
                <Link href="#" className="hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
