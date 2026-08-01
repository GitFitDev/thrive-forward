export const navigation = [
  { label: 'What We Do', href: '/services' },
  { label: 'AI Consulting', href: '/ai-consulting' },
  { label: 'Software Development', href: '/software-development' },
  { label: 'Engineering Leadership', href: '/engineering-leadership' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    number: '01',
    title: 'AI Strategy and Implementation',
    href: '/ai-consulting',
    copy: 'Move beyond disconnected experiments with valuable use cases, responsible roadmaps, workflow automation, and AI-enabled products.',
    outcomes: [
      'Clear AI roadmaps',
      'Workflow automation',
      'Responsible adoption',
    ],
  },
  {
    number: '02',
    title: 'Custom Software and Product Development',
    href: '/software-development',
    copy: 'Design and build scalable web applications, internal platforms, SaaS products, mobile experiences, and enterprise tools.',
    outcomes: [
      'Production-ready software',
      'Scalable architecture',
      'Faster product delivery',
    ],
  },
  {
    number: '03',
    title: 'Engineering Leadership and Advisory',
    href: '/engineering-leadership',
    copy: 'Strengthen technical strategy, team design, delivery systems, hiring, and leadership through experienced fractional support.',
    outcomes: [
      'Clear accountability',
      'Predictable delivery',
      'Stronger managers',
    ],
  },
  {
    number: '04',
    title: 'Keynotes and Workshops',
    href: '/speaking',
    copy: 'Practical, engaging sessions on AI, engineering leadership, resilience, innovation, career growth, and leading through change.',
    outcomes: [
      'Leadership alignment',
      'Motivated teams',
      'Actionable next steps',
    ],
  },
];

export const challenges = [
  'Your AI strategy is still a collection of disconnected experiments.',
  'Your engineering organization has grown faster than its leadership systems.',
  'Your teams are busy, but delivery is unpredictable.',
  'Your product idea is strong, but the technical path is unclear.',
  'Legacy technology is slowing down innovation.',
  'Your managers need better systems for coaching and accountability.',
  'Transformation lacks clear ownership.',
  'Technical talent lacks alignment and direction.',
];

export const differentiators = [
  [
    'Strategy and Execution',
    'We translate strategy into working systems, software, teams, and measurable outcomes.',
  ],
  [
    'Technology and Leadership',
    'Strong code only works when teams, leaders, priorities, and processes align.',
  ],
  [
    'Enterprise Experience',
    'Our experience spans complex organizations, regulated environments, and high-traffic platforms.',
  ],
  [
    'Practical AI',
    'We focus on responsible AI use cases connected to real business challenges.',
  ],
  [
    'Founder-Led Engagement',
    'Clients receive direct access to senior expertise from discovery through delivery.',
  ],
  [
    'Sustainable Transformation',
    'We build systems teams can maintain, scale, and improve after the engagement.',
  ],
] as const;

export const engagements = [
  {
    title: 'Strategy Sprint',
    duration: '2–4 weeks',
    copy: 'For organizations that need clarity before a major technology or AI investment.',
    includes: [
      'Stakeholder discovery',
      'Current-state assessment',
      'Prioritized roadmap',
    ],
  },
  {
    title: 'AI Opportunity Assessment',
    duration: '2–6 weeks',
    copy: 'For leaders exploring where AI could create meaningful, responsible value.',
    includes: [
      'Workflow analysis',
      'Use-case prioritization',
      'Feasibility roadmap',
    ],
  },
  {
    title: 'MVP and Product Build',
    duration: '8–20 weeks',
    copy: 'For founders and organizations launching a new digital product.',
    includes: [
      'Product strategy',
      'Technical architecture',
      'Build, test, and launch',
    ],
  },
  {
    title: 'Fractional Engineering Leadership',
    duration: '3–12 months',
    copy: 'For organizations that need senior leadership without an immediate full-time hire.',
    includes: ['Technical strategy', 'Delivery leadership', 'Manager coaching'],
  },
  {
    title: 'Engineering Effectiveness Assessment',
    duration: '3–6 weeks',
    copy: 'For teams struggling with delivery, quality, ownership, or developer experience.',
    includes: [
      'Workflow assessment',
      'Architecture review',
      'Improvement roadmap',
    ],
  },
  {
    title: 'Keynotes and Workshops',
    duration: 'Custom',
    copy: 'For conferences, leadership events, development programs, and offsites.',
    includes: [
      'Customized keynote',
      'Interactive workshop',
      'Actionable takeaways',
    ],
  },
];

