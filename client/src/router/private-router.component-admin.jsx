import { Navigate } from "react-router-dom";
import useGlobalUsuario from "../context/usuario/usuario.context";
import { showToast } from "../ui/components";

export function PrivateRouteAdmin({ Screen, roles }) {
    const [usuario] = useGlobalUsuario();

    if (!usuario) {
        return <Navigate to={"/"} />;
    }

    const rolesUsuario = usuario.permissoes.map(permissao => permissao.nome.split("_")[1])

    if (rolesUsuario.some(role => role == roles)) {
        return <Screen />
    } else {
        showToast({ type: "error", message: "Você não tem acesso a essa pagina." });
        return <Navigate to={"/"} />;
    }
}
