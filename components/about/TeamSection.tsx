"use client";

import "./styles/team.css";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Prashanth Ravikumar",
    role: "Founder & Strategy Lead",
    bio: "Leads vision, product direction, and overall strategy.",
  },
  {
    id: 2,
    name: "Pranav Sathish",
    role: "Creative Director",
    bio: "Drives design systems, branding, and visual identity.",
  },
  {
    id: 3,
    name: "Srinivas Nahak",
    role: "Frontend Engineer",
    bio: "Builds scalable, high-performance user interfaces.",
  },
  {
    id: 4,
    name: "Yeshwanth C",
    role: "Frontend Engineer",
    bio: "Focuses on UI/UX precision and performance optimization.",
  },
  {
    id: 5,
    name: "Gopi Krishna",
    role: "Motion Artist",
    bio: "Transforms data into actionable insights.",
  },
  {
    id: 6,
    name: "Likith",
    role: "SEO Lead",
    bio: "Designs APIs and ensures system reliability.",
  },

  {
    id: 7,
    name: "Medha",
    role: "Designer",
    bio: "Aligns execution with product goals and user needs.",
  },
];

export default function TeamSection() {
  return (
    <section className="team">
      <div className="team__header">
        <p className="eyebrow">Our Team</p>

        <h2 className="team__title">
          Built by a focused <span className="highlighted">team</span>
        </h2>

        <p className="team__subtitle">
          A small, high-impact team combining engineering, design, and strategy
          to build meaningful digital products.
        </p>
      </div>

      <div className="team__grid">
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={member.id}
            className={`team__card fade-in-up stagger-${(idx % 5) + 1}`}
          >
            <div className="team__avatar">{member.name.charAt(0)}</div>

            <div className="team__content">
              <h3 className="team__name">{member.name}</h3>
              <p className="team__role">{member.role}</p>
              <p className="team__bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="team__footer">
        <p>We focus on clarity, performance, and delivering real results.</p>
      </div>
    </section>
  );
}
