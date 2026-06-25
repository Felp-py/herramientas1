import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { TareaService } from '../../services/tarea';

@Component({
  selector: 'app-crear-tarea',
  imports: [FormsModule, RouterModule],
  templateUrl: './crear-tarea.html',
  styleUrl: './crear-tarea.css'
})
export class CrearTarea {

  titulo = '';
  descripcion = '';
  estado = 'PENDIENTE';
  prioridad = 'MEDIA';

  private tareaService = inject(TareaService);

  constructor(private router: Router) {}

  guardar() {

  const tarea = {

    titulo: this.titulo,
    descripcion: this.descripcion,
    estado: this.estado,
    prioridad: this.prioridad,

    usuarioId: 1,
    sprintId: 1

  };

  this.tareaService.crearTarea(tarea)
    .subscribe({

      next: () => {

        alert('Tarea creada correctamente');

        this.router.navigate(['/tareas']);

      },

      error: (err) => {

        console.error(err);

        alert('Error al crear tarea');

      }

    });

}

}