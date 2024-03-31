import { useCallback, useMemo, useState } from "react";

const iteratableFunctionInvocation =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

export default function useExpanded() {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
  const getTogglerProps = useCallback(
    ({ onClick, ...props } = {}) => ({
      "aria-expanded": expanded,
      onClick: iteratableFunctionInvocation(toggle, onClick),
      ...props,
    }),
    [toggle, expanded]
  );

  const value = useMemo(
    () => ({ expanded, toggle, getTogglerProps }),
    [expanded, toggle, getTogglerProps]
  );

  return value;
}
