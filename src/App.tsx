import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState } from "react";
import Role from "./components/Role";
import Footer from './components/Footer'
import { IPlayers } from "./shared/Interfaces/IPlayers";

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

	const [players, setPlayer] = useState<IPlayers[]>([]);
	const newPlayer = (player: IPlayers) => {
		setPlayer([...players, player]);
	};

	return (
		<div className="App">
			<Banner
				srcImg="/img/banner.png"
				alt="Banner com o texto: Pessoas e times organizados em um só lugar!"
			/>
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
					players={players.filter(
						(player) => player.role === role.name
					)}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
