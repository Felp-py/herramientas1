package com.sgt.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TareaDTO {

    private String titulo;
    private String descripcion;
    private String estado;
    private String prioridad;

    private Long usuarioId;
    private Long sprintId;
}