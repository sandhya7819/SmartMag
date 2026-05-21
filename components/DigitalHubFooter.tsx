import Link from "next/link";
import { Facebook, Twitter, Instagram, Share2 } from "lucide-react";
import { footerPopular, footerPicks } from "@/lib/digitalHubData";

const ACCENT = "#00cf92";

function MetaViews({ date, views, viral }: { date?: string; views?: string; viral?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/40 mt-1">
      {date && <span>{date}</span>}
      {views && (
        <>
          <span className="text-white/20">|</span>
          <span className={viral ? "text-orange-400 font-semibold" : ""}>{views} Views</span>
        </>
      )}
    </div>
  );
}

export default function DigitalHubFooter() {
  return (
    <footer className="bg-[#0f0f11] text-white font-['DM_Sans',system-ui,sans-serif] border-t border-[#00cf92]/30">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/[0.08]">
          <div>
            <h5 className="text-[13px] font-bold uppercase tracking-wide mb-5 pb-2 border-b border-white/10">
              Most Popular
            </h5>
            <div className="space-y-4">
              {footerPopular.map((p) => (
                <article key={p.title} className="flex gap-3 group">
                  <div className="w-[102px] h-[82px] shrink-0 overflow-hidden rounded-sm bg-white/5">
                    <img src={p.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold leading-snug group-hover:text-[#00cf92] transition-colors">
                      <Link href="#">{p.title}</Link>
                    </h4>
                    <MetaViews date={p.date} views={p.views} viral={p.viral} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[13px] font-bold uppercase tracking-wide mb-5 pb-2 border-b border-white/10">
              Our Picks
            </h5>
            <div className="space-y-4">
              {footerPicks.map((p) => (
                <article key={p.title} className="flex gap-3 group">
                  <div className="w-[102px] h-[82px] shrink-0 overflow-hidden rounded-sm bg-white/5">
                    <img src={p.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold leading-snug group-hover:text-[#00cf92] transition-colors">
                      <Link href="#">{p.title}</Link>
                    </h4>
                    {p.date && <p className="text-[11px] text-white/40 mt-1">{p.date}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="border border-white/10 rounded-sm p-6 bg-[#151516]">
            <h3 className="text-[16px] font-bold text-center mb-2">Subscribe to Updates</h3>
            <p className="text-[13px] text-white/50 text-center mb-4 leading-relaxed">
              Get the latest creative news from FooBar about art, design and business.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address.."
                required
                className="w-full bg-white/5 border border-white/15 px-3 py-2.5 text-[13px] text-white placeholder:text-white/35 focus:outline-none focus:border-[#00cf92]"
              />
              <button
                type="submit"
                className="w-full text-[12px] font-bold uppercase py-2.5 text-[#111] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ACCENT }}
              >
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

        <div className="flex flex-col items-center gap-6 pt-8">
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#00cf92] hover:bg-white/10 transition-colors"
                aria-label="Social"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-[12px] font-bold uppercase tracking-wide">
            {["Home", "Phones", "About", "Contact"].map((l) => (
              <Link key={l} href={l === "Home" ? "/digital-hub" : "#"} className="hover:text-[#00cf92] transition-colors">
                {l}
              </Link>
            ))}
          </nav>
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} ThemeSphere. Designed by{" "}
            <Link href="https://theme-sphere.com" className="hover:text-[#00cf92]">
              ThemeSphere
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
