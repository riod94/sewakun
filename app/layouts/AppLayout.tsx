import type { ReactNode } from "react";
import LargeWithAppLinksAndSocial from "~/components/Footer/LargeWithApp";

import Header from "../components/Header";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <LargeWithAppLinksAndSocial />
    </>
  );
};
