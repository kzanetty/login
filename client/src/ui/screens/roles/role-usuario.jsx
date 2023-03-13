import { NavListComponent, showToast, UsuarioComponent } from "../../components";
import { listarTodosUsuarioApi } from "../../../api";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import './role-admin.css'

const OPCOES_DE_LIMITE = [3, 4, 5]
const LIMITE_PADRAO = 2

export function RoleUsuarioScreen() {
    const [usuarios, setUsuarios] = useState([])
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [limite, setLimite] = useState(LIMITE_PADRAO)

    async function listarTodosUsuario() {
        try {
            const response = await listarTodosUsuarioApi(`?size=${limite}&page=${page - 1}&sort=id`)
            setUsuarios(response.content)
            setData(response)
        } catch (error) {
            showToast({ type: "error", message: "Você não tem permissão para listar os usuarios." });
        }
    }

    useEffect(() => {
        listarTodosUsuario()
    }, [page, limite])

    return (
        <>
            <NavListComponent />
            <div className="role-admin">
                <h1>Você está na tela de Usuario</h1>

                <label htmlFor="limite">limite de usuarios por pagina: </label>
                <select
                    name="limite"
                    value={OPCOES_DE_LIMITE.includes(limite) ? limite : "DEFAULT"}
                    onChange={(e) => setLimite(e.target.value)}
                >
                    <option value="DEFAULT" disabled>
                        Selecione uma opção...
                    </option>
                    {OPCOES_DE_LIMITE.map((opcao) =>
                        <option
                            key={opcao}
                            value={opcao}
                        >
                            {opcao}
                        </option>
                    )}
                </select>

                <Pagination
                    page={page}
                    count={parseInt(Math.ceil(data.totalElements / limite))}
                    onChange={(e, newPage) => setPage(newPage)}
                    color="secondary"
                />

                <div className="usuario-container">
                    {
                        (usuarios.length < 1) ?
                            <p>Nenhum usuario para exibir</p>
                            :
                            usuarios.map((usu, index) =>
                                <div key={index} className="usuario-card">
                                    <UsuarioComponent usuario={usu} />
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    )
}