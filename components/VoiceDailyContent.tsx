import Link from "next/link";
import {
  VD_BASE,
  VD_MID_AD,
  VD_SIDEBAR_AD,
  VD_TOP_AD,
  featuredMain,
  featuredSide,
  gridSix,
  leftColumnPosts,
  blueMountains,
  leftListPosts,
  rightListFeatured,
  overlayHero,
  sidebarSmall,
  climatePosts,
  moneyBusiness,
  sportsMain,
  worldFeatured,
  EXCERPT,
  type VdPost,
} from "@/lib/voiceDailyData";

const STICKY_TOP = "lg:top-[162px] md:top-[114px]";

function SectionTitle({ title, accent = "default" }: { title: string; accent?: "default" | "red" }) {
  const parts = title.split(".");
  const main = parts[0];
  const dot = parts.length > 1 ? "." : "";
  const borderColor = accent === "red" ? "border-[#e53935]" : "border-[#161616]";
  return (
    <div className={`flex items-center border-b-[3px] ${borderColor} pb-2 mb-5`}>
      <h4 className="text-[15px] font-black uppercase tracking-[1px] text-[#161616]">
        {main}
        {dot && <span className="text-[#0c77e2]">.</span>}
      </h4>
    </div>
  );
}

function RightSidebar() {
  return (
    <aside className={`lg:sticky ${STICKY_TOP} lg:self-start space-y-6`}>
      <article className="relative overflow-hidden group">
        <div className="aspect-[2/3] overflow-hidden">
          <img src={overlayHero.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
          <h2 className="text-white text-[18px] font-bold leading-snug mb-2">
            <Link href="#">{overlayHero.title}</Link>
          </h2>
          <div className="text-white/80 text-[11px] font-bold">
            {overlayHero.author} — {overlayHero.date}
          </div>
        </div>
      </article>

      <article className="py-3 border-b border-[#efefef]">
        <CatMeta cat="US & Canada" />
        <h2 className="text-[15px] font-bold leading-snug hover:text-[#0c77e2]">
          <Link href="#">US Nod to Nato for Sending Fighter Jets to Ukraine Finds no Takers</Link>
        </h2>
        <p className="text-[13px] text-[#4f4f4f] mt-2 line-clamp-2">{EXCERPT}</p>
      </article>

      {sidebarSmall.map((p) => (
        <article key={p.title} className="flex gap-3 py-3 border-b border-[#efefef] group">
          <div className="relative w-[72px] h-[72px] shrink-0 overflow-hidden">
            <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            {p.score && (
              <span className="absolute bottom-0 left-0 right-0 bg-[#0c77e2] text-white text-[10px] font-black text-center py-0.5">
                {p.score}
              </span>
            )}
          </div>
          <h4 className="text-[13px] font-bold leading-snug text-[#161616] group-hover:text-[#0c77e2] line-clamp-3">
            <Link href="#">{p.title}</Link>
          </h4>
        </article>
      ))}

      <Newsletter />

      <div>
        <SectionTitle title="Climate." />
        <div className="grid grid-cols-2 gap-3">
          {climatePosts.map((p) => (
            <GridThumb key={p.title} post={p} tall />
          ))}
        </div>
      </div>
    </aside>
  );
}

function CatMeta({ cat, date, updated }: { cat?: string; date?: string; updated?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wide mb-1">
      {cat && (
        <Link href="#" className="text-[#0c77e2] hover:underline">
          {cat}
        </Link>
      )}
      {date && <span className="text-[#9b9b9b]">{date}</span>}
      {updated && (
        <span className="text-[#9b9b9b]">
          <span className="font-black">Updated:</span> {updated}
        </span>
      )}
    </div>
  );
}

function SmallPost({ post }: { post: VdPost }) {
  return (
    <article className="py-4 border-b border-[#efefef] last:border-0">
      <CatMeta cat={post.cat} date={post.date} />
      <h4 className="text-[15px] font-bold leading-snug text-[#161616] hover:text-[#0c77e2]">
        <Link href="#">{post.title}</Link>
      </h4>
    </article>
  );
}

function GridThumb({ post, tall }: { post: VdPost; tall?: boolean }) {
  return (
    <article className="group cursor-pointer">
      {post.img && (
        <div className={`overflow-hidden mb-3 ${tall ? "aspect-[3/4]" : "aspect-[3/2]"}`}>
          <img
            src={post.img}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <h2 className="text-[14px] font-bold leading-snug text-[#161616] group-hover:text-[#0c77e2] line-clamp-3">
        <Link href="#">{post.title}</Link>
      </h2>
      {(post.cat || post.date) && (
        <div className="mt-2">
          <CatMeta cat={post.cat} date={post.date} />
        </div>
      )}
      {post.excerpt && <p className="text-[13px] text-[#4f4f4f] mt-2 line-clamp-2">{post.excerpt}</p>}
    </article>
  );
}

function Newsletter({ dark }: { dark?: boolean }) {
  return (
    <div className={`p-6 ${dark ? "bg-[#161616] text-white" : "bg-[#f7f7f7]"}`}>
      <h3 className={`text-[16px] font-black mb-2 ${dark ? "text-white" : "text-[#161616]"}`}>Subscribe to Updates</h3>
      <p className={`text-[13px] mb-4 leading-relaxed ${dark ? "text-gray-400" : "text-[#666]"}`}>
        Get the latest creative news from FooBar about art, design and business.
      </p>
      <form className="flex gap-0">
        <input
          type="email"
          placeholder="Your email address.."
          required
          className={`flex-1 px-3 py-2.5 text-[13px] border ${dark ? "bg-white/10 border-white/20 text-white placeholder:text-gray-500" : "bg-white border-[#ddd] text-[#333]"}`}
        />
        <button
          type="submit"
          className="bg-[#0c77e2] text-white text-[12px] font-bold px-4 hover:bg-[#0960b8] transition-colors"
        >
          Subscribe
        </button>
      </form>
      <label className={`flex items-start gap-2 mt-3 text-[11px] ${dark ? "text-gray-500" : "text-[#777]"}`}>
        <input type="checkbox" required className="mt-0.5" />
        <span>
          By signing up, you agree to our terms and our{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>{" "}
          agreement.
        </span>
      </label>
    </div>
  );
}

export default function VoiceDailyContent() {
  return (
    <div className="bg-[#eceff1] py-0">
      <div className="max-w-[1200px] mx-auto bg-white shadow-sm">
        {/* Main area + sticky right sidebar (matches SmartMag ts-sticky-native) */}
        <div className="lg:flex lg:items-start border-b border-[#efefef]">
          <div className="flex-1 min-w-0">
            {/* Hero row */}
            <section className="grid lg:grid-cols-2 gap-0">
              <div className="p-5 lg:p-6 lg:pr-4 border-b lg:border-b-0 lg:border-r border-[#efefef]">
                <CatMeta cat={featuredMain.cat} updated={featuredMain.updated} />
                <h2 className="text-[22px] font-bold leading-tight text-[#161616] mb-4 hover:text-[#0c77e2]">
                  <Link href="#">{featuredMain.title}</Link>
                </h2>
                <div className="aspect-[16/10] overflow-hidden mb-4">
                  <img
                    src={featuredMain.img}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[14px] text-[#4f4f4f] leading-relaxed line-clamp-3">{featuredMain.excerpt}</p>
              </div>
              <div className="p-5 lg:p-6 lg:pl-4 border-b lg:border-b-0 border-[#efefef]">
                {featuredSide.map((p) => (
                  <SmallPost key={p.title} post={p} />
                ))}
              </div>
            </section>

            {/* 6-col grid */}
            <section className="p-5 lg:p-6 border-b border-[#efefef]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {gridSix.map((p) => (
                  <GridThumb key={p.title} post={p} />
                ))}
              </div>
            </section>

            {/* Two columns: left list + middle articles */}
            <section className="grid lg:grid-cols-2 gap-0">
          <div className={`p-5 lg:p-6 lg:pr-4 border-b lg:border-b-0 lg:border-r border-[#efefef] lg:sticky ${STICKY_TOP} lg:self-start`}>
            {leftColumnPosts.map((p) => (
              <SmallPost key={p.title} post={p} />
            ))}
            <article className="py-5 border-b border-[#efefef]">
              <div className="aspect-[3/2] overflow-hidden mb-3">
                <img src={blueMountains.img} alt="" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-[17px] font-bold leading-snug mb-2 hover:text-[#0c77e2]">
                <Link href="#">{blueMountains.title}</Link>
              </h2>
              <div className="text-[11px] text-[#9b9b9b] font-bold uppercase">
                By {blueMountains.author} — <span className="text-[#9b9b9b]">Updated: {blueMountains.updated}</span>
              </div>
            </article>
            {leftListPosts.map((p) => (
              <SmallPost key={p.title} post={p} />
            ))}
          </div>

          <div className="p-5 lg:p-6 lg:pl-4 space-y-6">
            {rightListFeatured.map((p) => (
              <article key={p.title} className="flex gap-4 pb-5 border-b border-[#efefef] group">
                <div className="w-[120px] shrink-0 aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <CatMeta cat={p.cat} date={p.date} />
                  <h2 className="text-[15px] font-bold leading-snug hover:text-[#0c77e2]">
                    <Link href="#">{p.title}</Link>
                  </h2>
                  {p.excerpt && <p className="text-[12px] text-[#4f4f4f] mt-2 line-clamp-2">{p.excerpt}</p>}
                </div>
              </article>
            ))}

            <article className="pb-4 border-b border-[#efefef]">
              <h2 className="text-[15px] font-bold leading-snug hover:text-[#0c77e2]">
                <Link href="#">Market Trading Guide: Jyothy Labs, Safari Industries Among 4 Stock Recommendations for Now – Latest Stock Ideas</Link>
              </h2>
              <div className="text-[11px] text-[#9b9b9b] mt-2 font-bold">John Doe</div>
            </article>

            <article className="flex gap-4 pb-5 border-b border-[#efefef] group">
              <div className="w-[120px] shrink-0 aspect-[4/3] overflow-hidden">
                <img src={`${VD_BASE}b2e0080127a231950f524d74dbd561b9-300x199.jpeg`} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <CatMeta cat="US & Canada" date="Jan 4, 2021" />
                <h2 className="text-[15px] font-bold leading-snug hover:text-[#0c77e2]">
                  <Link href="#">Arizona Anti-Abortion Activists aren’t Letting Up After Supreme Court Victory?</Link>
                </h2>
                <p className="text-[12px] text-[#4f4f4f] mt-2 line-clamp-2">{EXCERPT}</p>
              </div>
            </article>

            <div className="grid grid-cols-2 gap-4">
              <GridThumb post={{ title: "Mask Bans Grow, Threatening Public Health And Immunocompromised People", cat: "Face Masks", date: "Jan 4, 2021", img: `${VD_BASE}e349d70df4d6621f01f289a3c22fe9a0-450x300.jpeg` }} />
              <GridThumb post={{ title: "Live on This Day: Students Protest Gun Violence in March for Our Lives", cat: "Health", date: "Jan 4, 2021", img: `${VD_BASE}e59331553987345341707d58fec0e0df-450x300.jpeg` }} />
            </div>

            <article className="py-4 border-b border-[#efefef]">
              <CatMeta cat="Ukraine Conflict" date="Jan 4, 2021" />
              <h2 className="text-[15px] font-bold leading-snug hover:text-[#0c77e2]">
                <Link href="#">One Year On From Unprecedented Wagner Rebellion and Still Russian President Vladimir Putin’s Position is as Strong as Ever: Expert Analysis</Link>
              </h2>
            </article>

            {[1, 2, 3].map((i) => (
              <article key={i} className="flex gap-4 pb-5 border-b border-[#efefef] group">
                <div className="w-[120px] shrink-0 aspect-[4/3] overflow-hidden">
                  <img
                    src={`${VD_BASE}${i === 1 ? "695c2029874aad0c91f42f22790c3e76" : i === 2 ? "01e570a920b5b49c473cd7dc16b9022b" : "e707291e2183a1d2949c82ec95e4ced6"}-300x200.jpeg`}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <CatMeta cat={i === 1 ? "Politics" : i === 2 ? "Cameras" : "Celebrities"} date="Jan 4, 2021" />
                  <h2 className="text-[15px] font-bold leading-snug hover:text-[#0c77e2]">
                    <Link href="#">
                      {i === 1
                        ? "John Doe Campaign Has Long Fed Softball Questions to Friendly Interviewers"
                        : i === 2
                          ? "Sony Leads Mirrorless Camera Sales While Canon Dominates DSLRs"
                          : "Met Gala 2024: Some Stars Miss the Mark on the Red Carpet"}
                    </Link>
                  </h2>
                  <p className="text-[12px] text-[#4f4f4f] mt-2 line-clamp-2">{EXCERPT}</p>
                </div>
              </article>
            ))}
          </div>
            </section>
          </div>

          <div className="p-5 lg:p-6 lg:w-[300px] shrink-0 lg:border-l border-[#efefef] bg-white">
            <RightSidebar />
          </div>
        </div>

        {/* Mid ad */}
        <div className="hidden md:block p-4 border-b border-[#efefef]">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer">
            <img src={VD_MID_AD} alt="Advertisement" width={970} height={250} className="w-full h-auto" />
          </a>
        </div>

        {/* Money & Business */}
        <section className="p-5 lg:p-6 bg-[#f7f7f7] border-b border-[#efefef]">
          <SectionTitle title="Money & Business." />
          <div className="grid lg:grid-cols-2 gap-6">
            <article>
              <div className="aspect-[3/2] overflow-hidden mb-4">
                <img src={moneyBusiness.img} alt="" className="w-full h-full object-cover" />
              </div>
              <CatMeta cat={moneyBusiness.cat} date={moneyBusiness.date} />
              <h2 className="text-[20px] font-bold leading-snug mb-3 hover:text-[#0c77e2]">
                <Link href="#">{moneyBusiness.title}</Link>
              </h2>
              <p className="text-[14px] text-[#4f4f4f] leading-relaxed">{moneyBusiness.excerpt}</p>
            </article>
            <div className="grid grid-cols-2 gap-4 content-start">
              <GridThumb post={{ title: "New Cryptocurrency Projects to Invest in – Newest Crypto of July, 2024", cat: "Investments", date: "Mar 11, 2022", img: `${VD_BASE}007c01e30c48375464bbc648921ef52c-450x300.jpeg` }} />
              <GridThumb post={{ title: "TVD Daily Open: Wall Street Looks Past Political Uncertainty", cat: "Markets", date: "Mar 11, 2022", img: `${VD_BASE}3067824d8f4ce16b17f70c23c9f5a905-450x302.jpeg` }} />
              {[
                { title: "Silicon Valley Bank Moves to New Office in Downtown San Francisco", cat: "Banking", date: "Mar 11, 2022", img: `${VD_BASE}d3bb8a1429a2f42060c0b8c77fe352ec-200x300.jpeg` },
                { title: "European Central Bankers Warn of Risks to Region’s Economy", cat: "Economy", date: "Mar 11, 2022", img: `${VD_BASE}57ee4be32598decee5fd8cccbfe417e8-300x200.jpeg` },
              ].map((p) => (
                <article key={p.title} className="flex gap-3 group">
                  <div className="w-[90px] shrink-0 aspect-[3/2] overflow-hidden">
                    <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <CatMeta cat={p.cat} date={p.date} />
                    <h2 className="text-[13px] font-bold leading-snug hover:text-[#0c77e2]">
                      <Link href="#">{p.title}</Link>
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Roundup */}
        <section className="p-5 lg:p-6 border-b border-[#efefef]">
          <div className="grid lg:grid-cols-[1fr_280px] gap-8">
            <div>
              <SectionTitle title="Sports Roundup." accent="red" />
              <article className="flex flex-col md:flex-row gap-5 mb-6 pb-6 border-b border-[#efefef] bg-[#f9f9f9] p-4 md:p-5">
                <div className="md:w-1/2 order-2 md:order-1">
                  <CatMeta cat={sportsMain.cat} date={sportsMain.date} updated={sportsMain.updated} />
                  <h2 className="text-[20px] font-bold leading-snug mb-3 hover:text-[#0c77e2]">
                    <Link href="#">{sportsMain.title}</Link>
                  </h2>
                  <p className="text-[14px] text-[#4f4f4f]">{sportsMain.excerpt}</p>
                </div>
                <div className="md:w-1/2 aspect-[3/2] overflow-hidden shrink-0 order-1 md:order-2">
                  <img src={sportsMain.img} alt="" className="w-full h-full object-cover" />
                </div>
              </article>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: "Australian Open: Women’s Draw as Sofia Kenin Defends Title", cat: "Tennis", date: "Jul 18, 2024", img: `${VD_BASE}211dcf9f33f563538d1ee9137197d4b5-450x349.jpeg` },
                  { title: "2024 NCAA Baseball Bracket: Men’s College World Series Scores, Schedule", cat: "Sports", date: "Jul 18, 2024", img: `${VD_BASE}193b0a52a809cc0c93d85b20bcb7c6c2-450x300.jpeg` },
                  { title: "MotoAmerica: More From WeatherTech Raceway Laguna Seca (Updated)", cat: "Sports", date: "Jul 18, 2024", img: `${VD_BASE}22e5561568a13afda9d7cf86150c1fbc-450x300.jpeg` },
                ].map((p) => (
                  <GridThumb key={p.title} post={p} />
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Tokyo Officials Plan For a Safe Olympic Games Without Quarantines", img: `${VD_BASE}4a7975c604a0b24eb2c8f24e0e231a73-450x300.jpeg` },
                  { title: "Women’s Hockey Fans and Players Deserve Better from the NWHL", img: `${VD_BASE}176c8ae8f368e5c274395d4f16570fb9-450x169.jpeg` },
                  { title: "Paris Olympics 2024: Six Swimming Races to Watch at the Games", img: `${VD_BASE}7e44ef929f90b611116e6c62bc5a4c90-450x200.jpeg` },
                ].map((p) => (
                  <article key={p.title} className="flex gap-3 group">
                    <div className="w-[90px] h-[90px] shrink-0 overflow-hidden">
                      <img src={p.img} alt="" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-[13px] font-bold leading-snug group-hover:text-[#0c77e2]">
                      <Link href="#">{p.title}</Link>
                    </h4>
                  </article>
                ))}
              </div>
            </div>
            <div className="border-t-[3px] border-[#e53935] pt-4">
              <SectionTitle title="More Sports." accent="red" />
              {[
                "Women`s World Boxing Championships: 4 Women Boxers Reached Finals",
                "Ice skating to Return at William O. Smith Rec. Center in Olean",
                "How to Watch Euro 2024 Qualifier Soccer From Anywhere FREE",
                "Stefano D., New Formula 1 Chief Urges Drivers to Lead by Example",
                "Son’s Soccer Academy in South Korea Denies Bullying Allegations Involving Coaches",
                "Ricardo Ferreira Switches Soccer Allegiance to Canada",
              ].map((title) => (
                <article key={title} className="py-3 border-b border-[#efefef]">
                  <h2 className="text-[14px] font-bold leading-snug hover:text-[#0c77e2] line-clamp-3">
                    <Link href="#">{title}</Link>
                  </h2>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Crypto */}
        <section className="border-b border-[#efefef]">
          <div className="bg-[#0c77e2] px-5 lg:px-6 py-3">
            <h4 className="text-white text-[14px] font-black uppercase tracking-[1px]">Crypto Currencies</h4>
          </div>
          <div className="p-5 lg:p-6 bg-[#f0f4f8] grid lg:grid-cols-2 gap-6">
            <article>
              <div className="aspect-[16/9] overflow-hidden mb-4">
                <img src={`${VD_BASE}3b80d2929a83187e4648fd8379ee6e08-768x432.jpeg`} alt="" className="w-full h-full object-cover" />
              </div>
              <CatMeta cat="NFTs" date="Jul 18, 2024" />
              <h2 className="text-[18px] font-bold mb-2 hover:text-[#0c77e2]">
                <Link href="#">Trump Reaffirms Support for Crypto, Plans to Launch 4th NFT Collection</Link>
              </h2>
              <p className="text-[14px] text-[#4f4f4f]">{EXCERPT}</p>
            </article>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <GridThumb post={{ title: "Is Tesla Buying Bitcoin Again? BTC Wallet Data Sparks Curiosity", cat: "Bitcoin", date: "Jul 18, 2024", img: `${VD_BASE}dbd59260ae44fbc84203d287cad1046a-450x300.jpeg` }} />
                <GridThumb post={{ title: "Bitcoin ATMs Flood Black, Latino Areas, Charging Fees up to 22%", cat: "Bitcoin", date: "Jul 18, 2024", img: `${VD_BASE}583a6a7da1a82a1f21b2044dc6fefbb7-450x300.jpeg` }} />
              </div>
              {[
                { title: "EU Releases Crypto-Asset Classification Tools to Help Firms Comply with MiCA", cat: "Technology", date: "Jul 18, 2024", img: `${VD_BASE}eca2ac09acc0355fe3be86943738cf21-1-300x150.jpg` },
                { title: "Bitcoin Security: Here’s What Makes The OG Blockchain Safer Than Fort Knox", cat: "Bitcoin", date: "Jul 18, 2024", img: `${VD_BASE}64de9faa1e45f5ee58bd86877d68e4f4-300x200.jpeg` },
              ].map((p) => (
                <article key={p.title} className="flex gap-3 group">
                  <div className="w-[100px] aspect-[3/2] overflow-hidden shrink-0">
                    <img src={p.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <CatMeta cat={p.cat} date={p.date} />
                    <h2 className="text-[14px] font-bold hover:text-[#0c77e2]">
                      <Link href="#">{p.title}</Link>
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technology + Tourism row */}
        <section className="grid lg:grid-cols-2 gap-0 border-b border-[#efefef]">
          <div className="p-5 lg:p-6 lg:pr-4 border-b lg:border-b-0 lg:border-r border-[#efefef]">
            <SectionTitle title="Technology." />
            <article className="mb-5">
              <div className="aspect-[21/9] overflow-hidden mb-3">
                <img src={`${VD_BASE}c925205784e6fb2aed675f1893f989ed-1-450x212.jpg`} alt="" className="w-full h-full object-cover" />
              </div>
              <CatMeta cat="Gaming" />
              <h2 className="text-[17px] font-bold hover:text-[#0c77e2]">
                <Link href="#">Tips To Get The Most Out Of Your New Nvidia RTX 2060</Link>
              </h2>
              <p className="text-[13px] text-[#4f4f4f] mt-2">{EXCERPT}</p>
            </article>
            {[1, 2, 3].map((i) => (
              <article key={i} className="flex gap-4 py-4 border-b border-[#efefef] group">
                <div className="w-[110px] aspect-[4/3] overflow-hidden shrink-0">
                  <img
                    src={`${VD_BASE}${i === 1 ? "e7ce131632d204e132a0168b35e017ca" : i === 2 ? "fcfe676ecc985608bdf247fc6dee1911" : "ab952f418421b5cdd0ada561ecddb854"}-300x200.jpeg`}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <CatMeta cat={i === 1 ? "Mobile Phones" : i === 2 ? "NFTs" : "Technology"} date="Jul 18, 2024" />
                  <h2 className="text-[14px] font-bold hover:text-[#0c77e2]">
                    <Link href="#">
                      {i === 1
                        ? "T-Mobile US Faces Class-Action Suit From AT&T and Verizon Subscribers"
                        : i === 2
                          ? "Banana NFT Launches on Telegram with 10,000 $TON Giveaway Event"
                          : "Teenage Girl Finds Mom’s Debit Card, Spends $64,000 on Mobile Games"}
                    </Link>
                  </h2>
                </div>
              </article>
            ))}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {["OnePlus Will Focus on a Premium Build Over Performance", "Apple Watch’s ECG Can Help Diagnose Heart Problem: Research", "AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem", "New Oculus VR Kills IRL If Your Game Character Dies"].map((title, i) => (
                <GridThumb
                  key={title}
                  post={{
                    title,
                    img: `${VD_BASE}${["569a9b21b79b7a25fa3333af1e144612", "79d34b0cdcf7be65e623f9061935d5d5", "cf3d2a0d3ad8541f04ff2a03a461c6a3-1", "988270c69832881ee8eb05d43704f419-1"][i]}-450x300.jpeg`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="p-5 lg:p-6 lg:pl-4">
            <SectionTitle title="Tourism." />
            <article className="mb-4">
              <div className="aspect-[16/10] overflow-hidden mb-3">
                <img src={`${VD_BASE}5fc94eea87310e602e52ff81136e18a4-768x509.jpeg`} alt="" className="w-full h-full object-cover" />
              </div>
              <CatMeta cat="Travel & Tourism" />
              <h2 className="text-[15px] font-bold hover:text-[#0c77e2] line-clamp-3">
                <Link href="#">SpaceX Launches Starlink Satellites on ‘American Broomstick’ and Lands Rocket at Sea</Link>
              </h2>
            </article>
            {["Traveling Abroad? Joe Doe Explains What You Should Know", "Coastal Home Decor Ideas to Bring the Beach to You this Winter", "List of Things to Do and See in South Florida This Week", "2021 Belt and Road International Regatta held in Beihai"].map((title, i) => (
              <SmallPost key={title} post={{ title, cat: ["Tourism", "Hotels", "Holidays", "Events"][i], date: "Jul 18, 2024" }} />
            ))}
          </div>
        </section>

        {/* Top ad */}
        <div className="p-4 border-b border-[#efefef]">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer">
            <img src={VD_TOP_AD} alt="Advertisement" width={970} height={250} className="w-full h-auto" />
          </a>
        </div>

        {/* Health */}
        <section className="p-5 lg:p-6 border-b border-[#efefef]">
          <SectionTitle title="Health & Fitness." />
          <div className="grid lg:grid-cols-2 gap-6">
            <article>
              <div className="aspect-[3/2] overflow-hidden mb-4">
                <img src={`${VD_BASE}c073ec333584e21bcb433b4ad483c29f-768x512.jpeg`} alt="" className="w-full h-full object-cover" />
              </div>
              <CatMeta cat="Vaccines" date="Jul 18, 2024" />
              <h2 className="text-[20px] font-bold mb-3 hover:text-[#0c77e2]">
                <Link href="#">Measles and Rubella Vaccine Delivered via Microarray Shows Promising Results</Link>
              </h2>
              <p className="text-[14px] text-[#4f4f4f] leading-relaxed">
                To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation…
              </p>
            </article>
            <div className="space-y-0">
              {[
                { title: "How to Make Fitness Part of Your Daily Lifestyle", cat: "Fitness", img: `${VD_BASE}816656d0987de6fbc4d194ab5663ce31-300x206.jpeg` },
                { title: "13 Ways Running Can Make You Healthier and Happier", cat: "Fitness", img: `${VD_BASE}d01cbcffe7151b9690a60ff450665d2e-300x200.jpeg` },
                { title: "Can Orange Juice Reduce Inflammation, Oxidative Stress?", cat: "Health", img: `${VD_BASE}c63ba11deb0a9e32912fd8fc03519b44-300x200.jpeg` },
                { title: "Pfizer Files for US Authorization of Promising Covid-19 Pill", cat: "Vaccines", img: `${VD_BASE}ae612aa99ad9fbc6366981ebfba036d9-300x192.jpeg` },
                { title: "Experts Unveil First Comprehensive Guidelines for Precision Medicine Research", cat: "Research", img: `${VD_BASE}45e2966e9afec9b2402a24d2eda5d86d-300x200.jpeg` },
              ].map((p) => (
                <article key={p.title} className="flex gap-4 py-4 border-b border-[#efefef] group">
                  <div className="w-[100px] aspect-[3/2] overflow-hidden shrink-0">
                    <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <CatMeta cat={p.cat} date="Jul 18, 2024" />
                    <h2 className="text-[14px] font-bold hover:text-[#0c77e2]">
                      <Link href="#">{p.title}</Link>
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 pt-6 border-t border-[#efefef]">
            {[
              "How to Find A Medical School That Leads to a Research Career",
              "Patient Testifies Blood Test Showed HIV False Positive",
              "Opioid Drugs: A List of Common Prescription & Street Drugs",
              "Are There Cancers of Red Blood Cells and Blood Platelets?",
              "Hospital Admissions for Epilepsy Change with Climatic Factors",
            ].map((title, i) => (
              <GridThumb
                key={title}
                post={{
                  title,
                  cat: "Health",
                  date: "Jul 18, 2024",
                  img: `${VD_BASE}${["1ce7d46104cdddec7b3034b14a246262", "3ec700a17b5c57b33b7e890886fc6a89", "7cbc76c02feba5d8156776c84904ccb3", "7b2e70a3ff6de3c8d667acf5f1b7814f", "498caf919c4ed88d7a4067e271636d24"][i]}-450x300.jpeg`,
                }}
              />
            ))}
          </div>
        </section>

        {/* From around the world + sidebar ad */}
        <section className="grid lg:grid-cols-[1fr_300px] gap-0">
          <div className="p-5 lg:p-6 lg:pr-4 border-b lg:border-b-0 lg:border-r border-[#efefef]">
            <SectionTitle title="From around the world." />
            <article className="flex flex-col md:flex-row gap-5 mb-6 pb-6 border-b border-[#efefef]">
              <div className="md:w-[55%] aspect-[16/10] overflow-hidden">
                <img src={worldFeatured.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <CatMeta cat={worldFeatured.cat} date={worldFeatured.date} updated={worldFeatured.updated} />
                <h2 className="text-[22px] font-bold leading-tight mb-3 hover:text-[#0c77e2]">
                  <Link href="#">{worldFeatured.title}</Link>
                </h2>
                <p className="text-[14px] text-[#4f4f4f]">{worldFeatured.excerpt}</p>
              </div>
            </article>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <GridThumb
                  post={{
                    title: "South Korea’s Top Court Grants State Benefits To Gay Couples In Landmark Ruling",
                    cat: "South East Asia",
                    img: `${VD_BASE}484df2ed8232a177576f6a083072b2cd-450x253.jpeg`,
                    excerpt: EXCERPT,
                  }}
                />
                {["Election 2024: What Will Markets Do With Trump Victory Over Biden?", "Anti-War Protests Intensify in World Along with Crackdown", "Korea Closes 4 Diplomatic Missions, Suggesting Economic Woes"].map((title) => (
                  <SmallPost key={title} post={{ title }} />
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { title: "‘Freedom to Learn’ Protests have a Clear Message: ‘We Will be Woke’", cat: "US & Canada", img: `${VD_BASE}4bfc3008c4b2b05e4ba0c20bac2ed861-300x200.jpeg` },
                  { title: "Microsoft Sees Slowing in Russian and Chinese Efforts to Sway U.S. Vote", cat: "Politics", img: `${VD_BASE}bf240241b47162fde1f22070c5e66f9f-300x200.jpeg` },
                ].map((p) => (
                  <article key={p.title} className="flex gap-4 group">
                    <div className="w-[110px] aspect-[4/3] overflow-hidden shrink-0">
                      <img src={p.img} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CatMeta cat={p.cat} date="Jul 18, 2024" />
                      <h2 className="text-[14px] font-bold hover:text-[#0c77e2]">
                        <Link href="#">{p.title}</Link>
                      </h2>
                      <p className="text-[12px] text-[#4f4f4f] mt-1 line-clamp-2">{EXCERPT}</p>
                    </div>
                  </article>
                ))}
                <article className="py-3 border-t border-[#efefef]">
                  <h2 className="text-[14px] font-bold hover:text-[#0c77e2]">
                    <Link href="#">Melbourne: All Refugees Held in Hotel Detention to be Released</Link>
                  </h2>
                  <span className="text-[11px] text-[#9b9b9b] font-bold">Shane Doe</span>
                </article>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                "The Humanoid AI Politicians Would Like to Speak With You Now: AI Tech",
                "Anti-Abortion Activists Aren’t Letting Up After Supreme Court Victory",
                "Trump Response to Biden Dropping Out: President ‘Not Fit to Run’",
              ].map((title) => (
                <GridThumb key={title} post={{ title, cat: "Politics", date: "Jul 18, 2024", img: `${VD_BASE}${title.includes("Trump") ? "f79ecc4d4df08c23010e7154279db154" : title.includes("Anti") ? "b2e0080127a231950f524d74dbd561b9" : "04b14f3f5c9fbe2fac1ba38f7c8c6987"}-450x300.jpeg` }} />
              ))}
            </div>
          </div>
          <div className="p-5 lg:p-6 flex flex-col gap-6">
            <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block">
              <img src={VD_SIDEBAR_AD} alt="Advertisement" width={300} height={600} className="w-full h-auto" />
            </a>
            <div>
              <SectionTitle title="Celebrities." />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Hollywood Actress Hits 4 Million Followers on Instagram", img: `${VD_BASE}516d93a7ca3a5a4ce8315b3bca82e7ef-450x360.jpeg` },
                  { title: "Marvel Movies in Order: How to Watch Chronologically", img: `${VD_BASE}c45af34034b208f045fa583318e2ce3e-450x331.jpeg` },
                  { title: "Review: American Music Awards Participants Reviewed", img: `${VD_BASE}2c8c2fbe2a1ec08f7f7ffcf9ead3eef2-450x300.jpeg` },
                  { title: "‘No Time to Die’ Wins at 2021 Hollywood Music in Media Awards", img: `${VD_BASE}85b6705c951b68cf94ec72bda4d435af-450x296.jpeg` },
                ].map((p) => (
                  <GridThumb key={p.title} post={p} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
