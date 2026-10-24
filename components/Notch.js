/* Inverted corner that blends a floating tab into the photo frame beneath it. */
export default function Notch({ position }) {
  return <span className={`notch notch--${position}`} aria-hidden="true" />;
}
