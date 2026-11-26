"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";

const promotions = [
  {
    image: "/images/home-promotions/travel-services.jpeg",
    alt: "Royal Jackson travel services promotional artwork",
    title: "Explore travel with Royal Jackson",
  },
  {
    image: "/images/home-promotions/thailand-travel.jpeg",
    alt: "Royal Jackson Thailand travel promotional artwork",
    title: "Thailand travel",
  },
  {
    image: "/images/home-promotions/malta-travel.jpeg",
    alt: "Royal Jackson Malta travel promotional artwork",
    title: "Malta travel",
  },
  {
    image: "/images/home-promotions/mexico-travel.jpeg",
    alt: "Royal Jackson Mexico travel promotional artwork",
    title: "Mexico travel",
  },
  {
    image: "/images/home-promotions/indonesia-travel.jpeg",
    alt: "Royal Jackson Indonesia travel promotional artwork",
    title: "Indonesia travel",
  },
];

const whatsappNumber = "2347036435989";

export default function HomePromotionPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const promotion = promotions[activeIndex];
  const enquiryMessage = `Hello Royal Jackson Travel & Tours, I saw your ${promotion.title} promotion. Please confirm current availability, prices, requirements and timelines.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiryMessage)}`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) {
      return;
    }

    try {
      dialog.showModal();
      closeButtonRef.current?.focus();
    } catch (error) {
      console.error("Could not open the travel promotion dialog.", error);
    }
  }, []);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + promotions.length) % promotions.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % promotions.length);
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="home-promotion-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close();
        }
      }}
      className="home-promotion-dialog fixed inset-0 m-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-5xl overflow-y-auto border-0 bg-transparent p-0 text-[#243044] shadow-2xl"
    >
      <div className="relative grid min-h-0 overflow-hidden rounded-sm bg-white md:grid-cols-[1.05fr_.95fr]">
        <div className="relative flex min-h-0 items-center justify-center bg-[#f7f5f0] p-3 sm:p-5">
          <Image
            src={promotion.image}
            alt={promotion.alt}
            width={720}
            height={1280}
            priority
            sizes="(min-width: 768px) 48vw, 92vw"
            className="h-auto max-h-[38dvh] w-full object-contain sm:max-h-[48dvh] md:max-h-[min(76dvh,680px)]"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-[#101f35]/90 px-3 py-1.5 text-xs font-medium text-white" aria-live="polite">
            Promotion {activeIndex + 1} of {promotions.length}
          </div>
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous promotion"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#101f35] shadow transition-colors hover:bg-[#f1ece1]"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next promotion"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#101f35] shadow transition-colors hover:bg-[#f1ece1]"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex flex-col p-5 sm:p-8 md:p-9">
          <div className="flex items-start justify-between gap-5">
            <p className="section-kicker">The Art of Travel</p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close travel promotions"
              className="focus-ring -mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#101f35] transition-colors hover:bg-[#f1ece1]"
            >
              <X size={21} aria-hidden="true" />
            </button>
          </div>

          <h2 id="home-promotion-title" className="editorial mt-2 text-3xl leading-tight text-[#101f35] sm:text-4xl">
            A little inspiration for your next journey.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            Browse our travel promotions and ask our Abuja team about planning your trip.
          </p>

          <div className="mt-5 flex flex-wrap gap-2" aria-label="Choose a promotion">
            {promotions.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show promotion ${index + 1}: ${item.title}`}
                aria-pressed={index === activeIndex}
                className={`focus-ring flex h-10 min-w-10 items-center justify-center border px-3 text-xs font-semibold transition-colors ${
                  index === activeIndex
                    ? "border-[#101f35] bg-[#101f35] text-white"
                    : "border-slate-300 bg-white text-[#243044] hover:border-[#101f35]"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-[#c6a46a] bg-[#f7f5f0] p-4 text-xs leading-5 text-slate-700">
            Promotional details in these images may change. Please confirm current availability,
            prices, eligibility and timelines with us. Visa decisions are made by the relevant
            authorities; approval cannot be guaranteed.
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-auto md:pt-7">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-sm bg-[#28794b] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#21643e]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Ask us on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-slate-300 px-5 text-sm font-semibold text-[#243044] transition-colors hover:bg-[#f7f5f0]"
            >
              Continue to site <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
