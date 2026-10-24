"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { LogoIcon } from "./icons";
import LetterLink from "./LetterLink";
import Notch from "./Notch";
import SmartLink from "./SmartLink";
import ThemeSwitch from "./ThemeSwitch";

const MENU_LINKS = [{ label: "Home", href: "/" }, ...SITE.nav];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = (event) => event.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const current = (href) => (href !== "#" && pathname.startsWith(href) ? "page" : undefined);

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Main">
          <Link className="brand" href="/" aria-label={`${SITE.name} — home`}>
            <LogoIcon />
            <span className="brand-roll" aria-hidden="true">
              <span>{SITE.name}</span>
              <span>{SITE.brandHover}</span>
            </span>
          </Link>
          <div className="nav-links">
            {SITE.nav.map((item) => (
              <LetterLink key={item.label} href={item.href} label={item.label} aria-current={current(item.href)} />
            ))}
          </div>
          <ThemeSwitch />
        </nav>
        <Notch position="below" />
        <Notch position="right" />
      </header>

      <div className="top-cover" />

      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
        <Notch position="below" />
        <Notch position="left" />
      </button>

      <div className={`mobile-menu${open ? " is-open" : ""}`} id="mobile-menu">
        <ul>
          {MENU_LINKS.map((item, i) => (
            <li key={item.label} style={{ "--i": i }}>
              <SmartLink href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </SmartLink>
            </li>
          ))}
        </ul>
        <p className="mobile-menu__foot">
          {SITE.fullName} · {SITE.role}
        </p>
      </div>
    </>
  );
}
