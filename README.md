# Habit-Tracker

Proyecto para la gestión de hábitos basado en el libro *Hábitos Atómicos* de James Clear.

## Descripción

Habit Tracker es una aplicación web que permite a los usuarios crear y gestionar sus hábitos diarios. Siguiendo la filosofía del libro, la aplicación ayuda a formar hábitos a través de pequeños pasos diarios. El usuario puede crear una cuenta, iniciar sesión, agregar hábitos y marcarlos como completados cada día. Si un hábito no se marca en algún día, el conteo se reinicia. Además, una barra de progreso visualiza el avance del usuario, cambiando de rojo a verde conforme se acerca a los 66 días.

## Tecnologías Utilizadas

- **Node.js & Express.js:** Framework para el backend.
- **MongoDB Atlas:** Base de datos en la nube.
- **Mongoose:** Librería para la conexión e interacción con MongoDB.
- **Next.js:** (Se implementará en fases posteriores para el frontend).

## Requisitos

- Node.js (v12 o superior)
- npm (v6 o superior)
- Cuenta en MongoDB Atlas y cadena de conexión correspondiente

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Navegar al directorio del proyecto:**
   ```bash
   cd nombre-del-proyecto
   ```

3. **Instalar las dependencias:**
   ```bash
   npm install
   ```

4. **Configurar las variables de entorno:**
   - Crear un archivo `.env` en la raíz del proyecto.
   - Agregar la siguiente línea con tu cadena de conexión a MongoDB Atlas:
     ```
     MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
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

