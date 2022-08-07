import { Button } from "../lib/components/Button";

export const Components = () => {
	const buttons = [
		{ text: "Default", classes: "", disabled: true },
		{ text: "Primary", classes: "primary" },
		{ text: "Secondary", classes: "secondary" },
		{ text: "Custom", classes: "bg-red-600 rounded-lg" },
	];
	return (
		<div className="grid gap-2">
			<p className="text-xl">Buttons</p>
			<div className="flex gap-4">
				{buttons.map(({ text, classes, disabled }, i) => {
					return (
						<Button text={text} classes={classes} disabled={disabled} key={i} />
					);
				})}
			</div>
		</div>
	);
};
