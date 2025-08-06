//@ts-nocheck
import FilterBar from "@/components/layout/FilterBar";

export default function layout({ children }) {

  return (
   
  <div className="w-full flex py-8 px-6 justify-between dark:bg-gray-900" >
     {/* Left Sidebar - Sticky */}
      <div className="w-[22%] h-fit sticky top-18 mt-14">
        <FilterBar />
      </div>

      {/* Right Content - Scrollable */}
      <div className="w-[76%] min-h-screen pt-12">
        {children}
      </div>
    </div>
  )
}
