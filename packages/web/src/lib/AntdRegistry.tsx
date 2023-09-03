"use client";

import React, { FC } from "react";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import type Entity from "@ant-design/cssinjs/es/Cache";

const StyledComponentsRegistry: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
