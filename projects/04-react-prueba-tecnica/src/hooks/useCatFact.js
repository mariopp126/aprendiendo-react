import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact () {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };
  // Get the fact when load page
  useEffect(refreshFact, []);
  return { fact, refreshFact };
};