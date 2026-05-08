'use client';

import './styles/problem.css';

export default function ProblemSection() {
  const problems = [
    'SEO works in isolation',
    'Ads burn budget without clarity',
    'Social creates noise, not impact',
    'Websites don\'t convert',
  ];

  return (
    <section className="problem">
      <div className="problem__header">
        <p className="section-label">The Problem</p>
        <h2 className="problem__title">
          Growth Isn&apos;t a <em>Channel Problem.</em> It&apos;s a <em>System Problem.</em>
        </h2>
      </div>

      <div className="problem__content">
        <div className="problem__left">
          <p className="problem__intro">
            Most brands struggle because their marketing is disconnected.
          </p>
          <ul className="problem__list">
            {problems.map((problem, idx) => (
              <li key={idx} className={`problem__item fade-in-up stagger-${idx + 1}`}>
                <span className="problem__icon">–</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="problem__right fade-in-up stagger-5">
          <div className="problem__solution-box">
            <h3 className="problem__solution-title">We fix that.</h3>
            <p className="problem__solution-text">
              Crayon &amp; Quill builds integrated growth systems where every channel
              works together — aligned to one goal: revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
