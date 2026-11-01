import Link from "next/link";
import Image from "next/image";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  image,
}: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      {image && (
        <>
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,28,50,.94),rgba(16,28,50,.66))]" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="section-kicker text-[#ddc89f]">{eyebrow}</p>
        <h1 className="editorial mt-4 max-w-4xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
          {description}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex border border-[#ddc89f] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#ddc89f] hover:text-primary"
        >
          Plan your trip
        </Link>
      </div>
    </section>
  );
}
