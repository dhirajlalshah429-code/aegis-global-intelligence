"use client";
import { motion } from "framer-motion";
import { Shield, ShieldCheck, Activity, FileText } from "lucide-react";

export default function AegisDashboard() {
  const stats = [
    { t: "Regulatory Scans", v: "1,240", icon: FileText, c: "text-blue-400" },
    { t: "Compliance Score", v: "99.2%", icon: ShieldCheck, c: "text-emerald-400" },
    { t: "Liability Shielded", v: "$12.4M", icon: Activity, c: "text-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-8 lg:p-16">
      <nav className="flex justify-between items-center border-b border-slate-800 pb-8 mb-12">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-500 p-1.5 rounded-lg">
            <Shield className="text-black w-6 h-6 fill-black" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">AEGIS<span className="text-yellow-500">.</span>INTEL</h1>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest animate-pulse">● System Operational</span>
          <div className="h-8 w-8 rounded-full bg-yellow-500/10 border border-yellow-500/50 flex items-center justify-center text-yellow-500 font-bold text-xs">JD</div>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-yellow-500/40 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em]">{s.t}</p>
                <p className="text-3xl font-bold mt-2 text-white">{s.v}</p>
              </div>
              <s.icon className={`${s.c} w-5 h-5`} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-20 text-center border-dashed border-2">
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight uppercase">Upload Enterprise Contract for AI Audit</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">Analyze documents against Global Privacy Standards (GDPR, DPDP 2026) in seconds with military-grade intelligence.</p>
        <button className="px-10 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
          Begin Deep Audit
        </button>
      </div>
    </div>
  );
}
