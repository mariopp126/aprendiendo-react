import { useState, useEffect } from "react";

export function useCatImage({ fact }) {

  const [imageUrl, setImageUrl] = useState()

  //To get the image once we get a new fact
  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");
    console.log(threeFirstWords);

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);
  return { imageUrl };
}