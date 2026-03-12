import { NavLink, Outlet } from "react-router";
import Text from "../components/text";
import { Header } from "../core-components/header";
import { MainContent } from "../core-components/main-content";

export const LayoutMain = () => {
	return (
		<>
			<Header />
			<MainContent>
				<Outlet />
			</MainContent>
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
