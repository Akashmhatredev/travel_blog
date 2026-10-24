import SmartLink from "./SmartLink";

/* Footer link: the word rolls up and an identical copy rises in from below. */
export default function WordLink({ href, label }) {
  return (
    <SmartLink className="word-link" href={href}>
      <span>{label}</span>
      <span aria-hidden="true">{label}</span>
    </SmartLink>
  );
}
