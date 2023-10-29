import { Typography, useTheme } from "@mui/material";

import { useTranslete } from "providers/hooks/useTranslete";

import { ChangeLang } from "features/changeLang";
import { ChangeTheme } from "features/changeTheme";

import * as Styled from "./index.styled";

export const Header = () => {
  const { t } = useTranslete();

  const {
    header: { logo },
  } = useTheme();

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderLogo>
        <Typography variant="logo" color={logo}>
          {t("header.logo")}
        </Typography>
      </Styled.HeaderLogo>
      <Styled.HeaderActions>
        <ChangeLang />
        <ChangeTheme />
      </Styled.HeaderActions>
    </Styled.HeaderWrapper>
  );
};
