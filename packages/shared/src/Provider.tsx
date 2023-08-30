import React from "react";
import { useHello } from "./hooks";

const Provider = () => {
  useHello();
  return null;
};

export default Provider;
