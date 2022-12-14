import Player from "../Player";
import "./style.css";

const Role = ({ role, primaryColor, secondaryColor, players}) => {
	return (
			(players.length > 0) ? <section
			className="role"
			style={{ backgroundColor: secondaryColor }}
		>
			<h3 style={{ borderColor: primaryColor }}>{role}</h3>
			<div className="players">
				{players.map((player) => <Player name={player.name} role={player.role} img={player.image}/>)}
			</div>
		</section>: ''
	); 
};

export default Role;
