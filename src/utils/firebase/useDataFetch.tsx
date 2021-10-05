import { useState } from "react";
import { getCollection } from "./firebase";

export const useDataFetch = (collectionName: string) => {
  const [data, setData] = useState<any[] | null>(null);

  const fetch = () => {
    getCollection(collectionName).then((data) => {
      setData(data);
    });
  };

  return { fetch, data };
};
