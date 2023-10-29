import { userReducer } from "providers/store";

import { setAuthAction } from "../model/actions/setAuthAction";

export const AuthPage = () => {
  const isAuth = userReducer((state) => state.isAuth);

  setTimeout(() => {
    setAuthAction(true);
  }, 5000);

  return <div>isAuth: {`${isAuth}`}</div>;
};
