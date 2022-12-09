import "./style.css";
import TextContainer from "../TextContainer";
import DropDownList from "../DropDownList";
import Button from "../Button";
import { useState } from "react";

const Form = () => {
	const roles = ["Duelista", "Controlador", "Sentinela", "Iniciador"];

	const [name, setName] = useState("");
	const [agent, setAgent] = useState("");
	const [image, setImage] = useState("");
	const [role, setRole] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(name, agent, image, role);
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
				<DropDownList itens={roles} label="Função" onInput={(value) => setRole(value)} required={true} />
				<Button>Criar Card</Button>
			</form>
		</section>
	);
};

export default Form;
