# Proyecto de Gestión de Hábitos

Este proyecto es una aplicación web desarrollada con **Next.js** y **Express.js**, utilizando **MongoDB** como base de datos. Su objetivo es ayudar a los usuarios a crear, gestionar y mantener hábitos diarios.

## Funcionalidades Principales
- Registro e inicio de sesión de usuarios con contraseñas encriptadas.
- Creación, edición y eliminación de hábitos.
- Marcado de hábitos como completados cada día.
- Reinicio automático del hábito si no se marca en un día.
- Barra de progreso que cambia de color a medida que el usuario se acerca a los 66 días.

---

## 🚀 Entrega Semana 4

### 🔹 Backend
- Implementación de la lógica para **reinicio y seguimiento de días**.
- Implementación del **registro y login de usuarios** utilizando hash para la seguridad de contraseñas.

### 🔹 Frontend
- Implementación del botón **“Done”** para marcar un hábito como realizado o reiniciarlo si se pierde la racha.
- Integración de una **barra de progreso dinámica** que refleja la racha de días consecutivos.

---

## 📂 Estructura del Proyecto
El proyecto está dividido en dos carpetas principales:

```
├── backend/      # API en Express.js con lógica de hábitos y usuarios
├── frontend/     # Interfaz en Next.js con gestión de hábitos
└── README.md     # Instrucciones del proyecto
```

### 📌 Instalación y Configuración
#### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/usuario/proyecto-habitos.git
cd proyecto-habitos
```

#### 2️⃣ Configurar Backend (Express.js)
```bash
cd backend
npm install
```

- Crear un archivo `.env` con las siguientes variables de entorno:
  ```
  MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/habits
  JWT_SECRET=clave_secreta
  ```

- Iniciar el servidor:
  ```bash
  npm start
  ```

#### 3️⃣ Configurar Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:3000` y el backend en `http://localhost:5000`.

---

## 📬 Endpoints Backend
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/auth/register` | Registrar un usuario |
| POST | `/api/auth/login` | Iniciar sesión |
| GET | `/api/habits` | Obtener hábitos del usuario |
| POST | `/api/habits` | Crear un nuevo hábito |
| PATCH | `/api/habits/:id/done` | Marcar un hábito como realizado |
| PATCH | `/api/habits/:id/reset` | Reiniciar la racha de un hábito |

---

## 🎨 Mejoras en el Frontend
- El botón **“Done”** cambia dinámicamente el estado del hábito.
- La **barra de progreso** se actualiza según la cantidad de días en la racha.

---

## 📌 Próximos Pasos
- Implementación de estadísticas de hábitos.
- Notificaciones y recordatorios diarios.
- Integración con redes sociales.

---

## 👨‍💻 Contribución
Si deseas contribuir, haz un fork del repositorio, crea una rama y abre un pull request con tus mejoras. 🚀

