# Interseguro Test

Este proyecto es una API construida con [Nx](https://nx.dev/) que implementa un servicio de factorización QR de matrices y generación de estadísticas basadas en ellas. La API consta de dos servicios que se comunican entre sí y están desarrollados en **Node.js 22**, utilizando **TypeScript**, **pnpm** y **Jest** para pruebas. La arquitectura utilizada es **MCV** por simplicidad.

## Instalación y configuración

1. Clona este repositorio:
   ```sh
   git clone <URL_DEL_REPO>
   cd <NOMBRE_DEL_REPO>
   ```
2. Instala las dependencias con **pnpm**:
   ```sh
   pnpm install
   ```
3. Configura las variables de entorno en un archivo `.env`:
   ```sh
   NX_JWT_SECRET=<tu_secret_jwt>
   NX_MAINSERVICE_PORT=3004
   NX_MATRIX_PROCESS_PORT=3005
   ```
4. Ejecuta los servicios:
   ```sh
   pnpm run run-services
   ```
5. Para ejecutar las pruebas:
   ```sh
   pnpm run run-test
   ```

## Endpoints

### 1. Generación de Token JWT
- **Ruta:** `POST /api/jwt/generate-token`
- **Descripción:** Genera un token JWT necesario para acceder a los endpoints protegidos.
- **Ejemplo de uso:**
  ```sh
  curl -H "Content-Type: application/json" -X POST http://localhost:3004/api/jwt/generate-token
  ```
- **Respuesta esperada:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### 2. Transformación y Procesamiento de Matrices
- **Ruta:** `POST /api/matrix/transform-and-process`
- **Descripción:** Toma una matriz como entrada, realiza la factorización QR usando el método de Gram-Schmidt y devuelve estadísticas.
- **Requiere:** Token JWT en la cabecera `Authorization`.
- **Ejemplo de uso:**
  ```sh
  curl -d '{"matrix":[[1,2,3,4],[1,2,3,4],[1,2,3,2]]}' \
       -H "Content-Type: application/json" \
       -H "Authorization: Bearer <TOKEN_AQUÍ>" \
       -X POST http://localhost:3004/api/matrix/transform-and-process
  ```
- **Respuesta esperada:**
  ```json
  {
    "Q": [[...], [...], [...]],
    "R": [[...], [...], [...]],
    "statistics": {
      "Suma Total": ...,
      "Tiene Diagonal?": ...,
      "Valor minimo": ...
      "Valor maximo": ...
      "Valor promedio": ...
    }
  }
  ```

## Tecnologías utilizadas
- **Node.js 22**
- **TypeScript**
- **pnpm**
- **Jest** (para pruebas)
- **JWT** (para autenticación)
- **Nx** (monorepo)

## Notas adicionales
- Los puertos de los servicios están definidos en el archivo `.env`.
- La autenticación con JWT es requerida para acceder a la factorización y estadísticas.
- Se utilizó el método de **Gram-Schmidt** para la factorización QR por razones de tiempo.

---
¡Si tienes dudas o mejoras, contribuye o abre un issue en el repositorio! 🚀

