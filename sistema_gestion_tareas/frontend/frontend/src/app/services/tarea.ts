import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private http = inject(HttpClient);

  obtenerTareas(): Observable<any[]> {

    return this.http.get<any[]>(
      `${environment.apiUrl}/tareas`
    );

  }

  crearTarea(tarea: any): Observable<any> {

    return this.http.post(
      `${environment.apiUrl}/tareas`,
      tarea
    );

  }
  eliminarTarea(id: number): Observable<any> {

  return this.http.delete(
    `${environment.apiUrl}/tareas/${id}`
  );

}

obtenerTareaPorId(id: number): Observable<any> {

  return this.http.get(
    `${environment.apiUrl}/tareas/${id}`
  );

}

actualizarTarea(id: number, tarea: any): Observable<any> {

  return this.http.put(
    `${environment.apiUrl}/tareas/${id}`,
    tarea
  );

}
}