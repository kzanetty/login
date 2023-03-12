export function getRolesUsuario(usuario) {
  if (usuario?.permissoes) {
    return usuario.permissoes.map((permissao) => permissao.nome.split("_")[1]);
  }
}
