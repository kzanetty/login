package br.com.cwi.apiseguranca.repository;

import br.com.cwi.apiseguranca.controller.response.UsuarioResponse;
import br.com.cwi.apiseguranca.domain.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

    boolean existsByEmail(String email);

    Usuario findByResetPasswordToken(String token);

    Page<Usuario> findAllByAtivo(boolean status, Pageable pageable);
}
