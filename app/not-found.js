import Link from "next/link";
import HeroTag from "@/components/HeroTag";
import SplitLayout from "@/components/SplitLayout";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  const hero = (
    <div className="hero-frame">
      <HeroTag label="Somewhere" />
    </div>
  );

  return (
    <SplitLayout heroLabel="Empty photo panel" hero={hero}>
      <section className="card empty">
        <h1>Page not found</h1>
        <p>
          There’s nothing here yet. <Link href="/travel">Back to all cities</Link>
        </p>
      </section>
    </SplitLayout>
  );
}
