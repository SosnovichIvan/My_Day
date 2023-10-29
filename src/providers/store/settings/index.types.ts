import { Language } from "providers/hooks/useTranslete";
import { THEME_MODE } from "providers/theme";

export type InitialState = {
  theme: THEME_MODE;
  lang: Language;
};
