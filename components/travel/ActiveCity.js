"use client";

import { createContext, use, useCallback, useMemo, useState } from "react";

/* Which city the list is pointing at, shared by the list and the photo panel. */
const ActiveCityContext = createContext(null);

export function ActiveCityProvider({ children }) {
  const [state, setState] = useState({ active: 0, prev: null });

  // Remember the outgoing slide so it stays opaque underneath while the new
  // one fades in; otherwise the frame flashes through to the background.
  const show = useCallback((index) => {
    setState((s) => (s.active === index ? s : { active: index, prev: s.active }));
  }, []);

  const value = useMemo(() => ({ ...state, show }), [state, show]);
  return <ActiveCityContext value={value}>{children}</ActiveCityContext>;
}

export function useActiveCity() {
  return use(ActiveCityContext);
}
