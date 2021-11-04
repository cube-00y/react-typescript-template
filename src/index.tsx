import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/Store";
import "./locales/i18n";
import reset from "./styles/reset";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Global styles={reset} />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
