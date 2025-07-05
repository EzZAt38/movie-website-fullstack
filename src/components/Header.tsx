import React, { ReactNode } from "react";
const Header = ({ children }: { children: ReactNode }) => {
  return <div className="header relative h-[100vh]">{children}</div>;
};

export default Header;
