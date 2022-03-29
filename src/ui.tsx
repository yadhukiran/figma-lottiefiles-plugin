import React from "react"
import ReactDOM from "react-dom"
import { Provider as URQLProvider } from "urql";
import { RecoilRoot } from "recoil";

import App from "./components/App";
import { urqlClient } from "./helpers/urqlClient";
import "./ui.css";

ReactDOM.render(
  <React.StrictMode>
    <URQLProvider value={urqlClient}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </URQLProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
