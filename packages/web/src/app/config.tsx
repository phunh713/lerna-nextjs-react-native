"use client";

import React from "react";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider as AntdConfigProvider } from "antd";
import {
  QueryClientProvider,
  ReduxProvider,
  initHttpClient,
  store,
  utils,
} from "common";
import { SessionProvider } from "next-auth/react";
import { refreshTokenFn } from "@/utils/token";

// must init http client in client component. Don't know why yet
initHttpClient(() => utils.token.getAccessToken(store, refreshTokenFn));

const Configs: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider>
      <ReduxProvider>
        <StyledComponentsRegistry>
          <AntdConfigProvider>
            <SessionProvider>{children}</SessionProvider>
          </AntdConfigProvider>
        </StyledComponentsRegistry>
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default Configs;
