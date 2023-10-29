import { create } from "zustand";

import { THEME_MODE } from "providers/theme";

import { THEME } from "shared/constants/storage";

import type { InitialState } from "./index.types";

export const settingsReducer = create<InitialState>()(() => ({
  theme: (sessionStorage.getItem(THEME) as THEME_MODE) || THEME_MODE.LIGTH,
}));
