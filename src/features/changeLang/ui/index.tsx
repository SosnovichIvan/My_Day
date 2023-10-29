import { useMemo, useState } from "react";

import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Language, useTranslete } from "providers/hooks/useTranslete";

import { getChoiceLanguageSelector } from "../model/selectors/getChoiceLanguageSelector";

export const ChangeLang = () => {
  const selectLang = getChoiceLanguageSelector();

  const { handleChangeLanguage } = useTranslete();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const choiceLangtitle = useMemo(() => {
    if (selectLang === Language.EN) {
      return <div>EN</div>;
    }
    return <div>RU</div>;
  }, [selectLang]);

  const handleChangeLang = (value: Language) => {
    handleChangeLanguage(value);
    handleClose();
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={!!anchorEl ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={!!anchorEl ? "true" : undefined}
        onClick={handleClick}
      >
        {choiceLangtitle}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => handleChangeLang(Language.EN)}
          selected={selectLang === Language.EN}
        >
          {Language.EN}
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeLang(Language.RU)}
          selected={selectLang === Language.RU}
        >
          {Language.RU}
        </MenuItem>
      </Menu>
    </div>
  );
};
