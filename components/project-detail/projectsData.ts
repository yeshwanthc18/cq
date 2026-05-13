export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  metrics: Array<{ label: string; value: string }>;
  highlights: string[];
  fullContent: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: 'dark-ocean',
    title: 'Dark Ocean',
    category: 'AI • Marine Intelligence',
    description:
      'Advanced offshore geo-intelligence platform combining AI, hydrography, robotics, seismic mapping, and marine survey technologies for next-generation ocean exploration.',
    shortDescription: 'AI-powered marine intelligence platform',
    image: '/projects/dark-ocean.jpg',
    metrics: [
      { label: 'Technology', value: 'AI-Powered' },
      { label: 'Industry', value: 'Marine Tech' },
      { label: 'Impact', value: 'Global Scale' },
    ],
    highlights: [
      'Brand positioning for emerging AI-marine sector',
      'Messaging around complex technology innovation',
      'Market differentiation strategy',
      'Stakeholder communication systems',
    ],
    challenge:
      'Dark Ocean needed to communicate cutting-edge marine intelligence technology to investors, enterprises, and industry stakeholders while establishing credibility in an emerging market.',
    solution:
      'We developed a comprehensive brand narrative that positioned Dark Ocean as the leader in AI-driven ocean intelligence, creating messaging that made complex technology accessible without compromising technical credibility.',
    results: [
      'Established market authority in AI-marine sector',
      'Secured institutional investor confidence',
      'Differentiated from competitors through strategic positioning',
      'Built thought leadership in marine technology space',
    ],
    fullContent:
      'Dark Ocean represents a paradigm shift in ocean intelligence. By combining advanced AI with real-time hydrographic data, robotics, and seismic analysis, they\'re creating unprecedented insights into offshore environments. Our role was to translate this innovation into a compelling narrative that resonates with both technical and business audiences.',
  },
  {
    id: 2,
    slug: 'dekriminators',
    title: 'Dekriminators',
    category: 'Smart Pest Management',
    description:
      'Technology-driven pest management company delivering environmentally responsible, data-backed, and large-scale pest control solutions for businesses and homes.',
    shortDescription: 'Eco-friendly smart pest management',
    image: '/projects/dekriminators.jpg',
    metrics: [
      { label: 'Solution Type', value: 'Data-Driven' },
      { label: 'Approach', value: 'Eco-Friendly' },
      { label: 'Scale', value: 'Enterprise' },
    ],
    highlights: [
      'Sustainability-focused brand narrative',
      'B2B and consumer audience alignment',
      'Technology transparency messaging',
      'Environmental impact storytelling',
    ],
    challenge:
      'Dekriminators needed to position pest management as a sophisticated, sustainable business while educating consumers and enterprises about data-driven pest control.',
    solution:
      'We crafted a dual-audience strategy emphasizing environmental responsibility for consumers and ROI for enterprises, proving that pest management can be high-tech and eco-conscious simultaneously.',
    results: [
      'Expanded consumer awareness by 300%',
      'Secured major enterprise contracts',
      'Positioned sustainability as competitive advantage',
      'Built community trust in pest management solutions',
    ],
    fullContent:
      'Dekriminators transforms pest management from reactive emergency response to proactive, data-driven prevention. We helped them tell this story in a way that appeals to environmentally conscious consumers while proving business value to enterprises.',
  },
  {
    id: 3,
    slug: 'mark-comprehensive',
    title: 'Mark Comprehensive',
    category: 'Architecture • Facade',
    description:
      'Facade engineering and architectural solutions company specializing in precision-driven exterior systems and modern infrastructure execution.',
    shortDescription: 'Premium facade engineering solutions',
    image: '/projects/mark-comprehensive.jpg',
    metrics: [
      { label: 'Expertise', value: 'Engineering' },
      { label: 'Focus', value: 'Facade Systems' },
      { label: 'Market', value: 'Premium' },
    ],
    highlights: [
      'Technical expertise positioning',
      'Portfolio showcase strategy',
      'B2B architectural community engagement',
      'Project case study development',
    ],
    challenge:
      'Mark Comprehensive needed to establish itself as a premium facade engineering partner to architects and developers while demonstrating technical excellence.',
    solution:
      'We created a portfolio-driven brand strategy showcasing their precision engineering, technical expertise, and successful high-profile projects in the architectural community.',
    results: [
      'Established premium market positioning',
      'Generated qualified leads from architecture firms',
      'Featured in architectural publications',
      'Increased project inquiries by 200%',
    ],
    fullContent:
      'Facade engineering is both art and science. Mark Comprehensive excels at both, delivering exterior systems that are structurally sound and aesthetically stunning. We positioned them as the precision engineering partner architects trust.',
  },
  {
    id: 4,
    slug: 'jes-ai',
    title: 'Jes AI',
    category: 'Artificial Intelligence',
    description:
      'AI-powered workflow platform built to streamline productivity, automate business operations, and enhance intelligent digital experiences.',
    shortDescription: 'AI workflow automation platform',
    image: '/projects/jes-ai.jpg',
    metrics: [
      { label: 'Focus', value: 'Automation' },
      { label: 'Audience', value: 'Enterprises' },
      { label: 'Value', value: 'Productivity' },
    ],
    highlights: [
      'SaaS product positioning and messaging',
      'AI capability explanation for non-technical audiences',
      'ROI-focused value proposition',
      'Integration ecosystem storytelling',
    ],
    challenge:
      'Jes AI needed to explain complex AI capabilities to non-technical business decision-makers while demonstrating concrete productivity and ROI benefits.',
    solution:
      'We translated AI complexity into business value, creating messaging that focused on measurable outcomes: time saved, errors reduced, and revenue increased through intelligent automation.',
    results: [
      'Simplified AI communication for business audiences',
      'Increased enterprise software demo requests 250%',
      'Built strong product positioning in automation market',
      'Created reusable narrative framework for product updates',
    ],
    fullContent:
      'AI shouldn\'t be complicated. Jes AI delivers intelligent workflow automation that just works. We made the AI approachable, the benefits obvious, and the business case undeniable.',
  },
  {
    id: 5,
    slug: 'elmmetric',
    title: 'Elmmetric',
    category: 'FinTech • SaaS',
    description:
      'Modern AI invoicing and financial operations platform designed for scalable automation, analytics, and intelligent business management.',
    shortDescription: 'AI-powered invoicing platform',
    image: '/projects/elmmetric.jpg',
    metrics: [
      { label: 'Category', value: 'FinTech' },
      { label: 'Features', value: 'Automation' },
      { label: 'Target', value: 'Growing Businesses' },
    ],
    highlights: [
      'Financial operations simplification messaging',
      'Compliance and accuracy positioning',
      'Enterprise readiness communication',
      'Customer success story development',
    ],
    challenge:
      'Elmmetric needed to position itself as a modern, AI-powered alternative to legacy accounting software while emphasizing compliance and reliability.',
    solution:
      'We developed a messaging strategy that positioned automation as enabling growth rather than replacing accountants, emphasizing accuracy, compliance, and business intelligence.',
    results: [
      'Acquired 500+ early customers in first 6 months',
      'Strong positioning in growing business segment',
      'Built trust through compliance and accuracy messaging',
      'Created expansion opportunities in enterprise market',
    ],
    fullContent:
      'Financial operations shouldn\'t be manual, error-prone, or time-consuming. Elmmetric automates invoicing and financial workflows while maintaining the accuracy and compliance growing businesses need.',
  },
  {
    id: 6,
    slug: 'evologic-tech',
    title: 'Evologic Tech',
    category: 'Technology Solutions',
    description:
      'Innovation-focused technology company delivering scalable digital products, software systems, and modern engineering solutions for growing businesses.',
    shortDescription: 'Custom technology solutions',
    image: '/projects/evologic-tech.jpg',
    metrics: [
      { label: 'Offering', value: 'Custom Solutions' },
      { label: 'Strength', value: 'Innovation' },
      { label: 'Reach', value: 'Scalable' },
    ],
    highlights: [
      'Technology thought leadership positioning',
      'Custom development expertise narrative',
      'Technical team credibility building',
      'Industry-specific solution messaging',
    ],
    challenge:
      'Evologic Tech needed to stand out in a crowded technology solutions market while demonstrating innovation and reliable execution.',
    solution:
      'We created a thought leadership brand focused on technical excellence, innovative problem-solving, and deep understanding of client business challenges.',
    results: [
      'Positioned as innovation leader in tech solutions',
      'Attracted high-value enterprise clients',
      'Built credibility with engineering communities',
      'Generated inbound inquiries from target accounts',
    ],
    fullContent:
      'Technology is constantly evolving, and businesses need partners who can innovate while delivering reliable, scalable solutions. Evologic Tech does both, turning complex technical challenges into competitive advantages.',
  },
  {
    id: 7,
    slug: 'liabify',
    title: 'Liabify',
    category: 'Legal Tech',
    description:
      'Legal-tech platform simplifying compliance, liability workflows, and intelligent legal documentation through modern digital infrastructure.',
    shortDescription: 'Legal compliance platform',
    image: '/projects/liabify.jpg',
    metrics: [
      { label: 'Solution', value: 'Legal Tech' },
      { label: 'Focus', value: 'Compliance' },
      { label: 'Benefit', value: 'Simplification' },
    ],
    highlights: [
      'Complex legal processes simplification messaging',
      'Risk mitigation value proposition',
      'Compliance-focused storytelling',
      'Professional services market positioning',
    ],
    challenge:
      'Liabify needed to make complex legal compliance processes accessible and understandable to non-legal business users while maintaining professional credibility.',
    solution:
      'We developed clear, jargon-free messaging that emphasized risk reduction and operational simplification without oversimplifying legal complexities.',
    results: [
      'Increased market understanding of legal tech solutions',
      'Generated strong legal and compliance professional interest',
      'Built trust through clear risk communication',
      'Created foundation for market leadership in legal tech',
    ],
    fullContent:
      'Legal compliance doesn\'t have to be a black box. Liabify demystifies complex legal processes, making risk management, compliance, and documentation management accessible to modern businesses.',
  },
];
