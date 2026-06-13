import Image from "next/image";

const interests = ["Formal methods", "Formal modeling", "Visualizations"];

const socials = [
  { label: "Email", href: "mailto:yiliangl@andrew.cmu.edu", icon: EmailIcon },
  {
    label: "GitHub",
    href: "https://github.com/liangyiliang",
    icon: GitHubIcon,
  },
];

const news = [
  {
    date: "Mar 2026",
    text: 'Our paper, "Visual Consistency in Formal Modeling: An Empirical Evaluation," has been accepted into the TOSEM journal!',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Profile header */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
        <div className="shrink-0">
          <div className="w-36 h-36 rounded-full overflow-hidden bg-[--surface] border border-[--border]">
            <Image
              src="/profile-picture.jpg"
              alt="Yiliang Liang"
              width={144}
              height={144}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-1">
          <div>
            <h1 className="text-2xl font-bold text-[--fg]">Yiliang Liang</h1>
            <p className="text-[--fg-muted] mt-1">
              PhD Student · Software Engineering · Carnegie Mellon University
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[--fg-muted] hover:text-accent transition-colors"
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-[--fg] mb-3">About</h2>
        <div className="text-[--fg-muted] space-y-3 leading-relaxed">
          <p>
            Welcome! I am a PhD student in the{" "}
            <a
              href="https://s3d.cmu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              Software Societal Systems Department (S3D)
            </a>{" "}
            at{" "}
            <a
              href="https://www.cmu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              Carnegie Mellon University (CMU)
            </a>
            , advised by{" "}
            <a href="https://eskang.github.io/" className="text-accent">
              Prof. Eunsuk Kang
            </a>{" "}
            and{" "}
            <a href="https://www.cs.cmu.edu/~jssunshi/" className="text-accent">
              Prof. Joshua Sunshine
            </a>
            . My research focuses on the intersection of <b>formal methods</b>,{" "}
            <b>software engineering</b>, and <b>HCI</b>, including making formal
            methods more approachable for stakeholders. In particular, I have
            been exploring the roles that visualizations play in helping
            stakeholders understand, debug, and communicate formal methods
            artifacts (
            <a
              href="https://kilthub.cmu.edu/ndownloader/files/54600830"
              className="text-accent"
            >
              PLATEAU'25
            </a>
            ,{" "}
            <a href="papers/plateau-2026.pdf" className="text-accent">
              '26
            </a>
            , and{" "}
            <a
              href="https://dl.acm.org/doi/10.1145/3809502"
              className="text-accent"
            >
              TOSEM'26
            </a>
            ).
          </p>
          <p>
            Before CMU, I received my B.S. in Computer Science and Data Science
            from the University of Michigan, Ann Arbor. At CMU, I also worked on{" "}
            <a href="https://penrose.cs.cmu.edu/" className="text-accent">
              Penrose
            </a>
            , a programming language and tool that turns plaintext declarative
            descriptions into beautiful diagrams, which I have been
            incorporating into my research on formal methods visualizations.
          </p>
        </div>
      </section>

      {/* Research interests */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-[--fg] mb-3">
          Research Interests
        </h2>
        <ul className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <li
              key={interest}
              className="px-3 py-1 rounded-full text-sm bg-[--surface] text-[--fg-muted] border border-[--border]"
            >
              {interest}
            </li>
          ))}
        </ul>
      </section>

      {/* Fun Facts */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-[--fg] mb-3">Fun Facts</h2>

        <div className="text-[--fg-muted] space-y-3 leading-relaxed">
          <p>
            I like traveling, and I particularly enjoy flying on planes and
            taking ridiculous flight itineraries. I also collecting things like
            boarding passes and passport stamps.
          </p>
        </div>
      </section>

      {/* News */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-[--fg] mb-3">News</h2>
        <ul className="space-y-2">
          {news.map((item) => (
            <li key={item.date + item.text} className="flex gap-4 text-sm">
              <span className="shrink-0 text-[--fg-muted] font-mono w-20">
                {item.date}
              </span>
              <span className="text-[--fg-muted]">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function EmailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
