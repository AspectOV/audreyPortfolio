import type { Metadata } from "next";
import Link from "next/link";

const audreyEmail = "Audrey@audreyhayesrealty.com";
const supportEmail = "Jeremy@jeremymhayes.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Audrey Hayes Realty",
  description: "Privacy policy for Audrey Hayes Realty.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="subpage privacy-page">
      <header className="topbar">
        <Link className="brand" href="/">
          Audrey Hayes Realty
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link className="active" href="/privacy-policy">
            Privacy
          </Link>
        </nav>
      </header>

      <section className="subpage-hero privacy-hero">
        <div className="overlay" />
        <div className="content">
          <p className="kicker">Privacy Policy</p>
          <h1>Your privacy matters.</h1>
          <p className="body">
            This policy explains how Audrey Hayes Realty handles information shared
            through this website and related email contact.
          </p>
        </div>
      </section>

      <section className="policy-band">
        <article className="policy-article">
          <p className="updated">Last updated April 10, 2026</p>

          <h2>Information We Collect</h2>
          <p>
            This website does not currently collect submissions through an on-site
            form. If you choose to email Audrey Hayes Realty, the information in your
            message may include your name, email address, phone number, real estate
            interests, and anything else you decide to share.
          </p>
          <p>
            The website may also process basic technical information, such as browser
            type, device information, pages visited, and request data used by hosting,
            security, and performance services.
          </p>

          <h2>How Information Is Used</h2>
          <p>
            Information is used to respond to inquiries, provide real estate guidance,
            maintain the website, troubleshoot technical issues, and protect the site
            from misuse.
          </p>

          <h2>Sharing</h2>
          <p>
            Personal information is not sold or rented. Information may be shared with
            service providers that help operate the website or email communication, or
            when required to comply with legal obligations.
          </p>

          <h2>Retention And Choices</h2>
          <p>
            Messages and related contact information are kept only as long as needed
            for business, support, or legal purposes. You can request an update or
            deletion of your contact information by using the website support email
            below.
          </p>

          <h2>Contact</h2>
          <p>
            For real estate inquiries, email{" "}
            <a href={`mailto:${audreyEmail}`}>{audreyEmail}</a>. For website support
            or privacy questions, email{" "}
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
          </p>
        </article>
      </section>
    </main>
  );
}
