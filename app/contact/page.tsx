import { ContactIcon, MailIcon, PhoneIcon, LinkedInIcon } from "@/components/Icons";
import { site } from "@/data/site";
import { assets } from "@/lib/assets";

const contactMethods = [
  {
    label: site.phone,
    href: `https://wa.me/52${site.phone.replace(/\s|-/g, "")}`,
    Icon: PhoneIcon,
  },
  {
    label: site.email,
    href: `mailto:${site.email}`,
    Icon: MailIcon,
  },
  {
    label: "My LinkedIn",
    href: site.linkedinUrl,
    Icon: LinkedInIcon,
  },
];

export default function ContactPage() {
  return (
    <section className="bg-base px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative mx-auto w-full max-w-sm shrink-0 lg:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.contactDeskPhoto}
              alt="Sebastián working"
              className="h-[380px] w-full rounded-2xl object-cover opacity-70"
            />
            <div className="absolute inset-x-8 top-1/2 flex -translate-y-1/2 items-center justify-center gap-2 rounded-lg border border-white/70 bg-black/30 px-4 py-3 backdrop-blur-sm">
              <ContactIcon className="h-6 w-6 text-white" />
              <span className="font-display text-lg font-bold text-white">Contact Me</span>
            </div>
          </div>

          <div className="flex w-full max-w-md flex-col gap-6">
            {contactMethods.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-center gap-3 rounded-2xl border border-white px-6 py-3 text-white transition-colors hover:bg-white/10"
              >
                <Icon className="h-5 w-5" />
                <span className="font-semibold">{label}</span>
              </a>
            ))}
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.contactCircularPhoto}
            alt=""
            className="mx-auto hidden h-32 w-32 shrink-0 rounded-full border border-white object-cover lg:mx-0 lg:block"
          />
        </div>

        <h1 className="mt-14 text-center font-display text-4xl font-semibold text-white sm:text-5xl">
          {site.contactHeadline}
        </h1>
      </div>
    </section>
  );
}
