"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const audreyEmail = "Audrey@audreyhayesrealty.com";

const sections = [
  {
    id: "home",
    title: "Audrey Hayes",
    subtitle: "Realtor",
    body: "Helping families find the right place to call home with local insight, clear communication, and care from first showing to closing day.",
    button: "Schedule a Conversation",
    buttonHref: `mailto:${audreyEmail}?subject=Real%20estate%20conversation`,
  },
  {
    id: "approach",
    title: "A thoughtful process",
    subtitle: "Guidance at every step",
    body: "Whether you are buying your first home, relocating, or preparing to sell, Audrey builds a plan around your timeline and goals so each decision feels steady and informed.",
  },
  {
    id: "market",
    title: "Neighborhood knowledge",
    subtitle: "From streets to schools",
    body: "Audrey studies market movement and neighborhood character so you understand not just the listing, but the lifestyle and long-term value around it.",
  },
  {
    id: "contact",
    title: "Let’s start your next move",
    subtitle: "Reach Audrey directly",
    body: `Email: ${audreyEmail}\nServing clients with honest advice and dependable follow-through.`,
    button: "Contact Audrey",
    buttonHref: "/contact",
  },
];

export default function HomePage() {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    const items = document.querySelectorAll("section[data-scroll]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="topbar">
        <span className="brand">Audrey Hayes Realty</span>
        <nav>
          <Link href="/">Home</Link>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={active === section.id ? "active" : ""}
            >
              {section.subtitle}
            </a>
          ))}
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy</Link>
        </nav>
      </header>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          data-scroll
          className={`panel panel-${index + 1}`}
        >
          <div className="overlay" />
          <div className="content">
            <p className="kicker">{section.subtitle}</p>
            <h1>{section.title}</h1>
            <p className="body">{section.body}</p>
            {section.button && section.buttonHref?.startsWith("/") ? (
              <Link className="button-link" href={section.buttonHref}>
                {section.button}
              </Link>
            ) : section.button && section.buttonHref ? (
              <a className="button-link" href={section.buttonHref}>
                {section.button}
              </a>
            ) : null}
          </div>
        </section>
      ))}
    </main>
  );
}
