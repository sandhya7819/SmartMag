import Link from "next/link";
const B = "https://smartmag.theme-sphere.com/national-press/wp-content/uploads/sites/55/2024/07/";

function SH({title,link,label="View More"}:{title:string;link?:string;label?:string}) {
  return (
    <div className="flex items-center justify-between border-b-2 border-black mb-6 pb-3">
      <h3 className="text-[14px] font-black uppercase tracking-[2px]">{title}</h3>
      {link&&<Link href={link} className="text-[11px] font-bold text-[#e21c23] uppercase tracking-widest hover:text-black">{label}</Link>}
    </div>
  );
}

function TP({img,title,date,cat}:{img:string;title:string;date:string;cat?:string}) {
  return (
    <div className="flex gap-3 group cursor-pointer items-start border-b border-gray-100 py-4 last:border-0 last:pb-0">
      <img src={img} className="w-[90px] h-[68px] object-cover shrink-0 group-hover:scale-105 transition-transform" alt="" />
      <div className="flex-1">
        {cat&&<span className="text-[10px] font-black text-[#e21c23] uppercase tracking-widest block mb-1">{cat}</span>}
        <h4 className="text-[13px] font-bold leading-snug group-hover:text-[#e21c23]">{title}</h4>
        <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">{date}</div>
      </div>
    </div>
  );
}

