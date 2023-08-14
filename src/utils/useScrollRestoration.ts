import { useEffect } from "react";
import { useLocation, useNavigation } from "react-router-dom";

function getScrollPosition(key: string) {
  const pos = window.sessionStorage.getItem(key);
  return pos && /^[0-9]+$/.test(pos) ? parseInt(pos, 10) : 0;
}

function setScrollPosition(key: string, pos: number) {
  window.sessionStorage.setItem(key, pos.toString());
}

/**
 * Given a ref to a scrolling container element, keep track of its scroll
 * position before navigation and restore it on return (e.g., back/forward nav).
 * Note that `location.key` is used in the cache key, not `location.pathname`,
 * so the same path navigated to at different points in the history stack will
 * not share the same scroll position.
 */
export function useScrollRestoration() {
  const key = `scroll-position-${useLocation().pathname}`;
  const { state } = useNavigation();
  useEffect(() => {
    const container = document.querySelector("#scrollable-content");
    if (state === "loading") {
      setScrollPosition(key, container?.scrollTop ?? 0);
    } else if (state === "idle") {
      container?.scrollTo({ top: getScrollPosition(key) });
    }
  }, [key, state]);
}
