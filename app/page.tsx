export default function AegisDashboard() {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      <nav className="flex justify-between items-center border-b border-slate-800 pb-8 mb-12">
        <h1 className="text-2xl font-black tracking-tighter text-white italic">AEGIS<span className="text-yellow-500">.</span>INTEL</h1>
        <div className="flex gap-4 items-center">
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest animate-pulse">● System Operational</span>
          <div className="h-8 w-8 rounded-full bg-yellow-500/10 border border-yellow-500/50" />
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[ {t: "Regulatory Scans", v: "1,240"}, {t: "Compliance Score", v: "99.2%"}, {t: "Liability Shielded", v: "$12.4M"} ].map((s, i) => (
          <div key={i} className="executive-card gold-border p-6 rounded-2xl">
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em]">{s.t}</p>
            <p className="text-3xl font-bold mt-2 text-white">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="executive-card gold-border rounded-3xl p-20 text-center border-dashed border-2">
        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Upload Enterprise Contract for AI Audit</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">Our AI analyzes documents against GDPR, DPDP 2026, and International Privacy Standards in seconds.</p>
        <button className="px-10 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:scale-105">
          Begin Deep Audit
        </button>
      </div>
    </div>
  );
}
