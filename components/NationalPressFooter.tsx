import Link from "next/link";
export default function NationalPressFooter() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src="https://smartmag.theme-sphere.com/national-press/wp-content/uploads/sites/55/2024/07/logo-NationalPress-01@2x.png" alt="NP" className="h-8 mb-4 brightness-0 invert" />
          <p className="text-gray-400 text-[13px] leading-relaxed">Serving the latest in world news, politics, sports and more.</p>
        </div>
        <div>
          <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">Useful Links</h5>
          {["About Us","Our Authors","Advertise","Contact Us","Newsletter"].map(l=><div key={l} className="py-2 border-b border-white/10"><Link href="#" className="text-gray-400 text-[13px] hover:text-white">{l}</Link></div>)}
        </div>
        <div>
          <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">Categories</h5>
          {["Politics","Business","World","Economy","Sports","Science"].map(l=><div key={l} className="py-2 border-b border-white/10"><Link href="#" className="text-gray-400 text-[13px] hover:text-white">{l}</Link></div>)}
        </div>
        <div>
          <h5 className="text-[11px] font-black uppercase tracking-widest mb-4">Newsletter</h5>
          <p className="text-gray-400 text-[13px] mb-4">Subscribe to get the latest news delivered to your inbox.</p>
          <div className="flex"><input type="email" placeholder="Your email address..." className="flex-1 bg-white/10 border border-white/20 px-3 py-2 text-[12px] text-white placeholder-gray-500 focus:outline-none" /><button className="bg-[#e21c23] px-4 py-2 text-white font-bold">→</button></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[11px] text-gray-500">© 2024 ThemeSphere. Designed by ThemeSphere. <Link href="#" className="hover:text-gray-300 ml-4">Privacy Policy</Link></div>
    </footer>
  );
}
