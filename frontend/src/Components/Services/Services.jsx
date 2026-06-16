import { Link } from 'react-router-dom'
import './Services.css'
import digitization from '../../assets/digitization.jpg'
import automation from '../../assets/automation.png'
import excel from '../../assets/excel.jpg'
import design from '../../assets/design.jpg'
import branding from '../../assets/branding.jpg'

export const servicesData = [
  {
    id: 1,
    slug: 'digitisation',
    image: digitization,
    title: 'School and SME Digitisation',
    shortTitle: 'School and SME Digitisation',
    tagline: 'From paper chaos to digital clarity.',
    description:
      'We move schools and small businesses from paper records and scattered spreadsheets to clean, integrated digital systems that teams actually understand and use every day.',
    features: [
      'Digital record-keeping and custom database setup',
      'Dashboards for reporting and real-time monitoring',
      'Streamlined administrative and operational workflows',
      'Staff onboarding and system training',
      'Data migration from legacy or manual systems',
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Audit',
        detail:
          'We sit with your team, map every manual process, and identify exactly where time and data are being lost.',
      },
      {
        step: '02',
        title: 'System Design',
        detail:
          'We design a digital architecture that fits your organisation — databases, dashboards, and workflows tailored to how you actually operate.',
      },
      {
        step: '03',
        title: 'Migration & Build',
        detail:
          'We migrate your existing data, build the system, and rigorously test every flow before anything goes live.',
      },
      {
        step: '04',
        title: 'Training & Handover',
        detail:
          'Your team gets hands-on training and full documentation. We stay on for a support window to make sure adoption sticks.',
      },
    ],
    icon: '🏫',
    tiers: [
      {
        name: 'Basic',
        target: 'Small shops and local academies',
        features: [
          'Custom database for single-user admin tasks',
          '1 core operational dashboard',
          'Simple data migration (up to 3 sheets)',
          '1 live staff onboarding workshop + handbook',
          '14 days support',
        ],
      },
      {
        name: 'Standard',
        target: 'Mid-tier schools and expanding SMEs',
        features: [
          'Multi-module digital ecosystem (Academics + Accounts)',
          'Role-based access control (RBAC)',
          'Automated generation engines (one-click reports/receipts)',
          'Full historical data migration',
          'Team capacity workshops + tutorials + 30 days support',
        ],
      },
      {
        name: 'Pro / Advanced',
        target: 'Multi-branch corporations and large institutional networks',
        features: [
          'Cross-departmental enterprise network',
          'Live cross-device sync + executive analytics command center',
          'Advanced custom modules built for legacy rules',
          'Continuous staff training during rollout + 90 days priority SLA support',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'automation',
    image: automation,
    title: 'Automation and Operations Support for Founders',
    shortTitle: 'Automation & Ops Support',
    tagline: 'Less firefighting. More building.',
    description:
      'We help founder-led teams identify bottlenecks, automate repetitive tasks, and build operational clarity — so you spend less time firefighting and more time growing.',
    features: [
      'Workflow mapping and process redesign',
      'Task automation using modern no-code and low-code tools',
      'Project tracking and workload management systems',
      'SOP documentation and team playbooks',
      'Ongoing operational support and iteration',
    ],
    process: [
      {
        step: '01',
        title: 'Bottleneck Mapping',
        detail:
          'We interview your team and trace every recurring pain point — the tasks that eat hours and the handoffs that always break.',
      },
      {
        step: '02',
        title: 'Automation Blueprint',
        detail:
          'We deliver a prioritised roadmap of what to automate first, with tool recommendations and ROI estimates for each.',
      },
      {
        step: '03',
        title: 'Build & Integrate',
        detail:
          'We build the automations, connect your existing tools, and run parallel tests until every trigger fires reliably.',
      },
      {
        step: '04',
        title: 'SOP Documentation',
        detail:
          'Every process gets documented into clear SOPs and playbooks your team can follow and maintain independently.',
      },
      {
        step: '05',
        title: 'Ongoing Support',
        detail:
          'We offer retainer support to iterate as your operations evolve — new tools, new hires, new bottlenecks.',
      },
    ],
    icon: '⚙️',
    tiers: [
      {
        name: 'Basic',
        target: 'Solopreneurs and micro-teams',
        features: [
          'Automation of 2 high-friction tasks',
          'Direct sync linking up to 3 everyday apps',
          'Basic error-handling triggers',
          'Loom video walkthrough of architecture',
        ],
      },
      {
        name: 'Standard',
        target: 'Growing teams',
        features: [
          'Full-scale automated customer journey',
          'Multi-step workflow branching logic via Ajubo AI templates',
          'Internal project tracking and workload management boards',
          'Structured SOP documentation & playbooks',
          '30 days proactive maintenance',
        ],
      },
      {
        name: 'Pro / Advanced',
        target: 'Scale-ups and high-volume operations',
        features: [
          'Complete end-to-end multi-platform integration across entire corporate stack',
          'Deep custom script injections & intelligent data parsing via advanced Ajubo AI modules',
          'Live dynamic KPI dashboard monitoring throughput and ROI',
          'Monthly optimization retainer',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'training',
    image: excel,
    title: 'Excel, Data and Digital Skills Training',
    shortTitle: 'Excel & Data Training',
    tagline: 'Real skills. Real-world results.',
    description:
      'Practical, hands-on training built for real-world use. We teach your team to build reports, analyse data, and use digital tools confidently — no fluff, just skills that stick.',
    features: [
      'Excel from fundamentals to advanced techniques',
      'Data analysis, cleaning, and visualisation',
      'Dashboard building and automated reporting',
      'Digital productivity tools and workflows',
      'Team workshops and one-on-one coaching sessions',
    ],
    process: [
      {
        step: '01',
        title: 'Needs Assessment',
        detail:
          'We assess your team\'s current skill level and the specific data challenges they face day-to-day.',
      },
      {
        step: '02',
        title: 'Custom Curriculum',
        detail:
          'We build a training plan around your actual files, reports, and workflows — not generic sample data.',
      },
      {
        step: '03',
        title: 'Live Workshops',
        detail:
          'Hands-on sessions where participants build real outputs — dashboards, clean datasets, automated reports.',
      },
      {
        step: '04',
        title: 'Practice & Reinforcement',
        detail:
          'Participants get take-home exercises and resource packs to cement what they learned.',
      },
      {
        step: '05',
        title: 'Follow-Up Coaching',
        detail:
          'Optional one-on-one sessions to tackle individual challenges and accelerate progress.',
      },
    ],
    icon: '📊',
    tiers: [
      {
        name: 'Basic',
        target: 'Teams requiring fundamental proficiency',
        features: [
          '1-day intensive team workshop on spreadsheet best practices',
          'Mastery over core logic formulas and filters',
          'Basic data cleaning techniques',
          'Curated take-home exercise packs & cheat sheets',
        ],
      },
      {
        name: 'Standard',
        target: 'Financial teams, school registrars, and admin heads',
        features: [
          '3-day custom training built around your organisation\'s own real sheets and reports',
          'Mastery over advanced mechanics (Pivot tables, relational data, nested logic)',
          'Dashboard building instruction',
          '2 weeks post-training asynchronous coaching',
        ],
      },
      {
        name: 'Pro / Advanced',
        target: 'Executive teams, data officers, and senior managers',
        features: [
          'Multi-week upskilling track (relational databases & macro/script automations)',
          'Cross-tool analytics training (Excel to web dashboards)',
          '1-on-1 executive coaching for long-term system design',
          'Lifetime access to custom internal video database',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'development',
    image: design,
    title: 'UI/UX Design, MVP & Full-Stack Web and App Development',
    shortTitle: 'Design & Development',
    tagline: 'From wireframe to working product.',
    description:
      'We design clean, user-centred interfaces and build full-stack web and mobile applications that are fast, scalable, and ready for real users.',
    features: [
      'User research, wireframing, and high-fidelity UI design',
      'Clickable prototypes and MVP scoping',
      'Full-stack web development (React, Node.js, databases)',
      'Mobile app development (iOS & Android)',
      'Handoff-ready design systems and developer documentation',
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Scoping',
        detail:
          'We define the product\'s core purpose, target users, and MVP feature set — avoiding scope creep from day one.',
      },
      {
        step: '02',
        title: 'UX Research & Wireframes',
        detail:
          'User flows and low-fidelity wireframes are validated before any visual design begins.',
      },
      {
        step: '03',
        title: 'UI Design & Prototype',
        detail:
          'High-fidelity designs and a clickable prototype — tested with real users before a single line of code is written.',
      },
      {
        step: '04',
        title: 'Development Sprints',
        detail:
          'We build in two-week sprints with regular demos so you see progress and can give feedback continuously.',
      },
      {
        step: '05',
        title: 'QA, Launch & Handover',
        detail:
          'Thorough QA across devices, a smooth production launch, and full code + design documentation handed to your team.',
      },
    ],
    icon: '🎨',
    tiers: [
      {
        name: 'Basic',
        target: 'Founders launching a proof-of-concept or MVP',
        features: [
          'Product discovery & feature prioritization wireframing',
          'Fast-loading responsive Web MVP / utility interface',
          'Secure user auth + database + single core feature execution',
          'Thorough cross-device QA',
          '100% IP ownership handover',
        ],
      },
      {
        name: 'Standard',
        target: 'Established institutions and premium portals',
        features: [
          'Deep user research & full-scale clickable UI/UX prototypes in Figma',
          'Scalable full-stack development (React, Node.js, relational databases)',
          'In-app billing history, document repositories, and real-time updates',
          '2-week agile sprints with live demos',
          '60-day code maintenance support window',
        ],
      },
      {
        name: 'Pro / Advanced',
        target: 'Large-scale organizations and cross-platform ecosystems',
        features: [
          'Central Web Admin Dashboard + Native iOS & Android apps',
          'Deep proprietary AI integration leveraging custom Ajubo AI nodes',
          'Unlimited user capacity architectures (high cloud speed and security)',
          'Continuous priority dev sprint allocations + dedicated maintenance SLA retainer',
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'branding',
    image: branding,
    title: 'Branding and Print',
    shortTitle: 'Branding & Print',
    tagline: 'Identity that means something.',
    description:
      'Building brand identity systems that give organisations a clear, professional, and memorable presence — across digital and physical touchpoints.',
    features: [
      'Logo design and full brand identity systems',
      'Colour palettes, typography, and brand guidelines',
      'Business cards, stationery, and marketing collateral',
      'High-quality 3D print pieces and branded materials',
      'Packaging design and large-format print production',
    ],
    process: [
      {
        step: '01',
        title: 'Brand Discovery',
        detail:
          'A structured session to uncover your values, audience, competitive position, and the feeling you want your brand to evoke.',
      },
      {
        step: '02',
        title: 'Concept Development',
        detail:
          'We present two to three distinct creative directions — moodboards, logo concepts, and early colour explorations.',
      },
      {
        step: '03',
        title: 'Design & Refinement',
        detail:
          'Your chosen direction is refined across rounds of feedback until every element feels right.',
      },
      {
        step: '04',
        title: 'Brand Guidelines',
        detail:
          'A complete brand guidelines document covering logo usage, typography, colour, tone of voice, and do\'s and don\'ts.',
      },
      {
        step: '05',
        title: 'Print & Production',
        detail:
          'We prepare print-ready files and manage production for all physical materials — cards, collateral, packaging, and more.',
      },
    ],
    icon: '✦',
    tiers: [
      {
        name: 'Basic',
        target: 'New startups and local projects',
        features: [
          'Custom logo design (2 distinct conceptual directions)',
          'Unified brand color palette & typography rules',
          'Print-ready layouts for business cards and stationery headers',
          '1-page minimalist brand asset index',
        ],
      },
      {
        name: 'Standard',
        target: 'Growing companies and schools',
        features: [
          'Full Brand Identity System (logos, sub-marks, iconography, badges)',
          'Comprehensive Brand Guidelines Manual',
          'Full corporate print layouts (cards, brochures, decks, letterheads)',
          'Layout design for uniforms, vehicles, and banners',
        ],
      },
      {
        name: 'Pro / Advanced',
        target: 'Large organizations and premium schools rebranding completely',
        features: [
          '360-degree brand transformation across all touchpoints',
          'Custom packaging layouts & environmental/signage blueprints',
          'High-fidelity 3D structural render previews',
          'Direct vendor print production management',
          'Digital asset pre-formatting for software dashboard integration',
        ],
      },
    ],
  },
]

const Services = () => {
  return (
    <div className="services" id="services">
      {servicesData.map((service) => (
        <Link
          key={service.id}
          to={`/services/${service.slug}`}
          className="service"
          aria-label={`Learn more about ${service.shortTitle}`}
        >
          {service.image ? (
            <img src={service.image} alt={service.shortTitle} />
          ) : (
            <div className="service-placeholder">
              <span>{service.icon}</span>
            </div>
          )}
          <div className="caption">
            <p>{service.shortTitle}</p>
            <span className="caption-cta">Learn more →</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Services