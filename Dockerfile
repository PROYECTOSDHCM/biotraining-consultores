FROM node:20-alpine
WORKDIR /app

# 1) Copiamos package.json y package-lock.json
COPY package*.json ./

# 2) Instalamos TODAS las dependencias (incluye Vite, React, etc.)
RUN npm install --no-audit --no-fund

# 3) Copiamos el resto del código fuente (incluye src, index.html, etc.)
COPY . .

# 4) Construimos el frontend (genera /dist dentro de la imagen)
RUN npm run build

# 5) Instalamos solo dependencias de producción (para Express y server.js)
RUN npm install --omit=dev --no-audit --no-fund

EXPOSE 3000
CMD ["node", "server.js"]
