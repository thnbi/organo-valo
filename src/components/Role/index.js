import Player from "../Player";
import "./style.css";

const Role = ({ role, primaryColor, secondaryColor, players }) => {
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
		""
	);
};

export default Role;
