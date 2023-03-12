package br.com.cwi.apiseguranca.service;

import br.com.cwi.apiseguranca.domain.Usuario;
import br.com.cwi.apiseguranca.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RemoverUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    public void remover(Long id) {
        Usuario usuario = buscarUsuarioService.porId(id);
        usuario.setAtivo(false);

        usuarioRepository.save(usuario);
    }
}
