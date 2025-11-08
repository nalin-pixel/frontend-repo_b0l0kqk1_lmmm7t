import { Rocket, Users, Paintbrush } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center h-10 w-10 rounded-lg bg-indigo-600/20 ring-1 ring-indigo-500/30">
              <Paintbrush className="h-5 w-5 text-indigo-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">CollabCanvas</h1>
              <p className="text-xs text-slate-400">Real-time collaborative drawing</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <Users className="h-4 w-4" />
              <span>Live session ready</span>
            </div>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
