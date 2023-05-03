import type { Hit as AlgoliaHit } from "instantsearch.js/es/types";

import { Snippet } from "react-instantsearch-hooks-web";

type HitProps = {
  hit: AlgoliaHit<{
    nom: string;
    image: string;
    brand: string;
    categories: string[];
  }>;
};

export function Hit({ hit }: HitProps) {
  return (
    <article className="hit">
      <div className="hit-image">
        <img
          src={`https://images.tempsl.fr/Produits/96/${hit.photo}`}
          alt={hit.nom}
        />
      </div>
      <div>
        <h1>
          {/* <Snippet hit={hit} attribute="name" /> */}
          {hit.nom}
        </h1>
        <div>
          By <strong>{hit.brand}</strong> in{" "}
          <strong>{hit.categories[0]}</strong>
        </div>
      </div>
    </article>
  );
}
