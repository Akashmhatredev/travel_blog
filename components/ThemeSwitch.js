"use client";

import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";

// The `dark` class on <html> is the source of truth; it is set before first
// paint by the inline script in app/layout.js.
function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const isDark = () => document.documentElement.classList.contains("dark");

function savedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export default function ThemeSwitch() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  // Follow the OS setting until the visitor picks a theme themselves.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      if (!savedTheme()) document.documentElement.classList.toggle("dark", event.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* storage unavailable: the theme still applies for this visit */
    }
  };

  return (
    <button className="theme-switch" type="button" role="switch" aria-checked={dark} aria-label="Dark mode" onClick={toggle}>
      <span className="theme-switch__thumb" />
    </button>
  );
}
