import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Lightning-fast collaborative canvas.
            </h2>
            <p className="mt-4 text-slate-300 text-lg">
              Real-time drawing with live cursors, smooth strokes, and global undo/redo. Built from the ground up with the Canvas API and WebSockets.
            </p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Brush & eraser with color and width controls</li>
              <li>• Presence indicators with per-user colors</li>
              <li>• Deterministic history for conflict-safe undo/redo</li>
            </ul>
            <div className="mt-8 flex items-center gap-3">
              <a href="#get-started" className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">Open Demo</a>
              <a href="#features" className="rounded-md border border-white/10 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5">See Features</a>
            </div>
          </div>
          <div className="relative h-80 md:h-[28rem] rounded-xl ring-1 ring-white/10 overflow-hidden">
            {/* Spline loading animation (black & white striped LOADING effect) */}
            <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
