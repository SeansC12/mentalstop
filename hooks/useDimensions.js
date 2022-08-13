import React, { useLayoutEffect, useRef } from "react";

export const useDimensions = ({ ref }) => {
  const dimensions = useRef({ width: 10, height: 10 });

  useLayoutEffect(() => {
    dimensions.current.width = ref.current.width;
    dimensions.current.height = ref.current.height;
  }, []);

  return dimensions.current;
};

// TODO:
// Attach a window or resize listener
// Return null for unmeasured states
// DO I LOOK LIKE IM THE KIND OF GUY WHO WRITES SAFE CODE
