import Image from "next/image";
import React from "react";

export default function BrandsList() {
  return (
    <div className="flex justify-between w-full bg-black/80 px-12 py-6" id="jobs">
      <img src={"/spotify-logo.svg"} />
      <img src={"/slack-logo.svg"} />
      <img src={"/adobe-logo.svg"} />
      <img src={"/asana-logo.svg"} />
      <img src={"/linear-logo.svg"} />
    </div>
  );
}
