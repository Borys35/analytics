"use client";

import React, { FC } from "react";
import { CookiesProvider } from "react-cookie";

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export default Providers;
