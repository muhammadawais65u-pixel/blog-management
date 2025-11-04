export default function TeamSection() {
  const team = [
    { name: "Ayesha Khan", role: "Editor in Chief", avatar: "https://i.pravatar.cc/160?img=47" },
    { name: "Daniel Moore", role: "Lead Designer", avatar: "https://i.pravatar.cc/160?img=12" },
    { name: "Sara Patel", role: "Content Strategist", avatar: "https://i.pravatar.cc/160?img=32" },
    { name: "Jamal Lee", role: "Frontend Engineer", avatar: "https://i.pravatar.cc/160?img=5" },
    { name: "Emily Chen", role: "SEO Specialist", avatar: "https://i.pravatar.cc/160?img=24" },
    { name: "Omar Ali", role: "Community Manager", avatar: "https://i.pravatar.cc/160?img=66" },
  ];

  return (
    <section className="bg-white">
      <div className="container px-6 py-16">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.2em] text-xs text-gray-500">Our team</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">People behind the product</h2>
          <p className="mt-4 text-gray-600">A small, passionate team with a focus on quality and user experience.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl border border-gray-200 p-6 bg-white text-center">
              <img src={m.avatar} alt={m.name} className="mx-auto h-24 w-24 rounded-full object-cover" />
              <h3 className="mt-4 font-semibold text-gray-900">{m.name}</h3>
              <p className="text-sm text-gray-500">{m.role}</p>
              <div className="mt-4 flex items-center justify-center gap-3 text-gray-400">
                <a href="#" aria-label="Twitter" className="hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.5-1.6.8-2.4 1-1.4-1.5-3.8-1.2-5 0-1.1 1.1-1.3 2.7-.6 4-3-.2-5.6-1.6-7.4-3.9-1 1.8-.5 4.1 1.2 5.3-.6 0-1.1-.2-1.6-.4 0 2 1.4 3.7 3.4 4.1-.6.2-1.2.2-1.8.1.5 1.7 2.1 3 3.9 3-1.6 1.3-3.6 2-5.7 2h-.9c2 1.2 4.3 1.9 6.7 1.9 8.1 0 12.7-7 12.4-13.3.8-.5 1.4-1.2 1.9-2z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0H12v2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.8V23h-5v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V23h-5V8z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
