package com.sgt.backend.Repository;

import com.sgt.backend.Model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TareaRepository extends JpaRepository<Tarea, Long> {

}