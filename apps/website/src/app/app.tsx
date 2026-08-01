import { FormEvent, useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import './app.css';

type Service = {
  eyebrow: string;
  title: string;
  summary: string;
  path: string;
  mark: string;
  outcomes: string[];
};

const services: Service[] = [
  {
    eyebrow: '01 / AI transformation',
    title: 'AI Strategy and Implementation',
    summary:
      'Move beyond disconnected experiments with valuable use cases, responsible roadmaps, AI-enabled products, and workflow automation.',
    path: '/ai-consulting',
    mark: 'AI',
    outcomes: [
      'Clear AI roadmaps',
      'Workflow automation',
      'Responsible adoption',
    ],
  },
  {
    eyebrow: '02 / Digital products',
    title: 'Custom Software and Product Development',
    summary:
      'Design and build scalable web applications, internal platforms, SaaS products, and enterprise tools that are ready to grow.',
    path: '/software-development',
    mark: '</>',
    outcomes: [
      'Production-ready software',
      'Scalable architecture',
      'Faster delivery',
    ],
  },
  {
    eyebrow: '03 / Engineering organizations',
    title: 'Engineering Leadership and Advisory',
    summary:
      'Strengthen technical strategy, team design, delivery systems, hiring, and leadership through experienced fractional support.',
    path: '/engineering-leadership',
    mark: 'EL',
    outcomes: [
      'Clearer accountability',
      'Predictable delivery',
      'Stronger leaders',
    ],
  },
  {
    eyebrow: '04 / Ideas in motion',
    title: 'Keynotes and Workshops',
    summary:
      'Engaging, practical sessions on AI, engineering leadership, resilience, innovation, career growth, and leading through change.',
    path: '/speaking',
    mark: '↗',
    outcomes: [
      'Leadership alignment',
      'Motivated teams',
      'Actionable next steps',
    ],
  },
];

const navItems = [
  ['What We Do', '/services'],
  ['AI Consulting', '/ai-consulting'],
  ['Software', '/software-development'],
  ['Leadership', '/engineering-leadership'],
  ['Speaking', '/speaking'],
  ['About', '/about'],
  ['Insights', '/insights'],
];

const engagementModels = [
  [
    'Strategy Sprint',
    '2–4 weeks',
    'Clarity before a major technology or AI investment.',
  ],
  [
    'AI Opportunity Assessment',
    '2–6 weeks',
    'Find and prioritize the AI opportunities with real business value.',
  ],
  [
    'MVP and Product Build',
    '8–20 weeks',
    'Move from product strategy and architecture through build and launch.',
  ],
  [
    'Fractional Engineering Leadership',
    '3–12 months',
    'Senior technical and people leadership without a full-time executive hire.',
  ],
  [
    'Engineering Effectiveness Assessment',
    '3–6 weeks',
    'A focused review of delivery, quality, ownership, and developer experience.',
  ],
  [
    'Keynotes and Workshops',
    'Custom',
    'Purpose-built sessions for conferences, leaders, and team offsites.',
  ],
];

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="ThriveForward home">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
      </span>
      <span>
        <strong>ThriveForward</strong>
        <small>CONSULTING</small>
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`site-header ${scrolled || pathname !== '/' ? 'solid' : ''}`}
    >
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="button button-sm button-bright nav-cta" to="/contact">
          Book a strategy call <span>↗</span>
        </Link>
        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, path], index) => (
            <NavLink key={path} to={path}>
              <span>0{index + 1}</span> {label}
            </NavLink>
          ))}
          <NavLink to="/contact">
            <span>08</span> Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-brand">
          <Brand />
          <p>
            Technology strategy, practical AI, modern software, and engineering
            leadership for organizations ready to move forward.
          </p>
          <span>Nashville, Tennessee</span>
        </div>
        <div>
          <h3>Capabilities</h3>
          <Link to="/ai-consulting">AI consulting</Link>
          <Link to="/software-development">Software development</Link>
          <Link to="/engineering-leadership">Engineering leadership</Link>
          <Link to="/speaking">Speaking & workshops</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/about">About</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <div className="footer-action">
          <p>Have a complex challenge?</p>
          <Link to="/contact">
            Let’s move it forward <span>↗</span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {year} ThriveForward Consulting LLC</span>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

