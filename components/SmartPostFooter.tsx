"use client";

import Link from "next/link";


const SOCIAL_LINKS = [
  { id: "fb",  label: "Facebook",    href: "http://facebook.com/themesphere" },
  { id: "tw",  label: "X (Twitter)", href: "http://twitter.com/Theme_Sphere" },
  { id: "ig",  label: "Instagram",   href: "#" },
  { id: "pi",  label: "Pinterest",   href: "#" },
  { id: "yt",  label: "YouTube",     href: "#" },
];

function SocialIcon({ id, label, href }: { id: string; label: string; href: string }) {
  const icons: Record<string, React.ReactNode> = {
    fb: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    tw: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    ig: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>,
    pi: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.36-.719-.36-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>,
    yt: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>,
  };
  return (
    <a href={href} target="_blank" rel="nofollow noopener" aria-label={label}
       className="w-8 h-8 flex items-center justify-center bg-white/10 text-white/60
                  hover:bg-[#e9622b] hover:text-white transition-all duration-200 rounded-sm">
      {icons[id]}
    </a>
  );
}

const FOOTER_COLS = [
  {
    title: "About SmartPost",
    links: ["About Us", "Our Team", "Careers", "Advertise", "Contact Us"],
  },
  {
    title: "Categories",
    links: ["Lifestyle", "Sports", "Travel", "Technology", "Health & Wellness"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap", "RSS Feed"],
  },
];

export default function SmartPostFooter() {
  return (
    <footer className="bg-[#1c1c26] text-white mt-0">

      {/* Newsletter strip */}
      <div className="bg-[#e9622b]">
        <div className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h3 className="text-white font-black text-[18px] mb-1">Subscribe to Updates</h3>
            <p className="text-white/80 text-[13px]">
              Get the latest creative news from FooBar about art, design and business.
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address.." required
              className="flex-1 md:w-[260px] bg-white/15 border border-white/30 text-white text-[13px]
                         placeholder-white/50 px-4 py-2.5 rounded-sm outline-none
                         focus:border-white transition-colors"/>
            <button type="submit"
              className="bg-[#1c1c26] text-white text-[11px] font-black uppercase tracking-wider
                         px-5 py-2.5 rounded-sm hover:bg-black transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="#" className="block">
              <img
                src="https://smartmag.theme-sphere.com/smart-post/wp-content/uploads/sites/37/2023/03/logo-SmartPost-01.png"
                width={170} height={34} alt="SmartMag SmartPost"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/45 text-[13px] leading-relaxed">
              A premium SmartMag theme demo. Modern magazine layouts, stunning typography and powerful features for editorial websites.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(s => <SocialIcon key={s.id} {...s}/>)}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map(col => (
            <div key={col.title}>
              <h4 className="text-[10.5px] font-black uppercase tracking-[2px] text-white mb-5 pb-3 border-b border-white/[0.08]">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(lnk => (
                  <li key={lnk}>
                    <Link href="#" className="text-[12.5px] text-white/45 hover:text-white transition-colors">
                      {lnk}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11.5px] text-white/30">
            © {new Date().getFullYear()} SmartMag SmartPost · All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms", "Contact"].map(t => (
              <Link key={t} href="#" className="text-[11.5px] text-white/30 hover:text-white/60 transition-colors">
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
