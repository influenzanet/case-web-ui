import { useEffect, useState } from "react";
import { getExternalOrLocalContentURL } from "../utils/routeUtils";

export const useFetchTextFile = (url: string) => {
  const [content, setContent] = useState<undefined | string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filePath = getExternalOrLocalContentURL(url);
    setLoading(true);
    fetch(filePath)
      .then(res => res.text())
      .then(text => {
        if (text.startsWith('<!DOCTYPE html>')) {
          console.log(`cannot find content for ${url}`);
          return;
        }
        setContent(text)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {
    content,
    loading
  };
}
