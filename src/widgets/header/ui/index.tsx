import { ChangeTheme } from "features/changeTheme";

import * as Styled from "./index.styled";

export const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <div></div>
      <Styled.HeaderActions>
        <ChangeTheme />
      </Styled.HeaderActions>
    </Styled.HeaderWrapper>
  );
};
