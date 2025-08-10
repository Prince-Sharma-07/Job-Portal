import FilterBar from "@/components/layout/FilterBar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function layout({ children } : {children : ReactNode}) {
  return (
    <div className="w-full flex py-8 md:px-3 lg:px-6 justify-between dark:bg-gray-900">
      {/* Left Sidebar - Sticky */}
      <div className="max-md:hidden md:w-[30%] lg:w-[26%] xl:w-[22%] h-fit sticky top-18 mt-14">
        <FilterBar />
      </div>

      {/* Right Content - Scrollable */}
      <div className="w-full md:w-[68%] lg:w-[72%] xl:w-[76%] min-h-screen pt-12">
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main className="w-full">
            {children}
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
