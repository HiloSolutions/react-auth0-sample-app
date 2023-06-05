import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENTID
const authorizationParams = {
  redirect_uri: window.location.origin
}

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    authorizationParams={authorizationParams}
  >
    <App />
  </Auth0Provider>
);