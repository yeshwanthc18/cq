'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  ArrowUpRight,
  Check,
} from 'lucide-react';

import './live-pools.css';

const polls = [
  {
    id: 1,
    label: 'LIVE POLL · POLL 1 OF 3',
    question:
      "Be honest — when you hear 'AI strategy', what’s your first instinct?",
    highlight: 'AI strategy',
    options: [
      {
        key: 'A',
        text: "Excitement — there's real opportunity here",
        color: 'cyan',
      },
      {
        key: 'B',
        text: 'Exhaustion — another thing to figure out',
        color: 'blue',
      },
      {
        key: 'C',
        text: 'Skepticism — most of it is hype',
        color: 'gold',
      },
      {
        key: 'D',
        text: "Anxiety — we're already behind",
        color: 'green',
      },
    ],
  },

  {
    id: 2,
    label: 'LIVE POLL · POLL 2 OF 3',
    question:
      'Right now — what feels like the biggest barrier between you and an intelligent enterprise?',
    options: [
      {
        key: 'A',
        text: 'Our data is fragmented — no sole source of truth',
        color: 'cyan',
      },
      {
        key: 'B',
        text: 'Our teams work in silos — no shared direction',
        color: 'blue',
      },
      {
        key: 'C',
        text: 'Governance and compliance — we cannot move fast safely',
        color: 'gold',
      },
      {
        key: 'D',
        text: 'We do not know where to start',
        color: 'purple',
      },
    ],
  },

  {
    id: 3,
    label: 'LIVE POLL · POLL 3 OF 3',
    question:
      'Having heard tonight — is AI the answer, or is intelligence the question?',
    options: [
      {
        key: 'A',
        text: 'AI is the answer — the technology is what matters',
        color: 'cyan',
      },
      {
        key: 'B',
        text: 'Intelligence is the question — how you use it is everything',
        color: 'blue',
      },
      {
        key: 'C',
        text: 'Both — you need the tech AND the thinking',
        color: 'gold',
      },
      {
        key: 'D',
        text: 'Neither — execution is what actually matters',
        color: 'purple',
      },
    ],
  },
];

export default function LivePollsSection() {
  const [answers, setAnswers] = useState<{
    [key: number]: string;
  }>({});

  const [loading, setLoading] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const handleSelect = (
    pollId: number,
    option: string
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [pollId]: option,
    }));
  };

  const handleSubmit = async () => {
    if (
      !answers[1] ||
      !answers[2] ||
      !answers[3]
    ) {
      alert(
        'Please answer all polls.'
      );

      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          poll_1: answers[1],
          poll_2: answers[2],
          poll_3: answers[3],
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitted(true);
    } catch (err) {
      console.error(err);

      alert(
        'Something went wrong.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="live-polls">
      <div className="live-polls__spotlight" />
      <div className="live-polls__grid-bg" />
      <div className="live-polls__noise" />

      <div className="live-polls__container">
        <div className="live-polls__header">
          <p className="section-label">
            Live Audience Polls
          </p>

          <h2 className="live-polls__title">
            Intelligence.
            <em> Strategy.</em>
            Execution.
          </h2>

          <p className="live-polls__subtitle">
            Three live questions exploring
            how modern organizations think
            about AI transformation.
          </p>
        </div>

        <div className="polls-stack">
          {polls.map((poll) => (
            <article
              key={poll.id}
              className="poll-card"
            >
              <div className="poll-card__top">
                <span className="poll-card__label">
                  {poll.label}
                </span>

                <div className="poll-card__line" />
              </div>

              <h3 className="poll-card__question">
                {poll.question}
              </h3>

              <div className="poll-card__options">
                {poll.options.map(
                  (option) => {
                    const active =
                      answers[poll.id] ===
                      option.key;

                    return (
                      <button
                        key={option.key}
                        onClick={() =>
                          handleSelect(
                            poll.id,
                            option.key
                          )
                        }
                        className={`poll-option ${
                          active
                            ? 'active'
                            : ''
                        }`}
                      >
                        <div className="poll-option__left">
                          <div
                            className={`poll-option__badge poll-option__badge--${option.color}`}
                          >
                            {active ? (
                              <Check
                                size={18}
                              />
                            ) : (
                              option.key
                            )}
                          </div>

                          <p>
                            {option.text}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={22}
                          className="poll-option__arrow"
                        />
                      </button>
                    );
                  }
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="poll-submit">
          {submitted ? (
            <div className="poll-submit__success">
              Responses submitted
              successfully.
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="poll-submit__button"
            >
              {loading
                ? 'Submitting...'
                : 'Submit Poll Responses'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}