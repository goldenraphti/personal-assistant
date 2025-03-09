// exports.handler = async function (event, context) {
//   const urlToFetch = "https://www.lemonde.fr/";

//   try {
//     // Fetch the HTML content of the page
//     const response = await axios.get(urlToFetch);
//     const $ = cheerio.load(response.data);

//     // Extract the first article title
//     const titreUne = $(
//       "main section .article h1 .article__title-label"
//     )?.text();

//     if (titreUne) {
//       return {
//         statusCode: 200,
//         body: JSON.stringify({ title: titreUne }),
//       };
//     } else {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ error: "Title not found" }),
//       };
//     }
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to fetch data" }),
//     };
//   }
// };

// const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';

// export default async (request, context) => {
//   try {
//     const response = await fetch(API_ENDPOINT);
//     const data = await response.json();
//     return Response.json({ data });
//   } catch (error) {
//     console.log(error);
//     return Response.json({ error: 'Failed fetching data' }, { status: 500 });
//   }
// };

import type { Context, Config } from "@netlify/functions";

const API_ENDPOINT = "https://www.liberation.fr/";

export default async (req: Request, context: Context) => {
  try {
    const pageDocument = await fetch(API_ENDPOINT)
      .then((response) => response.text())
      .then((html) => {
        return html;
      });
    return Response.json({ pageFetchedText: pageDocument });
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "Failed fetching data:" + error },
      { status: 500 }
    );
  }
};
