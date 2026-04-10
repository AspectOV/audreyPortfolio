import type { Metadata } from "next";
import Link from "next/link";

const audreyEmail = "Audrey@audreyhayesrealty.com";
const supportEmail = "Jeremy@jeremymhayes.com";

export const metadata: Metadata = {
  title: "Contact | Audrey Hayes Realty",
  description: "Contact Audrey Hayes Realty for real estate inquiries or website support.",
};

export default function ContactPage() {
  return (
    <main className="subpage contact-page">
      <header className="topbar">
        <Link className="brand" href="/">
          Audrey Hayes Realty
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link className="active" href="/contact">
            Contact
          </Link>
          <Link href="/privacy-policy">Privacy</Link>
        </nav>
      </header>

      <section className="subpage-hero contact-hero">
        <div className="overlay" />
        <div className="content">
          <p className="kicker">Contact Audrey Hayes Realty</p>
          <h1>Let’s talk through the next move.</h1>
          <p className="body">
            For buying, selling, or a local market question, reach Audrey directly.
          </p>
          <div className="action-row">
            <a className="button-link" href={`mailto:${audreyEmail}`}>
              Email Audrey
            </a>
            <a className="button-link secondary" href={`mailto:${supportEmail}`}>
              Website support
            </a>
          </div>
        </div>
      </section>

      <section className="detail-band">
        <div className="detail-grid">
          <div className="detail-copy">
            <p className="kicker dark">Real estate inquiries</p>
            <h2>Audrey Hayes</h2>
            <a className="contact-link" href={`mailto:${audreyEmail}`}>
              {audreyEmail}
            </a>
            <p>
              Send a note about your timeline, the kind of move you are considering,
              and the best way to reach you.
            </p>
          </div>

          <div className="detail-copy">
            <p className="kicker dark">Website support</p>
            <h2>Jeremy Hayes</h2>
            <a className="contact-link" href={`mailto:${supportEmail}`}>
              {supportEmail}
            </a>
            <p>
              Use this address for website issues, broken links, privacy questions,
              or technical support requests.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
