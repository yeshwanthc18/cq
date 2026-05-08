'use client';

import {
  Search,
  Megaphone,
  Globe,
  LayoutDashboard,
  Mail,
  ArrowUpRight,
} from 'lucide-react';

import './styles/services-preview.css';

const services = [
  {
    id: 1,
    category: 'SEARCH',
    title: 'Search Growth',
    icon: <Search size={22} strokeWidth={1.8} />,
    description:
      'SEO, AEO, and GEO strategies designed to increase visibility, authority, and qualified organic traffic.',
    services: ['SEO', 'AEO', 'GEO'],
  },
  {
    id: 2,
    category: 'PAID MEDIA',
    title: 'Performance Marketing',
    icon: <Megaphone size={22} strokeWidth={1.8} />,
    description:
      'Data-driven campaigns focused on scaling conversions, lowering acquisition costs, and maximizing ROI.',
    services: ['Meta Ads', 'Google Ads', 'Performance'],
  },
  {
    id: 3,
    category: 'SOCIAL',
    title: 'Social Media',
    icon: <Globe size={22} strokeWidth={1.8} />,
    description:
      'Content systems and brand storytelling that build attention, engagement, and long-term audience trust.',
    services: ['Content', 'Strategy', 'Brand Voice'],
  },
  {
    id: 4,
    category: 'WEB',
    title: 'Web Experiences',
    icon: <LayoutDashboard size={22} strokeWidth={1.8} />,
    description:
      'Modern websites crafted for speed, conversion, scalability, and seamless cross-device user experiences.',
    services: ['UI/UX', 'Development', 'Conversion'],
  },
  {
    id: 5,
    category: 'EMAIL',
    title: 'Email Automation',
    icon: <Mail size={22} strokeWidth={1.8} />,
    description:
      'Automated email journeys that improve retention, nurture leads, and drive repeat customer engagement.',
    services: ['Flows', 'Automation', 'Retention'],
  },
];

export default function ServicesPreview() {
  return (
    <section className="services-preview">
      <div className="services-preview__container">
        <div className="services-preview__header">
          <p className="section-label">Services</p>

          <h2 className="services-preview__title">
            What We <em>Do</em>
          </h2>

          <p className="services-preview__subtitle">
            Full-funnel digital solutions built to scale brands, increase
            visibility, and drive measurable growth.
          </p>
        </div>

        <div className="services-preview__grid">
          {services.map((service, idx) => (
            <article
              key={service.id}
              className={`service-card fade-in-up stagger-${(idx % 5) + 1}`}
            >
              <div className="service-card__top">
                <div className="service-card__icon">
                  {service.icon}
                </div>

                <span className="service-card__category">
                  {service.category}
                </span>
              </div>

              <div className="service-card__content">
                <h3 className="service-card__title">
                  {service.title}
                </h3>

                <p className="service-card__description">
                  {service.description}
                </p>
              </div>

              <div className="service-card__bottom">
                <div className="service-card__services">
                  {service.services.map((svc, sidx) => (
                    <span key={sidx} className="service-tag">
                      {svc}
                    </span>
                  ))}
                </div>

                <button className="service-card__link">
                  <span>Learn More</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}