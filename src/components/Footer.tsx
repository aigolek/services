import { useTranslations } from "next-intl";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/10 bg-navy py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#hero" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold text-gold font-serif text-sm font-semibold">
            G
          </span>
          <span className="text-sm font-semibold tracking-wide text-white">
            GLOBAL <span className="text-gold">CONSULTING</span> GROUP
          </span>
        </a>

        <p className="text-xs text-white/40">
          {t("rights", { year: new Date().getFullYear() })}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold hover:text-gold"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold hover:text-gold"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
