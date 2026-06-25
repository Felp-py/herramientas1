package com.sgt.backend.Controller;

import com.sgt.backend.dto.AuthResponseDTO;
import com.sgt.backend.dto.LoginDTO;
import com.sgt.backend.dto.RegisterDTO;
import com.sgt.backend.Model.Usuario;
import com.sgt.backend.Service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/register")
    public Usuario registrar(@RequestBody RegisterDTO dto){
        return authService.registrar(dto);
    }

    @PostMapping("/login")
    public AuthResponseDTO login(
        @RequestBody LoginDTO dto){

    return authService.login(dto);

}
}