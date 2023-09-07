"use client";

import { FC } from "react";
import RouteGuardWrapper from "../HOC/RoutesGuardWrapper";
import Todos from "@/components/Todos";

const Home: FC = () => {
  return (
    <RouteGuardWrapper>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Todos />
      </div>
    </RouteGuardWrapper>
  );
};

export default Home;
