"use client";
import Heading from "@/components/sections/Heading";
import { Sparkles, ExternalLink, RefreshCw, FileText } from "lucide-react";
import { useState } from "react";

export default function ResumeBuilderPage() {
  const [loading, setLoading] = useState(true);
  const iframeUrl = "https://resume-builder-client-9ro2.onrender.com/";

  const handleRefresh = () => {
    setLoading(true);
    const iframe = document.getElementById("resume-iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframeUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black/95 text-gray-900 dark:text-white pb-16">
      <Heading name="AI Resume Builder" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Info & CTA Header Card */}
        <div className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-white/10 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-sm">
              <Sparkles className="h-4 w-4" /> AI Powered Resume Generator
            </div>
            <h2 className="text-xl md:text-2xl font-bold">
              Build your job-winning resume in minutes
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
              Write, edit, and optimize your CV dynamically. Once completed, download your professional PDF and upload it to your profile to apply for jobs.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <button
              onClick={handleRefresh}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 font-medium transition cursor-pointer text-sm"
              title="Reload Builder"
            >
              <RefreshCw className="h-4 w-4" /> Reload
            </button>
            <a
              href={iframeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold shadow-md shadow-teal-600/10 transition cursor-pointer text-sm"
            >
              <ExternalLink className="h-4 w-4" /> Open in New Tab
            </a>
          </div>
        </div>

        {/* Embedded Iframe Container */}
        <div className="relative bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden min-h-[750px] md:min-h-[850px] flex flex-col">
          
          {/* Iframe Status Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-black/50 border-b border-gray-200 dark:border-white/10 text-xs text-gray-500">
            <div className="flex items-center gap-2 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Secure Connection with: AI Resume Builder
            </div>
            <div className="hidden sm:block font-medium">
              Powered by Job Portal
            </div>
          </div>

          {/* Loader Overlay */}
          {loading && (
            <div className="absolute inset-0 top-10 bg-white dark:bg-gray-950 z-30 flex flex-col items-center justify-center gap-4">
              <div className="loading loading-spinner text-teal-600 loading-lg"></div>
              <p className="text-gray-500 dark:text-gray-400 font-medium text-sm animate-pulse">
                Loading AI Resume Builder Workspace...
              </p>
            </div>
          )}

          {/* IFrame */}
          <iframe
            id="resume-iframe"
            src={iframeUrl}
            className="w-full flex-grow border-none min-h-[710px] md:min-h-[810px]"
            onLoad={() => setLoading(false)}
            title="AI Resume Builder"
            allow="clipboard-write"
          />

        </div>

      </main>
    </div>
  );
}
