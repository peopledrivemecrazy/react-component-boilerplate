import { useState } from "react";

export const Accordion = (props: { items: Props[] }) => {
	let { items } = props;

	return (
		<div className="accordion">
			{items.map((e, i) => {
				return (
					<div key={i}>
						<AccordionItem {...e} />
					</div>
				);
			})}
		</div>
	);
};

const AccordionItem = ({ title, text, classes, expanded = false }: Props) => {
	const [isExpanded, setIsExpanded] = useState(expanded);
	return (
		<>
			<div
				className={`accordion-header ${classes}`}
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<p className="text-xl">{title}</p>

				<p className="select-none">{isExpanded ? "-" : "+"}</p>
			</div>
			{isExpanded && (
				<div className={`accordion-body`}>
					<p>{text}</p>
				</div>
			)}
		</>
	);
};

interface Props {
	title: string;
	text: string;
	classes?: string | undefined;
	expanded: boolean;
}
