import { NextApiHandler } from "next";
import { withIronSession } from "next-iron-session";

export function withSession(handle: NextApiHandler) {
  return withIronSession(handle, {
    password: 'b07d63db-11cc-429f-9349-d1fb43c5c7c8',
    cookieName: 'blog',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false
    }
  });
};
