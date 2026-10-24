import SmartLink from "./SmartLink";

function Letters({ text }) {
  return Array.from(text).map((ch, i) => (
    <span key={i} className="roll-letter" style={{ "--i": i }}>
      {ch === " " ? " " : ch}
    </span>
  ));
}

/* Nav link whose letters roll up one by one on hover. */
export default function LetterLink({ href, label, ...props }) {
  return (
    <SmartLink className="letter-link" href={href} aria-label={label} {...props}>
      <span className="letter-row" aria-hidden="true">
        <Letters text={label} />
      </span>
      <span className="letter-row letter-row--next" aria-hidden="true">
        <Letters text={label} />
      </span>
    </SmartLink>
  );
}
