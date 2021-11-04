import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "@/pages/Home";

export default function Routers() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	);
}