function NetworkVisual() {
  return (
    <div
      className="network-visual"
      aria-label="Connected technology systems illustration"
    >
      <div className="visual-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="core">
        <span>TF</span>
        <small>
          FORWARD
          <br />
          SYSTEM
        </small>
      </div>
      <span className="node node-a">01</span>
      <span className="node node-b">AI</span>
      <span className="node node-c">DX</span>
      <span className="node node-d">∞</span>
      <div className="signal signal-a" />
      <div className="signal signal-b" />
      <div className="visual-readout">
        <i /> SYSTEMS CONNECTED <strong>04</strong>
      </div>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-intro ${light ? 'light' : ''}`}>
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {copy && <p className="lead">{copy}</p>}
    </div>
  );
}

function HomePage() {
  const challenges = [
    'Your AI strategy is still a collection of disconnected experiments.',
    'Your engineering organization has grown faster than its leadership systems.',
    'Your teams are busy, but delivery remains unpredictable.',
    'Your product idea is strong, but the technical path is unclear.',
    'Legacy technology is slowing down innovation and growth.',
    'Your technical talent lacks alignment, ownership, and direction.',
  ];
  const differentiators = [
    [
      'Strategy + execution',
      'We translate recommendations into working systems, software, teams, and measurable outcomes.',
    ],
    [
      'Technology + leadership',
      'Transformation needs excellent code, aligned teams, capable leaders, and clear priorities.',
    ],
    [
      'Enterprise experience',
      'We understand complex organizations, regulated environments, and high-traffic platforms.',
    ],
    [
      'Practical AI',
      'We connect responsible AI use cases to specific business challenges and valuable outcomes.',
    ],
    [
      'Founder-led engagement',
      'Clients receive direct access to senior expertise from discovery through delivery.',
    ],
    [
      'Sustainable transformation',
      'We leave teams with systems they can maintain, scale, and improve.',
    ],
  ];

  return (
    <>
      <section className="hero dark-section">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span />
              Strategy · Technology · Leadership
            </p>
            <h1>
              Build Better Technology.
              <br />
              Lead Stronger Teams.
              <br />
              <em>Move Forward Faster.</em>
            </h1>
            <p className="hero-lead">
              ThriveForward helps organizations design scalable software,
              implement practical AI, modernize complex systems, and build
              engineering teams capable of delivering lasting results.
            </p>
            <div className="hero-actions">
              <Link className="button button-bright" to="/contact">
                Book a strategy call <span>↗</span>
              </Link>
              <Link className="button button-ghost" to="/services">
                Explore our capabilities <span>↓</span>
              </Link>
            </div>
            <p className="trust-line">
              <i /> Strategy, technology, and leadership built for meaningful
              transformation.
            </p>
          </div>
          <NetworkVisual />
        </div>
        <div className="hero-index">
          <span>01</span>
          <i />
          <span>THRIVE FORWARD / 2026</span>
        </div>
      </section>

      <section className="credibility band">
        <div className="container">
          <div className="credibility-copy">
            <p className="eyebrow">
              <span />
              Enterprise experience
            </p>
            <h2>
              Modern execution, informed by experience inside complex
              organizations.
            </h2>
            <p>
              Experience delivering technology and engineering leadership across
              organizations including Nike, Optum, GE, Comcast, and Marriott. No
              endorsement implied.
            </p>
          </div>
          <div
            className="logo-cloud"
            aria-label="Organizations represented in founder experience"
          >
            {['NIKE', 'optum', 'GE', 'COMCAST', 'MARRIOTT'].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          <p className="industry-line">
            Healthcare <i /> Hospitality <i /> Retail <i /> Media <i />{' '}
            Enterprise platforms <i /> Consumer technology
          </p>
        </div>
      </section>

      <section className="section capabilities" id="capabilities">
        <div className="container">
          <SectionIntro
            eyebrow="What we do"
            title="From strategy to execution."
            copy="We solve the technical, operational, and leadership challenges that prevent strong ideas from becoming successful products and sustainable businesses."
          />
          <div className="capability-grid">
            {services.map((service) => (
              <article className="capability-card" key={service.path}>
                <div className="capability-top">
                  <span>{service.eyebrow}</span>
                  <b>{service.mark}</b>
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <Link to={service.path}>
                  Explore capability <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section challenge-section dark-section">
        <div className="container challenge-layout">
          <div>
            <SectionIntro
              light
              eyebrow="The challenge"
              title="Complex challenges require more than generic advice."
            />
            <p className="challenge-close">
              We turn uncertainty into strategy, strategy into execution, and
              execution into measurable progress.
            </p>
            <Link className="text-link light" to="/contact">
              Discuss your challenge <span>↗</span>
            </Link>
          </div>
          <div className="challenge-list">
            {challenges.map((challenge, index) => (
              <div key={challenge}>
                <span>0{index + 1}</span>
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <SectionIntro
            eyebrow="Why ThriveForward"
            title="Senior-level expertise without traditional consulting overhead."
            copy="The depth to advise executives. The technical fluency to guide teams. The accountability to help deliver the work."
          />
          <div className="differentiator-grid">
            {differentiators.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section engagements">
        <div className="container">
          <SectionIntro
            eyebrow="Ways to work together"
            title="Flexible engagements built around your goals."
          />
          <div className="engagement-list">
            {engagementModels.map(([title, duration, copy], index) => (
              <Link to="/contact" className="engagement-row" key={title}>
                <span className="engagement-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <strong>{duration}</strong>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-section">
        <div className="container">
          <SectionIntro
            eyebrow="Selected work"
            title="Turning complex challenges into forward progress."
            copy="Representative, anonymized engagement patterns. Verified outcomes will be published only with client approval."
          />
          <div className="case-grid">
            {[
              [
                'Platform modernization',
                'Modernizing a high-volume enterprise platform',
                'Architecture · Delivery · Quality',
              ],
              [
                'Organizational leadership',
                'Strengthening an engineering organization',
                'Team design · Coaching · Operations',
              ],
              [
                'Applied AI',
                'Turning a focused AI concept into a product plan',
                'Product strategy · AI · Architecture',
              ],
            ].map(([tag, title, caps], index) => (
              <article className="case-card" key={title}>
                <div className={`case-visual case-${index + 1}`}>
                  <span>0{index + 1}</span>
                  <i />
                </div>
                <p className="eyebrow">
                  <span />
                  {tag}
                </p>
                <h3>{title}</h3>
                <p>{caps}</p>
                <Link to="/contact">
                  Discuss a similar challenge <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FounderSection />

      <section className="section insights-preview">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="Perspectives"
              title="Insights for technology and business leaders."
            />
            <Link className="text-link" to="/insights">
              View all insights <span>↗</span>
            </Link>
          </div>
          <InsightGrid compact />
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function FounderSection() {
  return (
    <section className="section founder-section dark-section">
      <div className="container founder-grid">
        <div
          className="founder-portrait"
          role="img"
          aria-label="Professional portrait placeholder for Courtney Revada"
        >
          <div className="portrait-monogram">CR</div>
          <span>
            Portrait
            <br />
            forthcoming
          </span>
        </div>
        <div className="founder-copy">
          <p className="eyebrow">
            <span />
            Founder & principal
          </p>
          <h2>Technology leadership grounded in real-world execution.</h2>
          <p>
            Courtney Revada is a technology and engineering leader with
            experience building digital products, modernizing enterprise
            systems, leading engineering organizations, and translating
            ambitious ideas into executable strategies.
          </p>
          <p>
            He brings a rare combination of technical depth, executive
            communication, and people-centered leadership—from designing the
            solution to guiding the team and creating systems for sustainable
            delivery.
          </p>
          <div className="credentials">
            <span>Software & AI</span>
            <span>Engineering leadership</span>
            <span>Enterprise transformation</span>
          </div>
          <div className="inline-actions">
            <Link className="button button-bright" to="/about">
              Meet Courtney <span>↗</span>
            </Link>
            <a
              className="button button-ghost"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <p className="eyebrow">
          <span />
          Your next move
        </p>
        <h2>
          Your next stage of growth requires the right strategy, technology, and
          leadership.
        </h2>
        <p>
          Whether you are building a product, adopting AI, modernizing systems,
          or strengthening your engineering organization, we can help you move
          from uncertainty to execution.
        </p>
        <div>
          <Link className="button button-dark" to="/contact">
            Book a strategy call <span>↗</span>
          </Link>
          <Link className="text-link" to="/contact">
            Tell us about your challenge <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

const serviceDetails: Record<
  string,
  {
    eyebrow: string;
    title: string;
    intro: string;
    problems: string[];
    deliverables: string[];
    outcomes: string[];
    approach: string[];
    faq: [string, string][];
  }
> = {
  '/ai-consulting': {
    eyebrow: 'AI strategy and implementation',
    title: 'Make AI useful—not merely impressive.',
    intro:
      'We help leaders identify valuable use cases, test feasibility, build responsible roadmaps, and create AI-enabled workflows and products tied to measurable business needs.',
    problems: [
      'Disconnected pilots with no path to production',
      'Pressure to invest without a clear value case',
      'Uncertainty around data, risk, and responsible adoption',
    ],
    deliverables: [
      'AI opportunity portfolio',
      'Prioritized implementation roadmap',
      'Workflow prototypes and product concepts',
      'Risk and feasibility assessment',
    ],
    outcomes: [
      'Focused investment',
      'Faster validation',
      'Operational efficiency',
      'Responsible adoption',
    ],
    approach: [
      'Discover the business constraint',
      'Prioritize value and feasibility',
      'Prototype the highest-value path',
      'Scale with governance',
    ],
    faq: [
      [
        'Do we need an AI strategy first?',
        'Not always. We start with the business problem, then determine whether AI is the right tool and what level of strategy is useful.',
      ],
      [
        'Can you build the solution?',
        'Yes. Engagements can continue from assessment and prototype through production implementation.',
      ],
    ],
  },
  '/software-development': {
    eyebrow: 'Custom software development',
    title: 'Build the right product on a foundation designed to scale.',
    intro:
      'From validated MVPs to enterprise platforms, we combine product thinking, user experience, technical architecture, and hands-on delivery.',
    problems: [
      'A strong concept without a clear technical plan',
      'Legacy platforms restricting growth',
      'Delivery teams struggling with speed, quality, or architecture',
    ],
    deliverables: [
      'Product and delivery roadmap',
      'UX direction and technical architecture',
      'Production-ready web or SaaS application',
      'Testing, launch, and transition plan',
    ],
    outcomes: [
      'Faster product delivery',
      'Improved customer experience',
      'Scalable architecture',
      'A maintainable platform',
    ],
    approach: [
      'Frame the outcome',
      'Validate the experience',
      'Design the architecture',
      'Build, test, and launch',
    ],
    faq: [
      [
        'Do you work with existing teams?',
        'Yes. We can lead a build, augment an internal team, or provide architecture and delivery oversight.',
      ],
      [
        'Can you modernize an existing system?',
        'Yes. We favor practical, phased modernization that reduces risk while delivering incremental value.',
      ],
    ],
  },
  '/engineering-leadership': {
    eyebrow: 'Engineering leadership and advisory',
    title: 'Create an engineering organization built to deliver.',
    intro:
      'We help executives and engineering leaders strengthen strategy, accountability, operating systems, management capability, and team health.',
    problems: [
      'Growth outpacing leadership systems',
      'Unpredictable delivery and unclear ownership',
      'Managers lacking effective coaching and operating tools',
    ],
    deliverables: [
      'Engineering strategy and operating model',
      'Organization and role design',
      'Delivery health assessment',
      'Leadership coaching and hiring support',
    ],
    outcomes: [
      'Predictable delivery',
      'Stronger managers',
      'Clear accountability',
      'Healthier team culture',
    ],
    approach: [
      'Listen across the system',
      'Make constraints visible',
      'Design clear operating rhythms',
      'Coach leaders through adoption',
    ],
    faq: [
      [
        'What is fractional engineering leadership?',
        'Embedded senior leadership for organizations that need executive-level support without immediately making a full-time hire.',
      ],
      [
        'Do you replace existing leaders?',
        'Usually no. We strengthen and support executives, managers, and teams while filling specific leadership gaps.',
      ],
    ],
  },
};

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-hero dark-section">
      <div className="page-hero-grid" />
      <div className="container">
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <Link className="button button-bright" to="/contact">
          Start a conversation <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

function ServicePage({ path }: { path: keyof typeof serviceDetails }) {
  const detail = serviceDetails[path];
  return (
    <>
      <PageHero
        eyebrow={detail.eyebrow}
        title={detail.title}
        intro={detail.intro}
      />
      <section className="section service-problems">
        <div className="container split-section">
          <SectionIntro
            eyebrow="When to call us"
            title="The problems we help solve."
          />
          <div className="numbered-copy">
            {detail.problems.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section tint-section">
        <div className="container">
          <SectionIntro
            eyebrow="Our approach"
            title="Structured enough to create clarity. Flexible enough for reality."
          />
          <div className="process-grid">
            {detail.approach.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <i />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-column-lists">
          <div>
            <SectionIntro
              eyebrow="What you receive"
              title="Tangible deliverables."
            />
            <ul className="check-list">
              {detail.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionIntro
              eyebrow="Business impact"
              title="Outcomes that matter."
            />
            <ul className="check-list accent">
              {detail.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section dark-section service-model">
        <div className="container">
          <SectionIntro
            light
            eyebrow="Engagement model"
            title="A focused path from uncertainty to forward motion."
          />
          <div className="model-card">
            <div>
              <p>Recommended starting point</p>
              <h3>
                {path === '/ai-consulting'
                  ? 'AI Opportunity Assessment'
                  : path === '/software-development'
                    ? 'Product Strategy Sprint'
                    : 'Engineering Effectiveness Assessment'}
              </h3>
            </div>
            <p>
              We begin with focused discovery, surface the highest-leverage
              decisions, and leave you with a practical plan. When it makes
              sense, we stay to help execute it.
            </p>
            <Link className="button button-bright" to="/contact">
              Discuss your goals <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="Common questions"
            title="What leaders ask before we begin."
          />
          <div>
            {detail.faq.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Transformation needs more than a slide deck."
        intro="ThriveForward combines executive-level strategy with the technical and organizational ability to help execute it."
      />
      <section className="section">
        <div className="container service-index">
          {services.map((service, index) => (
            <Link to={service.path} key={service.path}>
              <span>0{index + 1}</span>
              <div>
                <p>{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </div>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>
      <section className="section engagements">
        <div className="container">
          <SectionIntro
            eyebrow="Engagements"
            title="Start where the need is greatest."
          />
          <div className="engagement-list">
            {engagementModels.map(([title, duration, copy], index) => (
              <Link to="/contact" className="engagement-row" key={title}>
                <span className="engagement-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <strong>{duration}</strong>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function SpeakingPage() {
  const topics = [
    'Leading Engineering Teams Through Change',
    'Practical AI for Modern Organizations',
    'Building Innovation Without Burning Out Your Team',
    'The Future of Engineering Management in the Age of AI',
    'Resilience, Ownership, and Betting on Yourself',
    'Building Teams People Want to Be Part Of',
  ];
  return (
    <>
      <PageHero
        eyebrow="Keynotes and workshops"
        title="Ideas that move people and organizations forward."
        intro="Engaging, human-centered sessions that connect technology, leadership, resilience, and meaningful action."
      />
      <section className="section">
        <div className="container speaking-grid">
          <div className="speaking-stage">
            <span>Event photography forthcoming</span>
            <div className="stage-light" />
          </div>
          <div>
            <SectionIntro
              eyebrow="Speaking topics"
              title="Timely ideas. Practical takeaways."
            />
            <div className="topic-list">
              {topics.map((topic, index) => (
                <div key={topic}>
                  <span>0{index + 1}</span>
                  <h3>{topic}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section tint-section">
        <div className="container">
          <SectionIntro
            eyebrow="Designed for your room"
            title="Not an off-the-shelf talk."
            copy="Every keynote or workshop is adapted to your audience, organizational context, and desired outcome—from executive alignment to an energized engineering organization."
          />
          <div className="speaking-stats">
            <div>
              <strong>Keynotes</strong>
              <span>Conferences & company events</span>
            </div>
            <div>
              <strong>Workshops</strong>
              <span>Interactive team development</span>
            </div>
            <div>
              <strong>Facilitation</strong>
              <span>Leadership alignment sessions</span>
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ThriveForward"
        title="Technical depth. Executive perspective. Human-centered leadership."
        intro="A founder-led consulting company helping organizations make better technology decisions and build the capability to execute them."
      />
      <FounderSection />
      <section className="section">
        <div className="container split-section">
          <SectionIntro
            eyebrow="Our point of view"
            title="Forward progress should outlast the engagement."
            copy="The best consulting work creates clarity, builds capability, and leaves an organization stronger—not dependent."
          />
          <div className="values-grid">
            <article>
              <span>01</span>
              <h3>Clarity over complexity</h3>
              <p>Make hard decisions understandable and actionable.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Outcomes over activity</h3>
              <p>Connect every workstream to meaningful business progress.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Capability over dependency</h3>
              <p>Build teams and systems that continue improving.</p>
            </article>
            <article>
              <span>04</span>
              <h3>People and technology</h3>
              <p>
                Treat transformation as both a systems and leadership challenge.
              </p>
            </article>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

const insights = [
  [
    'AI Strategy',
    'Why Most AI Strategies Never Become Real Products',
    'A practical look at the gap between experimentation and useful implementation.',
  ],
  [
    'Engineering Leadership',
    'The Hidden Cost of an Unclear Engineering Organization',
    'How ambiguity in ownership and operating systems quietly slows delivery.',
  ],
  [
    'Executive Advisory',
    'When to Hire a Fractional VP of Engineering',
    'The signals that senior embedded leadership could unlock your next stage.',
  ],
  [
    'Team Performance',
    'Your Engineering Team Does Not Need More Meetings',
    'Better operating rhythms begin with clarity, not calendar volume.',
  ],
  [
    'Digital Transformation',
    'How to Move From AI Experimentation to Implementation',
    'A focused framework for prioritizing, validating, and scaling useful AI.',
  ],
  [
    'Leadership',
    'Building High-Performing Teams Without Creating Burnout',
    'Performance and sustainability belong in the same operating system.',
  ],
];

function InsightGrid({ compact = false }: { compact?: boolean }) {
  const list = compact ? insights.slice(0, 3) : insights;
  return (
    <div className="insight-grid">
      {list.map(([category, title, excerpt], index) => (
        <article key={title}>
          <div className={`insight-art art-${index + 1}`}>
            <span>SAMPLE INSIGHT</span>
            <i />
          </div>
          <p className="eyebrow">
            <span />
            {category}
          </p>
          <h3>{title}</h3>
          <p>{excerpt}</p>
          <span className="read-label">Placeholder content · Coming soon</span>
        </article>
      ))}
    </div>
  );
}

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas for leaders building what comes next."
        intro="Practical perspectives on AI strategy, engineering leadership, digital transformation, software architecture, and team performance."
      />
      <section className="section">
        <div className="container">
          <div className="placeholder-note">
            <strong>Editorial preview</strong>
            <p>
              The articles below are clearly marked sample content until
              ThriveForward’s publication library launches.
            </p>
          </div>
          <InsightGrid />
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className="contact-page dark-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">
            <span />
            Start a conversation
          </p>
          <h1>Tell us what you’re trying to move forward.</h1>
          <p>
            Share a little context. We’ll review your goals and follow up with
            the clearest next step—whether that is a focused conversation, a
            recommended engagement, or a useful referral.
          </p>
          <div className="next-steps">
            <h3>What happens next</h3>
            <ol>
              <li>
                <span>01</span>We review your goals and context.
              </li>
              <li>
                <span>02</span>We respond within two business days.
              </li>
              <li>
                <span>03</span>If aligned, we schedule a focused strategy call.
              </li>
            </ol>
          </div>
        </div>
        {submitted ? (
          <div className="confirmation">
            <span className="confirmation-mark">✓</span>
            <p className="eyebrow">
              <span />
              Message received
            </p>
            <h2>Thank you. We’ll be in touch.</h2>
            <p>
              Your inquiry has been captured in this demonstration experience.
              Once a CRM or form provider is connected, it will be routed
              directly to ThriveForward.
            </p>
            <button
              className="button button-bright"
              type="button"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <label>
                Full name
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Work email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Company
                <input name="company" required autoComplete="organization" />
              </label>
              <label>
                Job title
                <input name="title" autoComplete="organization-title" />
              </label>
            </div>
            <label>
              Company website
              <input name="website" type="url" placeholder="https://" />
            </label>
            <label>
              Service needed
              <select name="service" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {[
                  'AI Strategy and Implementation',
                  'Custom Software Development',
                  'SaaS or MVP Development',
                  'Fractional Engineering Leadership',
                  'Engineering Effectiveness Assessment',
                  'Keynote or Workshop',
                  'Executive Advisory',
                  'Other',
                ].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              Project description
              <textarea
                name="description"
                rows={4}
                required
                placeholder="What are you looking to build, change, or understand?"
              />
            </label>
            <label>
              Current challenge
              <textarea
                name="challenge"
                rows={3}
                placeholder="What is getting in the way today?"
              />
            </label>
            <div className="form-row">
              <label>
                Approximate budget
                <select name="budget" defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  {[
                    'Under $10,000',
                    '$10,000–$25,000',
                    '$25,000–$50,000',
                    '$50,000–$100,000',
                    '$100,000–$250,000',
                    '$250,000+',
                    'Not sure yet',
                  ].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label>
                Desired start date
                <input name="startDate" type="date" />
              </label>
            </div>
            <label>
              How did you hear about ThriveForward?
              <input name="referral" />
            </label>
            <button
              className="button button-bright submit-button"
              type="submit"
            >
              Send your inquiry <span>↗</span>
            </button>
            <p className="form-note">
              By submitting, you agree that ThriveForward may contact you about
              your inquiry. No spam—ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function LegalPage({ type }: { type: 'Privacy Policy' | 'Terms of Use' }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={type}
        intro={`Last updated ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.`}
      />
      <section className="section">
        <div className="container legal-copy">
          <p>
            This page is a publication-ready placeholder and should be reviewed
            by qualified legal counsel before the website launches.
          </p>
          <h2>
            {type === 'Privacy Policy'
              ? 'Information we collect'
              : 'Using this website'}
          </h2>
          <p>
            {type === 'Privacy Policy'
              ? 'When you submit an inquiry, ThriveForward may collect the information you voluntarily provide so we can respond, qualify the request, and improve our services.'
              : 'The information on this website is provided for general informational purposes and does not create a consulting, legal, or contractual relationship.'}
          </p>
          <h2>Questions</h2>
          <p>
            For questions about these terms or your information, contact
            ThriveForward Consulting LLC through the website contact form.
          </p>
        </div>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <section className="not-found dark-section">
      <div>
        <p className="eyebrow">
          <span />
          404
        </p>
        <h1>This path isn’t moving forward.</h1>
        <p>The page you requested could not be found.</p>
        <Link className="button button-bright" to="/">
          Return home <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route
        path="/ai-consulting"
        element={<ServicePage path="/ai-consulting" />}
      />
      <Route
        path="/software-development"
        element={<ServicePage path="/software-development" />}
      />
      <Route
        path="/engineering-leadership"
        element={<ServicePage path="/engineering-leadership" />}
      />
      <Route path="/speaking" element={<SpeakingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<LegalPage type="Privacy Policy" />} />
      <Route path="/terms" element={<LegalPage type="Terms of Use" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
