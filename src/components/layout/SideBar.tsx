// import { MenuIcon } from "lucide-react";
// import Link from "next/link";
// import { User } from "../../../generated/prisma";
// import { UserWithCompany } from "@/types";

// export default function SideBar({ userData } : {userData : UserWithCompany}) {
//   return (
//     <div className="drawer fixed left-6 size-xl md:hidden z-50">
//       <input id="my-drawer" type="checkbox" className="drawer-toggle" />

//       <label htmlFor="my-drawer" className="drawer-button">
//         <MenuIcon className="h-8 w-8" />
//       </label>

//       <div className="drawer-side">
//         <label
//           htmlFor="my-drawer"
//           aria-label="close sidebar"  
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu bg-gray-950 text-base-content min-h-full w-80">
//           {/* Sidebar content here */}
//           <li>
//             <Link
//               href={"/"}
//               className="hover:text-white hover:font-semibold curser-pointer"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={"/search"}
//               className="hover:text-white hover:font-semibold curser-pointer"
//             >
//               Jobs
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={"/company"}
//               className="hover:text-white hover:font-semibold curser-pointer"
//             >
//               Companies
//             </Link>
//           </li>
//           <li>
//             {userData?.company ? (
//               <Link
//                 href={"/company/" + userData.company.id}
//                 className="hover:text-white hover:font-semibold curser-pointer"
//               >
//                 View Company
//               </Link>
//             ) : (
//               <Link
//                 href={"/add-company"}
//                 className="hover:text-white hover:font-semibold curser-pointer"
//               >
//                 Add Company
//               </Link>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { UserWithCompany } from "@/types";
import Image from "next/image";

export default function SideBar({ userData }: { userData: UserWithCompany }) {
  // Function to close drawer on link click
  const handleClose = () => {
    const drawer = document.getElementById("my-drawer") as HTMLInputElement;
    if (drawer) drawer.checked = false;
  };

  return (
    <div className="drawer fixed left-6 size-xl md:hidden z-50 w-fit">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <label htmlFor="my-drawer" className="drawer-button">
        <MenuIcon className="h-8 w-8" />
      </label>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gray-950 text-base-content min-h-full w-80 p-6 space-y-4">
          {/* Sidebar Heading */}
          <h2 className="text-white text-xl font-bold mb-4 flex gap-3 items-center">
             <Image src={"/Logo.svg"} height={28} width={28} alt="logo" className="mb-1" />JOB PORTAL</h2>

          {/* Sidebar Links */}
          <li>
            <Link
              href={"/"}
              onClick={handleClose}
              className="text-lg px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/search"}
              onClick={handleClose}
              className="text-lg px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              href={"/company"}
              onClick={handleClose}
              className="text-lg px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              Companies
            </Link>
          </li>
          <li>
            {userData?.company ? (
              <Link
                href={"/company/" + userData.company.id}
                onClick={handleClose}
                className="text-lg px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
              >
                View Company
              </Link>
            ) : (
              <Link
                href={"/add-company"}
                onClick={handleClose}
                className="text-lg px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
              >
                Add Company
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
