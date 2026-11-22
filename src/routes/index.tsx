import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import heroImg from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.webp";

const SITE_URL = "https://modakoda.com";
const DESCRIPTION =
  "Software development company in Vilnius, Lithuania. Custom software, AI integration and process automation for insurance, fintech and media teams.";

export const Route = createFileRoute("/")({
  head: ({ match }) => {
    // The SPA shell (404.html) renders only the root route, leaving this match unloaded; it must not carry this page's meta.
    if (match.status !== "success") return {};
    return HEAD;
  },
  component: Index,
});

const HEAD = {
  meta: [
    { title: "Modakoda — Software Development & Engineering Company" },
    { name: "description", content: DESCRIPTION },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#f5f3ee" },
    { property: "og:site_name", content: "Modakoda" },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: `${SITE_URL}/` },
    {
      property: "og:title",
      content: "Modakoda — Software Development Company",
    },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:image", content: `${SITE_URL}${heroImg}` },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "720" },
    { property: "og:image:alt", content: "Modakoda software studio" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Modakoda — Software Development Company",
    },
    { name: "twitter:description", content: DESCRIPTION },
    { name: "twitter:image", content: `${SITE_URL}${heroImg}` },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Modakoda",
        url: `${SITE_URL}/`,
        // Google needs a logo of at least 112x112; the wordmark is 436x54.
        logo: `${SITE_URL}/favicon.png`,
        email: "info@modakoda.com",
        description: DESCRIPTION,
        vatID: "LT100012594513",
        identifier: "304307868",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vilnius",
          addressCountry: "LT",
        },
        areaServed: "Worldwide",
        knowsAbout: [
          "Software development",
          "Process automation",
          "LLM integration",
          "AI infrastructure",
        ],
      },
    },
  ],
  links: [{ rel: "canonical", href: `${SITE_URL}/` }],
};

const NAV = [
  { label: "Practice", href: "#practice" },
  { label: "AI", href: "#ai" },
  { label: "Work", href: "#work" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    no: "01",
    title: "Software Development",
    body: "Full-lifecycle product engineering from architecture to deployment. We ship systems that scale — built for the engineers who will maintain them in five years.",
  },
  {
    no: "02",
    title: "Process Automation",
    body: "We map the workflows that cost you time and money, then replace them with reliable systems. Typical clients recover 15–30 hours of manual work per week within the first quarter.",
  },
  {
    no: "03",
    title: "Product Support",
    body: "Inherit a legacy codebase, stabilise a critical platform, or extend a system you cannot afford to rebuild. We provide ongoing engineering partnership with clear SLAs and response times.",
  },
];

const WORK = [
  {
    img: work7,
    client: "Open PDF Editor",
    region: "Global",
    title: "Open-source desktop PDF editor",
    discipline: "Own product",
    year: "2026",
    href: "https://open-pdf-editor.modakoda.com",
  },
  {
    img: work6,
    client: "Advanced Google Results Aggregator",
    region: "Global",
    title: "Search results analysis system",
    discipline: "Data & infrastructure",
    year: "2025",
  },
  {
    img: work4,
    client: "Adverse Media Search",
    region: "Global",
    title: "Risk intelligence platform",
    discipline: "Compliance engineering",
    year: "2024",
  },
  {
    img: work5,
    client: "Text Synthesizer",
    region: "Global",
    title: "Voice synthesis & playback platform",
    discipline: "AI & audio",
    year: "2024",
  },
  {
    img: work2,
    client: "Polins",
    region: "Europe",
    title: "Insurance Brokerage system",
    discipline: "Platform & automation",
    year: "2022",
  },
  {
    img: work3,
    client: "Radio Station Index",
    region: "Global",
    title: "Search engine & CMS",
    discipline: "Infrastructure",
    year: "2021",
  },
  {
    img: work1,
    client: "Hansa Eule",
    region: "Germany",
    title: "Insurance commerce platform",
    discipline: "Product engineering",
    year: "2017",
  },
];

const PRINCIPLES = [
  [
    "Considered",
    "Software is a long conversation. We move with patience and intent.",
  ],
  ["Honest", "Plain estimates. Real timelines. No theatre."],
  [
    "Durable",
    "We build for the team that will inherit the code, not the demo.",
  ],
  ["Quiet", "Good systems disappear into the work they support."],
];

const WRAP = "mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10";
const SECTION = "py-20 sm:py-28 lg:py-36";
const H2 =
  "text-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium text-balance";
const BTN =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors";
// Angle brackets stand in for each O; same shape as public/favicon.svg.
const LOGO_BRACKETS = (
  <svg viewBox="0 0 100 100" className="size-[0.8em] text-signal">
    <path
      d="M40 10 8 50 40 90M60 10 92 50 60 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="15"
    />
  </svg>
);

