"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <>
      <SessionProvider>{props.children}</SessionProvider>
    </>
  );
};
