import getCurrUser from "@/helper";
import { redirect } from "next/navigation";

import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const user = await getCurrUser();
  if (user) {
    redirect("/");
  }
  return <div>{children}</div>;
}
