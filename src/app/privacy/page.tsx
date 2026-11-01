import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Royal Jackson Travel & Tours website enquiries are handled.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Website information"
        title="Privacy notice."
        description="A clear explanation of what happens when you contact Royal Jackson through this website."
      />
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20">
        <p className="text-sm leading-7 text-slate-600">
          This notice describes the enquiry features on the Royal Jackson Travel &amp; Tours
          website. It is not a full statement of how third-party services or the company handle
          information after you contact them.
        </p>
        <h2 className="editorial mt-9 text-2xl text-primary">Travel enquiry form</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          When you fill in the travel enquiry form, your details are used in your browser to
          prepare a message addressed to Royal Jackson on WhatsApp. The form does not submit your
          details to a website booking system. WhatsApp opens separately, and you can review or
          edit the message before choosing whether to send it. If you send it, WhatsApp and Royal
          Jackson may then process the information under their own practices.
        </p>
        <h2 className="editorial mt-9 text-2xl text-primary">Phone, email and external links</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Phone, email and WhatsApp links open the relevant service on your device. Information
          you choose to share through those services is handled by the relevant service and
          recipient. Please review their privacy information before sending sensitive details.
        </p>
        <h2 className="editorial mt-9 text-2xl text-primary">Questions</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          For questions about an enquiry you have sent to Royal Jackson, contact{" "}
          <a className="font-medium text-primary underline" href="mailto:Royaljacksontravelandtours@gmail.com">
            Royaljacksontravelandtours@gmail.com
          </a>
          . This page should be reviewed and updated if the website’s data handling changes.
        </p>
      </article>
    </>
  );
}
