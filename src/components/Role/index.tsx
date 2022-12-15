import Player from '../Player'
import "./style.css";
import { IPlayers } from "../../shared/Interfaces/IPlayers";

interface RoleProps {
	role: string,
	primaryColor: string,
	secondaryColor: string, 
	players: IPlayers[]
}

const Role = ({ role, primaryColor, secondaryColor, players }: RoleProps) => {
	return players.length > 0 ? (
		<section className="role" style={{ backgroundColor: secondaryColor }}>
			<h3 style={{ borderColor: primaryColor }}>{role}</h3>
			<div className="players">
				{players.map((player) => (
					<Player
						name={player.name}
						img={player.image}
						role={player.role}
						bgColor={primaryColor}
						key={player.name}
					/>
				))}
			</div>
		</section>
	) : (
		<></>
	);
};

export default Role;
