import { create } from "zustand";

import { Language } from "providers/hooks/useTranslete";
import { THEME_MODE } from "providers/theme";

import { LANGUAGE, THEME } from "shared/constants/storage";

import type { InitialState } from "./index.types";

export const settingsReducer = create<InitialState>()(() => ({
  theme: (sessionStorage.getItem(THEME) as THEME_MODE) || THEME_MODE.LIGTH,
  lang: (sessionStorage.getItem(LANGUAGE) as Language) || Language.RU,
}));
