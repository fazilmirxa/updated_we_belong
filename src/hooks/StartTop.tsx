import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map<string, number>();

const ScrollManager = () => {
  const location = useLocation();
  const navType = useNavigationType();

  // Save scroll position when leaving the page
  useEffect(() => {
    return () => {
      scrollPositions.set(location.pathname, window.scrollY);
    };
  }, [location]);

  useEffect(() => {
    const restoreScroll = () => {
      const savedY = scrollPositions.get(location.pathname);

      if (navType === "POP" && savedY !== undefined) {
        let attempts = 0;
        const maxAttempts = 10;

        const tryRestore = () => {
          // Wait for layout shift to complete (images, fonts, etc.)
          requestAnimationFrame(() => {
            window.scrollTo(0, savedY);
            attempts++;
            if (attempts < maxAttempts) {
              setTimeout(tryRestore, 100);
            }
          });
        };

        tryRestore();
      } else {
        // Scroll to top for new page
        window.scrollTo(0, 0);
      }
    };

    // Wait until document is ready (helps with images/fonts loading)
    if (document.readyState === "complete") {
      restoreScroll();
    } else {
      window.addEventListener("load", restoreScroll, { once: true });
    }
  }, [location, navType]);

  return null;
};

export default ScrollManager;
