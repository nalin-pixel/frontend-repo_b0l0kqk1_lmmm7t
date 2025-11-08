import { MousePointer2, Undo2, Redo2, Layers, Network, Shield } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: <MousePointer2 className="h-5 w-5 text-indigo-300" />,
      title: 'Live cursors',
      desc: 'See everyone draw in real-time with smooth interpolation and low-latency updates.'
    },
    {
      icon: <Layers className="h-5 w-5 text-indigo-300" />,
      title: 'Canvas engine',
      desc: 'Optimized stroke batching and re-render pipeline for high-FPS drawing.'
    },
    {
      icon: <Network className="h-5 w-5 text-indigo-300" />,
      title: 'WebSocket sync',
      desc: 'Efficient protocol with client-side prediction and conflict-safe merges.'
    },
    {
      icon: <Undo2 className="h-5 w-5 text-indigo-300" />,
      title: 'Global undo',
      desc: 'Operation log keeps all users in sync with cross-user undo/redo.'
    },
    {
      icon: <Redo2 className="h-5 w-5 text-indigo-300" />,
      title: 'Redo support',
      desc: 'Fast recovery of reverted actions without desyncs or flicker.'
    },
    {
      icon: <Shield className="h-5 w-5 text-indigo-300" />,
      title: 'Conflict handling',
      desc: 'Deterministic ordering to avoid race conditions on overlapping strokes.'
    }
  ];

  return (
    <section id="features" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h3 className="text-2xl md:text-3xl font-semibold">Why this demo stands out</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 ring-1 ring-indigo-500/30">
                {f.icon}
              </div>
              <h4 className="text-lg font-medium">{f.title}</h4>
              <p className="mt-1.5 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
