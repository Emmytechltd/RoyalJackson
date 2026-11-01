import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import TravelEnquiryForm from "@/components/TravelEnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Royal Jackson Travel & Tours in Abuja to discuss your travel plans.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="We are here to help"
        title="Let’s talk about where you want to go."
        description="Have a question about travel, study abroad or visa assistance? Tell us what you are planning and our team will be in touch."
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=85"
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[.7fr_1.3fr] lg:gap-16 lg:px-8">
        <div>
          <p className="section-kicker">Get in touch</p>
          <h2 className="editorial mt-3 text-4xl text-primary">A real person is ready to help.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Reach us by phone, email or WhatsApp, or send your travel enquiry using the form.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d7c7a6] text-[#92784d]">
                <Phone size={19} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-primary">Call us</h3>
                <a className="mt-1 block text-sm text-slate-600 hover:text-primary" href="tel:+2347036435989">+234 703 643 5989</a>
                <a className="mt-1 block text-sm text-slate-600 hover:text-primary" href="tel:07039357146">07039357146</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d7c7a6] text-[#92784d]">
                <Mail size={19} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-primary">Email</h3>
                <a className="mt-1 block break-all text-sm text-slate-600 hover:text-primary" href="mailto:Royaljacksontravelandtours@gmail.com">
                  Royaljacksontravelandtours@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d7c7a6] text-[#92784d]">
                <MapPin size={19} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-primary">Find us</h3>
                <p className="mt-1 text-sm text-slate-600">Abuja, Nigeria</p>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/2347036435989"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center border border-primary px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Message us on WhatsApp
          </a>
        </div>

        <div id="enquiry" className="scroll-mt-28">
          <TravelEnquiryForm />
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <iframe
            title="Map showing Abuja, Nigeria"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d7.322359691811566!3d9.024416999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e614f1774a38d%3A0x296e38b323c22026!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1716300000000!5m2!1sen!2sng"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border border-slate-200"
          />
        </div>
      </section>
    </>
  );
}
