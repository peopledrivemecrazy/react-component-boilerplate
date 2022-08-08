import { Accordion } from "../lib/components/Accordion";
import { Badge } from "../lib/components/Badge";
import { Button } from "../lib/components/Button";

export const Components = () => {
	const components = [
		{
			title: "Buttons",
			Component: Button,
			elements: [
				{ text: "Default", classes: "", disabled: true },
				{ text: "Primary", classes: "btn-primary" },
				{ text: "Secondary", classes: "btn-secondary" },
				{ text: "Custom", classes: "bg-red-600 rounded-lg" },
			],
		},
		{
			title: "Badges",
			Component: Badge,
			elements: [
				{ text: "Default", classes: "" },
				{ text: "2", classes: "badge-primary" },
				{ text: "4", classes: "badge-secondary" },
				{ text: "50", classes: "bg-red-600 rounded-lg" },
			],
		},
	];
	const accordion = {
		title: "Accordion",
		Component: Accordion,
		elements: [
			{
				title: "Expanded",
				text: "Expanded",
				classes: "",
				expanded: true,
			},
			{
				title: "Collapsed",
				text: "Collapsed",
				classes: "",
				expanded: false,
			},
		],
	};
	return (
		<div className="grid gap-4">
			{components.map(({ title, Component, elements }, i) => {
				return (
					<div className="grid gap-2" key={i}>
						<p className="text-xl">{title}</p>
						<div className="flex gap-4">
							{elements.map((e, k) => {
								return (
									<div key={k}>
										<Component {...e} />
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
			<div className="w-96">
				<p className="text-xl">{accordion.title}</p>
				<Accordion items={accordion.elements} />
			</div>
		</div>
	);
};
