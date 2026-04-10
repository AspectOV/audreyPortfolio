"use client";

import { useEffect, useState } from "react";

const sections = [
  {
    id: "home",
    title: "Audrey Hayes",
    subtitle: "Realtor",
    body: "Helping families find the right place to call home with local insight, clear communication, and care from first showing to closing day.",
    button: "Schedule a Conversation",
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
    body: "Email: hello@audreyhayesrealty.com\nPhone: (555) 123-0182\nServing clients with honest advice and dependable follow-through.",
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
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={active === section.id ? "active" : ""}
            >
              {section.subtitle}
            </a>
          ))}
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
            {section.button ? <button>{section.button}</button> : null}
          </div>
        </section>
      ))}
    </main>
  );
}
