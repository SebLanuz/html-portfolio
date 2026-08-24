import Link from "next/link";
import type { Project } from "@/data/projects";
import { assets } from "@/lib/assets";

// Slugs with a fully designed mobile card image — used as-is instead of the
// coded layout below. Add an entry here once a project has its own asset.
const mobileCardImageBySlug: Record<string, string> = {
  cinemex: assets.cardMobileCinemex,
  "uber-eats": assets.cardMobileUberEats,
  "galactic-coffee": assets.cardMobileGalacticCoffee,
};

function Wordmark({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.cardLabel === "logo" && project.cardLogo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.cardLogo}
        alt={project.name}
        className={compact ? "h-10 w-auto object-contain" : "h-16 w-auto object-contain sm:h-20"}
      />
    );
  }

  if (project.slug === "cinemex") {
    return (
      <div className="flex items-center gap-3">
        {project.cardLogo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.cardLogo}
            alt=""
            className={compact ? "h-10 w-10 object-contain" : "h-10 w-10 object-contain sm:h-12 sm:w-12"}
          />
        )}
        <p className={`font-body font-extrabold text-white ${compact ? "text-4xl" : "text-4xl sm:text-5xl"}`}>
          Cinemex
        </p>
      </div>
    );
  }

  if (project.slug === "uber-eats") {
    return (
      <p className={`font-body font-normal text-white ${compact ? "text-2xl" : "text-4xl sm:text-5xl"}`}>
        Uber <span className="font-extrabold">Eats</span>
      </p>
    );
  }

  if (project.slug === "galactic-coffee") {
    return (
      <div className="flex items-center gap-2.5">
        {project.cardLogo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.cardLogo}
            alt=""
            className={`object-contain drop-shadow-[0_0_3px_rgba(255,255,255,0.35)] ${
              compact ? "h-7 w-7" : "h-10 w-10"
            }`}
          />
        )}
        <p className={`font-display font-bold text-white ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
          Galactic Coffee
        </p>
      </div>
    );
  }

  return null;
}

export function ProjectCard({
  project,
  variant = "vibrant",
}: {
  project: Project;
  /** "vibrant" shows the brand gradient by default (used on /projects and /about);
   *  "dark" keeps a plain dark card (used in "related projects" lists). Mobile only —
   *  desktop always uses the plain card that turns brand-colored on hover. */
  variant?: "vibrant" | "dark";
}) {
  return (
    <>
      {/* Desktop / tablet — plain card, brand gradient revealed on hover */}
      <Link
        href={`/projects/${project.slug}`}
        className="group relative hidden h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-black via-[#2b2b2b] to-black transition-transform hover:scale-[1.01] sm:h-[260px] md:flex"
      >
        <div
          className={`absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${project.cardHoverBg}`}
        />
        <div className="relative z-10 flex items-center justify-center">
          <Wordmark project={project} />
        </div>
      </Link>

      {/* Mobile — richer card: always-on brand color, blurb, and a "Ver proyecto" CTA */}
      {mobileCardImageBySlug[project.slug] ? (
        <Link href={`/projects/${project.slug}`} className="block w-full overflow-hidden rounded-2xl md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mobileCardImageBySlug[project.slug]}
            alt={`${project.name} — ${project.heroTagline}`}
            className="w-full"
          />
        </Link>
      ) : (
        <Link
          href={`/projects/${project.slug}`}
          className={`flex w-full flex-col gap-5 overflow-hidden rounded-2xl p-6 md:hidden ${
            variant === "vibrant"
              ? project.cardHoverBg
              : "bg-gradient-to-b from-[#1c1c1e] via-black to-black"
          }`}
        >
          <div className="flex items-center justify-center py-6">
            <Wordmark project={project} compact />
          </div>

          <div className="flex flex-col gap-3 text-left">
            <p className="font-body text-sm font-bold text-white">{project.name}</p>
            <p className="font-body text-white/90">&ldquo;{project.heroTagline}&rdquo;</p>
            <p className="font-body text-white/90">{project.cardBlurb}</p>
          </div>

          <span className="flex items-center justify-center rounded-full bg-white py-3 text-center font-body font-semibold text-black">
            Ver proyecto
          </span>
        </Link>
      )}
    </>
  );
}
