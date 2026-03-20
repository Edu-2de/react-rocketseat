import useUsers from "../hooks/use-users";

export default function UsersList() {
    const { users, isLoading } = useUsers();

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    Nome: {user.name}/ Username: {user.id}
                </li>
            ))}
        </ul>
    );
}
