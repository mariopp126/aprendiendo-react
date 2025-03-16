import { useEffect, useState } from "react";
import "./App.css";
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatimage";
import { useCatFact } from "./hooks/useCatFact";

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstword}?size=50&color=red&json=true`


export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact()
  };

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}
