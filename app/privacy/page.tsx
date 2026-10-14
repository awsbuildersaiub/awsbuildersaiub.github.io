import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AWS Student Builder Group AIUB",
  description:
    "Privacy Policy for the AWS Student Builder Group at American International University-Bangladesh (AIUB).",
};

export default function PrivacyPage() {
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
        <div className="kicker">Legal & Transparency</div>
        <h1 className="heading-builder" style={{ fontSize: "clamp(36px, 6vw, 64px)", margin: "20px 0 24px" }}>
          Privacy <span>Policy</span>
        </h1>
        <p className="tiny-note" style={{ marginTop: 0, marginBottom: "36px" }}>
          LAST UPDATED: OCTOBER 2026 &nbsp; / &nbsp; AIUB STUDENT CHAPTER
        </p>

        <div style={{ fontSize: "14px", lineHeight: "1.8", color: "#3e3f38" }} className="legal-content">
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              1. Overview
            </h2>
            <p>
              The <strong>AWS Student Builder Group — AIUB</strong> is an independent student-led university community
              at the American International University-Bangladesh (AIUB). We respect the privacy of all student members,
              attendees, and visitors. This Privacy Policy outlines what information we collect, why we collect it, and
              how it is safeguarded.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              2. Information We Collect
            </h2>
            <p>
              When you interact with our chapter—such as registering for workshops, joining study jams, or connecting to
              our community channels—we may collect minimal necessary information, including:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li><strong>Contact Information:</strong> Your full name, AIUB student email (e.g. <code>@student.aiub.edu</code>), and student ID for university event verification.</li>
              <li><strong>Academic Details:</strong> Department (e.g. CSE, EEE, CSSE) and academic semester to tailor relevant cloud learning tracks.</li>
              <li><strong>Event RSVP Data:</strong> Session interests, lab attendance records, and certification goal preferences.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              3. How We Use Your Information
            </h2>
            <p>
              All information collected is used strictly for non-commercial, educational community purposes:
            </p>
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li>Notifying you about upcoming AIUB campus workshops, hackathons, and guest lectures.</li>
              <li>Issuing AWS Skill Builder lab credentials, sandbox access, or event attendance certificates.</li>
              <li>Coordinating certification cohorts and exam voucher distribution.</li>
              <li>We <strong>never sell, rent, or monetize</strong> student data under any circumstances.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              4. Third-Party Services & Links
            </h2>
            <p>
              Our website and communication channels contain links to external platforms, such as the official{" "}
              <a href="https://builder.aws.com/" target="_blank" rel="noreferrer" style={{ color: "var(--orange)", textDecoration: "underline" }}>
                AWS Builder Center
              </a>, our{" "}
              <a href="https://www.facebook.com/AWSBuildersAIUB" target="_blank" rel="noreferrer" style={{ color: "var(--orange)", textDecoration: "underline" }}>
                Official Facebook Page
              </a>, Discord, and AIUB official portals. We do not control and are not responsible for the privacy practices of external websites. We encourage you to review their respective privacy policies.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              5. Data Retention & Deletion
            </h2>
            <p>
              We retain participant information only for as long as necessary to conduct the educational activities of the
              chapter. You may request deletion or correction of your registration details at any time by contacting the
              student executive committee.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "10px" }} className="heading-builder">
              6. Contact Us
            </h2>
            <p>
              For any questions regarding this Privacy Policy or chapter data practices, reach out via our official Facebook community page:{" "}
              <a
                href="https://www.facebook.com/AWSBuildersAIUB"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--orange)", textDecoration: "underline", fontWeight: "600" }}
              >
                facebook.com/AWSBuildersAIUB
              </a>{" "}
              or connect with the chapter leads on the AIUB Permanent Campus in Kuratoli, Dhaka.
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
