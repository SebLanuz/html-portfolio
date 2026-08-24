/**
* Central image manifest. Every image is served locally from /public/images
* — nothing here depends on Figma's temporary asset CDN anymore.
*
* Nothing else in the codebase needs to change — every page imports images
* from this file.
*
* BASE_PATH mirrors next.config.mjs's basePath. Static export on GitHub
* Pages serves this site from /html-portfolio, and plain string paths
* (unlike next/image or <Link>) don't get that prefix automatically.
*/

const BASE_PATH = "/html-portfolio";

function withBase(path: string) {
  return `${BASE_PATH}${path}`;
}

export const assets = {
  // ---- Brand ------------------------------------------------------------
  logo: withBase("/images/logo.png"),

  // ---- Home hero -----------------------------------------------------
  homeHeroWatermark: withBase("/images/home-hero-watermark.png"),
  homeMockupLaptop: withBase("/images/home-mockup-laptop.png"),
  homeMockupPhone: withBase("/images/home-mockup-phone.png"),
  homeMockupCup: withBase("/images/home-mockup-cup.png"),

  // ---- About ------------------------------------------------------------
  // NOTE: this still resolves to the site logo, not an actual photo — the
  // source Figma file never had a real portrait wired to this layer.
  aboutPortrait: withBase("/images/about-portrait.png"),

  // ---- Contact ------------------------------------------------------------
  contactDeskPhoto: withBase("/images/contact-desk-photo.jpg"),
  contactCircularPhoto: withBase("/images/contact-circular-photo.jpg"),

  // ---- Brand marks --------------------------------------------------------
  cinemexLogo: withBase("/images/logo-cinemex.png"),
  uberEatsLogoSprite: withBase("/images/logo-uber-eats.png"),
  galacticCoffeeIcon: withBase("/images/logo-galactic-coffee.png"),
  cardIsologoUberEats: withBase("/images/card-isologo-uber-eats.png"),
  cardIsologoCinemex: withBase("/images/card-isologo-cinemex.png"),
  cardIsologoGalacticCoffee: withBase("/images/card-isologo-galactic-coffee.png"),
  cardMobileCinemex: withBase("/images/card-mobile-cinemex.png"),
  cardMobileUberEats: withBase("/images/card-mobile-uber-eats.png"),
  cardMobileGalacticCoffee: withBase("/images/card-mobile-galactic-coffee.png"),
  backButton: withBase("/images/back-button.png"),

  // ---- Case study: Cinemex --------------------------------------------
  cinemexMidMockup: withBase("/images/cinemex-mid-mockup.png"),

  // ---- Case study: Uber Eats -------------------------------------------
  uberEatsMidMockup: withBase("/images/uber-eats-mid-mockup.png"),

  // ---- Case study: Galactic Coffee ---------------------------------------
  galacticCoffeeMidMockup: withBase("/images/galactic-coffee-mid-mockup.png"),

  // ---- Documents ----------------------------------------------------------
  cvPdf: withBase("/documents/sebastian-lara-cv.pdf"),
} as const;

export type AssetKey = keyof typeof assets;
