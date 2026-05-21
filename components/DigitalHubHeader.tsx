"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Search, Menu, ChevronDown, Moon } from "lucide-react";
import { DH_LOGO } from "@/lib/digitalHubData";

const nav = ["Home", "Features", "Technology", "Gadgets", "Phones", "Buy Theme"];

export default function DigitalHubHeader() {
  return (
    <header id="smart-head" className="w-full sticky top-0 z-[100] font-['DM_Sans',system-ui,sans-serif] bg-[#151516] text-white">
      {/* Mid row: social | logo | subscribe */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-[1fr_auto_1fr] items-center min-h-[72px] gap-4">
          <div className="hidden md:flex items-center gap-3 text-white/50">
            <Facebook size={15} className="hover:text-[#00cf92] cursor-pointer transition-colors" />
            <Twitter size={15} className="hover:text-[#00cf92] cursor-pointer transition-colors" />
            <Instagram size={15} className="hover:text-[#00cf92] cursor-pointer transition-colors" />
          </div>

          <Link href="/digital-hub" className="justify-self-center py-3">
            <img src={DH_LOGO} alt="DigitalHub" width={245} height={51} className="h-[40px] w-auto md:h-[44px]" />
          </Link>

          <div className="flex items-center justify-end gap-4">
            <a
              href="http://eepurl.com/hq-3Xb"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-[#00cf92] text-[#111] text-[12px] font-bold uppercase tracking-wide px-5 py-2 rounded hover:bg-white transition-colors"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between min-h-[52px]">
          <button type="button" className="lg:hidden text-white/70 p-2" aria-label="Menu">
            <Menu size={20} />
          </button>

          <nav className="hidden lg:flex items-center justify-center flex-1 gap-7 text-[13px] font-semibold uppercase tracking-[0.4px]">
            {nav.map((item, i) => (
              <Link
                key={item}
                href={item === "Home" ? "/digital-hub" : "#"}
                className={`flex items-center gap-1 hover:text-[#00cf92] transition-colors whitespace-nowrap ${
                  i === 0 ? "text-[#00cf92]" : "text-white/90"
                }`}
              >
                {item}
                {(item === "Features" || item === "Technology" || item === "Phones") && (
                  <ChevronDown size={12} className="opacity-60" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-white/60 shrink-0">
            <button type="button" className="hidden sm:flex p-2 hover:text-[#00cf92]" aria-label="Dark mode">
              <Moon size={16} />
            </button>
            <Link href="#" className="p-2 hover:text-[#00cf92]" aria-label="Search">
              <Search size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
