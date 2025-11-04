"use client";
import { useState } from "react";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
  )},
  { key: "analytics", label: "Analytics", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3 17h2v-7H3v7zm4 0h2V7H7v10zm4 0h2v-4h-2v4zm4 0h2V4h-2v13zm4 2H1v2h22v-2z"/></svg>
  )},
  { key: "users", label: "User Management", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-1.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-1.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
  )},
  { key: "content", label: "Content", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
  )},
  { key: "settings", label: "Settings", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.12 7.12 0 00-1.63-.94l-.36-2.54A.5.5 0 0013.9 1h-3.8a.5.5 0 00-.49.41l-.36 2.54c-.58.22-1.12.52-1.63.94l-2.39-.96a.5.5 0 00-.6.22L2.3 7.01a.5.5 0 00.12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.42 13.69a.5.5 0 00-.12.64l1.92 3.32c.14.24.43.34.69.22l2.39-.96c.51.42 1.05.72 1.63.94l.36 2.54c.06.24.26.41.49.41h3.8c.24 0 .44-.17.49-.41l.36-2.54c.58-.22 1.12-.52 1.63-.94l2.39.96c.26.12.55.02.69-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.02-1.58zM12 15.5A3.5 3.5 0 1112 8a3.5 3.5 0 010 7.5z"/></svg>
  )},
  { key: "help", label: "Help", icon: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 10.9 12 11.5 12 13h-2v-.5c0-1 .45-1.5 1.17-2.17l1.24-1.26A2 2 0 0012 7a2 2 0 00-2-2 2 2 0 00-2 2H6a4 4 0 018 0c0 1.1-.45 2.1-1.93 3.25z"/></svg>
  )},
];

export default function Dashboard() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-sm border-r">
        <div className="px-6 py-5 border-b">
          <h2 className="text-xl font-extrabold text-[#4361ee]">Adiman</h2>
        </div>
        <nav className="py-3">
          {navItems.map((item) => {
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-[#f0f4ff] transition ${
                  isActive ? "bg-[#e6ebff] text-[#4361ee] border-l-4 border-[#4361ee]" : "text-gray-700"
                }`}
              >
                <span className="text-current">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-5 space-y-5">
        {/* Header */}
        <header className="flex items-center justify-between bg-white rounded-xl shadow-sm px-6 py-4">
          <div className="relative w-72 max-w-full">
            <input className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-[#4361ee]" placeholder="Search..." />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-600">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
              <span className="absolute -top-1 -right-1 bg-[#f72585] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-[#4361ee] text-white flex items-center justify-center font-bold">AD</span>
              <span className="text-gray-700">Admin User</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-gray-400" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </button>
          </div>
        </header>

        {/* Stat cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {[
            { label: "Total Users", value: "1,248", color:"#4361ee" },
            { label: "Active Sessions", value: "342", color:"#4cc9f0" },
            { label: "System Health", value: "98%", color:"#f8961e" },
            { label: "Recent Alerts", value: "5", color:"#f72585" },
          ].map((c) => (
            <div key={c.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold">{c.value}</div>
                  <div className="text-gray-500 text-sm">{c.label}</div>
                </div>
                <div className="h-10 w-10 rounded-lg flex items-center justify-center text-white" style={{backgroundColor: c.color}}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Content grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-5">
            {/* Activity */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Activity Overview</h3>
                <select className="px-2 py-1 rounded-md border border-gray-200 text-sm">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
              </div>
              <div className="h-64 rounded-md bg-gray-50 text-gray-400 flex items-center justify-center">[Activity Chart]</div>
            </div>

            {/* Recent actions */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Recent Actions</h3>
                <button className="text-[#4361ee] text-sm">View All</button>
              </div>
              <div className="divide-y">
                {[
                  { title: "New user registered", time: "2 minutes ago" },
                  { title: "Document uploaded", time: "15 minutes ago" },
                  { title: "System settings updated", time: "1 hour ago" },
                  { title: "Security patch applied", time: "3 hours ago" },
                ].map((a) => (
                  <div key={a.title} className="flex items-center gap-3 py-3">
                    <span className="h-9 w-9 rounded-full bg-[#e6ebff] text-[#4361ee] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </span>
                    <div className="flex-1">
                      <div className="font-medium">{a.title}</div>
                      <div className="text-xs text-gray-500">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {/* System status */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">System Status</h3>
                <button className="text-gray-400">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 .65-.1 1.27-.29 1.85l1.46 1.46A7.932 7.932 0 0020 12c0-4.42-3.58-8-8-8zm-6.17.17L4.17 5.83A7.932 7.932 0 004 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6 0-.65.1-1.27.29-1.85z"/></svg>
                </button>
              </div>
              <div className="divide-y">
                {[
                  { label: "Server Uptime", value: "99.9%", tone: "text-[#4cc9f0]" },
                  { label: "CPU Usage", value: "32%" },
                  { label: "Memory Usage", value: "45%" },
                  { label: "Database", value: "Normal", tone: "text-[#4cc9f0]" },
                  { label: "Last Backup", value: "12 hours ago", tone: "text-[#f8961e]" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between py-3">
                    <span className="font-medium">{s.label}</span>
                    <span className={`font-semibold ${s.tone ?? ""}`}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Add User" },
                { label: "Export Data" },
                { label: "Settings" },
                { label: "Help" },
              ].map((q) => (
                <button key={q.label} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:bg-[#f0f4ff] transition">
                  <span className="h-9 w-9 rounded-full bg-[#e6ebff] text-[#4361ee] flex items-center justify-center mb-2">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 5v14m-7-7h14"/></svg>
                  </span>
                  <span className="text-sm font-medium">{q.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