const CODE = {
  dim: "text-background/40",
  key: "text-signal",
  str: "text-background",
};
// Decorative hero snippet as [text, colour] tokens.
const HERO_CODE: [string, string?][] = [
  ["// studio.ts\n", CODE.dim],
  ["export const ", CODE.key],
  ["studio = {\n  based: "],
  ['"Vilnius"', CODE.str],
  [",\n  since: "],
  ["2016", CODE.str],
  [",\n  sectors: [\n    "],
  ['"insurance"', CODE.str],
  [",\n    "],
  ['"fintech"', CODE.str],
  [",\n    "],
  ['"media"', CODE.str],
  [",\n  ],\n  outlasts: "],
  ['"trends"', CODE.str],
  [",\n};"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <AI />
        <Work />
        <Company />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`eyebrow flex items-center gap-3 ${className}`}>
      {/* Terminal cursor block. */}
      <span aria-hidden="true" className="h-3 w-1.5 bg-signal" />
      {children}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }
    function handleScroll() {
      setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    if (open) {
      document.addEventListener("click", handleClick);
      document.addEventListener("scroll", handleScroll, true);
      document.addEventListener("keydown", handleKey);
    }
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("scroll", handleScroll, true);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className={`${WRAP} h-16 flex items-center justify-between`}>
        <a href="#top" className="flex h-16 items-center">
          <span className="sr-only">Modakoda</span>
          <span
            aria-hidden="true"
            className="flex items-center gap-[0.08em] font-display text-2xl lg:text-[1.75rem] font-semibold leading-none tracking-[0.06em]"
          >
            M{LOGO_BRACKETS}DAK{LOGO_BRACKETS}DA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`${BTN} max-md:hidden !min-h-10 !px-5 bg-foreground text-background hover:bg-foreground/85`}
          >
            Start a project
          </a>
          <button
            ref={buttonRef}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative -mr-2 size-11 flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <div
              className="absolute w-6 h-0.5 bg-foreground transition-all duration-300"
              style={{
                transform: open ? "rotate(45deg)" : "translateY(-4px)",
              }}
            />
            <div
              className="absolute w-6 h-0.5 bg-foreground transition-all duration-300"
              style={{
                transform: open ? "rotate(-45deg)" : "translateY(4px)",
              }}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-xl animate-rise"
        >
          <nav className="px-5 sm:px-8 pt-2 pb-6 flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl py-3.5 border-b border-border"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={`${BTN} mt-6 bg-foreground text-background`}
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const stats = [
    [String(new Date().getFullYear() - 2016), "Years building"],
    ["40+", "Shipped products"],
    ["6", "Countries served"],
  ];
  return (
    <section id="top" className="pt-20 sm:pt-24">
      <div className={WRAP}>
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background px-6 pt-14 pb-8 sm:px-12 sm:pt-20 sm:pb-12 lg:px-20 lg:pt-28 animate-rise">
          <div className="relative">
            <pre
              aria-hidden="true"
              className="absolute right-0 top-0 hidden w-80 rounded-xl border border-background/15 bg-background/[0.04] p-6 font-mono text-[13px] leading-relaxed text-background/60 xl:block"
            >
              {HERO_CODE.map(([text, color], i) => (
                <span key={i} className={color}>
                  {text}
                </span>
              ))}
            </pre>
            <Eyebrow className="!text-background/60">
              Software studio · Vilnius
            </Eyebrow>
            <h1 className="mt-6 max-w-4xl xl:max-w-2xl text-display text-[clamp(2.5rem,7vw,6rem)] xl:text-[5rem] font-medium text-balance">
              Software built{" "}
              <span className="italic font-light text-signal">
                to outlast trends.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-background/70 leading-relaxed text-base sm:text-lg">
              Mission-critical engineering for insurance, fintech, and media.
              Based in Vilnius, serving clients internationally.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className={`${BTN} bg-signal text-foreground hover:bg-background`}
              >
                Start a project
              </a>
              <a
                href="#work"
                className={`${BTN} border border-background/30 hover:border-background`}
              >
                See our work
              </a>
            </div>

            <dl className="mt-14 lg:mt-24 grid grid-cols-3 gap-4 border-t border-background/15 pt-6 sm:pt-8">
              {stats.map(([n, l]) => (
                <div key={l} className="flex flex-col-reverse gap-1.5">
                  <dt className="text-xs sm:text-sm text-background/60">{l}</dt>
                  <dd className="text-display text-3xl sm:text-5xl font-medium">
                    {n}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const clients = [
    "Hansa Eule",
    "Polins",
    "UniCredit",
    "AINNO",
    "Lithuania Travel",
  ];
  return (
    <section className="py-8 sm:py-10 border-b border-border">
      <div
        className={`${WRAP} flex flex-col md:flex-row md:items-center gap-4 md:gap-10`}
      >
        <span className="eyebrow shrink-0">Trusted by</span>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 lg:justify-between lg:grow">
          {clients.map((name) => (
            <span
              key={name}
              className="font-display text-lg sm:text-2xl text-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Insurance platforms",
    "Brokerage systems",
    "Search infrastructure",
    "Internal tooling",
    "Legacy modernisation",
    "Process automation",
    "LLM integration",
    "Intelligent workflows",
  ];
  return (
    <section className="border-y border-border py-5 sm:py-6 overflow-hidden">
      {/* Two identical halves with per-item padding so -50% lands exactly on the second copy. */}
      <div className="flex items-center animate-marquee whitespace-nowrap will-change-transform">
        {[...items, ...items].map((s, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center text-display text-2xl sm:text-4xl md:text-5xl font-light text-foreground/80"
          >
            {s}
            <span className="mx-8 sm:mx-12 font-mono text-[0.6em] font-medium text-signal">
              {"//"}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  children,
  dark,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 sm:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-5 lg:items-end">
      <div className="lg:col-span-8">
        <Eyebrow className={`mb-5 ${dark ? "!text-background/60" : ""}`}>
          {eyebrow}
        </Eyebrow>
        <h2 className={H2}>{title}</h2>
      </div>
      {children && (
        <p
          className={`lg:col-span-4 max-w-md leading-relaxed ${dark ? "text-background/65" : "text-muted-foreground"}`}
        >
          {children}
        </p>
      )}
    </div>
  );
}

function AI() {
  return (
    <section id="ai" className={`${SECTION} bg-foreground text-background`}>
      <div className={WRAP}>
        <SectionHead
          dark
          eyebrow="Intelligence"
          title="AI that earns its place in your product."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "LLM Integration",
              body: "We embed language models into existing products — not as chatbots bolted onto the side, but as features that understand context and deliver real outcomes. RAG pipelines, function calling, and fine-tuning where generic models fall short.",
            },
            {
              title: "Intelligent Automation",
              body: "Move beyond rule-based workflows. We build systems that read documents, classify requests, and make decisions — then hand off to humans only when judgment is genuinely required. Measurable time savings from day one.",
            },
            {
              title: "AI Infrastructure",
              body: "Model serving, prompt versioning, observability, and cost controls. We run the plumbing so your team can experiment safely and ship faster without waking up to surprise API bills.",
            },
            {
              title: "Discovery & Roadmap",
              body: "Not every problem needs a model. We audit your workflows, identify high-confidence AI opportunities, and build a roadmap ranked by feasibility and return. No solutionism — just clear thinking.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-background/12 bg-background/[0.04] p-7 lg:p-10 transition-colors hover:border-signal/60"
            >
              <span aria-hidden="true" className="font-mono text-signal">
                {">_"}
              </span>
              <h3 className="mt-8 lg:mt-12 font-display text-2xl md:text-3xl leading-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-background/65 leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="practice" className={SECTION}>
      <div className={WRAP}>
        <SectionHead
          eyebrow="Practice"
          title="Three quiet disciplines, practiced with attention."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <article
              key={s.no}
              className="rounded-2xl border border-border bg-card p-7 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
            >
              <span className="font-display text-sm text-muted-foreground">
                {s.no}
              </span>
              <h3 className="mt-8 md:mt-20 font-display text-2xl md:text-3xl mb-4 leading-tight">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const WORK_VISIBLE = 6;

function Work() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="work" className={SECTION}>
      <div className={WRAP}>
        <SectionHead eyebrow="Selected work" title="Proven results.">
          A selection of recent engagements across insurance, fintech,
          infrastructure, compliance, and AI. Delivered on scope and on time.
        </SectionHead>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {WORK.map((w, i) => {
            // An <a> without href is not a link; cards without a URL are plain blocks.
            const Card = w.href ? "a" : "div";
            return (
              <Card
                href={w.href}
                target={w.href ? "_blank" : undefined}
                rel={w.href ? "noopener noreferrer" : undefined}
                key={i}
                // Collapsed cards stay in the prerendered HTML so crawlers see every project.
                className={
                  expanded || i < WORK_VISIBLE ? "group block" : "hidden"
                }
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary mb-5">
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover [@media(hover:hover)]:grayscale transition-all duration-[1200ms] group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                  <h3 className="font-display text-xl">
                    {w.client}
                    {w.href && (
                      <span aria-hidden="true" className="text-signal">
                        {" "}
                        ↗
                      </span>
                    )}
                  </h3>
                  <div className="text-sm text-muted-foreground tabular-nums">
                    {w.year}
                  </div>
                </div>
                <div className="text-muted-foreground leading-relaxed">
                  {w.title}
                </div>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {[w.discipline, w.region].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground px-2.5 py-1 bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {WORK.length > WORK_VISIBLE && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className={`${BTN} w-full sm:w-auto border border-foreground/80 hover:bg-foreground hover:text-background`}
            >
              {expanded ? "Show less" : `Show all ${WORK.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Company() {
  return (
    <section id="company" className={`${SECTION} bg-secondary`}>
      <div className={WRAP}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <Eyebrow className="mb-5">Company</Eyebrow>
            <h2 className="text-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-[1.02] text-balance">
              Built on precision. Measured by results.
            </h2>
            <p className="mt-6 sm:mt-8 text-muted-foreground text-lg leading-relaxed max-w-md">
              Since 2016, Modakoda has delivered mission-critical software for
              companies in six countries. We partner with a select number of
              clients each year — the kind whose products outlast the trends
              around them.
            </p>
          </div>
          <ul className="lg:col-span-7 divide-y divide-border border-y border-border">
            {PRINCIPLES.map(([h, b]) => (
              <li
                key={h}
                className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-12 items-baseline"
              >
                <div className="font-display text-xl md:text-2xl">{h}</div>
                <p className="text-muted-foreground leading-relaxed">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="pt-12 sm:pt-16">
      <div className={WRAP}>
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background px-6 py-14 sm:p-12 lg:p-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -bottom-40 size-80 rotate-45 border border-background/10"
          />
          <div className="relative">
            <Eyebrow className="!text-background/60 mb-6">
              Correspondence
            </Eyebrow>
            <h2 className="text-display text-[clamp(2.5rem,7vw,6rem)] font-medium max-w-5xl text-balance">
              Have something worth building?
            </h2>
            <p className="mt-6 sm:mt-8 max-w-xl text-background/70 text-base sm:text-lg leading-relaxed">
              We accept a select number of new engagements each quarter. Tell us
              about your product, your team, and the problem you are trying to
              solve. We typically respond within one business day.
            </p>
            <a
              href="mailto:info@modakoda.com"
              className={`${BTN} mt-8 w-full sm:w-auto !min-h-14 !px-8 !text-base sm:!text-lg font-display bg-signal text-foreground hover:bg-background`}
            >
              <span dangerouslySetInnerHTML={emailOff("info@modakoda.com")} />
              <span aria-hidden="true">&nbsp;→</span>
            </a>
            <dl className="mt-12 sm:mt-16 grid grid-cols-2 gap-6 border-t border-background/15 pt-8 max-w-xl">
              {[
                ["Company", "Vilnius, Lithuania"],
                ["Hours", "Mon–Fri"],
              ].map(([l, v]) => (
                <div key={l}>
                  <dt className="eyebrow !text-background/50 mb-2">{l}</dt>
                  <dd className="font-display text-lg sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

// Cloudflare's email obfuscation rewrites addresses in the served HTML, which breaks hydration (React #418).
// email_off opts the text out. Only pass hardcoded strings: this is raw HTML.
const emailOff = (text: string) => ({
  __html: `<!--email_off-->${text}<!--/email_off-->`,
});

function CopyableValue({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // silently fail
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex min-h-8 items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
      title="Click to copy"
      aria-label={`Copy ${value}`}
    >
      <span dangerouslySetInnerHTML={emailOff(value)} />
      <span aria-live="polite" className="inline-flex">
        {copied ? (
          <span className="text-emerald-700 text-[10px] uppercase tracking-wider">
            Copied
          </span>
        ) : (
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40 hover:opacity-100 transition-opacity"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </span>
    </button>
  );
}

function Footer() {
  return (
    <footer className="py-8 sm:py-10">
      <div
        className={`${WRAP} flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-muted-foreground`}
      >
        <div>
          <div>© {new Date().getFullYear()} Modakoda. All rights reserved.</div>
          <div className="mt-1 flex flex-wrap items-center gap-x-2">
            <span>
              Reg. code <CopyableValue value="304307868" />
            </span>
            <span className="opacity-30">·</span>
            <span>
              VAT <CopyableValue value="LT100012594513" />
            </span>
          </div>
        </div>
        <CopyableValue value="info@modakoda.com" />
      </div>
    </footer>
  );
}
