export function getTitleFromLiberationPage() {
  const title = fetch(
    "https://my-butler.netlify.app/.netlify/functions/fetch-title-api"
  )
    .then((response) => {
      console.log("pageStringed", response);
      return response.json();
    })
    .then((pageStringed) => {
      console.log("pageStringed", pageStringed);
      const webDocument = new DOMParser().parseFromString(
        pageStringed,
        "text/html"
      );
      return webDocument.querySelector("h2")?.textContent;
    })
    .catch((error) => {
      console.error("Failed to fetch data:", error);
    });
  return title;
}
