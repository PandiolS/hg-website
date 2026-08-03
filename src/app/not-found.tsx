// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <section className="text-center">
        <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-indigo-50">
          <span className="text-5xl font-bold text-indigo-600">
            ?
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900">
          Oops! Lost somewhere?
        </h1>

        <p className="mx-auto mt-4 max-w-md text-gray-500">
          The page you requested could not be found. It might have been removed,
          renamed, or never existed.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
        >
          Return Home
        </Link>
      </section>
    </main>
  );
}