import Image from "next/image";
import { SITE } from "@/lib/site";
import WordLink from "./WordLink";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__id">
        <span className="avatar">
          {SITE.avatar ? <Image src={SITE.avatar} alt="" width={60} height={60} /> : SITE.initials}
        </span>
        <div className="footer__who">
          <h2>{SITE.name}</h2>
          <p>{SITE.role}</p>
        </div>
      </div>

      <div className="footer__cols">
        {SITE.footer.map((col) => (
          <div className="footer__col" key={col.heading}>
            <h3>{col.heading}</h3>
            <ul className="footer__links">
              {col.links.map((link) => (
                <li key={link.label}>
                  <WordLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="footer__legal">
        <span className="dim">
          © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
        </span>
      </p>
    </footer>
  );
}
