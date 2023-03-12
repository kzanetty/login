import { instanceAxios } from "../_base/axios.instance";

export async function removerUsuarioApi(idUsuario) {
  await instanceAxios.post(`/admin/remover/${idUsuario}`);
}
