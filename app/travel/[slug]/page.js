import { notFound } from "next/navigation";
import FadeImage from "@/components/FadeImage";
import HeroTag from "@/components/HeroTag";
import SplitLayout from "@/components/SplitLayout";
import { CITIES, coverSrc, formatDate, getCity, photoSrc } from "@/lib/cities";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = getCity(slug);
  return city ? { title: city.name, description: city.description } : {};
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const stats = [
    ["Country", city.country],
    ["City", city.name],
    ["Year", city.year],
    ["Photos", city.photos.length],
  ];

  const hero = (
    <div className="hero-frame">
      <div className="hero-slide is-active">
        <FadeImage src={coverSrc(city)} alt={city.name} fill sizes="(min-width: 1024px) 50vw, 100vw" preload />
      </div>
      <HeroTag label={city.name} />
    </div>
  );

  return (
    <SplitLayout heroLabel="City cover photo" hero={hero}>
      <div className="city-head">
        <section className="card city-info">
          <h1>
            {city.name} {city.code}
          </h1>
          <p>{city.description}</p>
        </section>
        <dl className="city-stats">
          {stats.map(([label, value]) => (
            <div className="card city-stat" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="gallery">
        {city.photos.map((photo) => (
          <figure className="photo" key={photo.seed || photo.src}>
            <div className="photo__stage">
              <div className="frame">
                <div className="frame__mat">
                  <FadeImage
                    src={photoSrc(photo)}
                    alt={photo.title}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
            <figcaption className="photo__caption">
              <p className="photo__title">{photo.title}</p>
              <p className="photo__date">{formatDate(photo.date)}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SplitLayout>
  );
}
