"use client";

import Image from "next/image";
import { useState } from "react";

/* next/image that fades in once decoded instead of painting top-to-bottom. */
export default function FadeImage({ className = "", ...props }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      {...props}
      className={`fade-image${loaded ? " is-loaded" : ""} ${className}`.trim()}
      onLoad={() => setLoaded(true)}
    />
  );
}
