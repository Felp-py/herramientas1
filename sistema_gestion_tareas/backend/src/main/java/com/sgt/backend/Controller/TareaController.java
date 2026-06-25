package com.sgt.backend.Controller;

import com.sgt.backend.dto.TareaDTO;
import com.sgt.backend.Model.Tarea;
import com.sgt.backend.Service.TareaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tareas")
public class TareaController {

    private final TareaService tareaService;

    public TareaController(TareaService tareaService) {
        this.tareaService = tareaService;
    }

    @GetMapping
    public List<Tarea> listar() {
        return tareaService.obtenerTodas();
    }

    @PostMapping
    public Tarea guardar(@RequestBody TareaDTO dto) {
        return tareaService.guardar(dto);
    }

    @GetMapping("/{id}")
    public Tarea obtenerPorId(@PathVariable Long id){
        return tareaService.obtenerPorId(id);
    }

    @PutMapping("/{id}")
    public Tarea actualizar(
        @PathVariable Long id,
        @RequestBody TareaDTO dto){

        return tareaService.actualizar(id,dto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
    tareaService.eliminar(id);
}
}