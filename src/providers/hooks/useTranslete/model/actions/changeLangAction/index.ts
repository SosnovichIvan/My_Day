import { Language } from "providers/hooks/useTranslete/config/language";
import { settingsReducer } from "providers/store/settings";

export const changeLangAction = (value: Language) =>
  settingsReducer.setState({ lang: value });
