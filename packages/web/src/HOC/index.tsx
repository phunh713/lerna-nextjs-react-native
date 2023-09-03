import React, { FC, ReactNode } from "react";
import GetTokenWrapper from "./GetTokenWrapper";
import RouteGuardWrapper from "./RoutesGuardWrapper";

const Wrappers: FC<{ children: ReactNode }> = ({ children }) => {
  return <GetTokenWrapper>{children}</GetTokenWrapper>;
};

export default Wrappers;
