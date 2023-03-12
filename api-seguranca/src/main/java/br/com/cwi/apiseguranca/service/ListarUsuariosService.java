package br.com.cwi.apiseguranca.service;

import br.com.cwi.apiseguranca.controller.response.UsuarioResponse;
import br.com.cwi.apiseguranca.mapper.UsuarioMapper;
import br.com.cwi.apiseguranca.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarUsuariosService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Page<UsuarioResponse> listar(Pageable pageable) {
        return usuarioRepository.findAllByAtivo(true, pageable).map(usuario -> UsuarioMapper.toResponse(usuario));
    }
}
