"use client";

import Link from "next/link";

const SOCIAL = [
  { id: "facebook",  label: "Facebook",    color: "#3b5998", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { id: "twitter",   label: "X (Twitter)", color: "#1c1c28", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { id: "pinterest", label: "Pinterest",   color: "#bd081c", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.663.967-2.906 2.17-2.906 1.024 0 1.517.769 1.517 1.689 0 1.029-.656 2.57-.991 3.992-.285 1.199.6 2.178 1.777 2.178 2.14 0 3.771-2.257 3.771-5.52 0-2.886-2.072-4.905-5.037-4.905-3.43 0-5.444 2.572-5.444 5.228 0 1.039.4 2.148.9 2.759a.38.38 0 0 1 .09.371c-.099.416-.321 1.3-.365 1.482-.058.244-.191.296-.443.18-1.66-.773-2.699-3.2-2.699-5.148 0-4.186 3.044-8.033 8.771-8.033 4.607 0 8.185 3.284 8.185 7.668 0 4.578-2.888 8.264-6.899 8.264-1.348 0-2.616-.7-3.049-1.531 0 0-.667 2.543-.829 3.16-.3 1.144-1.11 2.576-1.652 3.456 1.124.348 2.316.536 3.552.536 6.622 0 11.99-5.37 11.99-12.013C24 5.37 18.63 0 12.017 0z"/></svg> },
  { id: "youtube",   label: "YouTube",     color: "#ff0000", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg> },
  { id: "whatsapp",  label: "WhatsApp",    color: "#25d366", href: "#", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.017-5.092-2.868-6.944-1.851-1.852-4.312-2.871-6.942-2.872-5.441 0-9.866 4.413-9.869 9.831-.001 1.737.453 3.433 1.314 4.931l-.973 3.556 3.65-.957zM17.48 15.02c-.3-.15-1.782-.88-2.062-.98-.28-.1-.486-.15-.69.15-.204.3-.79.99-.968 1.2-.178.204-.356.23-.656.08-1.123-.563-1.884-.962-2.637-2.25-.195-.333.195-.31.559-1.03.06-.12.03-.225-.015-.325-.045-.1-.486-1.17-.666-1.6-.176-.425-.356-.367-.486-.373-.125-.006-.27-.007-.413-.007-.143 0-.377.054-.574.27-.197.215-.752.736-.752 1.795s.77 2.085.877 2.23c.107.145 1.516 2.314 3.67 3.242 1.797.776 2.164.622 2.54.587.378-.035 1.782-.73 2.03-1.433.25-.703.25-1.305.175-1.43-.075-.127-.28-.203-.58-.353z"/></svg> },
];

const OUR_PICKS = [
  {
    title: "7 Benefits of Using an 85mm Lens for Portrait Photography",
    date: "Mar 10, 2022",
    img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/jakob-owens-DQPP9rVLYGQ-unsplash-1-300x177.jpg",
    href: "#"
  },
  {
    title: "Keep an Eye on Cell Phone Use by Mobile Cell Phone Monitoring",
    date: "Mar 10, 2022",
    img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/Depositphotos_87199440_XL-1-300x200.jpg",
    href: "#"
  },
  {
    title: "Buy Now Pay Later in Lifestyle Purchases Showing Non-Payments",
    date: "Mar 10, 2022",
    img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/black-jazz-performer-plays-the-saxophone-on-stage-2022-02-08-22-39-25-utc-1-300x200.jpg",
    href: "#"
  }
];

const MOST_POPULAR = [
  {
    title: "Europe’s Central Bank Speeding Up End to Economic Stimulus",
    date: "Jan 13, 2020",
    views: "7,837",
    img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/Depositphotos_285455556_XL-1-300x195.jpg",
    href: "#"
  },
  {
    title: "National Hot Air Balloon Festival Starts in Cappadocia",
    date: "Jan 12, 2020",
    views: "5,404",
    img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/hot-air-balloons-rising_t20_E4Wnb8-300x207.jpg",
    href: "#"
  },
  {
    title: "New Marvel’s Avengers MCU Suit Surprises Fans",
    date: "Jan 11, 2020",
    views: "2,621",
    img: "https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/teen-girl-at-her-banquet-night-speaking-to-a-friend_t20_pR9dNW-300x200.jpg",
    href: "#"
  }
];

const fireIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#D82A50] inline mr-1 align-middle">
    <path d="M19.46 11.13c-.56-.52-1.32-.93-2.02-1.29-1.2-.61-2.14-1.5-2.61-2.85-.45-1.28-.24-2.73.49-3.93.07-.12.02-.27-.1-.32-.12-.05-.26.01-.3.12-1.63 4.2-5.74 6.22-6.5 10.9-.31 1.9.46 3.82 1.97 4.96.12.09.15.26.06.38-.07.09-.18.12-.28.08-1.54-.6-2.58-1.95-2.83-3.62-.03-.23-.27-.37-.48-.28-.15.07-.22.24-.18.4 1.05 4.38 4.79 7.37 9.3 7.33 4.8-.04 8.76-4.04 8.65-8.87-.06-1.58-.69-3.08-1.67-4.25z"/>
  </svg>
);

function WidgetTitle({ title }: { title: string }) {
  return (
    <div className="border-b border-white/10 mb-6 pb-2.5">
      <h5 className="text-[13px] font-extrabold uppercase tracking-[1.5px] text-white flex items-center gap-2">
        <span className="inline-block w-[3px] h-[13px] rounded-[1px] bg-[#D82A50]"/>
        {title}
      </h5>
    </div>
  );
}

export default function NewsTimeFooter() {
  return (
    <footer className="bg-[#1c1c28] text-white mt-12">
      {/* Main body */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: About Us */}
          <div className="space-y-6">
            <WidgetTitle title="About Us" />
            <div className="space-y-4">
              <Link href="#" className="block">
                <img
                  src="https://smartmag.theme-sphere.com/news-time/wp-content/uploads/sites/28/2022/03/logo-Newstime-01-footer.png"
                  width={182}
                  height={43}
                  alt="NewsTime Footer Logo"
                  className="h-[43px] w-auto object-contain"
                />
              </Link>
              <p className="text-white/50 text-[13.5px] leading-relaxed">
                Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.
              </p>
              <p className="text-white/50 text-[13.5px] leading-relaxed">
                We're accepting new partnerships right now.
              </p>
              <div className="text-white/80 text-[13.5px] leading-relaxed pt-2">
                <div><strong>Email Us:</strong> info@example.com</div>
                <div><strong>Contact:</strong> +1-320-0123-451</div>
              </div>
              
              {/* Social icons row */}
              <div className="flex gap-2.5 pt-3">
                {SOCIAL.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="nofollow noopener"
                    aria-label={s.label}
                    className="w-8 h-8 flex items-center justify-center text-white rounded-[3px] transition-all duration-300 hover:scale-105 hover:opacity-90"
                    style={{ background: s.color }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Our Picks */}
          <div>
            <WidgetTitle title="Our Picks" />
            <div className="space-y-[15px]">
              {OUR_PICKS.map((post, i) => (
                <div key={i} className="flex gap-4 group items-start cursor-pointer border-b border-white/5 pb-[15px] last:border-0 last:pb-0">
                  <Link href={post.href} className="shrink-0 w-[80px] h-[60px] overflow-hidden bg-white/5 rounded-[1px]">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={post.href}>
                      <h4 className="text-[13px] font-bold leading-[1.35] text-white/90 group-hover:text-[#D82A50] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </Link>
                    <div className="text-[10px] text-white/40 mt-1">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Most Popular */}
          <div>
            <WidgetTitle title="Most Popular" />
            <div className="space-y-[15px]">
              {MOST_POPULAR.map((post, i) => (
                <div key={i} className="flex gap-4 group items-start cursor-pointer border-b border-white/5 pb-[15px] last:border-0 last:pb-0">
                  <Link href={post.href} className="shrink-0 w-[80px] h-[60px] overflow-hidden bg-white/5 rounded-[1px]">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={post.href}>
                      <h4 className="text-[13px] font-bold leading-[1.35] text-white/90 group-hover:text-[#D82A50] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </Link>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-[10px] text-white/40">{post.date}</span>
                      <span className="text-[10px] text-[#D82A50] font-bold flex items-center">
                        {fireIcon}
                        {post.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Lower footer / Bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/30">
            &copy; 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white/60 transition-colors">ThemeSphere</a>.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Home", href: "/news-time" },
              { label: "Science", href: "#" },
              { label: "About", href: "#" },
              { label: "Contact", href: "#" }
            ].map((lnk) => (
              <Link
                key={lnk.label}
                href={lnk.href}
                className="text-[12px] text-white/30 hover:text-white hover:underline transition-colors"
              >
                {lnk.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
