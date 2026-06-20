import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import modakodaLogo from "@/assets/modakoda-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modakoda — Software Development & Engineering Company" },
      {
        name: "description",
        content:
          "A small software company building thoughtful products, automating workflows, and supporting teams across the full product lifecycle.",
      },
      {
        property: "og:title",
        content: "Modakoda — Software Development Company",
      },
      {
        property: "og:description",
        content: "Quietly considered software. Built to last.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Practice", href: "#practice" },
  { label: "AI", href: "#ai" },
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
    img: work1,
    client: "Hansa Eule",
    region: "Germany",
    title: "Insurance commerce platform",
    discipline: "Product engineering",
    year: "2017",
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
    img: work2,
    client: "Polins",
    region: "Europe",
    title: "Insurance Brokerage system",
    discipline: "Platform & automation",
    year: "2022",
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
    img: work6,
    client: "Advanced Google Results Aggregator",
    region: "Global",
    title: "Search results analysis system",
    discipline: "Data & infrastructure",
    year: "2025",
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustedBy />
      <Services />
      <AI />
      <Work />
      <Company />
      <Marquee />
      <Contact />
      <Footer />
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
    if (open) {
      document.addEventListener("click", handleClick);
      document.addEventListener("scroll", handleScroll, true);
    }
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex h-16 items-center group">
          <img
            src={modakodaLogo}
            alt="Modakoda"
            className="h-12 w-auto max-w-[220px] object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex text-xs eyebrow border border-foreground/80 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            Start a project
          </a>
          <button
            ref={buttonRef}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <div
              className="absolute w-5 h-0.5 bg-foreground transition-all duration-300"
              style={{
                transform: open ? "rotate(45deg)" : "translateY(-4px)",
              }}
            />
            <div
              className="absolute w-5 h-0.5 bg-foreground transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <div
              className="absolute w-5 h-0.5 bg-foreground transition-all duration-300"
              style={{
                transform: open ? "rotate(-45deg)" : "translateY(4px)",
              }}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-rise"
        >
          <nav className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit text-xs eyebrow border border-foreground/80 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
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
  return (
    <section id="top" className="relative pt-24 lg:pt-28 pb-8 lg:pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-sm animate-rise">
          <img
            src={heroImg}
            alt="Modern software development office"
            width={1600}
            height={1200}
            className="w-full h-[50vh] lg:h-[60vh] min-h-[360px] object-cover blur-[3px] scale-105"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16">
            <h1 className="text-display text-[clamp(2.5rem,5vw,5.5rem)] font-medium leading-[1.05] text-background mb-6">
              Software built
              <br />
              <span className="italic font-light">to outlast trends.</span>
            </h1>
            <p className="max-w-xl text-background/80 leading-relaxed mb-8 text-lg">
              Mission-critical engineering for insurance, fintech, and media.
              Based in Vilnius, serving clients internationally.
            </p>
            <div className="flex gap-3">
              <a
                href="#work"
                className="px-5 py-2.5 rounded-full bg-background text-foreground text-sm hover:opacity-90 transition-opacity"
              >
                See work
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full border border-background/40 text-background text-sm hover:border-background transition-colors"
              >
                Get in touch
              </a>
            </div>
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
    <section className="py-6 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <span className="eyebrow shrink-0">Trusted by</span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {clients.map((name) => (
              <span
                key={name}
                className="font-display text-xl md:text-2xl text-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
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
    <section className="hairline border-y border-border py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-16 will-change-transform">
        {[...items, ...items, ...items].map((s, i) => (
          <span
            key={i}
            className="text-display text-3xl md:text-5xl font-light text-foreground/80"
          >
            {s} <span className="inline-block mx-6 text-foreground/30">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function AI() {
  return (
    <section id="ai" className="py-28 lg:py-36 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-6">§ Intelligence</div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-medium max-w-4xl">
              AI that earns its place in your product.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
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
          ].map((item, i) => (
            <article
              key={i}
              className="bg-background p-8 lg:p-10 min-h-[280px] flex flex-col justify-between group hover:bg-secondary transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-2xl md:text-3xl leading-tight">
                  {item.title}
                </h3>
                <span className="block w-8 h-px bg-foreground/40 mt-5 group-hover:w-16 transition-all" />
              </div>
              <p className="mt-8 text-muted-foreground leading-relaxed text-[15px]">
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
    <section id="practice" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-6">§ Practice</div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-medium max-w-3xl">
              Three quiet disciplines, practiced with attention.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {SERVICES.map((s) => (
            <article
              key={s.no}
              className="bg-background p-8 lg:p-10 min-h-[320px] flex flex-col justify-between group hover:bg-secondary transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="eyebrow">{s.no}</span>
                <span className="block w-8 h-px bg-foreground/40 mt-3 group-hover:w-16 transition-all" />
              </div>
              <div className="mt-16">
                <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="eyebrow mb-6">§ Selected work</div>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-medium">
              Proven results.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A selection of recent engagements across insurance, fintech,
            infrastructure, compliance, and AI. Delivered on scope and on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {WORK.map((w, i) => (
            <a href="#contact" key={i} className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-background mb-5">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover blur-[1px] grayscale transition-all duration-[1200ms] group-hover:scale-105 group-hover:blur-0 group-hover:grayscale-0"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <div className="font-display text-lg">{w.client}</div>
                <div className="eyebrow !text-xs">{w.year}</div>
              </div>
              <div className="text-muted-foreground text-sm leading-relaxed">
                {w.title}
              </div>
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="eyebrow !text-[10px] px-2 py-1 border border-border rounded-full">
                  {w.discipline}
                </span>
                <span className="eyebrow !text-[10px] px-2 py-1 border border-border rounded-full">
                  {w.region}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Company() {
  return (
    <section id="company" className="py-28 lg:py-36 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="eyebrow mb-6">§ Company</div>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.02]">
              Built on precision. Trusted by results.
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-md">
              Since 2016, Modakoda has delivered mission-critical software for
              companies in six countries. We partner with a select number of
              clients each year — the kind whose products outlast the trends
              around them.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-t border-b border-border">
              {PRINCIPLES.map(([h, b]) => (
                <li
                  key={h}
                  className="py-8 grid grid-cols-[auto_1fr] md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-baseline"
                >
                  <div className="font-display text-xl md:text-2xl">{h}</div>
                  <p className="text-muted-foreground leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                ["09", "Years building"],
                ["40+", "Shipped products"],
                ["6", "Countries served"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-display text-4xl md:text-5xl font-medium">
                    {n}
                  </div>
                  <div className="eyebrow mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 lg:py-36 bg-foreground text-background"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="eyebrow !text-background/60 mb-10">
          § Correspondence
        </div>
        <h2 className="text-display text-5xl md:text-7xl lg:text-8xl font-medium max-w-5xl">
          Have something
          <br />
          worth building?
        </h2>
        <p className="mt-8 max-w-xl text-background/70 text-lg leading-relaxed">
          We accept a select number of new engagements each quarter. Tell us
          about your product, your team, and the problem you are trying to
          solve. We typically respond within one business day.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-background/15 pt-10">
          <div>
            <div className="eyebrow !text-background/50 mb-3">
              Project enquiries
            </div>
            <a
              href="mailto:info@modakoda.com"
              className="font-display text-xl md:text-2xl underline underline-offset-4 decoration-background/30 hover:decoration-background"
            >
              info@modakoda.com
            </a>
          </div>
          <div>
            <div className="eyebrow !text-background/50 mb-3">Company</div>
            <div className="font-display text-xl md:text-2xl">
              Vilnius, Lithuania
            </div>
          </div>
          <div>
            <div className="eyebrow !text-background/50 mb-3">Hours</div>
            <div className="font-display text-xl md:text-2xl">Mon — Fri</div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      className="inline-flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
      title="Click to copy"
    >
      <span>{value}</span>
      {copied ? (
        <span className="text-emerald-500 text-[10px] uppercase tracking-wider">
          Copied
        </span>
      ) : (
        <svg
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
    </button>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          <div>© {new Date().getFullYear()} Modakoda. All rights reserved.</div>
          <div className="mt-1 text-muted-foreground/70 flex items-center gap-2">
            <span>
              Reg. code <CopyableValue value="304307868" />
            </span>
            <span className="opacity-30">·</span>
            <span>
              VAT <CopyableValue value="LT100012594513" />
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <CopyableValue value="info@modakoda.com" />
        </div>
      </div>
    </footer>
  );
}
