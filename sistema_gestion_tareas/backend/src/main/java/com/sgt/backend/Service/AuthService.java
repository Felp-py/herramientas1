package com.sgt.backend.Service;

import com.sgt.backend.dto.AuthResponseDTO;
import com.sgt.backend.dto.LoginDTO;
import com.sgt.backend.dto.RegisterDTO;
import com.sgt.backend.Model.Usuario;
import com.sgt.backend.Repository.UsuarioRepository;
import com.sgt.backend.Security.JwtService;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
        UsuarioRepository usuarioRepository,
        BCryptPasswordEncoder passwordEncoder,
        JwtService jwtService) {

    this.usuarioRepository = usuarioRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtService = jwtService;
}

    public Usuario registrar(RegisterDTO dto){

        Usuario usuario = new Usuario();

        usuario.setNombre(dto.getNombre());
        usuario.setCorreo(dto.getCorreo());
        usuario.setPassword(
                passwordEncoder.encode(dto.getPassword())
        );

        return usuarioRepository.save(usuario);
    }
    public AuthResponseDTO login(LoginDTO dto){

    Usuario usuario = usuarioRepository
            .findByCorreo(dto.getCorreo())
            .orElseThrow();

    if(!passwordEncoder.matches(
            dto.getPassword(),
            usuario.getPassword())){

        throw new RuntimeException("Contraseña incorrecta");
    }

    String token =
            jwtService.generarToken(usuario.getCorreo());

    return new AuthResponseDTO(
            token,
            usuario.getNombre(),
            usuario.getCorreo()
    );

}
}