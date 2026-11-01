import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";

export default function EVisaAlert() {
  return (
    <aside className="border-b border-[#e5dcc9] bg-[#f7f3e9]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <Info size={18} className="mt-0.5 shrink-0 text-[#92784d]" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-primary">Enquiring about an e-visa?</p>
            <p className="mt-1 text-xs leading-5 text-slate-600">
              Destinations, entry conditions and fees can change. Ask our team to confirm current details.
            </p>
          </div>
        </div>
        <Link
          href="https://wa.me/2347036435989?text=Hello%20Royal%20Jackson%2C%20could%20you%20please%20share%20current%20e-visa%20information%3F"
          className="inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-primary hover:text-[#8d7448]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask on WhatsApp <ArrowUpRight size={14} />
        </Link>
      </div>
    </aside>
  );
}
