import Notch from "./Notch";

/* Caption tab notched into the bottom-right corner of the photo panel. */
export default function HeroTag({ label }) {
  return (
    <div className="hero-tag">
      <p>{label}</p>
      <Notch position="left" />
      <Notch position="top" />
    </div>
  );
}
