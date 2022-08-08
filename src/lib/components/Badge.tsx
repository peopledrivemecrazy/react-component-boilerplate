export const Badge = ({ text = "default", classes }: Props) => {
	return <div className={`badge ${classes}`}>{text}</div>;
};

interface Props {
	text: string;
	classes?: string;
}
