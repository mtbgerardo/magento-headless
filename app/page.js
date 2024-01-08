"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("https://moblum.com/graphql", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            query: `
            query ProductQuery($filters: ProductAttributeFilterInput) {
              products(filter: $filters) {
                items {
                  id
                  name
                  sku
                  special_price
                  al_pager_precio
                  al_pagar_label
                  informacion_adicional_uno
                  informacion_adicional_dos
                  informacion_adicional_tres
                  coleccion
                  categories{
                    canonical_url
                  }
                  description{
                    html
                  }
                  short_description{
                    html
                  }
                  image {
                    disabled
                    label
                    position
                    url
                  }
                  rating_summary
                  media_gallery{
                    url
                    position
                    label
                    disabled
                  }
                }
              }
            }
          `,
            variables: {
              filters: {
                url_key: {
                  eq: "mesa-comedor-grabado-ping-pong-240-x-120-cm-forrest-gris",
                },
              },
            },
          }),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return <main>TEST 1</main>;
}
