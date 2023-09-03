"use client";

import { config, useAppSelector } from "common";
import { redirect, usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";
import intersecion from "lodash/intersection";

/*
Why use redirect instead of router.push?
- get error get render Router while render other
*/

const RouteGuardWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { accessToken, roles } = useAppSelector(
    (state) => state.authentication
  );
  console.log({ pathname, accessToken });
  for (const item of config.routes.routesConfig) {
    if (item.path !== pathname) continue;
    if (item.type === "public") break;
    if (item.type === "unauthenticated") {
      if (accessToken) return redirect("/dashboard");
      break;
    }
    if (item.type === "authenticated" && accessToken) {
      console.log({ pathname, accessToken });
      if (item.roles.includes("*")) break;
      if (intersecion(item.roles, roles).length) break;
    }
    return redirect("/");
  }
  return <>{children}</>;
};

export default RouteGuardWrapper;
