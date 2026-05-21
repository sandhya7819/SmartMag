const B = "https://smartmag.theme-sphere.com/national-press/wp-content/uploads/sites/55/2024/07/";
const imgs = {
  t1: B+"a8a48c8c9baab016a1b414f2b0e59271-300x169.jpeg",
  t2: B+"177c1c51e9fa6d1afdc5ee76a5915b4f-300x200.jpeg",
  t3: B+"1075c2f6e23acbc61117b848a7c4ed99-300x200.jpeg",
  t4: B+"bb8083ebc67f153839718b436c23352d-300x171.jpeg",
  hero: B+"Depositphotos_310552638_XL-1-768x614.jpg",
  sea: B+"8d45c2a7d8039772158aff8b4119fc3f-768x512.jpeg",
  openai: B+"bd84d746f1dd8e15a903d11e8f99e628-300x188.jpeg",
  r1: B+"392cd17888c94d9e076535ac70851677-300x200.jpeg",
  r2: B+"f3674f53082065df26cd59bf3604bb96-300x169.jpeg",
  r3: B+"09a93e393fa05384ade2e241b129f699-300x200.jpeg",
  r4: B+"e562b4fd8c9dbd6874d06057efc1be5b-300x200.jpg",
};

export default function NationalPressHero() {
  return (
    <>
      {/* Ticker */}
      <section className="border-y border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {[
              {img:imgs.t1,title:"Supersonic Planes will Replace Jets Sooner, Says Aviation CEO"},
              {img:imgs.t2,title:"Chasing History – Laureus World Sportsman of the Year Nominees"},
              {img:imgs.t3,title:"People visit City Walk Amid High Ticket Citations"},
              {img:imgs.t4,title:"A Huge Imbalance of Energy Has Been Detected on Saturn Just Recently"},
            ].map((p,i)=>(
              <div key={i} className={`flex gap-3 items-center group cursor-pointer py-2 ${i>0?"pl-5":""} ${i<3?"pr-5":""}`}>
                <img src={p.img} className="w-[90px] h-[68px] object-cover shrink-0" alt="" />
                <h4 className="text-[13px] font-bold leading-snug group-hover:text-[#e21c23] line-clamp-3">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 border-b border-gray-200">
          {/* Left text */}
          <div className="group cursor-pointer space-y-3">
            <span className="bg-[#1a6fc4] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">US Politics</span>
            <h1 className="text-[32px] font-black leading-[1.1] group-hover:text-[#e21c23] transition-colors">Poll Shows Clinton-Harris Ticket Leading Over Biden-Harris Against Trump</h1>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">By John Doe · Jan 4, 2021</div>
            <p className="text-[13px] text-gray-600 leading-relaxed">To understand the new politics stance and other pro nationals of recent times, we should look to Silicon Valley and the quantified movement of the latest generation.</p>
          </div>
          {/* Center big image */}
          <div className="overflow-hidden aspect-[4/3] group cursor-pointer">
            <img src={imgs.hero} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
          </div>
          {/* Right stack */}
          <div className="space-y-5">
            <div className="group cursor-pointer space-y-3">
              <div className="overflow-hidden aspect-[16/10]">
                <img src={imgs.sea} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
              </div>
              <h3 className="text-[16px] font-black leading-tight group-hover:text-[#e21c23]">Scientists Track Sea Level Rise from Glaciers in Greenland &amp; Antarctica</h3>
              <p className="text-[12px] text-gray-500 line-clamp-2">To understand the new politics stance and other pro nationals of recent times, we should look…</p>
            </div>
            <div className="border-t border-gray-100 pt-4 flex gap-3 group cursor-pointer">
              <img src={imgs.openai} className="w-[80px] h-[60px] object-cover shrink-0" alt="" />
              <div>
                <span className="text-[10px] font-black text-[#e21c23] uppercase tracking-widest block">Business</span>
                <h4 className="text-[13px] font-bold leading-snug group-hover:text-[#e21c23]">OpenAI Working on New Reasoning Tech Under Code Name &apos;Strawberry&apos;</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Related News */}
        <div className="pt-6">
          <div className="text-[10px] font-black text-gray-500 uppercase tracking-[3px] mb-5 border-b border-gray-100 pb-3">Related News</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {img:imgs.r1,title:"Angry Farmers Block Brussels to Protest EU Policies, Cheap Ukraine Imports",date:"Jan 4, 2021"},
              {img:imgs.r2,title:"Nearly 55 Million Face Hunger in West and Central Africa, UN Warns",date:"Jan 4, 2021"},
              {img:imgs.r3,title:"100 Women Race in Hamilton to Win Back a World Record for 1-Mile Relay",date:"Jan 4, 2021"},
              {img:imgs.r4,title:"What is The EU Doing in Response to The COVID-19 Coronavirus Pandemic",date:"Jan 4, 2021"},
            ].map((p,i)=>(
              <div key={i} className="flex gap-3 group cursor-pointer items-start">
                <div className="flex-1 space-y-1">
                  <h4 className="text-[13px] font-bold leading-snug group-hover:text-[#e21c23]">{p.title}</h4>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">{p.date}</div>
                </div>
                <img src={p.img} className="w-[80px] h-[60px] object-cover shrink-0" alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
