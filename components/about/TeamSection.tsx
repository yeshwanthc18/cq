"use client";

import "./styles/team.css";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Prashanth Ravikumar",
    role: "CEO & Founder",
    image: "/team/prashanth.png",
    bio: "Leads company vision, strategic growth, partnerships, and long-term business direction across digital initiatives.",
  },
  {
    id: 2,
    name: "Pranav Sathish",
    role: "Director – Marketing & Brand Strategy",
    image: "/team/pranav.jpeg",
    bio: "Drives brand positioning, campaign strategy, creative direction, and impactful marketing communication across platforms.",
  },
  {
    id: 3,
    name: "Srinivas Nahak",
    role: "Full Stack Developer",
    image: "/team/srinivas.png",
    bio: "Builds scalable applications, optimized systems, and modern digital experiences using full stack technologies.",
  },
  {
    id: 4,
    name: "Yeshwanth C",
    role: "Full Stack Developer",
    image: "/team/yeshwanth.jpeg",
    bio: "Creates high-performance interfaces, scalable architectures, and seamless user experiences for modern web platforms.",
  },
  {
    id: 5,
    name: "Gopi Krishna",
    role: "Motion Graphics & 3D Artist",
    image: "/team/gopi.png",
    bio: "Designs immersive motion graphics, cinematic animations, and engaging 3D visuals for digital storytelling campaigns.",
  },
  {
    id: 6,
    name: "Likith",
    role: "SEO Lead",
    image: "/team/likith.jpg",
    bio: "Improves search visibility, organic traffic, technical optimization, and performance-driven SEO growth strategies.",
  },
  {
    id: 7,
    name: "Medha Anand Kamble",
    role: "Graphic & Social Media Designer",
    image: "/team/medha.jpeg",
    bio: "Designs social media creatives, branded visuals, video assets, and engaging content for digital campaigns.",
  },{
  id: 8,
  name: "Anil",
  role: "Office Admin",
  image: "/team/anil.jpeg",
  bio: "Manages daily operations, and ensures smooth office functionality.",
}
];

export default function TeamSection() {
  return (
    <section className="team">
      <div className="team__container">
        <div className="team__header">
          <p className="eyebrow">Our Team</p>

          <h2 className="team__title">
            Built by a focused <span className="highlighted">team</span>
          </h2>

          <p className="team__subtitle">
            A small, high-impact team combining engineering, design, and
            strategy to build meaningful digital products.
          </p>
        </div>

        <div className="team__grid">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.id}
              className={`team__card fade-in-up stagger-${(idx % 5) + 1}`}
            >
              <div className="team__imageWrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team__image"
                />
              </div>

              <div className="team__content">
                <h3 className="team__name">{member.name}</h3>

                <p className="team__role">{member.role}</p>

                <p className="team__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team__footer">
          <p>
            We focus on clarity, performance, and delivering real results.
          </p>
        </div>
      </div>
    </section>
  );
}