export default function CTA() {
  return (
    <section id="get-started" className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-600/30 via-fuchsia-500/10 to-cyan-500/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 md:p-12 text-white backdrop-blur">
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Spin up the real-time canvas</h3>
              <p className="mt-2 text-slate-300">Launch the demo to experience live drawing, presence, and global history. Open in two tabs to see multi-user sync.</p>
            </div>
            <div className="flex items-center md:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Launch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
    </section>
  );
}
