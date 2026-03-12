import { NavLink, Outlet } from "react-router";
import Text from "../components/text";
import { Header } from "../core-components/header";

export const LayoutMain = () => {
	return (
		<>
			<Header />
			<main className="mt-4 md:mt-8">
				<Outlet />
			</main>

			<footer className="my-5 md:my-10">
				<nav className="flex items-center justify-center gap-4">
					<NavLink to="/">
						<Text variant="body-sm-bold" className="text-gray-300">
							Tarefas
						</Text>
					</NavLink>

					<NavLink to="/components">
						<Text variant="body-sm-bold" className="text-gray-300">
							Componentes
						</Text>
					</NavLink>
				</nav>
			</footer>
		</>
	);
};
