import { NavListComponent, UsuarioComponent } from "../../components";
import useGlobalUsuario from "../../../context/usuario/usuario.context";
import '../perfil/perfil.screen.css'

export function RoleUsuarioScreen() {
    const [usuario, setUsuario] = useGlobalUsuario();

    return (
        <>
            <NavListComponent />
            <div className="perfil-screen">
                <h1>Você está na tela de role_usuario</h1>
            </div>
        </>

    )
}