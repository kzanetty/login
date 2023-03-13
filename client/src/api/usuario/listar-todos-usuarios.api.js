import { instanceAxios } from "../_base/axios.instance";

export async function listarTodosUsuarioApi(pageable) {
  const response = await instanceAxios.get(`/admin/${pageable}`);
  return response.data;
}
