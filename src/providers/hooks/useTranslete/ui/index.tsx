import { useEffect, useState } from "react";

import { get } from "lodash";

import { LANGUAGE } from "shared/constants/storage";

import { en } from "../config/dictionaries/en";
import { ru } from "../config/dictionaries/ru";
import { Language } from "../config/language";
import { changeLangAction } from "../model/actions/changeLangAction";
import { getChoiceLangSelector } from "../model/selectors/getChoiceLangSelector";

export const useTranslete = () => {
  const choice = getChoiceLangSelector();

  const [dictionary, setDictionar] = useState(ru);

  const t = (path: string) => {
    return get(dictionary, path, path);
  };

  const handleChangeLanguage = (value: Language) => {
    changeLangAction(value);
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
