'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function MaskEmailButton({ maskEmail }: { maskEmail: boolean }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleMaskEmail() {
    const params = new URLSearchParams(searchParams);
    params.set('mask_email', !maskEmail ? 'y' : 'n');

    // replace the URL with new value
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <button
      type="button"
      className="justify-center rounded-lg text-sm font-semibold py-3 bg-blue-700 px-4 text-white hover:bg-blue-900 w-[145px]"
      onClick={handleMaskEmail}
    >
      {maskEmail ? 'Un-mask emails' : 'Mask Emails'}
    </button>
  );
}
