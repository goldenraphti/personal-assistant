import * as cheerio from "cheerio";
import type { Context, Config } from "@netlify/functions";

const API_ENDPOINT = "https://www.liberation.fr/";

export default async (req: Request, context: Context) => {
  try {
    const pageDocument = await fetch(API_ENDPOINT)
      .then((response) => response.text())
      .then((html) => {
        return html;
      });
    const $ = cheerio.load(pageDocument);
    // You can now even select part of that html as you would in the regular DOM
    const titreUne = $("h2").text();
    return Response.json({ titreUne });
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "Failed fetching data:" + error },
      { status: 500 }
    );
  }
};
