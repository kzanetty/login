import { instanceAxios } from "../_base/axios.instance";

export async function listarTodosUsuarioApi() {
  const response = await instanceAxios.get("/admin/");
  return response.data.content;
}
