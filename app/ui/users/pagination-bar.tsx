'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function PaginationBar({
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handlePrevPage() {
    const params = new URLSearchParams(searchParams);

    if (currentPage > 1) {
      params.set('page', (currentPage - 1).toString());
    }

    // replace the URL with new value
    replace(`${pathname}?${params.toString()}`);
  }

  function handleNextPage() {
    const params = new URLSearchParams(searchParams);

    if (currentPage < totalPage) {
      params.set('page', (currentPage + 1).toString());
    }

    // replace the URL with new value
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-row flex-none w-[220px] justify-between items-center">
      <button
        type="button"
        className="flex flex-row justify-center rounded-lg font-semibold py-2 bg-blue-700 px-2 text-white hover:bg-blue-900 disabled:bg-blue-300"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      <p>
        Page {currentPage} of {totalPage}
      </p>

      <button
        type="button"
        className="flex flex-row justify-center rounded-lg font-semibold py-2 bg-blue-700 px-2 text-white hover:bg-blue-900 disabled:bg-blue-300"
        onClick={handleNextPage}
        disabled={currentPage === totalPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}
