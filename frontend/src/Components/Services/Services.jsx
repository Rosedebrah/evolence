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
    metaTitle: 'School & SME Digitisation Services | Evolence, Nairobi',
    metaDescription: 'Evolence digitises school and SME records into clean, searchable digital systems — cutting manual paperwork and operational chaos in Nairobi and beyond.',
    shortTitle: 'School and SME Digitisation',
    tagline: 'From paper chaos to digital clarity.',
    description: [
    'Evolence digitises school and SME records into clean, searchable digital systems — cutting manual paperwork and operational chaos in Nairobi and beyond.',
    'Most schools and small businesses in Kenya are still running on paper registers, scattered spreadsheets, and manual filing systems that make it hard to find information when it matters most. Evolence helps you move away from that chaos by digitising your records into structured, searchable digital systems built around how your team actually works.',
    'We start by auditing your current processes — student records, fee tracking, inventory, HR files, or client data — to understand where information gets lost, duplicated, or delayed. From there, we design and build a digital system tailored to your institution, whether that is a simple cloud-based database, a custom internal portal, or an integration with tools you already use.',
    'For schools, this often means converting paper-based student and fee records into a searchable system that admin staff can update in real time, with role-based access so teachers, finance officers, and administrators only see what is relevant to them. For SMEs, it typically means centralising client data, inventory, and transaction records so nothing lives in a personal notebook or WhatsApp chat.',
    'We handle everything end-to-end: requirements gathering, system design, data migration from your existing paper or spreadsheet records, staff training, and post-launch support. We also build with growth in mind — your digitised system should still make sense when your school doubles in size or your SME opens a second branch.',
    'The result is less time spent searching for information, fewer errors from manual data entry, and a foundation you can build further automation on top of — which is exactly where our Automation & Ops Support service picks up.',
    'Book a free call to talk through what digitisation could look like for your school or business.',
    ],
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
    metaTitle: 'Workflow Automation & Ops Support | Evolence, Nairobi',
    metaDescription: 'Evolence automates repetitive operational workflows — lead follow-ups, data syncing, reporting — so your team spends less time on manual admin work.', 
    shortTitle: 'Automation & Ops Support',
    tagline: 'Less firefighting. More building.',
    description:[
      'Evolence automates repetitive operational workflows — lead follow-ups, data syncing, reporting — so your team spends less time on manual admin work.', 
      'Once your records are digitised, the next source of wasted time is usually repetitive manual work: re-entering the same data in two places, manually following up with leads, or building the same report from scratch every week. Evolence Automation & Ops Support service removes that friction by building automated workflows tailored to your operations.',
      'Using a mix of modern low-code tools and custom integrations, we connect the systems you already use — email, spreadsheets, CRMs, messaging platforms — so information flows between them without anyone manually copying and pasting. This includes automating lead qualification and follow-up emails, syncing data between your website and internal records, generating recurring reports automatically, and setting up notification systems so your team knows when something needs attention instead of having to check manually.',
      'For teams further along, we also build custom AI agents through our proprietary Ajubo AI framework — background automations that handle tasks like initial customer inquiry responses, appointment scheduling, or routine data entry, working invisibly behind your existing tools rather than replacing them.',
      'Every automation we build is documented clearly, so your team understands what is running and why, and can flag changes as your business evolves — we do not believe in black-box systems you cannot maintain without us.',
      'The goal is not to automate for its own sake; it is to remove the specific friction points slowing your team down, so people can spend their time on decisions and relationships instead of repetitive admin.',
      'Book a free call to identify which parts of your operations are the best candidates for automation.',
    ],
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
    metaTitle: 'Excel & Financial Modelling Training | Evolence, Nairobi',
    metaDescription: 'Practical Excel and data training for teams — formulas, financial modelling, and reporting workflows, with hands-on post-training support.',
    shortTitle: 'Excel & Data Training',
    tagline: 'Real skills. Real-world results.',
    description:[
      'Practical Excel and data training for teams — formulas, financial modelling, and reporting workflows, with hands-on post-training support.',
      'A lot of operational chaos is not usually a software problem — it is a skills gap. Many teams already have the data they need in spreadsheets but do not have the Excel fluency to turn it into useful reporting, forecasting, or decision-making tools. Evolence\'s Excel & Data Training service closes that gap with practical, hands-on training designed around your team\'s actual work, not generic tutorials. ',
      'We cover formulas and functions for real business use cases, financial modelling for budgeting and forecasting, data automation techniques that cut down manual reporting time, and dashboard and reporting design so your team can present data clearly to stakeholders. Training is delivered in a format that fits your team — in-person workshops, remote sessions, or a hybrid of both — and is always grounded in your organisation\'s actual spreadsheets and reporting needs rather than abstract examples.',
      'What sets this apart from a one-off training session is the follow-through: we provide post-training technical support, so when your team gets stuck applying what they learned to a real file three weeks later, there\'s someone to ask. This is often the difference between training that\'s forgotten within a month and training that actually changes how a team works day to day.', 
      'This service pairs naturally with our digitisation and automation work — once your data is clean and centralised, well-trained staff can get significantly more value out of it without needing a developer involved every time a report is due.',
      'Book a free call to discuss training tailored to your team\'s spreadsheets and reporting needs.',
    ],
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
    metaTitle: 'Web & Product Design and Development | Evolence, Nairobi',
    metaDescription: 'Evolence designs and builds responsive websites, client portals, and MVPs — combining UI/UX design with full-stack development for founder-led teams',
    shortTitle: 'Design & Development',
    tagline: 'From wireframe to working product.',
    description: [
      'Evolence designs and builds responsive websites, client portals, and MVPs — combining UI/UX design with full-stack development for founder-led teams',
      'Evolence designs and builds digital products end-to-end; websites, client portals, and MVPs, for schools, SMEs, and founder-led teams that need something functional, fast, and genuinely usable, not just visually polished.',
      'Our design process starts with understanding your users, not just your brand: how do the people using this system actually think and work? From there we design interfaces that are intuitive for real users, including staff who may not be especially tech-comfortable, and clients who expect a professional, modern experience. On the development side, we build with modern, maintainable stacks — React and Vite for fast, responsive front ends, and Node.js or similar frameworks for secure, scalable back ends — so what we ship isn\'t just good-looking today but easy to extend later.',
      'Recent examples of this work include Dessert Duo, an online ordering platform that helped a bakery client increase customer inquiries by 35% after launch, and Emerge, a therapy booking platform with authentication and real-time session scheduling. Each project is built around the specific operational needs of the client, not a generic template.',
      'We handle the full lifecycle: discovery and requirements, UI/UX design and prototyping, development, deployment (including hosting, domain, and SSL setup), and ongoing support after launch. Whether you need a public-facing marketing site, an internal client portal, or a full product MVP, we scope the right level of complexity for where your business actually is — not where a bigger budget might take you.',
      'Book a free call to talk through your project and see if we are the right fit.',
    ],
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
    metaTitle: 'Branding & Print Design | Evolence, Nairobi',
    metaDescription: 'Evolence designs brand identities and print materials — logos, business cards, signage, and brochures — for schools and SMEs that need to look as credible as they are.',
    shortTitle: 'Branding & Print',
    tagline: 'Identity that means something.',
    description:[
      'Evolence designs brand identities and print materials — logos, business cards, signage, and brochures — for schools and SMEs that need to look as credible as they are.',
      'A strong digital system deserves a brand that looks just as credible in front of clients and parents. Evolence\'s Branding & Print service covers the visual identity work that supports everything else we build — logos, colour systems, business cards, signage, and print materials designed to be consistent across every touchpoint.',
      'For schools, this often means updated signage, prospectus materials, and stationery that reflect a more modern, professionally run institution — useful when digitisation is part of a broader push to modernise how the school presents itself to parents and the community. For SMEs, it typically means a cohesive brand identity that carries through your website, social media, packaging, and printed materials, so customers recognise you consistently everywhere they encounter your business.',
      'We design with practical use in mind: brand guidelines that your team can actually follow without a designer on standby for every new flyer, and print-ready files that work correctly with local printers rather than requiring back-and-forth troubleshooting. Where relevant, we also make sure your brand identity translates cleanly into the digital systems we build, so your website, client portal, and printed materials all feel like they come from the same organisation.',
      'This service works well on its own for teams that just need a brand refresh, or bundled with our design & development and digitisation work for teams building or rebuilding their full presence — digital and physical — at the same time.',
      'Book a free call to discuss your branding needs, whether that\'s a full identity or specific print materials.',
   ],
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
            <img src={service.image} alt={`${service.shortTitle} service - Evolence, Nairobi`} />
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