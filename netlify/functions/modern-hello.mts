import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  console.log("💗", req);
  console.log("💗💗", context);
  const response = JSON.stringify({ subject: "Hello, world!" });
  return new Response(response);
};
