import { jwtVerify } from "jose";

export async function verifyToken(token) {
  try {
    if (token) {
      const verified = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.HASURA_GRAPHQL_JWT_SECRET)
      );
      console.log({ verified });
      return verified.payload && verified.payload?.issuer;
    }
    return null;
  } catch (err) {
    console.error({ err });
    return null;
  }
}