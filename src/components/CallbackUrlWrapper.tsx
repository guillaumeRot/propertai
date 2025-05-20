"use client";

import { useSearchParams } from "next/navigation";

export default function CallbackUrlWrapper({
  children,
}: {
  children: (callbackUrl: string) => React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/analyse";

  return <>{children(callbackUrl)}</>;
}
