import { NavLink } from "react-router"
import { Container } from "../components/container"
import Text from "../components/text"


export const LayoutMain = () => {
    return(
        <>
            <Container
                as = 'header'
            >
                Olá Mundo!
            </Container>

            <main>
                Conteudo Principal!
            </main>

            <footer>
                <nav className="flex items-center justify-center gap-4">
                    <NavLink to='/'>
                        <Text variant = 'body-sm-bold'
                            className="text-gray-300">
                            Tarefas
                        </Text>
                    </NavLink>

                    <NavLink to='/components'>
                        <Text variant = 'body-sm-bold'
                            className="text-gray-300">
                            Coomponentes
                        </Text>
                    </NavLink>

                </nav>
            </footer>
        </>

    )
}
