import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../lib/stores";
export const Home = () => {
	// const [count, setCount] = useState(0);
	const count = useSelector((state: any) => state.count);
	const dispatch = useDispatch();
	return (
		<div className="flex gap-4 items-center">
			{/* <button
				onClick={() => setCount((count) => count + 1)}
				className="p-4 bg-sky-900 text-white"
			>
				count is {count}
			</button> */}

			<button className="p-4 bg-sky-900" onClick={() => dispatch(increment())}>
				++
			</button>
			<p>{count}</p>
			<button className="p-4 bg-sky-900" onClick={() => dispatch(decrement())}>
				--
			</button>
		</div>
	);
};
