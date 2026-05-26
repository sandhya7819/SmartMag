"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, ArrowUp, Send } from "lucide-react";

// Social services list for footer
const footerSocials = [
  { icon: <Facebook size={16} />, label: "Facebook", href: "#", color: "hover:bg-[#3b5998]" },
  { icon: <Twitter size={16} />, label: "X (Twitter)", href: "#", color: "hover:bg-[#1da1f2]" },
  { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387-.12-.965-.23-2.443.048-3.498.25-1.045 1.616-6.846 1.616-6.846s-.413-.827-.413-2.052c0-1.922 1.115-3.357 2.502-3.357 1.18 0 1.75.885 1.75 1.95 0 1.186-.756 2.96-1.146 4.605-.326 1.378.693 2.5 2.052 2.5 2.462 0 4.356-2.597 4.356-6.347 0-3.318-2.385-5.637-5.79-5.637-3.943 0-6.257 2.957-6.257 6.012 0 1.19.46 2.467 1.034 3.164.113.138.13.258.095.397l-.382 1.556c-.06.248-.2.3-.46.184-1.706-.793-2.77-3.29-2.77-5.293 0-4.307 3.13-8.262 9.02-8.262 4.735 0 8.413 3.375 8.413 7.883 0 4.704-2.966 8.49-7.085 8.49-1.383 0-2.684-.718-3.13-1.572 0 0-.685 2.612-.852 3.245-.308 1.182-1.144 2.664-1.702 3.568 1.125.347 2.316.536 3.548.536 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>, label: "Pinterest", href: "#", color: "hover:bg-[#bd081c]" },
  { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.396 4.384c-.46-.867-1.173-1.58-2.04-2.04C19.296 1.782 17.848 1.5 12 1.5s-7.296.282-8.356.844c-.867.46-1.58 1.173-2.04 2.04C.982 5.444.7 6.892.7 12.8s.282 7.296.844 8.356c.46.867 1.173 1.58 2.04 2.04 1.06.562 2.508.844 8.416.844s7.296-.282 8.356-.844c.867-.46 1.58-1.173 2.04-2.04.562-1.06.844-2.508.844-8.416s-.282-7.296-.844-8.356zm-1.892 16.812c-.373.71-.977 1.314-1.688 1.688-.87.462-2.164.716-6.816.716s-5.946-.254-6.816-.716c-.71-.373-1.314-.977-1.688-1.688-.462-.87-.716-2.164-.716-6.816s.254-5.946.716-6.816c.373-.71.977-1.314 1.688-1.688.87-.462 2.164-.716 6.816-.716s5.946.254 6.816.716c.71.373 1.314.977 1.688 1.688.462.87.716 2.164.716 6.816s-.254 5.946-.716 6.816zM12 7.02c-3.192 0-5.78 2.588-5.78 5.78S8.808 18.58 12 18.58s5.78-2.588 5.78-5.78S15.192 7.02 12 7.02zm0 9.68c-2.154 0-3.9-1.746-3.9-3.9s1.746-3.9 3.9-3.9 3.9 1.746 3.9 3.9-1.746 3.9-3.9 3.9zm6.02-9.7c0 .774-.626 1.4-1.4 1.4s-1.4-.626-1.4-1.4.626-1.4 1.4-1.4 1.4.626 1.4 1.4z"/></svg>, label: "Instagram", href: "#", color: "hover:bg-[#e1306c]" },
  { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>, label: "Vimeo", href: "#", color: "hover:bg-[#1ab7ea]" },
  { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.62.963 3.21 1.464 4.88 1.465 5.51 0 9.996-4.49 10.001-10.005.002-2.67-1.037-5.18-2.929-7.076C16.608 1.637 14.1 .597 11.432.597 5.922.597 1.437 5.09 1.433 10.605c-.001 1.748.46 3.447 1.34 4.975l-.997 3.642 3.73-.978c1.5.875 3.01 1.35 4.54 1.35zM17.15 14.61c-.282-.14-1.666-.82-1.924-.915-.257-.095-.445-.14-.632.14-.187.28-.724.915-.888 1.103-.163.19-.327.21-.61.07-2.825-1.41-4.004-2.52-5.46-5.023-.193-.33-.06-.51.082-.65.127-.128.282-.33.424-.495.14-.165.188-.28.283-.47.094-.19.047-.357-.024-.5-.07-.14-.632-1.52-.865-2.09-.23-.55-.46-.476-.63-.485-.164-.008-.352-.01-.54-.01-.188 0-.495.07-.754.35-.26.28-.99 1.01-.99 2.46s1.06 2.85 1.2 3.04c.143.19 2.086 3.185 5.05 4.467.705.305 1.256.488 1.684.624.71.226 1.354.194 1.865.118.57-.085 1.666-.68 1.9-.1.233-.497.632-.575.724-.916.09-.34-.047-.63-.14-.77z"/></svg>, label: "WhatsApp", href: "#", color: "hover:bg-[#25d366]" },
  { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.03 2.61.12 3.86.46V4.3c-.87-.27-1.78-.37-2.69-.32-.87.05-1.7.35-2.39.87-.65.51-1.07 1.27-1.19 2.11-.11.75-.02 1.52.27 2.22h5.81c-.2 2.68-.45 5.36-.68 8.04H10.42c-.22 2.28-.48 4.56-.71 6.8H5.16l2.12-21.2C7.5 1.77 9.8.12 12.525.02z"/></svg>, label: "TikTok", href: "#", color: "hover:bg-[#010101]" }
];

export default function MorningPostFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#212121] text-white pt-20 pb-10 border-t-4 border-[#3f51b5] font-sans">
      <div className="container mx-auto max-w-[1200px] px-4">
        
        {/* Row 1: Footer Branding and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <Link href="/morning-post" className="group">
            <h2 className="text-3xl font-extrabold tracking-tighter uppercase font-serif italic text-white">
              MORNING<span className="text-blue-400">POST</span>
            </h2>
            <p className="text-[8px] font-bold text-gray-400 tracking-[0.4em] uppercase mt-1">Global Perspective, Local Insights</p>
          </Link>
          
          <div className="flex flex-wrap gap-3">
            {footerSocials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className={`w-10 h-10 bg-white/5 hover:text-white text-gray-300 flex items-center justify-center rounded-full transition-all duration-300 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-white/10 mb-12"></div>

        {/* Row 2: 4 Content Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: News Navigation */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-wider text-blue-400 border-b border-white/10 pb-2.5 inline-block">News Categories</h3>
            <ul className="space-y-3.5 text-[14px]">
              {["World", "US Politics", "EU Politics", "Business", "Opinions", "Connections", "Science"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-bold text-gray-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-wider text-blue-400 border-b border-white/10 pb-2.5 inline-block">Company</h3>
            <ul className="space-y-3.5 text-[14px]">
              {["Information", "Advertising", "Classified Ads", "Contact Info", "Do Not Sell Data", "GDPR Policy", "Media Kits"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-bold text-gray-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-wider text-blue-400 border-b border-white/10 pb-2.5 inline-block">Services</h3>
            <ul className="space-y-3.5 text-[14px]">
              {["Subscriptions", "Customer Support", "Bulk Packages", "Newsletters", "Sponsored News", "Work With Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-bold text-gray-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-wider text-blue-400 border-b border-white/10 pb-2.5 inline-block">Subscribe to Updates</h3>
            <p className="text-gray-400 text-[13px] leading-relaxed font-medium">Get the latest creative news from FooBar about art, design and business.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 pt-1">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Your email address.."
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-xs text-white placeholder:text-gray-500 rounded-sm focus:outline-none focus:bg-white/10 focus:border-[#3f51b5] transition-all pr-12 font-bold"
                />
                <button
                  type="submit"
                  className="absolute right-2 w-8 h-8 rounded-sm bg-[#3f51b5] hover:bg-[#2d3b95] text-white flex items-center justify-center transition-all"
                  aria-label="Subscribe"
                >
                  <Send size={12} />
                </button>
              </div>
              
              <label className="flex items-start gap-2.5 cursor-pointer text-gray-500 hover:text-gray-400 transition-colors">
                <input type="checkbox" required className="mt-0.5 border-white/10 bg-white/5 rounded-sm checked:bg-[#3f51b5] accent-[#3f51b5] h-3.5 w-3.5" />
                <span className="text-[10px] leading-normal font-bold">
                  By signing up, you agree to our terms and our <a href="#" className="underline text-blue-400 hover:text-blue-300">Privacy Policy</a> agreement.
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Row 3: Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[12px] font-bold">
          <div>
            <p>&copy; 2026 ThemeSphere. Designed by <a href="https://theme-sphere.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">ThemeSphere</a>.</p>
          </div>
          
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 rounded-full hover:bg-[#3f51b5] hover:text-white text-gray-400 flex items-center justify-center transition-all shadow-lg"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
