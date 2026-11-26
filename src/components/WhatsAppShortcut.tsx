import { MessageCircle } from "lucide-react";

export default function WhatsAppShortcut() {
  return (
    <>
      <a
        href="https://wa.me/2347036435989"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Royal Jackson on WhatsApp"
        className="focus-ring fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#28794b] text-white shadow-lg transition-transform hover:scale-105 md:flex"
      >
        <MessageCircle size={25} aria-hidden="true" />
      </a>
      <a
        href="https://wa.me/2347036435989"
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring fixed inset-x-0 bottom-0 z-50 flex min-h-14 items-center justify-center gap-2 bg-[#28794b] px-4 pb-[env(safe-area-inset-bottom)] text-sm font-semibold text-white shadow-[0_-8px_24px_rgba(16,28,50,0.12)] md:hidden"
      >
        <MessageCircle size={19} aria-hidden="true" />
        Chat on WhatsApp
      </a>
    </>
  );
}
