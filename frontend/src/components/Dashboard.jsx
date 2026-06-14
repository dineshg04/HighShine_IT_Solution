import { useEffect, useState } from "react";
import { api } from "../api/axiosapi";


// ── Small reusable components ─────────────────────────────────────────────────

function StatCard({ label, value }) {
  return (
    <div className="bg-[#130f2a] border border-purple-800/30 rounded-2xl p-6">
      <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{label}</p>
      <p className="text-white text-3xl font-extrabold">{value}</p>
    </div>
  );
}

function BarRow({ label, value, max }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span className="truncate max-w-[70%]">{label}</span>
        <span className="text-white font-semibold">{value}</span>
      </div>
      <div className="h-2 bg-[#1e1640] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#f5a623] rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ── Main Dashboard ─────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [summary, setSummary] = useState(null);   // { totalVisits, byPage, byCountry }
  const [trend,   setTrend]   = useState(null);   // { trend: [{ date, visits }] }
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
  const loadData = async () => {
    try {
      setLoading(true);

      const [summaryRes, trendRes] = await Promise.all([
        api.get("/api/visitors/summary", {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }),
        api.get("/api/visitors/trend", {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }),
      ]);

      setSummary(summaryRes.data.data);
      setTrend(trendRes.data.data);
    } catch (error) {
      console.log("Error fetching analytics:", error);
      setError(
        error.response?.data?.error ||
          error.message ||
          "Failed to fetch analytics"
      );
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);

  // ── Loading state ─────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0b1e] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-[#f5a623] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400 text-sm">Loading analytics...</p>
        </div>
      </div>
    );
  }

  // ── Error state ───────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="min-h-screen bg-[#0d0b1e] flex items-center justify-center px-6">
        <div className="bg-red-900/20 border border-red-700/40 rounded-2xl p-8 max-w-md text-center">
          <p className="text-red-400 text-sm font-semibold mb-2">Failed to load data</p>
          <p className="text-gray-400 text-xs">{error}</p>
          <p className="text-gray-500 text-xs mt-3">
            Make sure the backend is running and VITE_API_KEY matches the backend .env
          </p>
        </div>
      </div>
    );
  }

  const maxPageVisits    = summary.byPage[0]?.visits    || 1;
  const maxCountryVisits = summary.byCountry[0]?.visits || 1;
  const trendPoints      = trend?.trend || [];
  const maxTrendVisits   = Math.max(...trendPoints.map((t) => t.visits), 1);

  return (
    <div className="min-h-screen bg-[#0d0b1e] font-sans antialiased px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#f5a623] rounded-sm flex items-center justify-center">
              <span className="text-[#0d0b1e] font-black text-xs">H</span>
            </div>
            <span className="text-white font-semibold">Highshine</span>
            <span className="text-gray-600 text-sm ml-1">/ Analytics Dashboard</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">Visitor Analytics</h1>
          <p className="text-gray-400 text-sm mt-1">
            Data from {trend?.from} → {trend?.to}
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <StatCard label="Total Visits"    value={summary.totalVisits} />
          <StatCard label="Pages Tracked"   value={summary.byPage.length} />
          <StatCard label="Countries"       value={summary.byCountry.length} />
        </div>

        {/* Two column: pages + countries */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Visits by page */}
          <div className="bg-[#130f2a] border border-purple-800/30 rounded-2xl p-6">
            <h2 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Visits by Page
            </h2>
            {summary.byPage.map((p) => (
              <BarRow key={p.page} label={p.page} value={p.visits} max={maxPageVisits} />
            ))}
          </div>

          {/* Visits by country */}
          <div className="bg-[#130f2a] border border-purple-800/30 rounded-2xl p-6">
            <h2 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Visits by Country
            </h2>
            {summary.byCountry.map((c) => (
              <BarRow key={c.country} label={c.country} value={c.visits} max={maxCountryVisits} />
            ))}
          </div>
        </div>

        {/* 30-day trend */}
        <div className="bg-[#130f2a] border border-purple-800/30 rounded-2xl p-6">
          <h2 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">
            30-Day Visit Trend
          </h2>
          {trendPoints.length === 0 ? (
            <p className="text-gray-500 text-sm">No data yet for this period.</p>
          ) : (
            <div className="flex items-end gap-1 h-32 overflow-x-auto pb-2">
              {trendPoints.map((t) => {
                const heightPct = Math.max(4, Math.round((t.visits / maxTrendVisits) * 100));
                return (
                  <div key={t.date} className="flex flex-col items-center gap-1 flex-1 min-w-[20px] group">
                    {/* Bar */}
                    <div className="relative w-full flex items-end justify-center" style={{ height: "100px" }}>
                      <div
                        className="w-full bg-[#f5a623]/30 group-hover:bg-[#f5a623] rounded-sm transition-colors duration-200"
                        style={{ height: `${heightPct}%` }}
                      />
                      {/* Tooltip on hover */}
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#1e1640] text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {t.visits} visit{t.visits !== 1 ? "s" : ""}
                      </div>
                    </div>
                    {/* Date label — only show a few to avoid clutter */}
                    <span className="text-[9px] text-gray-600 rotate-45 origin-left hidden sm:block">
                      {t.date.slice(5)}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
