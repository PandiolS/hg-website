"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { audienceTabs } from "@/config/audienceTabs";

export default function AudienceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = audienceTabs[activeIndex];

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Whoever you are, we can help you
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Higherd adapts to
            the way your organisation plans, delivers, and manages people on every project.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Audience categories"
          className="mt-12 flex flex-col lg:flex-row lg:items-stretch"
        >
          {audienceTabs.map((tab, index) => {
            const isActive = index === activeIndex;

            return (
              <Fragment key={tab.id}>
                {index > 0 && (
                  <div
                    aria-hidden
                    className="my-4 h-px border-t border-dashed border-violet-300 lg:my-0 lg:h-auto lg:w-px lg:self-stretch lg:border-t-0 lg:border-l"
                  />
                )}

                <button
                  type="button"
                  id={`audience-tab-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`audience-panel-${tab.id}`}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-1 rounded-2xl p-5 text-left transition-all sm:p-6 ${
                    isActive
                      ? "border-2 border-primary bg-white shadow-sm"
                      : "border-2 border-transparent hover:bg-white/60"
                  }`}
                >
                  <span className="block text-base font-semibold text-slate-900 sm:text-lg">
                    {tab.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-slate-600">
                    {tab.description}
                  </span>
                </button>
              </Fragment>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`audience-panel-${activeTab.id}`}
          aria-labelledby={`audience-tab-${activeTab.id}`}
          className="relative mt-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70"
        >
          <div className="relative aspect-16/10 w-full sm:aspect-video">
            <Image
              src={activeTab.image}
              alt={activeTab.imageAlt}
              fill
              unoptimized
              className="object-cover"
              key={activeTab.id}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
