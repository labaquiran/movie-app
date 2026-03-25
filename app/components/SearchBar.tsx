"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("s", term);
    } else {
      params.delete("s");
    }
    replace(`${pathname}?${params.toString()}`);
    // console.log("Search term:", term);
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        className="flex items-center w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search for movies..."
      />
    </div>
  );
}
