import { Link, useLocation } from "react-router-dom";
const links = [
	["Home", "/"],
	["About", "/about"],
	["Contact", "/contact"],
	["Components", "/components"],
];

export const Nav = () => {
	const { pathname } = useLocation();

	return (
		<nav>
			<ul className="text-white flex gap-4">
				{links.map(([text, href]) => {
					return (
						<li
							key={href}
							className={`${
								href === pathname ? "underline underline-offset-4" : ""
							}`}
						>
							<Link to={href}>{text}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
