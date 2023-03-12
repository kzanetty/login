package br.com.cwi.apiseguranca.service;

import br.com.cwi.apiseguranca.domain.Usuario;
import br.com.cwi.apiseguranca.repository.UsuarioRepository;
import br.com.cwi.apiseguranca.security.domain.Permissao;
import br.com.cwi.apiseguranca.security.domain.enums.Funcao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AumentarPrivilegioDeUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    public void aumentarPrivilegio(Long id) {
        Usuario usuario = buscarUsuarioService.porId(id);

        if(usuario.getPermissoes().contains(getPermissaoAdmin())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Usuario já possui esse privilegio");
        }
        usuario.adicionarPermissao(getPermissaoAdmin());
        usuarioRepository.save(usuario);
    }

    private Permissao getPermissaoAdmin() {
        Permissao permissao = new Permissao();
        permissao.setFuncao(Funcao.ADMIN);
        return permissao;
    }
}
