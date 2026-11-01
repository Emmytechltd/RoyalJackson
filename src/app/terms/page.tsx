import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Terms for using the Royal Jackson Travel & Tours website.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Website information"
        title="Website terms."
        description="Important information about using the Royal Jackson Travel & Tours website."
      />
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
        <p className="text-sm leading-7 text-slate-600">
          This website provides general information about Royal Jackson Travel &amp; Tours and
          its services. Browsing the website does not, by itself, create a client relationship or
          confirm a booking.
        </p>
        <h2 className="editorial mt-9 text-2xl text-primary">Travel and visa information</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Travel requirements, visa rules, eligibility, availability and offers can change.
          Information on this website should not be treated as official immigration, legal or
          government advice. Confirm current requirements with the relevant authorities and
          discuss service details with Royal Jackson before making decisions.
        </p>
        <h2 className="editorial mt-9 text-2xl text-primary">Applications and outcomes</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Visa, admission, employment and entry decisions are made by the relevant institutions,
          employers, carriers or government authorities. Royal Jackson cannot guarantee an
          application outcome, admission, job, visa or permission to travel.
        </p>
        <h2 className="editorial mt-9 text-2xl text-primary">Enquiries and bookings</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          An enquiry sent through WhatsApp, phone or email is a request to discuss your plans,
          not a confirmed booking. Any service scope, fees, payment terms and booking details
          should be agreed directly with Royal Jackson before you proceed.
        </p>
        <h2 className="editorial mt-9 text-2xl text-primary">Contact</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Questions about these website terms can be sent to{" "}
          <a className="font-medium text-primary underline" href="mailto:Royaljacksontravelandtours@gmail.com">
            Royaljacksontravelandtours@gmail.com
          </a>
          .
        </p>
      </article>
    </>
  );
}
