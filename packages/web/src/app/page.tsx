"use client";

import { Button } from "antd";
import { signIn } from "next-auth/react";
import { FC } from "react";
import RouteGuardWrapper from "../HOC/RoutesGuardWrapper";

const Home: FC = () => {
  return (
    <RouteGuardWrapper>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div style={{ textAlign: "center", width: "70%" }}>
          <h1>Federated Service Solutions</h1>
          <p>
            We design, deploy and support every component of your enterprise
            network so that it meets the demands of your business today and
            tomorrow.
          </p>
          <Button onClick={() => signIn("azure-ad-b2c", { redirect: false })}>
            Login
          </Button>
        </div>
      </div>
    </RouteGuardWrapper>
  );
};

export default Home;