export default function NationalPressContent() {
  const ni = [
    {img:B+"Depositphotos_285906770_XL-1-450x300.jpg",title:"EU Economy will Grow and Inflation Decline Further, New Forecast Says",date:"Jan 8, 2021",author:"John Doe"},
    {img:B+"b45c6e72e12bbd3ae2c71dfc50396d57-450x676.jpeg",title:"European Fashion Industry Projected to Expand by 48% by 2025",date:"Jan 7, 2021",author:"John Doe"},
    {img:B+"2a82fd64fa85bdce1080e35410944fcf-450x299.jpeg",title:"Europe's Economic Pain Drags on With Zero Growth at The End of Last Year",date:"Jan 5, 2021",author:"John Doe"},
    {img:B+"9020316190ea999dc854c973b5c8d89a-450x300.jpeg",title:"Police Investigating 2 Car Wrecks at Separate Woburn Businesses",date:"Jan 4, 2021",author:"John Doe"},
    {img:B+"8769f9250454da4a52c65ce2fda68bf6-450x300.jpeg",title:"5 Important Things You Should Know About the War in Ukraine",date:"Jan 4, 2021",author:"John Doe"},
  ];

  return (
    <>
      {/* News Just In */}
      <section className="container mx-auto px-4 py-10 border-t-[3px] border-black">
        <SH title="News Just In" link="#" />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {ni.map((p,i)=>(
            <div key={i} className="group cursor-pointer space-y-3">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
              </div>
              <h4 className="text-[14px] font-bold leading-snug group-hover:text-[#e21c23]">{p.title}</h4>
              <div className="text-[10px] text-gray-400 font-bold uppercase">By {p.author} — {p.date}</div>
              <p className="text-[12px] text-gray-500 line-clamp-2">To understand the new politics stance and other pro nationals of recent times, we should look…</p>
            </div>
          ))}
        </div>
      </section>

      {/* World Politics */}
      <section className="container mx-auto px-4 py-10 border-t-[3px] border-black">
        <SH title="World Politics" link="#" label="More from Politics" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Col 1 */}
          <div className="lg:border-r border-gray-200 lg:pr-7 space-y-5">
            <div className="group cursor-pointer space-y-3">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={B+"bdf1dcab23939f6f84a0272796555a97-450x300.jpeg"} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" />
              </div>
              <h2 className="text-[20px] font-black leading-tight group-hover:text-[#e21c23]">How an EU-Funded Security Force Helped Senegal Crush Democracy Protests</h2>
              <div className="text-[10px] text-gray-400 font-bold uppercase"><span className="text-[#e21c23]">Euro Zone</span> · By John Doe</div>
              <p className="text-[13px] text-gray-500 line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement.</p>
            </div>
            <TP img={B+"cfe378bef105bab57c717de0e8523d59-300x203.jpeg"} title="Germany's AfD and Extremist Allies Set Up Second EU Parliament Far Right Group" date="Jan 15, 2021" />
            <div className="border-t border-gray-100 pt-4 group cursor-pointer">
              <h4 className="text-[14px] font-bold leading-snug group-hover:text-[#e21c23] mb-2">New Government, New Opportunity To End The Hostile Environment For Refugees</h4>
              <p className="text-[12px] text-gray-500 line-clamp-2">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the…</p>
            </div>
            <div className="border-t border-gray-100 pt-5 grid grid-cols-2 gap-4">
              {[
                {img:B+"1f3f908e5f1c0a13c6c272eac815deb9-450x264.jpeg",title:"White House Urged to Double Check Microsoft isn't Funneling AI"},
                {img:B+"7912c61ea6d92c7201d06d2f12f425ba-450x266.jpeg",title:"NYC Pride March: Road Closures, Route and More for 2024 Event"},
                {img:B+"844032a872f68d41812db9e979862889-450x253.jpeg",title:"Masks are Going from Mandated to Criminalize in Some States"},
                {img:B+"2d86c37869edfef45c6954adf93b71a7-450x252.jpeg",title:"Chinese Minister Hits Back at Nato Over Russia Accusations"},
              ].map((p,i)=>(
                <div key={i} className="group cursor-pointer space-y-2">
                  <div className="overflow-hidden aspect-[4/3]"><img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" /></div>
                  <h4 className="text-[12px] font-bold leading-snug group-hover:text-[#e21c23]">{p.title}</h4>
                </div>
              ))}
            </div>
          </div>
          {/* Col 2 */}
          <div className="lg:border-r border-gray-200 lg:px-7 space-y-5 mt-8 lg:mt-0">
            <div className="group cursor-pointer space-y-3">
              <div className="text-[10px] text-gray-400 font-bold uppercase"><span className="text-[#e21c23]">Politics</span> · By John Doe</div>
              <h2 className="text-[20px] font-black leading-tight group-hover:text-[#e21c23]">IMF Warns Italy on High Public Debt and Urges Fiscal Reforms</h2>
              <div className="overflow-hidden aspect-[16/8]"><img src={B+"0614cc992ea6f725abe46c5d99e5d1e8-450x209.jpeg"} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" /></div>
              <p className="text-[13px] text-gray-500 line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement.</p>
            </div>
            <div className="border-t border-gray-100 pt-4 grid grid-cols-2 gap-4">
              {["Ukraine's Soldier Crisis a Major Challenge for Country's Defense","From Research to Policy: Where Next for the UK Economy Conference"].map((t,i)=>(
                <div key={i} className="group cursor-pointer"><h4 className="text-[13px] font-bold leading-snug group-hover:text-[#e21c23]">{t}</h4></div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-4 space-y-0">
              <TP img={B+"c0f6d76498f672f38a62947d1a9301e7-300x204.jpeg"} title="Is It Hot Enough Yet for Politicians to Take Real Action?" date="Jan 8, 2021" />
              <TP img={B+"9d6953bbd68f5ce4f05a3f2a35053a74-300x200.jpeg"} title="As the World Boils, a Backlash to Climate Action Gains Strength" date="Jan 7, 2021" />
              <TP img={B+"aa0e263cbe80a03ec1165fb191464791-300x200.jpeg"} title="Milan Airport to be Named After Former Late PM" date="Jan 5, 2021" />
              <TP img={B+"095aa767a6caea862daa73b432dc5a16-300x200.jpeg"} title="Georgia: Politics and Sports Are Not Mixing Well Enough" date="Jan 4, 2021" />
            </div>
          </div>
          {/* Col 3 */}
          <div className="lg:pl-7 space-y-5 mt-8 lg:mt-0">
            <div className="group cursor-pointer space-y-3">
              <div className="overflow-hidden aspect-[4/3]"><img src={B+"bf34febedb59f62b66d5c108542800b4-450x300.jpeg"} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" /></div>
              <h2 className="text-[20px] font-black leading-tight group-hover:text-[#e21c23]">Elon Musk&apos;s SpaceX Deepening Ties to US Intelligence Agencies</h2>
              <div className="text-[10px] text-gray-400 font-bold uppercase"><span className="text-[#e21c23]">US Politics</span> · By John Doe</div>
              <p className="text-[13px] text-gray-500 line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement.</p>
            </div>
            <div className="border-t border-gray-100 pt-4 space-y-0">
              <TP img={B+"73d98db170295d75dd0c635d63401d33-300x200.jpeg"} title="How a Yemeni Rebel Group is Creating Chaos in the Global Economy" date="Jan 8, 2021" cat="Middle East" />
              <TP img="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=300" title="Melbourne: All Refugees Held in Hotel Detention to be Released" date="Jan 7, 2021" cat="Politics" />
              <TP img="https://images.unsplash.com/photo-1461896756913-c23ee572a1bd?w=300" title="A Political Fight Won, France's Stars Turn Back to a Soccer One" date="Jan 6, 2021" cat="Euro Zone" />
              <TP img="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300" title="Activists Arrested on Suspicion of Contempt After London Protest" date="Jan 5, 2021" cat="Politics" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
