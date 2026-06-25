import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Tareas } from './pages/tareas/tareas';
import { CrearTarea } from './pages/crear-tarea/crear-tarea';
import { EditarTarea } from './pages/editar-tarea/editar-tarea';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'tareas',
    component: Tareas
 },

  {
    path: 'crear-tarea',
    component: CrearTarea
  },

  {
    path: 'editar-tarea/:id',
    component: EditarTarea
  }

];