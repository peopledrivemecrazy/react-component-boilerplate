import "./Button.css";
export const Button = ({
	text = "default",
	classes,
	disabled = false,
}: Props) => {
	return (
		<button className={`btn ${classes}`} disabled={disabled}>
			{text}
		</button>
	);
};

interface Props {
	text: string;
	classes?: string;
	disabled?: boolean;
}
