import React from "react";

export default function Heading({ name } : {name : string}) {
  return (
    <section className="bg-black pt-15 w-full">
      <div className="text-center py-12 md:py-16">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          {name}
        </h1>
      </div>
    </section>
  );
}
