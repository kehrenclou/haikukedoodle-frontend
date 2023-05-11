import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  console.log(document.documentElement);
  console.log(window);
  useEffect(() => {
    window.scrollTo(0, 0);
    // document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
