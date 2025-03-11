# Habit-Tracker

Este proyecto es una aplicación web para gestionar hábitos, inspirada en el libro *Hábitos Atómicos* de James Clear. La solución está dividida en dos partes:

  - **Backend:** API desarrollada con Express.js y conectada a una base de datos MongoDB Atlas.
  - **Frontend:** Aplicación web desarrollada con Next.js y Redux para el manejo del estado.

## Descripción

Habit Tracker es una aplicación web que permite a los usuarios crear y gestionar sus hábitos diarios. Siguiendo la filosofía del libro, la aplicación ayuda a formar hábitos a través de pequeños pasos diarios. El usuario puede crear una cuenta, iniciar sesión, agregar hábitos y marcarlos como completados cada día. Si un hábito no se marca en algún día, el conteo se reinicia. Además, una barra de progreso visualiza el avance del usuario, cambiando de rojo a verde conforme se acerca a los 66 días.

 ## Estructura del Proyecto

  ```
  proyecto-habitos/
  ├── backend/         # API en Express.js
  └── frontend/        # Aplicación en Next.js
  ```

## Tecnologías Utilizadas

- **Node.js & Express.js:** Framework para el backend.
- **MongoDB Atlas:** Base de datos en la nube.
- **Mongoose:** Librería para la conexión e interacción con MongoDB.
- **Next.js:** Framework para el frontend.

## Requisitos

- Node.js y npm instalados.
- Cuenta en MongoDB Atlas y cadena de conexión correspondiente.
- Conexión a internet para descargar dependencias.

### Backend

1. Navega a la carpeta `backend`:
  ```bash
  cd backend
  ```
2. Instala las dependencias:
  ```bash
  npm install
  ```
3. Configura las variables de entorno creando un archivo `.env` con la cadena de conexión a MongoDB:
  ```
  MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
  ```
4. Inicia el servidor:
  ```bash
  npm run dev
  ```
  El servidor se ejecutará por defecto en el puerto `3000`.

### Frontend

1. Navega a la carpeta `frontend`:
  ```bash
  cd frontend
  ```
2. Instala las dependencias:
  ```bash
  npm install
  ```
3. Inicia la aplicación Next.js:
  ```bash
  npm run dev
  ```

## Ejecución

- **Modo de desarrollo:**
  ```bash
  npm run dev
  ```
- **Modo de producción:**
  ```bash
  npm start
  ```

El servidor se ejecutará, por defecto, en el puerto `3000` (a menos que se especifique otro en las variables de entorno).

## Endpoints Disponibles

### Crear un hábito

- **Método:** POST  
- **Ruta:** `/api/habits`  
- **Descripción:** Permite crear un nuevo hábito.  
- **Ejemplo de Body:**
  ```json
  {
    "name": "Leer 30 minutos",
    "description": "Lectura diaria para mejorar el conocimiento"
  }
  ```

### Actualizar un hábito

- **Método:** PUT  
- **Ruta:** `/api/habits/:id`  
- **Descripción:** Permite actualizar la información de un hábito existente.

### Eliminar un hábito

- **Método:** DELETE  
- **Ruta:** `/api/habits/:id`  
- **Descripción:** Permite eliminar un hábito.

## Notas Adicionales

- Este entregable corresponde a la **Semana 1**, enfocado en la configuración inicial del proyecto, la conexión a MongoDB Atlas y la implementación de los endpoints básicos para la gestión de hábitos.
- En futuras iteraciones se implementará el frontend con Next.js y se agregarán funcionalidades adicionales.

## Autor

Williams Adolfo Vega Montenegro

22011423

williams.vega@galileo.edu

