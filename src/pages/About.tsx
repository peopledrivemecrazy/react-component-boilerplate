import { useSelector } from "react-redux";

export const About = () => {
	const count = useSelector((state: any) => state.count);
	return <div>About page {count}</div>;
};
