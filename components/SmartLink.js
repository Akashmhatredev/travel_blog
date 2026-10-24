import Link from "next/link";

/* next/link for in-app routes, a plain anchor for hashes, mailto: and other sites. */
export default function SmartLink({ href, children, ...props }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} {...external} {...props}>
      {children}
    </a>
  );
}
