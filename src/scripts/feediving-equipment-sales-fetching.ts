interface Product {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  url: string;
  imageUrl: string;
}

export function getHavkongenProducts() {
  const productsIdentifyierClassName = "tws-list--grid-item";
  let havkongenPage: HTMLBodyElement | undefined;
  const rawProducts: undefined | HTMLCollectionOf<Element> =
    havkongenPage?.getElementsByClassName(productsIdentifyierClassName);

  if (!rawProducts) {
    console.error("No products found on Havkongen page");
    return;
  }

  const refinedProducts: any | Product[] | false = [...rawProducts].map(
    (product) => {
      const name = product.querySelector("h2")?.textContent;
      const discountedPrice = product.querySelector(
        ".tws-api--price-current"
      )?.textContent;
      const originalPrice = product.querySelector(
        ".tws-api--price-regular"
      )?.textContent;
      const discount = product.querySelector(
        ".tws-article-labels--special-offer"
      )?.textContent;
      const url = product.querySelector("a")?.getAttribute("href");
      const imageUrl = product
        .querySelector("picture img")
        ?.getAttribute("src");

      if (
        !name ||
        !discountedPrice ||
        !originalPrice ||
        !discount ||
        !url ||
        !imageUrl
      ) {
        console.error("Missing product information");
        return false;
      }

      return {
        name,
        discountedPrice,
        originalPrice,
        discount,
        url,
        imageUrl,
      };
    }
  );

  return refinedProducts;
}
