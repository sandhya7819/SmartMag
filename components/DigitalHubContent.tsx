import Link from "next/link";
import { BarChart2, Flame, RefreshCw } from "lucide-react";
import {
  DH_TOP_AD,
  heroFeatured,
  newsJustIn,
  mobilePhones,
  scienceInnovation,
  mostReadPosts,
  trendingFeatured,
  trendingGrid,
  techNewsFeatured,
  techNewsList,
  gamingNews,
  editorsPicksMain,
  editorsPicksSmall,
  type DhPost,
} from "@/lib/digitalHubData";

const ACCENT = "#00cf92";
const STICKY = "lg:sticky lg:top-[170px] lg:self-start";

function BlockHead({
  title,
  accent,
  action,
}: {
  title: string;
  accent?: string;
  action?: React.ReactNode;
}) {
  const parts = accent ? title.split(accent) : [title];
  return (
    <div className="flex items-end justify-between gap-4 mb-6 pb-3 border-b border-white/[0.08]">
      <h4 className="text-[18px] font-bold text-white relative">
        {accent && parts.length > 1 ? (
          <>
            <span style={{ color: ACCENT }}>{accent}</span>
            {parts[1]}
            <span
              className="absolute left-0 -bottom-3 h-[3px] w-10 rounded-sm"
              style={{ backgroundColor: ACCENT }}
            />
          </>
        ) : (
          <>
            {title}
            <span
              className="absolute left-0 -bottom-3 h-[3px] w-10 rounded-sm"
              style={{ backgroundColor: ACCENT }}
            />
          </>
        )}
      </h4>
      {action}
    </div>
  );
}

function CatLink({ cat }: { cat: string }) {
  return (
    <Link href="#" className="text-[11px] font-bold uppercase tracking-wide hover:underline" style={{ color: ACCENT }}>
      {cat}
    </Link>
  );
}

function MetaViews({ date, views, viral }: { date?: string; views?: string; viral?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[12px] text-white/45">
      {date && <span>{date}</span>}
      {views && (
        <>
          {date && <span className="text-white/20">|</span>}
          <span className={`flex items-center gap-1 ${viral ? "text-orange-400" : ""}`}>
            {viral ? <Flame size={12} /> : <BarChart2 size={12} />}
            {views} Views
          </span>
        </>
      )}
    </div>
  );
}

