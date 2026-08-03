"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoEmailForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = email ? `?email=${encodeURIComponent(email)}` : "";
    router.push(`/contact${params}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-sm"
    >
      <label htmlFor="demo-email" className="sr-only">
        Work email
      </label>
      <input
        id="demo-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="What's your work email? *"
        className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200 sm:border-0 sm:py-3"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Request free demo
      </button>
    </form>
  );
}
