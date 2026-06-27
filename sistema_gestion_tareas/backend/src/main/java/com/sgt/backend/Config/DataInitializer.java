package com.sgt.backend.Config;

import com.sgt.backend.Model.Usuario;
import com.sgt.backend.Repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(
            UsuarioRepository usuarioRepository,
            BCryptPasswordEncoder passwordEncoder) {

        return args -> {
            if (usuarioRepository.findByCorreo("admin@gittask.com").isEmpty()) {
                Usuario admin = new Usuario();
                admin.setNombre("Admin");
                admin.setCorreo("admin@gittask.com");
                admin.setPassword(passwordEncoder.encode("admin123"));
                usuarioRepository.save(admin);
                System.out.println("Usuario admin creado");
            }
        };
    }
}