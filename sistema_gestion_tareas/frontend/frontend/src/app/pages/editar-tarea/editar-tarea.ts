import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { TareaService } from '../../services/tarea';

@Component({
  selector: 'app-editar-tarea',
  imports: [FormsModule, RouterModule],
  templateUrl: './editar-tarea.html',
  styleUrl: './editar-tarea.css',
})
export class EditarTarea implements OnInit {

  id!: number;

  titulo = '';
  descripcion = '';
  estado = '';
  prioridad = '';

  private tareaService = inject(TareaService);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.cargarTarea();

  }

  cargarTarea() {

    this.tareaService
      .obtenerTareaPorId(this.id)
      .subscribe({

        next: (data) => {

          this.titulo = data.titulo;
          this.descripcion = data.descripcion;
          this.estado = data.estado;
          this.prioridad = data.prioridad;

        },

        error: (err) => {

          console.error(err);

          alert('Error al cargar tarea');

        }

      });

  }

  guardar() {

    const tarea = {

      titulo: this.titulo,
      descripcion: this.descripcion,
      estado: this.estado,
      prioridad: this.prioridad,

      usuarioId: 1,
      sprintId: 1

    };

    this.tareaService
      .actualizarTarea(this.id, tarea)
      .subscribe({

        next: () => {

          alert('Tarea actualizada');

          this.router.navigate(['/tareas']);

        },

        error: (err) => {

          console.error(err);

          alert('Error al actualizar');

        }

      });

  }

}