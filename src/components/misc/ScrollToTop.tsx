import { useEffect } from "react";

export default function ScrollToTop(pathname: string) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
