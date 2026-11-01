import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-[#f8f6f0] px-5 py-20 text-center">
      <div className="max-w-xl">
        <p className="section-kicker">A different direction</p>
        <h1 className="editorial mt-4 text-6xl text-primary">Page not found.</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          The page you are looking for may have moved. Start from the homepage or get in touch with our team.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-12 items-center justify-center bg-primary px-6 text-sm font-semibold text-white hover:bg-[#253c60]">
            Back to home
          </Link>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center border border-primary px-6 text-sm font-semibold text-primary hover:bg-white">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
