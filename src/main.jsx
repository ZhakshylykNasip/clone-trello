import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./router/routes.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <SnackbarProvider maxSnack={3}> */}
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    {/* </SnackbarProvider> */}
  </React.StrictMode>
);
