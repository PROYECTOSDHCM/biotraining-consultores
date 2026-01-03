# Guía de Despliegue (Deployment Guide)

Esta guía detalla los pasos para desplegar tu aplicación **SalesBoost Consulting** tanto en **Vercel** como en un **VPS de Hostinger**.

---

## 1. Despliegue en Vercel

Configuramos el archivo `vercel.json` para asegurar que las rutas de tu aplicación (como `/dashboard`) funcionen correctamente al recargar la página.

### Pasos:

1.  **Instalar Vercel CLI** (si no lo tienes):
    ```bash
    npm install -g vercel
    ```

2.  **Iniciar sesión**:
    ```bash
    vercel login
    ```

3.  **Desplegar**:
    Ejecuta el siguiente comando en la raíz del proyecto:
    ```bash
    vercel
    ```
    - Sigue las instrucciones en pantalla.
    - Usa los valores predeterminados (Enter) para la mayoría de las preguntas.

4.  **Producción**:
    Para desplegar a producción (dominio principal):
    ```bash
    vercel --prod
    ```

---

## 2. Integración con VPS de Hostinger (Docker)

Para el VPS, hemos creado un `Dockerfile` y un `nginx.conf`. Esta es la forma más profesional y estable de desplegar, ya que encapsula tu app y su servidor web.

### Prerrequisitos en tu VPS:
Asegúrate de tener **Docker** instalado en tu servidor Hostinger.
- Si es Ubuntu: `apt update && apt install docker.io`

### Pasos:

1.  **Subir archivos al VPS**:
    Copia todo el proyecto (excepto `node_modules` y `dist`) a tu servidor. Puedes usar SCP o Git (recomendado).

    *Ejemplo clonando desde GitHub:*
    ```bash
    git clone <tu-repo-url> salesboost-app
    cd salesboost-app
    ```

2.  **Construir la Imagen Docker**:
    Ejecuta este comando dentro de la carpeta del proyecto en tu VPS:
    ```bash
    docker build -t salesboost-app .
    ```

3.  **Correr el Contenedor**:
    Esto iniciará tu aplicación en el puerto 80 del servidor.
    ```bash
    docker run -d -p 80:80 --name mi-app salesboost-app
    ```

4.  **Verificar**:
    Abre la IP de tu VPS en el navegador. ¡Tu aplicación debería estar funcionando!

### Comandos Útiles (VPS):
- **Ver contenedores corriendo**: `docker ps`
- **Detener la app**: `docker stop mi-app`
- **Eliminar la app**: `docker rm mi-app`
- **Ver logs**: `docker logs mi-app`
