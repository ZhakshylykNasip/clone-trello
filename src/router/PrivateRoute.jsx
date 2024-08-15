import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component, fallBackPath, isAllowed }) => {
  if (!!isAllowed) {
    return <Navigate to={fallBackPath} />;
  }
  return Component;
};
