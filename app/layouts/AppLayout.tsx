import type { ReactNode } from "react";
import LargeWithAppLinksAndSocial from "~/components/Footer/LargeWithApp";

import Header from "../components/Header";

interface AppLayoutProps {
  children: ReactNode;
  hideNavbar?: boolean;
}

export const AppLayout = ({ children, hideNavbar = false }: AppLayoutProps) => {
  return (
    <>
      <Header hideNavbar={hideNavbar} />
      {children}
      <LargeWithAppLinksAndSocial />
    </>
  );
};
