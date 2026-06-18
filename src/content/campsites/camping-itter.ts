import type { CampsiteConfig } from "../types";

/**
 * Camping Schlossberg Itter / Camping Brixental — 4★ Terrassencamping am Fuß des
 * Wilden Kaisers in Itter, Tirol. Inhalte zu 100 % aus raw/digest abgeleitet.
 * Bildarmer Lead: nur 6 verwertbare, eindeutige Fotos → schlanke, ehrliche Belegung
 * (Galerie/Kinder/Aktivitäten ausgelassen statt mit zweifelhaften Bildern gefüllt).
 */
const IMG = "/campsites/camping-itter";

const campingItter: CampsiteConfig = {
  name: "Camping Schlossberg Itter",
  shortName: "Schlossberg",
  slug: "camping-itter",
  ort: "Itter",
  region: "Tirol",
  brandKind: "Terrassencamping",
  regionLong: "Brixental · Kitzbüheler Alpen · Tirol · Österreich",

  heroVariant: "center",

  claim: "Terrassencamping am Fuß des Wilden Kaisers",
  claimEmphasis: "Wilden Kaisers",
  emailDetail: "eure Terrassenlage über dem Brixental",
  intro:
    "Großzügige Terrassenplätze mitten in den Kitzbüheler Alpen, dazu beheiztes Freibad, Tiroler Sauna und ein eigenes Restaurant — bei uns campst du Sommer wie Winter am Fuß des Wilden Kaisers.",

  statement: {
    text: "Vom Terrassenplatz schaust du auf die Gipfel der Kitzbüheler Alpen — den Wilden Kaiser hast du direkt im Blick.",
    emphasis: "Wilden Kaiser",
  },

  pillars: [
    {
      title: "Terrassenplätze am Hang",
      text: "Die großen Terrassenplätze liegen gestaffelt am Hang — mit Strom, Kabel-TV, WLAN und Bergblick.",
      image: { src: `${IMG}/luftbild-stellplaetze.webp`, alt: "Terrassencamping Schlossberg Itter Sommerlage aus der Luft mit Stellplätzen" },
    },
    {
      title: "Beheiztes Freibad",
      text: "Das beheizte Freibad liegt direkt am Platz — mit Liegewiese und Planschbecken für die Kleinen.",
      image: { src: `${IMG}/freibad.webp`, alt: "Beheiztes Freibad am Camping Schlossberg Itter" },
    },
    {
      title: "Sauna im Tiroler Stil",
      text: "Finnische Sauna, Dampfbad und Infrarotkabine warten im urig getäfelten Ruheraum auf dich.",
      image: { src: `${IMG}/sauna.webp`, alt: "Sauna im Tiroler Stil am Camping Schlossberg Itter" },
    },
  ],

  usps: [
    "200 Terrassenplätze",
    "Beheiztes Freibad",
    "Sauna & Wellness",
    "Restaurant & Kiosk",
    "Hunde willkommen",
    "Sommer wie Winter offen",
  ],

  trust: {
    heading: "Was dich am Schlossberg erwartet",
    headingEmphasis: "Schlossberg",
    intro:
      "Ein 4-Sterne-Platz am Wilden Kaiser: rund um die Uhr warme Duschen, beheiztes Freibad, Sauna, Restaurant und ein großer Abenteuerspielplatz — und das Sommer wie Winter durchgehend geöffnet.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/terrassen-sommer.webp`, alt: "Camping Schlossberg Itter im Sommer aus der Luft — Freibad und Terrassenplätze am Wilden Kaiser" },
  },

  camping: {
    heading: "Dein Platz am Schlossberg",
    intro:
      "Vom Stellplatz bis zum letzten Service ist alles da: rund um die Uhr warmes Wasser, Restaurant mit Sonnenterrasse, Skiraum und Hundedusche — mitten in der Brixentaler Bergwelt.",
    features: [
      {
        title: "Großzügige Terrassenplätze",
        text: "200 Plätze von 80 bis 120 m², gestaffelt auf sonnigen Terrassen mit Strom, Wasser und Abwasser direkt am Platz.",
        image: { src: `${IMG}/hero-luftbild-sommer.webp`, alt: "Camping Schlossberg Itter aus der Luft im Winter — Terrassenanlage und Schloss Itter" },
      },
      {
        title: "Camping auch im Winter",
        text: "Im Winter liegt der Platz mitten im SkiWelt Wilder Kaiser–Brixental — der Skibus fährt direkt zur Hohen Salve.",
        image: { src: `${IMG}/wintercamping.webp`, alt: "Wintercamping am Schlossberg Itter im Schnee" },
      },
    ],
  },

  anreise: {
    heading: "Mitten im Brixental",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Inntalautobahn A12 bis Wörgl, weiter auf der B170 ins Brixental — nach wenigen Minuten erreichst du Itter.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Wörgl Hauptbahnhof liegt nur wenige Kilometer entfernt, von dort weiter mit Bus oder Taxi nach Itter.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Innsbruck und Salzburg sind jeweils rund eine Autostunde entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Eindrücke",
    intro: "Weitere Aufnahmen von Camping Schlossberg Itter.",
    tag: "Itter im Brixental",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Terrassenplatz",
    headingEmphasis: "Terrassenplatz",
    intro:
      "Wähle Zeitraum und Personenzahl — wir melden uns persönlich mit deiner Verfügbarkeit am Schlossberg.",
    pricesArePlaceholder: false,
    priceNote:
      "Nebensaison-Richtpreis pro Stellplatz/Nacht — Personen extra: Erwachsene ab € 10, Kinder ab € 6,50; zzgl. Strom, Orts- und Umweltabgabe. Hauptsaison höher.",
    highlight: {
      title: "Direkt zum Skibus",
      text: "Der kostenlose Skibus fährt im Winter direkt ab dem Platz zur Hohen Salve.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 14.5, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    tel: "+43 5335 2181",
    telHref: "tel:+4353352181",
    mail: "info@camping-itter.at",
    facebook: "https://www.facebook.com/CampingSchlossbergItter/",
    adresse: "Brixentaler Straße 11 · 6305 Itter · Tirol",
    coords: { lat: 47.4673662, lng: 12.1398983 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default campingItter;
