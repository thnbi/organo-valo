import "./style.css";

interface TextContainerProps {
	onInput: (value: string) => void;
	placeholder: string;
	label: string;
	value: string;
	required?: boolean;
}

const TextContainer = ({label, onInput, placeholder, value, required = false}: TextContainerProps) => {
	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		onInput(event.target.value);
	};

	return (
		<div className="campo-texto">
			<label>{label}</label>
			<input
				value={value}
				required={required}
				placeholder={`${placeholder}...`}
				onChange={inputHandler}
			/>
		</div>
	);
};

export default TextContainer;
