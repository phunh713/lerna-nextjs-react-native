import { constants, utils } from "common";
import NextAuth, { AuthOptions } from "next-auth";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

export const authOptions: AuthOptions = {
  debug: true,
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    AzureADB2CProvider({
      id: "azure-ad-b2c",
      tenantId: constants.azure.TENANT_NAME,
      clientId: constants.azure.WEBSITE_CLIENT_ID,
      clientSecret: constants.azure.WEBSITE_CLIENT_SECRET,
      primaryUserFlow: constants.azure.POLICY_NAME,
      profile: async (profile) => {
        return {
          ...profile,
          id: profile.sub,
          email: profile.emails?.[0] ?? "",
        };
      },
      authorization: {
        params: {
          scope: `offline_access openid ${constants.azure.WEBSITE_CLIENT_ID}`,
        },
      },
      checks: ["pkce", "state"], // PKCE provide code_challenge
    }),
  ],
  callbacks: {
    jwt: async ({ token, account, user }) => {
      // account and user only available when user sign in first time
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
        };
      }
      let accessToken =
        typeof token.accessToken === "string" ? token.accessToken : "";
      const refreshToken =
        typeof token.refreshToken === "string" ? token.refreshToken : "";

      if (utils.token.checkTokenExpired(accessToken)) {
        console.log("ABOUT TO REFRESH TOKEN IN JWT CALLBACK");
        accessToken = await utils.token.refreshAccessToken({
          clientId: constants.azure.WEBSITE_CLIENT_ID,
          isPublicApp: false,
          refreshToken: refreshToken,
          clientSecret: constants.azure.WEBSITE_CLIENT_SECRET,
        });
      }

      return {
        ...token,
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    },
    session: async ({ session, token }) => ({
      ...session,
      accessToken: token.accessToken,
    }),
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
