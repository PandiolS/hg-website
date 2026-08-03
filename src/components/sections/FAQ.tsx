// src/components/sections/FAQ.tsx

"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide custom software development, web applications, SaaS platforms, and business automation solutions tailored to your needs.",
  },
  {
    question: "How long does it take to build a project?",
    answer:
      "Project timelines depend on complexity and requirements. Small projects can take a few weeks, while larger platforms may require several months.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We provide maintenance, improvements, monitoring, and technical support after project delivery.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer:
      "Yes. We can integrate your application with existing APIs, databases, authentication providers, and third-party services.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern technologies including React, Next.js, TypeScript, Node.js, .NET, SQL databases, and cloud platforms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Find answers to common questions about our services.
          </p>
        </div>


        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-indigo-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>


                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}