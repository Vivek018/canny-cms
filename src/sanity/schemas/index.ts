import { about } from "./documents/about";
import { contact } from "./documents/contact";
import { footer } from "./documents/footer";
import { page } from "./documents/page";
import { service } from "./documents/service";
import { localizedSlug } from "./objects/localizedSlug";
import { localizedString } from "./objects/localizedString";
import { localizedText } from "./objects/localizedText";

export const schemas = [
  // documents
  about,
  service,
  page,
  contact,
  footer,
  // objects
  localizedSlug,
  localizedString,
  localizedText,
];
