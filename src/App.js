import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState } from "react";
import Role from "./components/Role";

function App() {
	const roles = [
		{
			name: "Duelista",
			primaryColor: "#82CFFA",
			secondaryColor: "#E8F8FF",
		},
		{
			name: "Controlador",
			primaryColor: "#DB6EBF",
			secondaryColor: "#FAE9F5",
		},
		{
			name: "Sentinela",
			primaryColor: "#FFBA05",
			secondaryColor: "#FFF5D9",
		},
		{
			name: "Iniciador",
			primaryColor: "#57c278",
			secondaryColor: "#D9F7E9",
		},
	];

	const [players, setPlayer] = useState([]);
	const newPlayer = (player) => {
		setPlayer([...players, player]);
	};

	return (
		<div className="App">
			<Banner />
			<Form
				roles={roles.map((role) => role.name)}
				onNewPlayer={(player) => {
					newPlayer(player);
				}}
			/>
			{roles.map((role) => (
				<Role
					role={role.name}
					key={role.name}
					primaryColor={role.primaryColor}
					secondaryColor={role.secondaryColor}
					players={players.filter(player => player.role === role.name)}
				/>
			))}
		</div>
	);
}

export default App;
