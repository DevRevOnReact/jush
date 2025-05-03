import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the difference between the Part-Time and Full-Time plans?",
    answer: "The Part-Time plan provides up to 60 hours of design support per month, ideal for ongoing projects with moderate needs. The Full-Time plan offers dedicated design services with daily updates and comprehensive support, perfect for teams needing constant design work and faster turnaround times."
  },
  {
    question: "How do Custom Sprints work?",
    answer: "Custom Sprints are focused design periods typically lasting 2-4 weeks, where we tackle specific design challenges or projects. We start with a detailed planning session, set clear deliverables, and work intensively to achieve your goals within the agreed timeframe."
  },
  {
    question: "Can I switch between plans if my needs change?",
    answer: "Yes, you can switch between plans with a 30-day notice. We understand that business needs evolve, and we're flexible in adjusting your plan to match your current requirements. Our team will help ensure a smooth transition between plans."
  },
  {
    question: "What types of projects are best suited for Custom Sprints?",
    answer: "Custom Sprints are ideal for well-defined projects like website redesigns, app UI overhauls, brand identity creation, or specific feature designs. They work best when you have clear goals and need intensive design work completed within a set timeframe."
  },
  {
    question: "Are there any long-term contracts?",
    answer: "While we offer monthly plans, we don't require long-term commitments. You can start with a monthly subscription and adjust or cancel with a 30-day notice. However, we do offer incentives for longer-term commitments."
  },
  {
    question: "How do you ensure the quality of work within these plans?",
    answer: "We maintain quality through regular reviews, established design processes, and dedicated project management. Each project has quality checkpoints, and we provide regular updates and revisions until you're completely satisfied with the deliverables."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1E1B4B] mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}