import { createBrowserRouter } from "react-router-dom";
import {
  LoginScreen,
  CreateAccountScreen,
  PerfilScreen,
  EditarPerfilScreen,
  EsqueceuSenhaScreen,
  RedefinirSenhaScreen,
  RoleAdminScreen,
  RoleUsuarioScreen,
} from "../ui/screens";
import { PrivateRoute } from "./private-router.component";
import { PrivateRouteAdmin } from "./private-router.component-admin";

export const router = createBrowserRouter([
  {
    path: "/usuario",
    element: <RoleUsuarioScreen />,
  },
  {
    path: "/admin",
    element: <PrivateRouteAdmin Screen={RoleAdminScreen} roles={"ADMIN"} />,
  },

  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/forget",
    element: <EsqueceuSenhaScreen />,
  },
  {
    path: "/reset",
    element: <RedefinirSenhaScreen />,
  },
  {
    path: "/create",
    element: <CreateAccountScreen />,
  },
  {
    path: "/edit",
    element: <PrivateRoute Screen={EditarPerfilScreen} />,
  },
  {
    path: "/profile",
    element: <PrivateRoute Screen={PerfilScreen} />,
  },
]);
