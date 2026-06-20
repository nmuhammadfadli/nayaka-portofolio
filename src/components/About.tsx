import { ABOUT_STATS } from "../data";
import { Check, Target, Users, Zap, Eye, Compass, Award, ShieldCheck } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: Award,
      title: "Kreativitas Pixel-Perfect",
      desc: "Setiap detail antarmuka pengguna dirancang eksklusif, artistik, dan mudah dipahami demi memberikan impresi brand terbaik.",
    },
    {
      icon: ShieldCheck,
      title: "Transparansi & Integritas",
      desc: "Kami menjamin transparansi penuh pada setiap baris kode, progres pengerjaan harian, serta kepemilikan IP 100% milik Anda.",
    },
    {
      icon: Zap,
      title: "Optimasi Kecepatan Mutlak",
      desc: "Menghindari lagging dan crash. Aplikasi web, mobile, dan desktop kami dikompresi maksimal untuk loading ultra-cepat.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-950 overflow-hidden relative">
      {/* Subtle background glows for high-end feel */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. Profile & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column Left: Visual grid of numbers & values */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:shadow-sky-500/5 transition-all group hover:-translate-y-1"
                >
                  <span className="font-display font-black text-3xl sm:text-4xl text-sky-400 block mb-2 group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-slate-400 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Overlap subtle card */}
            <div className="mt-4 p-5 bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-2xl shadow-xl flex items-center justify-between border border-slate-800">
              <div className="space-y-1">
                <span className="text-xs text-sky-400 font-mono block font-bold leading-none mb-1">REKAYASA INDONESIA</span>
                <span className="text-sm font-semibold text-slate-200">Standard Mutu Premium & Ramah SEO</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/20 text-xs font-bold">
                PRO
              </div>
            </div>
          </div>

          {/* Column Right: Profile Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-sans block">
              Tentang Nayaka Labs
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
              Profil Perusahaan &amp; Dedikasi Digital Terbaik Kami
            </h2>
            <p className="font-sans text-slate-400 leading-relaxed text-sm sm:text-base">
              Didirikan dengan integritas tinggi dan fokus pada hasil nyata, Nayaka Labs adalah studio rekayasa teknologi dan desain digital premium. Kami bukan sekadar agensi vendor pengerjaan kode pasif, melainkan sebuah <strong className="text-sky-400 font-semibold font-sans">Strategic Technology Partner</strong> yang mendengarkan, meriset, mendesain, dan merekayasa solusi aplikasi fungsional guna mempercepat pertumbuhan bisnis Anda di era kompetitif.
            </p>
            <p className="font-sans text-slate-400 leading-relaxed text-sm sm:text-base">
              Kami membatasi jumlah proyek aktif bulanan untuk memastikan tim desainer dan insinyur senior kami memberikan fokus penuh, presisi visual bebas cacat, arsitektur yang ringan, serta hasil SEO yang signifikan bagi kelancaran produk digital Anda.
            </p>
          </div>

        </div>

        {/* 2. Beautiful Vision & Mission Dual Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          
          {/* Card: VISI */}
          <div className="bg-slate-900/60 border border-slate-800 p-8 sm:p-10 rounded-3xl text-left flex flex-col justify-between group hover:border-sky-500/20 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors" />
            <div className="space-y-6 relative z-10">
              <div className="p-3 bg-slate-950 text-sky-400 rounded-2xl w-fit border border-slate-800">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl text-white">Visi Kami</h3>
                <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed">
                  Menjadi studio rekayasa teknologi dan perancangan visual paling andal serta tepercaya di Indonesia, dikenal luas lewat penciptaan produk digital bermutu premium, berkecepatan prima, estetis, dan memberikan pertumbuhan bisnis nyata bagi setiap mitra klien kami.
                </p>
              </div>
            </div>
            <div className="border-t border-slate-800/80 pt-6 mt-8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold block">
                #MENJANGKAU masa depan digital
              </span>
            </div>
          </div>

          {/* Card: MISI */}
          <div className="bg-slate-900/60 border border-slate-800 p-8 sm:p-10 rounded-3xl text-left flex flex-col justify-between group hover:border-sky-500/20 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />
            <div className="space-y-6 relative z-10">
              <div className="p-3 bg-slate-950 text-emerald-400 rounded-2xl w-fit border border-slate-800">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl text-white">Misi Kami</h3>
                <ul className="space-y-3">
                  {[
                    "Merekayasa Website, Aplikasi Mobile, & Desktop berspesifikasi tinggi dengan standar penulisan kode bersih (clean-code) dan performa yang sangat ringan.",
                    "Merancang Desain UI/UX yang memikat, elegan, dan fungsional berbasis riset kebiasaan pengguna lokal maupun global.",
                    "Membantu visibilitas organik bisnis di search engine agar menduduki peringkat utama melalui teknik SEO teknis yang mendalam.",
                    "Menjunjung tinggi etika kejujuran proses kerja, transparansi biaya, ketepatan waktu rilis, serta hak milik IP penuh proyek."
                  ].map((misi, mIdx) => (
                    <li key={mIdx} className="flex gap-2.5 items-start text-xs text-slate-350 leading-relaxed">
                      <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Core Values Ribbon Banner Section */}
        <div className="pt-8 border-t border-slate-900 text-left">
          <div className="mb-12 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block">NILAI-NILAI UTAMA</span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white">Pilar Karakter Kerja Nayaka Labs</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, vIdx) => {
              const Icon = val.icon;
              return (
                <div
                  key={vIdx}
                  className="bg-slate-900/45 border border-slate-800/80 p-6 sm:p-8 rounded-2xl space-y-4 hover:border-slate-800 hover:bg-slate-900/80 transition-all"
                >
                  <div className="p-2.5 bg-slate-950 text-sky-400 rounded-xl w-fit border border-slate-800">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-sm text-white">
                      {val.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
