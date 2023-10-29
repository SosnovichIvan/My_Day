import { styled } from "@mui/material/styles";

export const HeaderWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.header.background,
  height: "60px",
  boxShadow: "0 5px 5px -5px rgba(67, 103, 69, 0.6)",
  WebkitBoxShadow: "0 5px 5px -5px rgba(67, 103, 69, 0.6",
}));

export const HeaderActions = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "12px",
}));
