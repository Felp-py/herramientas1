package com.sgt.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDTO {

    private String nombre;
    private String correo;
    private String password;

}