import CityList from "@/components/travel/CityList";
import { ActiveCityProvider } from "@/components/travel/ActiveCity";
import TravelHero from "@/components/travel/TravelHero";
import SplitLayout from "@/components/SplitLayout";
import { CITIES, coverSrc } from "@/lib/cities";

export const metadata = {
  title: "Travel",
};

export default function TravelPage() {
  const slides = CITIES.map((city) => ({ slug: city.slug, name: city.name, cover: coverSrc(city) }));
  const rows = CITIES.map(({ slug, name, country }) => ({ slug, name, country }));

  return (
    <ActiveCityProvider>
      <SplitLayout heroLabel="Featured photo" hero={<TravelHero slides={slides} />}>
        <section className="card intro">
          <h1>Travel</h1>
          <p>
            Notes and photographs from the road: slow walks through old neighbourhoods, crowded markets and quiet
            corners, collected one city at a time.
          </p>
        </section>
        <CityList cities={rows} />
      </SplitLayout>
    </ActiveCityProvider>
  );
}
