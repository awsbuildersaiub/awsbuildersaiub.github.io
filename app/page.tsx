import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrap" id="top">
      <header>
        <a className="brand" href="#top" aria-label="AWS Student Builder Group AIUB home">
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
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#what-we-do">What we do</a>
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

      <main>
        <section className="hero" id="hero">
          <div>
            <div className="kicker">A student-led builder community</div>
            <h1 className="heading-builder">
              Coming <span>Soon...</span>
            </h1>
            <p className="intro">
              A new community for AIUB students who want to get hands-on with
              cloud technology, make useful things, and learn alongside people
              who are figuring it out too.
            </p>
            <div className="actions">
              <a
                className="button"
                href="https://builder.aws.com/"
                target="_blank"
                rel="noreferrer"
              >
                Explore AWS Builder Center <span>↗</span>
              </a>
              <a className="text-link" href="#what-we-do">
                What we&apos;re about ↓
              </a>
            </div>
            <p className="tiny-note">
              COMING SOON &nbsp; / &nbsp; BUILT AROUND CURIOSITY
            </p>
          </div>

          <aside className="art" aria-label="Illustrated code terminal">
            <div className="art-top">
              <span>AIUB / BUILDER LOG</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Image
                  src="https://awssbggeu.com/aws_smile_dark.png"
                  alt="AWS"
                  width={20}
                  height={12}
                  style={{ objectFit: "contain", height: "12px", width: "auto" }}
                />
                <span>001—BD</span>
              </span>
            </div>
            <div className="terminal">
              <div className="terminal-bar">
                <i />
                <i />
                <i />
                <div className="terminal-label">
                  <Image
                    src="https://awssbggeu.com/aws_smile_white.png"
                    alt="AWS"
                    width={22}
                    height={14}
                    className="terminal-aws-logo"
                  />
                  <span>first-build.sh</span>
                </div>
              </div>
              <div className="code">
                <span className="dim">01</span> &nbsp;
                <span className="prompt">$</span>{" "}
                <span className="orange">learn</span> --by-doing
              </div>
              <div className="code">
                <span className="dim">02</span> &nbsp;
                <span className="prompt">$</span>{" "}
                <span className="orange">build</span> something-useful
              </div>
              <div className="code">
                <span className="dim">03</span> &nbsp;
                <span className="prompt">$</span>{" "}
                <span className="lime">share</span> what-you-learn
              </div>
              <div className="code">
                <span className="dim">04</span> &nbsp;
                <span className="prompt">$</span>{" "}
                <span className="lime">repeat</span>
                <span className="cursor" />
              </div>
            </div>
            <div className="art-bottom">
              <span>Curiosity → capability</span>
              <span>● system ready</span>
            </div>
          </aside>
        </section>

        <section
          className="ticker"
          id="what-we-do"
          aria-label="What the community is about"
        >
          <article className="item">
            <div className="num">01 /</div>
            <div>
              <h2>Learn by doing</h2>
              <p>
                Friendly sessions and practical cloud fundamentals. No one needs
                to know everything before getting started.
              </p>
            </div>
          </article>
          <article className="item">
            <div className="num">02 /</div>
            <div>
              <h2>Make real things</h2>
              <p>
                Small experiments, side projects, and collaborative builds that
                move beyond another slide deck.
              </p>
            </div>
          </article>
          <article className="item">
            <div className="num">03 /</div>
            <div>
              <h2>Grow together</h2>
              <p>
                Share what works, ask better questions, and find other students
                who are excited to build.
              </p>
            </div>
          </article>
        </section>

        <section className="closing" id="about">
          <h2 className="heading-builder">
            Your first cloud project doesn&apos;t have to be <span>big.</span>
            <br />
            It just has to start.
          </h2>
          <div className="closing-side">
            We&apos;re getting the community ready. Connect with us on our{" "}
            <a
              href="https://www.facebook.com/AWSBuildersAIUB"
              target="_blank"
              rel="noreferrer"
            >
              Facebook Page ↗
            </a>{" "}
            or explore the AWS Builder Center and start following your curiosity.
            <br />
            <br />
            <a
              href="https://builder.aws.com/"
              target="_blank"
              rel="noreferrer"
            >
              Find your next thing to build ↗
            </a>
          </div>
        </section>
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
          <a
            href="https://www.facebook.com/AWSBuildersAIUB"
            target="_blank"
            rel="noreferrer"
          >
            FACEBOOK ↗
          </a>
          <Link href="/privacy">PRIVACY</Link>
          <Link href="/terms">T&amp;C</Link>
          <a href="https://www.aiub.edu/" target="_blank" rel="noreferrer">
            AIUB ↗
          </a>
          <a
            href="https://builder.aws.com/"
            target="_blank"
            rel="noreferrer"
          >
            AWS BUILDER CENTER ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
