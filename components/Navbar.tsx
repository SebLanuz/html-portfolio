"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Logo";
import { LinkedInIcon, HomeIcon, ProjectsIcon, AboutIcon, ContactIcon } from "./Icons";
import { site } from "@/data/site";
import { getProject } from "@/data/projects";
import { assets } from "@/lib/assets";

const links = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/projects", label: "Projects", Icon: ProjectsIcon },
  { href: "/about", label: "About", Icon: AboutIcon },
  { href: "/contact", label: "Contact", Icon: ContactIcon },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function navBgFor(pathname: string) {
  if (pathname === "/") return "bg-hero-home";
  const match = pathname.match(/^\/projects\/([^/]+)/);
  if (match) {
    const project = getProject(match[1]);
    if (project) return project.navBg;
  }
  return "bg-base";
}

function navBgForMobile(pathname: string) {
  if (
    pathname === "/projects/cinemex" ||
    pathname === "/projects/uber-eats" ||
    pathname === "/projects/galactic-coffee"
  ) {
    return "bg-black";
  }
  return navBgFor(pathname);
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function applyScrollLock() {
      const isMobileHome = pathname === "/" && window.innerWidth < 768;
      document.body.style.overflow = isMobileHome ? "hidden" : "";
    }
    applyScrollLock();
    window.addEventListener("resize", applyScrollLock);
    return () => {
      window.removeEventListener("resize", applyScrollLock);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  return (
    <>
      {/* Desktop / tablet top nav */}
      <header className={`sticky top-0 z-40 hidden md:block ${navBgFor(pathname)}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
          <Logo className="h-11 w-10" />
          <nav className="flex items-center gap-10 border-b border-white/10 pb-0">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                data-active={isActive(pathname, href)}
                className="nav-link font-body text-base text-white/90 transition-colors hover:text-white data-[active=true]:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm font-body text-black hover:brightness-95"
          >
            <LinkedInIcon className="h-4 w-4" />
            Linked In
          </a>
        </div>
      </header>

      {/* Mobile top bar — back, centered logo, LinkedIn (matches Figma's compact mobile header) */}
      <header className={`sticky top-0 z-40 grid grid-cols-3 items-center px-4 py-3 md:hidden ${navBgForMobile(pathname)}`}>
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="w-fit justify-self-start opacity-90 transition-opacity hover:opacity-100"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assets.backButton} alt="" className="h-8 w-auto object-contain" />
        </button>
        <Logo className="h-9 w-8 justify-self-center" />
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 justify-self-end rounded-lg bg-white px-3 py-1.5 text-sm font-body text-black hover:brightness-95"
        >
          <LinkedInIcon className="h-4 w-4" />
          Linked In
        </a>
      </header>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between border-t border-white/10 bg-[#101012]/95 px-6 py-3 backdrop-blur md:hidden">
        {links.map(({ href, label, Icon }) => {
          const active = isActive(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              className={
                active
                  ? "flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-body text-sm text-[#001855] transition-colors"
                  : "flex items-center justify-center rounded-full p-3 text-white/70 transition-colors"
              }
            >
              <Icon className="h-5 w-5" />
              {active && label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
