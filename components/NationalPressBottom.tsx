const B = "https://smartmag.theme-sphere.com/national-press/wp-content/uploads/sites/55/2024/07/";

export default function NationalPressBottom() {
  const putinImg = "https://images.unsplash.com/photo-1548186290-5f8c6e04be5b?w=800";
  const wallstImg = "https://images.unsplash.com/photo-1611974714851-48210433d711?w=800";

  return (
    <>
      {/* Newsletter */}
      <section className="container mx-auto px-4 py-10">
        <div className="border-2 border-[#1a6fc4] p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="text-[22px] font-black leading-tight">Sign up to our daily Newsletter, get the latest news and revies from our specialist writers</h3>
          </div>
          <div className="flex-1 w-full space-y-3">
            <div className="flex">
              <input type="email" placeholder="Your email address..." className="flex-1 border border-gray-300 px-4 py-3 text-[13px] focus:outline-none" />
              <button className="bg-[#1a6fc4] text-white px-6 py-3 font-black text-[12px] uppercase tracking-widest hover:bg-black transition-colors">Subscribe</button>
            </div>
            <label className="flex items-center gap-2 text-[11px] text-gray-500 cursor-pointer">
              <input type="checkbox" className="w-3 h-3" />
              By signing up, you agree to the our terms and our Privacy Policy agreement.
            </label>
          </div>
        </div>
      </section>

      {/* Ukraine Conflict */}
      <section className="container mx-auto px-4 py-8 border-t-[3px] border-black">
        <div className="flex items-center justify-between border-b-2 border-black mb-6 pb-3">
          <h3 className="text-[14px] font-black uppercase tracking-[2px]">Ukraine Conflict</h3>
          <a href="#" className="text-[11px] font-bold text-[#e21c23] uppercase tracking-widest">View More</a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden group cursor-pointer aspect-[4/3]">
            <img src={putinImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4 bg-[#e21c23] text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest">Ukraine Conflict</div>
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-white text-[22px] font-black leading-tight mb-2">Review: Russia&apos;s Putin Sets Out Conditions for Peace Talks with Ukraine</h2>
              <div className="text-gray-300 text-[10px] font-bold uppercase">John Doe — Jan 20, 2021</div>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#e21c23] text-white text-[11px] font-black w-8 h-8 flex items-center justify-center">7.2</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {img:"https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=300",title:"White House Urges Ukraine Aid Be Expedited Before Winter Arrives"},
              {img:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=300",title:"China, Russia Talk of Bolstering Security Cooperation in Lavrov Visit"},
              {img:"https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=300",title:"Russian Military Objectives and Capacity in Ukraine Through 2024"},
              {img:"https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=300",title:"Protesters Rally All Over World To Demand Putin End War in Ukraine"},
              {img:"https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300",title:"Russia-Ukraine War Updates: At Least 31 Killed in Missile Strikes"},
              {img:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300",title:"Review: Ukraine's Accession Poses a Unique Conundrum for the EU",score:"9.1"},
            ].map((p,i)=>(
              <div key={i} className="group cursor-pointer space-y-2 relative">
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" />
                  {(p as any).score && <div className="absolute bottom-1 right-1 bg-[#e21c23] text-white text-[9px] font-black px-1 py-0.5">{(p as any).score}</div>}
                </div>
                <h4 className="text-[12px] font-bold leading-snug group-hover:text-[#e21c23]">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SmartMag Banner */}
      <section className="container mx-auto px-4 py-8">
        <div className="border border-gray-200 bg-[#f5f5f5] flex items-center justify-between px-10 py-6">
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-black uppercase tracking-[3px] text-gray-600">The New SmartMag</span>
            <div className="w-px h-8 bg-gray-300" />
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trusted By</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase">More Than 18k Users Worldwide</div>
            </div>
          </div>
          <div className="text-[28px] font-black text-gray-800">18000+</div>
          <button className="bg-black text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-[#e21c23] transition-colors">Get Started</button>
        </div>
      </section>

      {/* Business + Economy + Sidebar */}
      <section className="container mx-auto px-4 py-8 border-t-[3px] border-black">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business News */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center justify-between border-b-2 border-black mb-6 pb-3">
              <h3 className="text-[14px] font-black uppercase tracking-[2px]">Business News</h3>
            </div>
            <div className="group cursor-pointer space-y-3">
              <div className="overflow-hidden aspect-[16/10]"><img src={wallstImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" /></div>
              <h3 className="text-[20px] font-black leading-tight group-hover:text-[#e21c23]">Wall Street&apos;s Upbeat Earnings Expectations Set High Bar for US Companies</h3>
              <div className="text-[10px] text-gray-400 font-bold uppercase"><span className="text-[#e21c23]">Economy</span> · By John Doe</div>
              <p className="text-[13px] text-gray-500 line-clamp-3">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-5">
              {[
                {img:"https://images.unsplash.com/photo-1601128533718-374ffcca299b?w=200",cat:"Petro Chem",title:"World's Largest Oil Company Bets on the Power of Petrol"},
                {img:"https://images.unsplash.com/photo-1560472355-536de3962603?w=200",cat:"Banking",title:"China's Fosun to Sell German Private Bank to ABN Amro for $730m"},
                {img:"https://images.unsplash.com/photo-1611974714851-48210433d711?w=200",cat:"Investments",title:"Shein Pledges to Invest in UK and Europe Ahead of Potential IPO"},
              ].map((p,i)=>(
                <div key={i} className="group cursor-pointer space-y-2">
                  <div className="overflow-hidden aspect-[4/3]"><img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" /></div>
                  <div className="text-[10px] font-black text-[#e21c23] uppercase tracking-widest">{p.cat}</div>
                  <h4 className="text-[12px] font-bold leading-snug group-hover:text-[#e21c23]">{p.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Economy */}
          <div className="lg:col-span-1 space-y-5 lg:border-x border-gray-200 lg:px-7">
            <div className="flex items-center justify-between border-b-2 border-black mb-6 pb-3">
              <h3 className="text-[14px] font-black uppercase tracking-[2px]">Economy</h3>
            </div>
            {[
              {img:"https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=400",title:"Qantas Settles Flight Cancellation Lawsuit with $66 Million Penalty",author:"Shane Doe"},
              {img:"https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=400",title:"United Economy Vs Basic Economy: What You Need To Know",author:"Shane Doe"},
              {img:"https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400",title:"'No Time to Waste': UK's Rachel Reeves Takes Aim at Growth Barriers",author:"Shane Doe"},
            ].map((p,i)=>(
              <div key={i} className="group cursor-pointer space-y-2 border-b border-gray-100 pb-5 last:border-0">
                <div className="overflow-hidden aspect-[16/9]"><img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" /></div>
                <div className="text-[10px] text-gray-400 font-bold uppercase">By {p.author}</div>
                <h4 className="text-[15px] font-bold leading-snug group-hover:text-[#e21c23]">{p.title}</h4>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-black text-white p-6 text-center space-y-3" style={{backgroundImage:"linear-gradient(135deg,#1a1a2e,#16213e)"}}>
              <div className="text-[10px] font-black uppercase tracking-[4px] text-gray-400">The New</div>
              <div className="text-3xl font-black tracking-tight">SmartMag</div>
              <button className="bg-[#e21c23] text-white px-6 py-2 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Get Started</button>
            </div>
            <div>
              <div className="flex items-center justify-between border-b-2 border-black mb-4 pb-3">
                <h3 className="text-[14px] font-black uppercase tracking-[2px]">Top Trending</h3>
              </div>
              {[
                {img:"https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=200",title:"Poll Shows Clinton-Harris Ticket Leading Over Biden-Harris"},
                {img:"https://images.unsplash.com/photo-1464802686167-b939a6910659?w=200",title:"Scientists Track Sea Level Rise from Glaciers in Greenland"},
                {img:"https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=200",title:"5 Important Things You Should Know About the War in Ukraine"},
              ].map((p,i)=>(
                <div key={i} className="flex gap-3 group cursor-pointer border-b border-gray-100 py-3 last:border-0">
                  <div className="text-[22px] font-black text-gray-200 shrink-0 w-6 leading-none">{i+1}</div>
                  <div className="overflow-hidden w-[70px] h-[52px] shrink-0"><img src={p.img} className="w-full h-full object-cover" alt="" /></div>
                  <h4 className="text-[12px] font-bold leading-snug group-hover:text-[#e21c23] flex-1">{p.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
