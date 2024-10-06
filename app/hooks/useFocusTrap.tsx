import { useEffect, RefObject } from "react";

function useFocusTrap(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const rootElement = ref.current;
    if (!rootElement) return;

    const focusableElements = rootElement.querySelectorAll("button");
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    rootElement.addEventListener("keydown", handleTabKey);

    // Focus the first element when the trap is activated
    firstElement.focus();

    return () => {
      rootElement.removeEventListener("keydown", handleTabKey);
    };
  }, [ref]);
}

export default useFocusTrap;
