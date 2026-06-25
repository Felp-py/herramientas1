package com.sgt.backend.Service;

import com.sgt.backend.dto.TareaDTO;
import com.sgt.backend.Model.Sprint;
import com.sgt.backend.Model.Tarea;
import com.sgt.backend.Model.Usuario;
import com.sgt.backend.Repository.SprintRepository;
import com.sgt.backend.Repository.TareaRepository;
import com.sgt.backend.Repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TareaService {

    private final TareaRepository tareaRepository;
    private final UsuarioRepository usuarioRepository;
    private final SprintRepository sprintRepository;

    public TareaService(TareaRepository tareaRepository,
                        UsuarioRepository usuarioRepository,
                        SprintRepository sprintRepository) {

        this.tareaRepository = tareaRepository;
        this.usuarioRepository = usuarioRepository;
        this.sprintRepository = sprintRepository;
    }

    public List<Tarea> obtenerTodas() {
        return tareaRepository.findAll();
    }

    public Tarea guardar(TareaDTO dto) {

        Usuario usuario = usuarioRepository.findById(dto.getUsuarioId())
                .orElseThrow();

        Sprint sprint = sprintRepository.findById(dto.getSprintId())
                .orElseThrow();

        Tarea tarea = new Tarea();

        tarea.setTitulo(dto.getTitulo());
        tarea.setDescripcion(dto.getDescripcion());
        tarea.setEstado(dto.getEstado());
        tarea.setPrioridad(dto.getPrioridad());
        tarea.setUsuario(usuario);
        tarea.setSprint(sprint);

        return tareaRepository.save(tarea);
    }
    public Tarea obtenerPorId(Long id){
    return tareaRepository.findById(id)
            .orElseThrow();
}

public Tarea actualizar(Long id, TareaDTO dto){

    Tarea tarea = tareaRepository.findById(id)
            .orElseThrow();

    Usuario usuario = usuarioRepository.findById(dto.getUsuarioId())
            .orElseThrow();

    Sprint sprint = sprintRepository.findById(dto.getSprintId())
            .orElseThrow();

    tarea.setTitulo(dto.getTitulo());
    tarea.setDescripcion(dto.getDescripcion());
    tarea.setEstado(dto.getEstado());
    tarea.setPrioridad(dto.getPrioridad());
    tarea.setUsuario(usuario);
    tarea.setSprint(sprint);

    return tareaRepository.save(tarea);
}

public void eliminar(Long id){
    tareaRepository.deleteById(id);
}
}