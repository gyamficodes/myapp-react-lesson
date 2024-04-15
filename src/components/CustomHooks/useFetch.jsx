import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setUrl] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setUrl(d));
  }, [url]);

  return [data]
};

export default useFetch;
