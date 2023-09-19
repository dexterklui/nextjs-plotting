import { csv } from "d3";
import { useEffect, useState } from "react";

export default function useCsvData(url) {
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    let active = true; // prevent race condition in rapid re-rendering
    csv(url).then((data) => {
      if (!active) return;
      setData(data);
      setIsFetching(false);
    });
    return () => {
      active = false;
    };
  }, [url]);

  return [data, isFetching];
}
