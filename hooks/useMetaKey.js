import { useEffect } from "react";

export default function useMetaKey(callback, inputRef) {
  useEffect(() => {
    function handleSubmit(event) {
      if (document.activeElement === inputRef.current) {
        if ((event.ctrlKey || event.metaKey) && event.which === 13) {
          callback();
        }
      }
    }

    document.addEventListener("keypress", handleSubmit);
    return () => {
      document.removeEventListener("keypress", handleSubmit);
    };
  }, [inputRef]);
}
