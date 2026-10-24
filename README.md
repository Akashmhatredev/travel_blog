# travel_blog

A city-by-city travel photography site built with Next.js 16 (App Router), React 19 and plain JavaScript + CSS.

- **`/travel`**: the travel index. The left half is a fixed photo panel; hovering (or tabbing through) a city on the right crossfades the photo.
- **`/travel/[slug]`**: a city page with facts and a gallery of framed prints. All city pages are generated statically at build time.
- `/` redirects to `/travel`.
- Light and dark themes (follows the OS until you flip the switch), a mobile menu, and reduced-motion support.

## Run it

Requires Node 20.9+ (`.nvmrc` pins 24).

```sh
nvm use
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Make it yours

- `lib/site.js`: your name, initials, avatar, nav and footer links.
- `lib/cities.js`: one entry per city (`slug`, `name`, `country`, `code`, `year`, `description`, `photos`).

Images use seeded placeholders from [picsum.photos](https://picsum.photos) until you add your own. Put files in `public/images/` and reference them from the site root:

```js
{
  slug: "kyoto",
  cover: "/images/kyoto/cover.jpg",
  photos: [
    { title: "Fushimi Inari", date: "2024-11-04", src: "/images/kyoto/inari.jpg", width: 1600, height: 1067 },
  ],
}
```

Once no city relies on placeholders, you can drop the `remotePatterns` entry in `next.config.mjs`.

## Structure

```
app/
  layout.js               root layout: font, theme script, header
  globals.css             all styles (colour tokens at the top)
  travel/page.js          travel index
  travel/[slug]/page.js   city detail
  not-found.js            404
components/
  Header.js               nav, theme switch, mobile menu (client)
  ThemeSwitch.js          light/dark toggle (client)
  Footer.js, SplitLayout.js, HeroTag.js, Notch.js, LetterLink.js, WordLink.js, SmartLink.js, FadeImage.js, icons.js
  travel/                 ActiveCity context, TravelHero, CityList (client)
lib/
  site.js, cities.js      content
```

Layout modelled on [p.isera.dev/travel](https://p.isera.dev/travel), whose design credits Pawel Gola's *Hanssen* template.
