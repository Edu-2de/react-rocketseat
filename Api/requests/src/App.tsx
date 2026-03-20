import UserInfo from "./components/user-info";
import UserNewForm from "./components/user-new-form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserInfo />
            <hr />
            <UserNewForm />
        </QueryClientProvider>
    );
}

export default App;
