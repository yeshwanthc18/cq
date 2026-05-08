'use client';

import './styles/goals.css';

const goals = [
  'Drive qualified leads',
  'Increase conversions',
  'Reduce acquisition cost',
  'Scale revenue predictably',
];

export default function GoalsSection() {
  return (
    <section className="goals">
      <div className="goals__content">
        <h2 className="goals__title">
          Your Goals. Our Execution. <em>Real Impact.</em>
        </h2>
        <p className="goals__intro">
          We align everything to outcomes that matter:
        </p>

        <ul className="goals__list">
          {goals.map((goal, idx) => (
            <li key={idx} className={`goal-item fade-in-up stagger-${(idx % 4) + 1}`}>
              <span className="goal-icon">✓</span>
              {goal}
            </li>
          ))}
        </ul>

        <p className="goals__footer">
          Because marketing should be measurable, scalable, and intentional.
        </p>
      </div>
    </section>
  );
}
