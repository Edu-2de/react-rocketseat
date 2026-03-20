import React from "react";
import { fetcher } from "../helpers/api";
import { type User } from "../models/user";
import { api } from "../helpers/api";

export default function useUser() {
    const [user, setUser] = React.useState<User | null>(null);
    const [requestStatus, setRequestStatus] = React.useState<
        "idle" | "loading" | "saving"
    >("idle");

    const getUser = React.useCallback(async (usernameId: number) => {
        try {
            setRequestStatus("loading");

            const data = await fetcher(`/users/${usernameId}`);
            setUser(data);
        } catch (e) {
            console.error(e);
            alert("Erro ao buscar usuario");
        } finally {
            setRequestStatus("idle");
        }
    }, []);

    async function createUser(payload: User) {
        try {
            setRequestStatus("saving");

            await api("/users", {
                method: "POST",
                body: JSON.stringify(payload),
            });

            alert("Usuario criado com sucesso");
        } catch (e) {
            console.error(e);
            alert("Erro ao criar o usuario");
        } finally {
            setRequestStatus("idle");
        }
    }

    return {
        user,
        userRequestStatus: requestStatus,
        getUser,
        createUser,
    };
}