function ListPostRight({ post }: { post: DhPost }) {
  return (
    <article className="flex gap-4 py-5 border-b border-white/[0.08] last:border-0 group">
      <div className="flex-1 min-w-0">
        {post.cat && (
          <div className="mb-1">
            <CatLink cat={post.cat} />
          </div>
        )}
        <h2 className="text-[15px] font-semibold leading-snug text-white group-hover:text-[#00cf92] transition-colors line-clamp-3">
          <Link href="#">{post.title}</Link>
        </h2>
        <div className="mt-2">
          <MetaViews date={post.date} views={post.views} viral={post.viral} />
        </div>
      </div>
      {post.img && (
        <div className="w-[90px] h-[90px] shrink-0 overflow-hidden rounded-sm">
          <img
            src={post.img}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
    </article>
  );
}

export default function DigitalHubContent() {
  return (
    <div className="bg-[#151516] text-white font-['DM_Sans','Public_Sans',system-ui,sans-serif]">
      <div className="max-w-[1200px] mx-auto px-4 py-8 lg:py-10">
        {/* Hero: 66% + 33% sticky */}
        <section className="lg:flex lg:items-start gap-9 mb-12">
          <div className="lg:w-[66.666%] shrink-0 min-w-0">
            <article className="group cursor-pointer">
              <div className="aspect-[4/5] max-h-[520px] overflow-hidden rounded-sm mb-4">
                <img
                  src={heroFeatured.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h2 className="text-[22px] md:text-[26px] font-bold leading-tight text-white group-hover:text-[#00cf92] transition-colors mb-2">
                <Link href="#">{heroFeatured.title}</Link>
              </h2>
              <p className="text-[13px] text-white/50">
                <Link href="#" className="hover:text-[#00cf92]">
                  {heroFeatured.author}
                </Link>
                <span className="mx-2">·</span>
                {heroFeatured.date}
              </p>
            </article>
          </div>

          <div className={`lg:w-[33.333%] shrink-0 ${STICKY}`}>
            <BlockHead title="News Just In" accent="News" />
            <div>
              {newsJustIn.map((p) => (
                <ListPostRight key={p.title} post={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Phones */}
        <section className="mb-12">
          <BlockHead
            title="Mobile Phones"
            action={
              <Link
                href="#"
                className="text-[12px] font-semibold text-white/50 border border-white/20 px-3 py-1 rounded hover:border-[#00cf92] hover:text-[#00cf92] transition-colors whitespace-nowrap"
              >
                More from Mobiles
              </Link>
            }
          />
          <div className="grid md:grid-cols-3 gap-6">
            {mobilePhones.map((p) => (
              <article key={p.title} className="group border-l-[3px] pl-4" style={{ borderColor: ACCENT }}>
                <div className="aspect-[3/2] overflow-hidden rounded-sm mb-3">
                  <img
                    src={p.img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h2 className="text-[16px] font-semibold leading-snug text-white group-hover:text-[#00cf92] transition-colors line-clamp-2 mb-2">
                  <Link href="#">{p.title}</Link>
                </h2>
                <p className="text-[12px] text-white/45">
                  {p.author} · {p.date}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Top ad */}
        <div className="hidden md:block mb-12">
          <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer">
            <img src={DH_TOP_AD} alt="Advertisement" width={970} height={125} className="w-full h-auto rounded-sm" />
          </a>
        </div>

        {/* Science + Most Read */}
        <section className="lg:flex lg:items-start gap-9 mb-12">
          <div className="lg:w-[66.666%] min-w-0">
            <BlockHead title="Science & Innovation" />
            {scienceInnovation.map((p) => (
              <ListPostRight key={p.title} post={p} />
            ))}
          </div>

          <div className={`lg:w-[33.333%] shrink-0 ${STICKY}`}>
            <div className="border border-[#00cf92]/60 rounded-lg p-5">
              <BlockHead title="Most Read Posts" accent="Most Read" />
              <ol className="space-y-0">
                {mostReadPosts.map((p, i) => (
                  <li
                    key={p.title}
                    className="flex gap-3 py-4 border-b border-white/[0.08] last:border-0 group"
                  >
                    <span className="text-[28px] font-bold leading-none shrink-0" style={{ color: ACCENT }}>
                      {i + 1}
                    </span>
                    <h2 className="text-[14px] font-medium leading-snug text-white group-hover:text-[#00cf92] transition-colors pt-1">
                      <Link href="#">{p.title}</Link>
                    </h2>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Trending Now */}
        <section
          className="mb-12 rounded-2xl p-6 md:p-8 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #5a7a62 0%, #1a3d38 55%, #0f2826 100%)",
          }}
        >
          <h4 className="text-center text-[15px] font-bold uppercase tracking-[3px] text-white mb-8">Trending Now</h4>
          <div className="grid lg:grid-cols-2 gap-6">
            <article className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <img
                  src={trendingFeatured.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h2 className="text-[20px] font-bold text-white leading-snug mb-2 group-hover:underline">
                <Link href="#">{trendingFeatured.title}</Link>
              </h2>
              <p className="text-[13px] text-white/70">
                {trendingFeatured.author} · {trendingFeatured.date}
              </p>
            </article>
            <div className="grid sm:grid-cols-2 gap-5">
              {trendingGrid.map((p) => (
                <article key={p.title} className="group">
                  <div className="aspect-[3/2] overflow-hidden rounded-sm mb-2">
                    <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h2 className="text-[14px] font-semibold text-white leading-snug line-clamp-3 group-hover:underline">
                    <Link href="#">{p.title}</Link>
                  </h2>
                  <p className="text-[12px] text-white/60 mt-1">{p.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technology News + Gaming sticky */}
        <section className="lg:flex lg:items-start gap-9 mb-12">
          <div className="lg:w-[66.666%] min-w-0">
            <BlockHead title="Technology News" />
            <article className="group mb-6 pb-6 border-b border-white/[0.08]">
              <div className="aspect-[3/2] overflow-hidden rounded-sm mb-4">
                <img
                  src={techNewsFeatured.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h2 className="text-[22px] font-bold leading-snug text-white group-hover:text-[#00cf92] transition-colors mb-2">
                <Link href="#">{techNewsFeatured.title}</Link>
              </h2>
              <p className="text-[13px] text-white/50">
                {techNewsFeatured.author} · {techNewsFeatured.date}
              </p>
            </article>
            {techNewsList.map((p) => (
              <ListPostRight key={p.title} post={p} />
            ))}
            <button
              type="button"
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-[13px] uppercase tracking-wide text-[#111] transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Load More
              <RefreshCw size={16} />
            </button>
          </div>

          <div className={`lg:w-[33.333%] shrink-0 ${STICKY}`}>
            <div className="border border-[#00cf92]/50 rounded-lg p-5">
              <BlockHead title="Gaming News" />
              <div className="grid grid-cols-2 gap-4">
                {gamingNews.map((p) => (
                  <article key={p.title} className="group">
                    <div className="aspect-[3/2] overflow-hidden rounded-sm mb-2">
                      <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <h2 className="text-[13px] font-semibold leading-snug text-white group-hover:text-[#00cf92] line-clamp-3 transition-colors">
                      <Link href="#">{p.title}</Link>
                    </h2>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Editor's Picks */}
        <section className="mb-4">
          <BlockHead title="Editor's Picks" />
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {editorsPicksMain.map((p) => (
              <article key={p.title} className="group border-b-[3px] pb-4" style={{ borderColor: ACCENT }}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-sm mb-3">
                  <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  {p.score && (
                    <span
                      className="absolute bottom-2 right-2 text-[11px] font-bold text-[#111] px-1.5 py-0.5"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {p.score}
                    </span>
                  )}
                </div>
                <h2 className="text-[16px] font-semibold leading-snug text-white group-hover:text-[#00cf92] line-clamp-2 mb-2">
                  <Link href="#">{p.title}</Link>
                </h2>
                <p className="text-[12px] text-white/45">
                  {p.author} · {p.date}
                </p>
              </article>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {editorsPicksSmall.map((p) => (
              <article key={p.title} className="group">
                <div className="aspect-[3/2] overflow-hidden rounded-sm mb-2">
                  <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h2 className="text-[14px] font-semibold text-white group-hover:text-[#00cf92] line-clamp-3 transition-colors">
                  <Link href="#">{p.title}</Link>
                </h2>
                <p className="text-[12px] text-white/45 mt-1">{p.date}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
