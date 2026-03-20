import React from "react";
import useUser from "../hooks/use-user";
import type { User } from "../models/user";

export default function UserNewForm() {
    const formRef = React.useRef<HTMLFormElement>(null);
    const { createUser, userRequestStatus } = useUser();

    async function handleSubmit(e: React.FormEvent) {
        if (!formRef.current) {
            return;
        }

        const data = new FormData(formRef.current);

        const payload = {
            id: data.get("id"),
            name: data.get("name"),
        };

        await createUser(payload as User);

        e.preventDefault();
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="">
                <input placeholder="Username" type="text" name="id" />
            </div>
            <div>
                <input placeholder="Nome" type="text" name="name" />
            </div>
            <div>
                <button type="submit">
                    {userRequestStatus === "saving"
                        ? "Criando...."
                        : "Criar usuário"}
                </button>
            </div>
        </form>
    );
}
