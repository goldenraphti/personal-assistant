import type { Context } from "@netlify/functions";

export default async (request: Request, context: Context) => {
  return Response.json({ subject: "Hello, world!" });
};
