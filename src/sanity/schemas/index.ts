import { about } from "./documents/about";
import { contact } from "./documents/contact";
import { footer } from "./documents/footer";
import { heroSection } from "./documents/hero-section";
import { page } from "./documents/page";
import { service } from "./documents/service";
import { whyChooseUs } from "./documents/why-choose-us";
import { localizedSlug } from "./objects/localizedSlug";
import { localizedString } from "./objects/localizedString";
import { localizedText } from "./objects/localizedText";

export const schemas = [
  // documents
  about,
  service,
  page,
  heroSection,
  whyChooseUs,
  contact,
  footer,
  // objects
  localizedSlug,
  localizedString,
  localizedText,
];
