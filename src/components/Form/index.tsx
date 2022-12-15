import "./style.css";
import TextContainer from "../TextContainer";
import DropDownList from "../DropDownList";
import Button from "../Button";
import { useState } from "react";
import { IPlayers } from "../../shared/Interfaces/IPlayers";

interface FormProps {
	onNewPlayer: (player: IPlayers) => void;
	roles: string[];
}

const Form = (props: FormProps) => {
	const [name, setName] = useState("");
	const [agent, setAgent] = useState("");
	const [image, setImage] = useState("");
	const [role, setRole] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.onNewPlayer({ name, agent, image, role });
		setName("");
		setImage("");
		setRole("");
		setAgent("");
	};

	return (
		<section className="form">
			<form onSubmit={handleSubmit}>
				<h2>Preencha os dados para criar o card do seu player</h2>
				<TextContainer
					value={name}
					onInput={(value) => setName(value)}
					placeholder="Digite seu nome"
					label="Nome"
					required={true}
				/>
				<TextContainer
					value={agent}
					onInput={(value) => setAgent(value)}
					label="Agente"
					placeholder="Digite seu agente"
					required={true}
				/>
				<TextContainer
					value={image}
					onInput={(value) => setImage(value)}
					label="Imagem"
					placeholder="Adicione uma imagem"
				/>

				<DropDownList
					itens={props.roles}
					required={true}
					label="Função"
					value={role}
					onInput={(value) => setRole(value)}
				/>
				<Button>Criar Card</Button>
			</form>
		</section>
	);
};

export default Form;
