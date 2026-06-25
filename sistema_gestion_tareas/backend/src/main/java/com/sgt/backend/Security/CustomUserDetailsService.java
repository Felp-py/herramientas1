package com.sgt.backend.Security;

import com.sgt.backend.Repository.UsuarioRepository;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService
        implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public CustomUserDetailsService(
            UsuarioRepository usuarioRepository) {

        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(
            String correo)
            throws UsernameNotFoundException {

        return usuarioRepository
                .findByCorreo(correo)
                .orElseThrow(
                        () -> new UsernameNotFoundException(
                                "Usuario no encontrado"
                        )
                );
    }
}