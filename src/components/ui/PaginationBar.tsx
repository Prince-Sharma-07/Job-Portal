"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

export function PaginationBar({
  totalPages,
  currPage,
}: {
  totalPages: number;
  currPage: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (!totalPages || totalPages <= 1) return null;

  // Navigate to a given page and keep other filters (q, jt, etc.)
  const go = (pg: number) => {
    const p = Math.min(Math.max(pg, 1), totalPages); // clamp 1..totalPages
    const params = new URLSearchParams(searchParams.toString());
    params.set("pg", String(p));
    router.push(`?${params.toString()}`);
  };

  const canPrev = currPage > 1;
  const canNext = currPage < totalPages;

  // 👇 Small helper to generate page numbers with simple ellipses
  const getPages = () => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 5) {
      // show all if small number of pages
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currPage > 3) pages.push(1, "ellipsis");
      for (
        let i = Math.max(1, currPage - 1);
        i <= Math.min(totalPages, currPage + 1);
        i++
      )
        pages.push(i);
      if (currPage < totalPages - 2) pages.push("ellipsis", totalPages);
    }
    return pages;
  };

  const pages = getPages();

  return (
    <Pagination>
      <PaginationContent>
        {/* Prev button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (canPrev) go(currPage - 1);
            }}
            className={!canPrev ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* Pages */}
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <PaginationItem key={`e-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === currPage}
                onClick={(e) => {
                  e.preventDefault();
                  if (p !== currPage) go(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Next button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (canNext) go(currPage + 1);
            }}
            className={!canNext ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
