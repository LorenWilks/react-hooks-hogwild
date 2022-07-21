import React from "react";
import Nav from "./Nav";
import Home from "./Home"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Home name={hogs.name}image={hogs.image}/>
		</div>
	);
}

export default App;
