"use client";

import "./styles/services-grid.css";

const services = [
  {
    id: 1,
    title: "Search Engine Optimization",
    subtitle: "SEO, AEO & GEO",
    description:
      "Be found where your audience is searching—across Google, AI platforms, and answer engines.",
    features: [
      "Technical SEO & site architecture",
      "Content strategy aligned with search intent",
      "Answer Engine Optimization",
      "Authority building through content & backlinks",
    ],
    outcome:
      "Higher visibility across modern search platforms with consistent inbound leads.",
  },
  {
    id: 2,
    title: "Performance Marketing",
    subtitle: "Paid Growth",
    description:
      "Every rupee you spend should bring measurable returns. We design campaigns that convert.",
    features: [
      "Google Ads (Search, Display, YouTube)",
      "Meta Ads (Facebook & Instagram)",
      "Funnel strategy & landing page alignment",
      "Creative testing & performance optimization",
    ],
    outcome:
      "Lower acquisition costs with better lead quality and predictable, scalable growth.",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    subtitle: "Story-Driven SMM",
    description:
      "Attention is easy. Meaningful engagement is not. We build content ecosystems that matter.",
    features: [
      "Content strategy rooted in brand narrative",
      "High-impact creatives (reels, carousels)",
      "Platform-specific growth frameworks",
      "Community engagement & brand voice building",
    ],
    outcome:
      "Strong brand recall with loyal audience growth and content that drives business.",
  },
  {
    id: 4,
    title: "Website Development",
    subtitle: "Built to Convert",
    description:
      "Your website is not a brochure. It&apos;s your growth engine. We design for conversions.",
    features: [
      "Conversion-focused UI/UX",
      "Fast, scalable, SEO-ready builds",
      "Landing pages for campaigns",
      "Analytics & tracking integration",
    ],
    outcome:
      "More leads from the same traffic with a website that works 24/7 to grow your business.",
  },
  {
    id: 5,
    title: "Email Marketing & Automation",
    subtitle: "Revenue Channel",
    description:
      "Most brands underuse email. We turn it into a revenue channel through smart automation.",
    features: [
      "Lifecycle & drip campaigns",
      "Lead nurturing funnels",
      "Promotional & retention campaigns",
      "CRM & automation workflows",
    ],
    outcome:
      "Higher customer lifetime value with increased repeat business and consistent revenue.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-section services-grid">
      <div className="max-w">
        <h2 className="section-label">What We Do</h2>
        <h3 className="section-title">Our Services</h3>
        <p className="section-subtitle">
          Complete marketing solutions designed to drive growth at every stage
          of your customer journey.
        </p>

        <div className="services-list mt-lg">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card fade-in ${index % 2 === 0 ? "even" : "odd"}`}
            >
              <div className="service-card__header">
                <div>
                  <h4 className="service-card__title">{service.title}</h4>
                  <p className="service-card__subtitle">{service.subtitle}</p>
                </div>
                <div className="service-card__number">
                  {String(service.id).padStart(2, "0")}
                </div>
              </div>

              <p className="service-card__description">{service.description}</p>

              <div className="service-card__features">
                <h5 className="features-label">What we do:</h5>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card__outcome">
                <h5 className="outcome-label">Outcome</h5>
                <p className="outcome-text">{service.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
