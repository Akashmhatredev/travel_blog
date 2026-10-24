"use client";

import Link from "next/link";
import { ArrowIcon } from "../icons";
import { useActiveCity } from "./ActiveCity";

export default function CityList({ cities }) {
  const { show } = useActiveCity();

  return (
    <nav aria-label="Cities">
      <ul className="city-list">
        {cities.map((city, i) => (
          <li key={city.slug}>
            <Link
              className="city-row"
              href={`/travel/${city.slug}`}
              onMouseEnter={() => show(i)}
              onFocus={() => show(i)}
            >
              <span className="city-row__name">{city.name}</span>
              <span className="city-row__meta">
                <span className="city-row__country">{city.country}</span>
                <span className="city-row__arrow">
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
