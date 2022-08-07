import { Route, Routes } from "react-router-dom";
import { Nav } from "./lib/components/Nav";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Components } from "./pages/Components";

function App() {
	const routes = [
		{ path: "/", element: <Home /> },
		{ path: "/about", element: <About /> },
		{ path: "/contact", element: <Contact /> },
		{ path: "/components", element: <Components /> },
	];
	return (
		<main className="App">
			<Nav />
			<section className="p-4">
				<Routes>
					{routes.map(({ path, element }, i) => {
						return <Route path={path} element={element} key={i} />;
					})}
				</Routes>
			</section>
		</main>
	);
}

export default App;
