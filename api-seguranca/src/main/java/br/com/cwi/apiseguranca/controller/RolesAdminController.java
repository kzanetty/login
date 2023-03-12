package br.com.cwi.apiseguranca.controller;

import br.com.cwi.apiseguranca.controller.response.UsuarioResponse;
import br.com.cwi.apiseguranca.service.AumentarPrivilegioDeUsuarioService;
import br.com.cwi.apiseguranca.service.ListarUsuariosService;
import br.com.cwi.apiseguranca.service.RemoverUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import static br.com.cwi.apiseguranca.security.domain.enums.Funcao.Nomes.ADMIN;


@Secured(ADMIN)
@RestController
@RequestMapping("/admin")
public class RolesAdminController {

    @Autowired
    private ListarUsuariosService listarUsuariosService;

    @Autowired
    private AumentarPrivilegioDeUsuarioService aumentarPrivilegioDeUsuarioService;

    @Autowired
    private RemoverUsuarioService removerUsuarioService;

    @GetMapping("/")
    public Page<UsuarioResponse> listarUsuarios(Pageable pageable) {
        return listarUsuariosService.listar(pageable);
    }

    @PostMapping("/privilegio/{id}")
    public void aumentarPrivilegioDeUsuario(@PathVariable Long id) {
        aumentarPrivilegioDeUsuarioService.aumentarPrivilegio(id);
    }

    @PostMapping("/remover/{id}")
    public void removerUsuario(@PathVariable Long id) {
        removerUsuarioService.remover(id);
    }

    @GetMapping("/user")
    public String user() {
        return "Apenas admins podem ver isso. '/user' ";
    }

    @GetMapping("/admin")
    public String admin() {
        return "Apenas admins podem ver isso. '/admin' ";
    }
}
