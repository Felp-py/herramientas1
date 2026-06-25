import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TareaService } from '../../services/tarea';

@Component({
  selector: 'app-tareas',
  imports: [CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnInit {

  tareas: any[] = [];

  private tareaService = inject(TareaService);
  private cdr = inject(ChangeDetectorRef);

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.cargarTareas();

  }

  cargarTareas(): void {

    this.tareaService.obtenerTareas().subscribe({

      next: (data) => {

        console.log('Tareas recibidas:', data);

        this.tareas = data;

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.error(err);

        alert('Error al cargar tareas');

      }

    });

  }

  eliminar(id: number) {

    if (!confirm('¿Eliminar tarea?')) {
      return;
    }

    this.tareaService
      .eliminarTarea(id)
      .subscribe({

        next: () => {

          alert('Tarea eliminada');

          this.cargarTareas();

        },

        error: (err) => {

          console.error(err);

          alert('Error al eliminar');

        }

      });

  }
  editar(id: number) {

  this.router.navigate(
    ['/editar-tarea', id]
  );

}
irAlDashboard(): void {
  this.router.navigate(['/dashboard']);
}
}