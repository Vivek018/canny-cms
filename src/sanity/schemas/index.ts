import { page } from "./documents/page";
import { service } from "./documents/service";
import { localizedSlug } from "./objects/localizedSlug";
import { localizedString } from "./objects/localizedString";
import { localizedText } from "./objects/localizedText";

export const schemas = [
  // documents
  service,
  page,
  // objects
  localizedSlug,
  localizedString,
  localizedText,
];
