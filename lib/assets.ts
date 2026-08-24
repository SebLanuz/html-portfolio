/**
 * Central image manifest. Every image is served locally from /public/images
 * — nothing here depends on Figma's temporary asset CDN anymore.
 *
 * Nothing else in the codebase needs to change — every page imports images
 * from this file.
 */

export const assets = {
  // ---- Brand ------------------------------------------------------------
  logo: "/images/logo.png",

  // ---- Home hero -----------------------------------------------------
  homeHeroWatermark: "/images/home-hero-watermark.png",
  homeMockupLaptop: "/images/home-mockup-laptop.png",
  homeMockupPhone: "/images/home-mockup-phone.png",
  homeMockupCup: "/images/home-mockup-cup.png",

  // ---- About ------------------------------------------------------------
  // NOTE: this still resolves to the site logo, not an actual photo — the
  // source Figma file never had a real portrait wired to this layer.
  aboutPortrait: "/images/about-portrait.png",

  // ---- Contact ------------------------------------------------------------
  contactDeskPhoto: "/images/contact-desk-photo.jpg",
  contactCircularPhoto: "/images/contact-circular-photo.jpg",

  // ---- Brand marks --------------------------------------------------------
  cinemexLogo: "/images/logo-cinemex.png",
  uberEatsLogoSprite: "/images/logo-uber-eats.png",
  galacticCoffeeIcon: "/images/logo-galactic-coffee.png",
  cardIsologoUberEats: "/images/card-isologo-uber-eats.png",
  cardIsologoCinemex: "/images/card-isologo-cinemex.png",
  cardIsologoGalacticCoffee: "/images/card-isologo-galactic-coffee.png",
  cardMobileCinemex: "/images/card-mobile-cinemex.png",
  cardMobileUberEats: "/images/card-mobile-uber-eats.png",
  cardMobileGalacticCoffee: "/images/card-mobile-galactic-coffee.png",
  backButton: "/images/back-button.png",

  // ---- Case study: Cinemex --------------------------------------------
  cinemexMidMockup: "/images/cinemex-mid-mockup.png",

  // ---- Case study: Uber Eats -------------------------------------------
  uberEatsMidMockup: "/images/uber-eats-mid-mockup.png",

  // ---- Case study: Galactic Coffee ---------------------------------------
  galacticCoffeeMidMockup: "/images/galactic-coffee-mid-mockup.png",

  // ---- Documents ----------------------------------------------------------
  cvPdf: "/documents/sebastian-lara-cv.pdf",
} as const;

export type AssetKey = keyof typeof assets;
