import serverContext from "./server-context";
import { i18n } from "@/utils/language";

export const [getLocale, setLocale] = serverContext(i18n.base);
