import { useEffect, useState } from "react";

import { get } from "lodash";

import { LANGUAGE } from "shared/constants/storage";

import { en } from "../config/dictionaries/en";
import { ru } from "../config/dictionaries/ru";
import { Language } from "../config/language";

export const useTranslete = () => {
  const [choice, setChoice] = useState<Language>(
    (sessionStorage.getItem(LANGUAGE) as Language) || Language.RU
  );

  const [dictionary, setDictionar] = useState(ru);

  const t = (path: string) => {
    return get(dictionary, path, "");
  };

  const handleChangeLanguage = (value: Language) => {
    setChoice(value);
    sessionStorage.setItem(LANGUAGE, value);
  };

  useEffect(() => {
    if (choice === Language.EN) {
      setDictionar(en);
    }
    if (choice === Language.RU) {
      setDictionar(ru);
    }
  }, [choice]);

  return { t, handleChangeLanguage, language: choice };
};
