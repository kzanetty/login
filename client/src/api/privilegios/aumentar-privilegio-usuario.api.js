import { instanceAxios } from "../_base/axios.instance";

export async function aumentarPrivilegioUsuarioApi(idUsuario) {
  await instanceAxios.post(`/admin/privilegio/${idUsuario}`);
}
