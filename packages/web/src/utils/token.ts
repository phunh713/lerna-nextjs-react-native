import { getSession } from "next-auth/react";

export const refreshTokenFn = async () => {
  const session = await getSession();
  if (
    session &&
    "accessToken" in session &&
    typeof session.accessToken === "string"
  ) {
    return session.accessToken;
  }
  return "";
};
