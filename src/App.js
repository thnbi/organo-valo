import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState } from "react";

function App() {

	const [players, setPlayer] = useState([]);
	const newPlayer = (player) => {
		setPlayer([...players, player]);
	}

	return (
		<div className="App">
			<Banner />
			<Form onNewPlayer={(player) => {
				setPlayer(player);
			}} />
		</div>
	);
}

export default App;
