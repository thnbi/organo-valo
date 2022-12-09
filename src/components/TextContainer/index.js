import "./style.css";

const TextContainer = (props) => {

	const inputHandler = (event) => {
		props.onInput(event.target.value);
	};

	return (
		<div className="campo-texto">
			<label>{props.label}</label>
			<input value={props.value} required={props.required} placeholder={`${props.placeholder}...`} onChange={inputHandler}/>
		</div>
	);
};

export default TextContainer;
