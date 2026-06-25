import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  correo = '';
  password = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  iniciarSesion() {

    this.authService.login({
      correo: this.correo,
      password: this.password
    }).subscribe({

      next: (response) => {

    localStorage.setItem(
      'token',
      response.token
    );

    this.router.navigate(['/dashboard']);
},

      error: () => {

        alert('Correo o contraseña incorrectos');
      }

    });

  }

}