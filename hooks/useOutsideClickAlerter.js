import { useLayoutEffect } from "react";

export default function useOutsideClickAlerter(callback, ref, state) {
  useLayoutEffect(() => {
    function handleClickOutside(e) {
      const event = e;
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [state]);
}
