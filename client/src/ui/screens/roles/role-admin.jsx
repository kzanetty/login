import { NavListComponent, showToast, UsuarioComponent } from "../../components";
import useGlobalUsuario from "../../../context/usuario/usuario.context";
import './role-admin.css'
import { aumentarPrivilegioUsuarioApi, listarTodosUsuarioApi, removerUsuarioApi } from "../../../api";
import { useEffect, useState } from "react";

export function RoleAdminScreen() {
    const [usuario, setUsuario] = useGlobalUsuario();
    const [usuarios, setUsuarios] = useState([])


    async function listarTodosUsuario() {
        try {
            const response = await listarTodosUsuarioApi()
            console.log(response.length)
            setUsuarios(response)
        } catch (error) {
            showToast({ type: "error", message: "Ocorreu um erro ao listar os usuarios." });
        }
    }

    async function aumentarPrivilegio(idUsuario) {
        try {
            await aumentarPrivilegioUsuarioApi(idUsuario)
            listarTodosUsuario()
        } catch (error) {
            showToast({ type: "error", message: "Ocorreu um erro ao aumentar o privilegio do usuario " + idUsuario + "." });
        }
    }

    async function removerUsuario(idUsuario) {
        try {
            await removerUsuarioApi(idUsuario)
            listarTodosUsuario()
            showToast({ type: "success", message: "Usuario removido com sucesso." });
        } catch (error) {
            showToast({ type: "error", message: "Ocorreu um erro ao remover usuario " + idUsuario + "." });
        }
    }

    useEffect(() => {
        listarTodosUsuario()
    }, [])

    return (
        <>
            <NavListComponent />
            <div className="role-admin">
                <h1>Você está na tela de role_ADMIN</h1>
                <div className="usuario-container">
                    {
                        (usuarios.length < 1) ?
                            <p>Nenhum usuario para exibir</p>
                            :
                            usuarios.map((usu, index) =>
                                <div key={index} className="usuario-card">
                                    <UsuarioComponent usuario={usu} />
                                    <button onClick={() => aumentarPrivilegio(usu.id)}>Aumentar privilegio do usuario</button>
                                    <button onClick={() => removerUsuario(usu.id)}>Remover usuario</button>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    )
}