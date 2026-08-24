import { Button } from "@/components/Button";
import { CroppedMockup } from "@/components/CroppedMockup";
import { assets } from "@/lib/assets";
import { site } from "@/data/site";

function HeroWatermark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={assets.homeHeroWatermark}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-8 -z-10 h-44 w-44 -translate-x-1/2 object-contain opacity-25 md:hidden"
    />
  );
}

export default function HomePage() {
  return (
    <section className="relative overflow-hidden bg-hero-home">
      <div className="mx-auto flex min-h-[calc(100vh-144px)] max-w-6xl flex-col items-center gap-12 px-6 pb-16 pt-10 md:min-h-[calc(100vh-88px)] md:flex-row md:items-center md:justify-between md:gap-8 md:pt-0 lg:px-10">
        {/* Text */}
        <div className="relative isolate flex max-w-xl flex-col items-start gap-6 text-left">
          <HeroWatermark />
          <p className="font-display mt-12 text-xl text-accent sm:text-4xl md:mt-0 md:text-5xl">
            I´m {site.name}
          </p>
          <h1 className="font-display -mt-2 text-3xl font-extrabold uppercase leading-tight text-white sm:text-6xl md:mt-0 md:text-6xl">
            {site.role}
          </h1>
          <p className="-mt-2 max-w-md text-[15px] text-white/90 sm:text-xl md:mt-0">{site.tagline}</p>

          <div className="mt-16 flex w-full flex-col gap-4 sm:mt-10 sm:w-auto sm:flex-row">
            <Button
              href="/projects"
              size="huge"
              variant="fill"
              className="!h-[48px] !w-[min(376px,100%)] !rounded-full !text-[16px] sm:!h-[56px] sm:!w-[411px] sm:!rounded-2xl sm:!text-[18px]"
            >
              View Projects
            </Button>
            <Button
              href="/contact"
              size="small"
              variant="fill"
              className="!h-[48px] !w-[min(376px,100%)] !rounded-full !border !border-white !bg-transparent !text-[16px] !text-white hover:!bg-white/10 sm:!h-[56px] sm:!w-[193px] sm:!rounded-2xl sm:!border-transparent sm:!bg-accent sm:!text-[18px] sm:!text-[#001855] sm:hover:!bg-accent sm:hover:!brightness-95"
            >
              Contact me
            </Button>
          </div>
        </div>

        {/* Floating mockups — compact layout on mobile, full composition from md up */}
        <div className="relative h-[175px] w-full shrink-0 translate-y-10 md:hidden md:translate-y-0">
          <CroppedMockup
            src={assets.homeMockupLaptop}
            alt="Cinemex website shown on a laptop mockup"
            width={230}
            height={154}
            naturalWidth={1536}
            naturalHeight={1024}
            bbox={[118, 105, 1288, 859]}
            className="absolute bottom-0 right-0 motion-safe:animate-float-1"
            style={{ filter: "drop-shadow(0 14px 20px rgba(0,0,0,0.45))" }}
          />
          <CroppedMockup
            src={assets.homeMockupPhone}
            alt="Uber Eats app shown on a phone mockup"
            width={78}
            height={119}
            naturalWidth={1536}
            naturalHeight={1024}
            bbox={[518, 86, 601, 846]}
            className="absolute -top-2 left-20 motion-safe:animate-float-2 [animation-delay:0.3s]"
            style={{ filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.4))" }}
          />
          <CroppedMockup
            src={assets.homeMockupCup}
            alt="Galactic Coffee cup mockup"
            width={70}
            height={108}
            naturalWidth={1620}
            naturalHeight={1080}
            bbox={[486, 157, 573, 884]}
            className="absolute left-2 top-6 motion-safe:animate-float-3 [animation-delay:0.6s]"
            style={{ filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.4))" }}
          />
        </div>

        {/* Floating mockups — desktop only */}
        <div className="relative hidden h-[692px] w-[581px] shrink-0 md:block">
          <div className="absolute -bottom-10 -right-10 h-[420px] w-[420px] rounded-full bg-accent/40 blur-[100px]" />

          <CroppedMockup
            src={assets.homeMockupLaptop}
            alt="Cinemex website shown on a laptop mockup"
            width={542}
            height={362}
            naturalWidth={1536}
            naturalHeight={1024}
            bbox={[118, 105, 1288, 859]}
            className="absolute bottom-0 right-0 motion-safe:animate-float-1"
            style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.45))" }}
          />
          <CroppedMockup
            src={assets.homeMockupPhone}
            alt="Uber Eats app shown on a phone mockup"
            width={151}
            height={231}
            naturalWidth={1536}
            naturalHeight={1024}
            bbox={[518, 86, 601, 846]}
            className="absolute left-0 top-[138px] motion-safe:animate-float-2 [animation-delay:0.3s]"
            style={{ filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.4))" }}
          />
          <CroppedMockup
            src={assets.homeMockupCup}
            alt="Galactic Coffee cup mockup"
            width={139}
            height={215}
            naturalWidth={1620}
            naturalHeight={1080}
            bbox={[486, 157, 573, 884]}
            className="absolute right-[95px] top-0 motion-safe:animate-float-3 [animation-delay:0.6s]"
            style={{ filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.4))" }}
          />
        </div>
      </div>
    </section>
  );
}
