import { CLIENT_LOGOS } from "../data";
import { Shield } from "lucide-react";

export default function TrustedLogos() {
  return (
    <div className="bg-slate-950 py-12 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Label left */}
          <div className="flex items-center gap-2 text-slate-400 font-sans font-bold text-xs uppercase tracking-widest shrink-0">
            <Shield className="w-4 h-4 text-sky-400" />
            <span>Mitra Terpercaya Kami</span>
          </div>

          {/* Logo lineup */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 flex-1 lg:pl-12 items-stretch">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="w-full h-full"
                title={client.name}
              >
                <div className="w-full aspect-[4/3] bg-slate-900 border border-slate-800/80 rounded-xl px-3 sm:px-4 py-3 text-center flex flex-col items-center justify-center transition-all duration-300 hover:bg-slate-800/40 hover:border-sky-500/20 hover:scale-[1.02] cursor-pointer">
                  <span className="font-display font-black text-[12px] sm:text-sm tracking-widest text-white uppercase leading-tight line-clamp-2">
                    {client.logoText}
                  </span>
                  <span className="mt-1 text-[9px] sm:text-[10px] text-slate-500 block font-light tracking-tight truncate w-full">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}