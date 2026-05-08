'use client';

import './styles/values.css';

const VALUES = [
  {
    number: '01',
    title: 'Story Drives Strategy',
    desc: 'People don\'t connect with ads. They connect with stories. Every brand has a narrative — our job is to uncover it, shape it, and scale it across the right channels.',
  },
  {
    number: '02',
    title: 'Performance Gives Direction',
    desc: 'Creativity without data is guesswork. Data without creativity is forgettable. We combine both to create campaigns that are insight-driven and emotionally resonant.',
  },
  {
    number: '03',
    title: 'Marketing Should Be Intentional',
    desc: 'No random posting. No scattered campaigns. Every action we take is tied to a clear goal: growth, leads, revenue, or retention.',
  },
  {
    number: '04',
    title: 'Connections Build Long-Term Brands',
    desc: 'Anyone can generate traffic. We focus on building relationships with your audience — because that\'s what drives sustainable growth.',
  },
];

export default function ValuesSection() {
  return (
    <section className="values">
      <div className="values__header">
        <h2 className="values__title">
          What we <em>believe</em>
        </h2>
        <p className="values__subtitle">
          Four principles that guide everything we build.
        </p>
      </div>

      <div className="values__grid">
        {VALUES.map((value, idx) => (
          <div key={value.number} className={`values__item fade-in-up stagger-${(idx % 4) + 1}`}>
            <div className="values__number">{value.number}</div>
            <h3 className="values__item-title">{value.title}</h3>
            <p className="values__item-desc">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
