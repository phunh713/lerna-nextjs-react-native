"use client";

import { setAccessToken, useAppDispatch } from "common";
import { useSession } from "next-auth/react";
import React, { FC, ReactNode, useEffect, useState } from "react";

const GetTokenWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [isTokenSet, setisTokenSet] = useState(false);
  const { data, status } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      status === "authenticated" &&
      "accessToken" in data &&
      typeof data.accessToken === "string"
    ) {
      dispatch(setAccessToken(data.accessToken));
      setisTokenSet(true);
    }
    if (status === "unauthenticated") setisTokenSet(true);
  }, [data, dispatch, status]);

  if (status === "loading"!! || !isTokenSet)
    return (
      <div
        style={{
          fontSize: "152px",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}>
        <span>Loading...</span>
      </div>
    );

  return <>{children}</>;
};

export default GetTokenWrapper;
