"use client";

import FadeImage from "../FadeImage";
import HeroTag from "../HeroTag";
import { useActiveCity } from "./ActiveCity";

export default function TravelHero({ slides }) {
  const { active, prev } = useActiveCity();

  return (
    <div className="hero-frame">
      {slides.map((slide, i) => (
        <div
          key={slide.slug}
          className={`hero-slide${i === active ? " is-active" : ""}${i === prev ? " is-prev" : ""}`}
        >
          <FadeImage src={slide.cover} alt={slide.name} fill sizes="(min-width: 1024px) 50vw, 100vw" preload={i === 0} />
        </div>
      ))}
      <HeroTag label={slides[active]?.name} />
    </div>
  );
}
