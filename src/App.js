import React from "react";
import '';
import './App.css';
import Routes from './Routes/Routes';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
    domain="dev-v8-xay1j.us.auth0.com"
    clientId="7qk5Uw0nslwS9gqw2GcvsmKADWDTSyCt"
    redirectUri={window.location.origin}
  >
      <Routes/>
  </Auth0Provider>

    
  );
}

export default App;
