import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

tareasPendientes: any[] = [];
tareasEnProgreso: any[] = [];
tareasCompletadas: any[] = [];
  totalTareas = 0;
  pendientes = 0;
  enProgreso = 0;
  completadas = 0;
  
  private tareaService = inject(TareaService);
  private cdr = inject(ChangeDetectorRef);

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.tareaService.obtenerTareas().subscribe({

      next: (data) => {
        this.tareasPendientes =
  data.filter(t => t.estado === 'PENDIENTE');

this.tareasEnProgreso =
  data.filter(t => t.estado === 'EN_PROGRESO');


this.tareasCompletadas =
  data.filter(t => t.estado === 'COMPLETADO');

        this.totalTareas = data.length;

        this.pendientes =
          data.filter(t => t.estado === 'PENDIENTE').length;

        this.enProgreso =
        data.filter(t => t.estado === 'EN_PROGRESO').length;
        this.completadas =
          data.filter(t => t.estado === 'COMPLETADO').length;

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error(err);
      }

    });

  }

  logout() {

    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }

  irATareas() {

    this.router.navigate(['/tareas']);

  }
  irACrearTarea() {

  this.router.navigate(['/crear-tarea']);

}
}