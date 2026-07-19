# Sistema de Gestión de Tareas con Integración a GitHub

Sistema de gestión de tareas desarrollado como proyecto del curso **Herramientas
de Desarrollo**, orientado a equipos de desarrollo de software que necesitan
organizar, priorizar y dar seguimiento a sus tareas de forma integrada con
GitHub (Issues, commits y Pull Requests).

## Equipo

| Integrante | Rol | GitHub |
|---|---|---|
| Jamie Alburqueque Melgarejo | Líder de Proyecto | [@jamieam1103](https://github.com/jamieam1103) |
| Miguel Andre Alvarado Huilca | Backend | [@koyue1](https://github.com/koyue1) |
| Solange Ariana Cepeda Laynes | Frontend | [@xsunlightsx](https://github.com/xsunlightsx) |
| Félix Francisco Córdova Pachas | Base de Datos e Integración GitHub | [@Felp-py](https://github.com/Felp-py) |
| Jhanayra Jariv Gomero Donayre | QA y Testing | [@jhany06](https://github.com/jhany06) |
| Ana Paula Guzmán Mendieta | Análisis y Documentación | [@AnPauMen](https://github.com/AnPauMen) |

## Tecnologías

- **Frontend:** Angular 21 (standalone components), Bootstrap 5.
- **Backend:** Spring Boot 3.5.15, Java 21, Spring Security + JWT
- **Base de datos:** MySQL
- **Metodología:** Scrum (4 sprints de 3 semanas)
- **CI/CD:** GitHub Actions (`.github/workflows/ci.yml` y `deploy.yml`)

## Estructura del repositorio

```
herramientas1/
├── sistema_gestion_tareas/
│   ├── frontend/frontend/     # Aplicación Angular
│   └── backend/               # API REST en Spring Boot
├── docs/
│   └── manual-github/         # Manual de gestión de GitHub del equipo
└── .github/
    └── workflows/             # CI (build) y CD (deploy a GitHub Pages)
```

## Funcionalidades principales

- Registro e inicio de sesión de usuarios (JWT).
- Dashboard con el resumen de tareas del equipo.
- CRUD de tareas: crear, listar, editar y eliminar.
- Tablero Kanban con estados de tarea (Backlog, To Do, In Progress, Code
  Review, Done).
- Asignación de responsables y prioridad por tarea.

## API REST (backend)

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/api/auth/register` | Registrar un nuevo usuario |
| POST | `/api/auth/login` | Iniciar sesión (devuelve JWT) |
| GET | `/api/tareas` | Listar todas las tareas |
| POST | `/api/tareas` | Crear una tarea |
| GET | `/api/tareas/{id}` | Obtener una tarea por id |
| PUT | `/api/tareas/{id}` | Actualizar una tarea |
| DELETE | `/api/tareas/{id}` | Eliminar una tarea |

## Cómo ejecutar el proyecto en local

### Backend

```bash
cd sistema_gestion_tareas/backend
# Configurar en src/main/resources/application.properties:
#   spring.datasource.url, username y password de tu MySQL local
./mvnw spring-boot:run
```

El backend corre por defecto en `http://localhost:8082`.

### Frontend

```bash
cd sistema_gestion_tareas/frontend/frontend
npm install
ng serve
```

El frontend corre por defecto en `http://localhost:4200`.

## Gestión del proyecto

- Las tareas se gestionan mediante **Issues** de GitHub (tipo, prioridad,
  sprint, responsable y checklist).
- El avance se sigue en el **tablero Kanban de GitHub Projects**.
- El flujo de ramas, Issues y Pull Requests está documentado en
  [`docs/manual-github/README.md`](docs/manual-github/README.md).

## CI/CD

- **CI** (`ci.yml`): compila el frontend en cada push/PR a `main` o `develop`.
- **CD** (`deploy.yml`): al integrar cambios en `main`, compila el frontend y
  lo publica automáticamente en GitHub Pages.
