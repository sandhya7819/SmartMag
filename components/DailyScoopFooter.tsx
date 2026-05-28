"use client";

import Link from "next/link";

const BRAND_TEAL = "#2ab391";

function SmallFooterPost({ img, title, date, views, href = "#" }: { img: string; title: string; date: string; views?: string; href?: string }) {
  return (
    <div className="flex gap-3 group py-2.5 border-b border-white/5 last:border-0 last:pb-0 items-start cursor-pointer">
      <Link href={href} className="shrink-0 w-[55px] h-[55px] overflow-hidden bg-white/5 rounded-[2px]">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </Link>
      <div className="flex-1 min-w-0">
        <h4 className="text-[12.5px] font-bold leading-[1.35] text-white/90 group-hover:text-[var(--ds-accent,#2ab391)] transition-colors line-clamp-2">
          <Link href={href}>{title}</Link>
        </h4>
        <div className="flex items-center gap-1.5 text-[9.5px] text-white/40 mt-1">
          <span>{date}</span>
          {views && (
            <>
              <span>·</span>
              <span>{views} views</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DailyScoopFooter() {
  const ourPicks = [
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/92acc61bc99249203cf09d9a17410b5c-300x200.jpeg",
      title: "Fun Games: Kill The Boredom And Enjoy Your Family Time on Beach",
      date: "Jan 10, 2020",
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/94440cf74c41beed1d60d9a4b0fc52c9-300x200.jpeg",
      title: "Lifestyle Tips to Live Longer: Eat Mediterranean Diet, Lift Weight Daily",
      date: "Jan 9, 2020",
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/d3eb428d0ee31975644a39da6c73abe3-300x240.jpg",
      title: "Year Ender 2023: Top Healthy Habits in Kids that Left Parents Worried",
      date: "Jan 8, 2020",
    }
  ];

  const mostPopular = [
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/635ab1cbafcde3130c8066f1b1967107-300x190.jpeg",
      title: "Wall Street Opens 2024 With Mix of Optimism, Pessimism and Mystery",
      date: "Jan 18, 2024",
      views: "32"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/1bd51c153e019db22af2001dccd53a2b-300x206.jpeg",
      title: "Trump hearing: Judges Sound Skeptical of Trump's Immunity Defense",
      date: "Jan 18, 2024",
      views: "35"
    },
    {
      img: "https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/08ba4a96fde07ecf5b825cfe9227637d-300x200.jpg",
      title: "Caffeine Problem? These are the signs to look out for",
      date: "Jan 18, 2024",
      views: "36"
    }
  ];

  return (
    <footer className="bg-[#0f0f11] text-white/70 text-sm font-sans pt-14 border-t border-white/5">
      <style>{`
        :root { --ds-accent: ${BRAND_TEAL}; }
      `}</style>
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* UPPER FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/5">
          
          {/* COLUMN 1: About Us */}
          <div className="space-y-6">
            <div className="border-b-2 border-white/10 pb-2 mb-4">
              <h5 className="text-[12px] font-black uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-[3px] h-[14px] bg-[var(--ds-accent)] inline-block rounded-[1px]" />
                About Us
              </h5>
            </div>
            <img
              src="https://smartmag.theme-sphere.com/daily-scoop/wp-content/uploads/sites/52/2024/01/Logo-DailyScooop-01-white.png"
              alt="About Us Logo"
              className="h-[32px] w-auto object-contain block"
            />
            <p className="text-[13px] text-white/55 leading-relaxed">
              Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
            </p>
            <div className="text-[12.5px] text-white/70 space-y-1">
              <p><strong>Email Us:</strong> info@example.com</p>
              <p><strong>Contact:</strong> +1-320-0123-451</p>
            </div>
            <div className="flex gap-2.5 pt-2">
              {/* Colored simple social bubble links */}
              {["facebook", "twitter", "pinterest", "youtube", "whatsapp"].map(srv => (
                <a key={srv} href="#" className="w-7.5 h-7.5 bg-white/5 hover:bg-[var(--ds-accent)] text-white/70 hover:text-white flex items-center justify-center rounded-full transition-all border border-white/10 text-[11px] capitalize">
                  {srv[0]}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Our Picks */}
          <div className="space-y-5">
            <div className="border-b-2 border-white/10 pb-2 mb-4">
              <h5 className="text-[12px] font-black uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-[3px] h-[14px] bg-[var(--ds-accent)] inline-block rounded-[1px]" />
                Our Picks
              </h5>
            </div>
            <div className="flex flex-col gap-1">
              {ourPicks.map((p, idx) => (
                <SmallFooterPost key={idx} {...p} />
              ))}
            </div>
          </div>

          {/* COLUMN 3: Most Popular */}
          <div className="space-y-5">
            <div className="border-b-2 border-white/10 pb-2 mb-4">
              <h5 className="text-[12px] font-black uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-[3px] h-[14px] bg-[var(--ds-accent)] inline-block rounded-[1px]" />
                Most Popular
              </h5>
            </div>
            <div className="flex flex-col gap-1">
              {mostPopular.map((p, idx) => (
                <SmallFooterPost key={idx} {...p} />
              ))}
            </div>
          </div>

        </div>

        {/* LOWER FOOTER */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-[12px] text-white/40 gap-4">
          <div>
            &copy; 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" className="hover:text-white/60">ThemeSphere</a>.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/daily-scoop" className="hover:text-white/60 transition-colors">Home</Link>
            <span className="text-white/10">|</span>
            <Link href="#" className="hover:text-white/60 transition-colors">Technology</Link>
            <span className="text-white/10">|</span>
            <Link href="#" className="hover:text-white/60 transition-colors">About</Link>
            <span className="text-white/10">|</span>
            <Link href="#" className="hover:text-white/60 transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