export const caseStudies = [
  {
    category: 'Platform modernization',
    title: 'Modernizing a High-Volume Enterprise Platform',
    challenge:
      'A business-critical application faced growing complexity and increasing pressure to scale.',
    approach:
      'Improved frontend architecture, technical standards, collaboration, quality practices, and delivery workflows.',
    capabilities: 'Architecture · Delivery · Quality',
  },
  {
    category: 'Organizational leadership',
    title: 'Strengthening an Engineering Organization',
    challenge:
      'A growing organization needed clearer leadership systems, accountability, and manager effectiveness.',
    approach:
      'Developed team structures, coaching practices, operating rhythms, quality expectations, and leadership frameworks.',
    capabilities: 'Team design · Coaching · Operations',
  },
  {
    category: 'Applied AI',
    title: 'Turning an AI Concept Into a Product',
    challenge:
      'An organization had multiple AI ideas but no focused use case or implementation plan.',
    approach:
      'Identified the highest-value opportunity, defined the experience, selected the architecture, and created an MVP roadmap.',
    capabilities: 'Product strategy · AI · Architecture',
  },
];

export const insights = [
  {
    category: 'AI Strategy',
    title: 'Why Most AI Strategies Never Become Real Products',
    copy: 'The practical gap between experimentation and valuable implementation.',
  },
  {
    category: 'Engineering Leadership',
    title: 'The Hidden Cost of an Unclear Engineering Organization',
    copy: 'How ambiguity in ownership quietly slows delivery and erodes trust.',
  },
  {
    category: 'Executive Advisory',
    title: 'When to Hire a Fractional VP of Engineering',
    copy: 'The signals that senior embedded leadership could unlock your next stage.',
  },
  {
    category: 'Team Performance',
    title: 'Your Engineering Team Does Not Need More Meetings',
    copy: 'Better operating rhythms begin with clarity, not calendar volume.',
  },
  {
    category: 'Digital Transformation',
    title: 'How to Move From AI Experimentation to Implementation',
    copy: 'A focused framework for prioritizing and scaling useful AI.',
  },
  {
    category: 'Leadership',
    title: 'Building High-Performing Teams Without Creating Burnout',
    copy: 'Performance and sustainability belong in the same operating system.',
  },
];

export type ServiceDetail = {
  eyebrow: string;
  title: string;
  description: string;
  problems: string[];
  deliverables: string[];
  outcomes: string[];
  approach: string[];
  engagement: string;
  faq: { question: string; answer: string }[];
};

export const serviceDetails: Record<
  'ai' | 'software' | 'leadership',
  ServiceDetail
> = {
  ai: {
    eyebrow: 'AI consulting for businesses',
    title: 'Make AI useful—not merely impressive.',
    description:
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
    engagement: 'AI Opportunity Assessment',
    faq: [
      {
        question: 'Do we need an AI strategy first?',
        answer:
          'Not always. We begin with the business problem, then determine whether AI is the right tool and what level of strategy is useful.',
      },
      {
        question: 'Can ThriveForward build the solution?',
        answer:
          'Yes. Engagements can continue from assessment and prototype through production implementation.',
      },
    ],
  },
  software: {
    eyebrow: 'Custom software development',
    title: 'Build the right product on a foundation designed to scale.',
    description:
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
    engagement: 'Product Strategy Sprint',
    faq: [
      {
        question: 'Do you work with existing teams?',
        answer:
          'Yes. We can lead a build, augment an internal team, or provide architecture and delivery oversight.',
      },
      {
        question: 'Can you modernize an existing system?',
        answer:
          'Yes. We favor practical, phased modernization that reduces risk while delivering incremental value.',
      },
    ],
  },
  leadership: {
    eyebrow: 'Fractional engineering leadership',
    title: 'Create an engineering organization built to deliver.',
    description:
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
    engagement: 'Engineering Effectiveness Assessment',
    faq: [
      {
        question: 'What is fractional engineering leadership?',
        answer:
          'Embedded senior leadership for organizations that need executive-level support without immediately making a full-time hire.',
      },
      {
        question: 'Do you replace existing leaders?',
        answer:
          'Usually no. We strengthen and support executives, managers, and teams while filling specific leadership gaps.',
      },
    ],
  },
};
