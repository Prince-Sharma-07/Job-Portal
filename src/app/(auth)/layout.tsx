import getCurrUser from "@/helper";
import { redirect } from "next/navigation";

import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
