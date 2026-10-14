import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — AWS Student Builder Group AIUB",
  description:
    "Terms and Conditions of participation in the AWS Student Builder Group at American International University-Bangladesh (AIUB).",
};

export default function TermsPage() {
  return (
    <div className="wrap" id="top">
      <header>
        <Link className="brand" href="/" aria-label="AWS Student Builder Group AIUB home">
          <Image
            src="https://awssbggeu.com/aws_sbg_mark_dark.png"
            alt="AWS Student Builder Group Mark"
            width={36}
            height={36}
            className="brand-mark-img"
            priority
          />
          <div className="brand-copy">
            AWS Student Builder Group
            <small>AIUB · Bangladesh</small>
          </div>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">← Back to Home</Link>
          <a
            href="https://www.facebook.com/AWSBuildersAIUB"
            target="_blank"
            rel="noreferrer"
          >
            Facebook ↗
          </a>
          <a
            className="nav-cta"
            href="https://builder.aws.com/"
            target="_blank"
            rel="noreferrer"
          >
            AWS Builder Center ↗
          </a>
        </nav>
      </header>

      <main style={{ padding: "64px 0 80px", maxWidth: "780px" }}>
        <div className="kicker">Community Guidelines & Legal</div>
        <h1 className="heading-builder" style={{ fontSize: "clamp(36px, 6vw, 64px)", margin: "20px 0 24px" }}>
          Terms & <span>Conditions</span>
        </h1>
        <p className="tiny-note" style={{ marginTop: 0, marginBottom: "36px" }}>
          EFFECTIVE DATE: OCTOBER 2026 &nbsp; / &nbsp; AIUB STUDENT CHAPTER
        </p>

        <div style={{ fontSize: "14px", lineHeight: "1.8", color: "#3e3f38" }} className="legal-content">
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              1. Chapter Status & Affiliation
            </h2>
            <p>
              The <strong>AWS Student Builder Group — AIUB</strong> is an independent, student-run technical community
              operated by students of American International University-Bangladesh (AIUB). While our activities are
              supported by Amazon Web Services student community initiatives, we are an independent campus organization
              and not an official legal entity of Amazon.com, Inc. or AIUB administration.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              2. Eligibility & Membership
            </h2>
            <p>
              Membership is free and open to all actively enrolled undergraduate and graduate students of AIUB across all
              departments (including CSE, CSSE, SE, EEE, CoE, BBA, and related disciplines). Members must maintain
              academic honesty and follow the university&apos;s student code of conduct.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              3. Code of Conduct & Inclusive Environment
            </h2>
            <p>
              We are committed to providing a welcoming, harassment-free environment for all student builders, regardless of
              experience level, gender, academic standing, or background. We expect all attendees and members to:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li>Be respectful, collaborative, and constructive during study jams and discord/social discussions.</li>
              <li>Encourage peer learning and assist fellow AIUBians who are new to cloud computing.</li>
              <li>Report any disruptive or inappropriate behavior immediately to community leads.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              4. Responsible Use of Cloud Sandboxes & Resources
            </h2>
            <p>
              Temporary AWS sandbox credentials, credits, or workshop accounts provided through the chapter must be used
              strictly for educational workshop objectives. Prohibited actions include:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li>Cryptocurrency mining, stress-testing, or launching unauthorized network traffic.</li>
              <li>Storing private personal data or deploying production commercial systems on student sandbox accounts.</li>
              <li>Sharing or transferring assigned credentials outside authorized event attendees.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              5. Intellectual Property
            </h2>
            <p>
              Students retain full ownership of any code, capstone projects, or architectures they build during chapter
              hackathons and study jams. Open-source contributions are encouraged under standard permissive licenses (MIT / Apache 2.0).
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              6. Updates & Inquiries
            </h2>
            <p>
              These Terms & Conditions may be updated periodically to reflect chapter growth and event guidelines.
              Stay connected and message our executive leads through our official Facebook page:{" "}
              <a
                href="https://www.facebook.com/AWSBuildersAIUB"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--orange)", textDecoration: "underline", fontWeight: "600" }}
              >
                facebook.com/AWSBuildersAIUB
              </a>.
            </p>
          </section>
        </div>

        <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--line)" }}>
          <Link href="/" className="button">
            ← Return to Home
          </Link>
        </div>
      </main>

      <footer>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image
            src="https://awssbggeu.com/aws_sbg_mark_transparent.png"
            alt="AWS Student Builder Group"
            width={22}
            height={22}
            style={{ width: "22px", height: "22px", objectFit: "contain" }}
          />
          <span>AWS STUDENT BUILDER GROUP — AIUB</span>
        </div>
        <div>INDEPENDENT STUDENT COMMUNITY · COMING SOON</div>
        <div className="footer-links">
          <a href="https://www.facebook.com/AWSBuildersAIUB" target="_blank" rel="noreferrer">
            FACEBOOK ↗
          </a>
          <a href="https://www.aiub.edu/" target="_blank" rel="noreferrer">
            AIUB ↗
          </a>
          <a href="https://builder.aws.com/" target="_blank" rel="noreferrer">
            AWS BUILDER CENTER ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
