import { ReactNode } from "react";

export function ProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
