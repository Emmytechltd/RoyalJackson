import { MessageCircle } from "lucide-react";

export default function WhatsAppShortcut() {
  return (
    <a
      href="https://wa.me/2347036435989"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Royal Jackson on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center bg-[#327b55] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={25} aria-hidden="true" />
    </a>
  );
}
