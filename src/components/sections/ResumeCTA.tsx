import Link from "next/link";
import { Sparkles, FileText, Download, Layout, ArrowRight } from "lucide-react";

export default function ResumeCTA() {
  return (
    <section className="w-full py-16 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 bg-gradient-to-br from-black via-gray-950 to-teal-950 text-white relative overflow-hidden border-y border-teal-900/50">
      {/* Decorative gradient glowing spots */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Content Side */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold tracking-wide">
            <Sparkles className="h-4 w-4 animate-pulse" />
            AI-Powered Feature
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Create a Professional Resume <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">
              In Minutes with AI
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Stand out to top employers! Use our intelligent resume builder to create, format, and optimize your CV automatically. Elevate your job search today.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/35 transition">
              <div className="p-2 rounded bg-teal-500/15 text-teal-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="font-medium text-sm">AI Suggestions</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/35 transition">
              <div className="p-2 rounded bg-teal-500/15 text-teal-400">
                <Layout className="h-5 w-5" />
              </div>
              <span className="font-medium text-sm">Modern Layouts</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-teal-500/35 transition">
              <div className="p-2 rounded bg-teal-500/15 text-teal-400">
                <Download className="h-5 w-5" />
              </div>
              <span className="font-medium text-sm">Instant Export</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/resume-builder"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-teal-500/25 transition duration-300 transform hover:-translate-y-0.5"
            >
              Build My Resume
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Visual Mockup Side */}
        <div className="flex-1 w-full max-w-md lg:max-w-none relative flex justify-center">
          <div className="relative group w-[320px] sm:w-[380px] md:w-[420px] bg-gradient-to-b from-gray-900 to-gray-950 p-5 sm:p-6 rounded-2xl border border-white/10 shadow-2xl transition duration-500 hover:border-teal-500/30">
            {/* Visual Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/20 text-[11px] text-teal-400 font-bold uppercase tracking-wider">
                <Sparkles className="h-3 w-3" /> Live Preview
              </div>
            </div>

            {/* Simulated Resume Content */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-lg">
                  JD
                </div>
                <div className="space-y-1">
                  <div className="h-3.5 w-24 bg-white/20 rounded-md"></div>
                  <div className="h-2 w-32 bg-white/10 rounded-md"></div>
                </div>
              </div>
              
              <div className="space-y-2 border-t border-white/5 pt-4">
                <div className="h-2.5 w-16 bg-white/20 rounded"></div>
                <div className="h-1.5 w-full bg-white/10 rounded"></div>
                <div className="h-1.5 w-5/6 bg-white/10 rounded"></div>
              </div>

              <div className="space-y-2 border-t border-white/5 pt-4">
                <div className="h-2.5 w-20 bg-white/20 rounded"></div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="h-4.5 w-12 bg-teal-500/15 border border-teal-500/25 rounded text-[9px] text-teal-400 flex items-center justify-center font-bold">React</span>
                  <span className="h-4.5 w-14 bg-teal-500/15 border border-teal-500/25 rounded text-[9px] text-teal-400 flex items-center justify-center font-bold">Node.js</span>
                  <span className="h-4.5 w-10 bg-teal-500/15 border border-teal-500/25 rounded text-[9px] text-teal-400 flex items-center justify-center font-bold">Next.js</span>
                  <span className="h-4.5 w-16 bg-teal-500/15 border border-teal-500/25 rounded text-[9px] text-teal-400 flex items-center justify-center font-bold">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Glowing Accent Line */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent blur-[2px] opacity-70"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
