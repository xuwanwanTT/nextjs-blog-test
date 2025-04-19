import { GetServerSideProps, NextApiHandler } from "next";
import { withIronSession } from "next-iron-session";

export function withSession(handle: NextApiHandler | GetServerSideProps) {
  return withIronSession(handle, {
    password: process.env.SECRET as string,
    cookieName: 'blog',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false
    }
  });
};
