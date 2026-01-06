FROM node:20-alpine
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos todas las dependencias (dev + prod)
RUN npm install --no-audit --no-fund

# Copiamos el resto del código (NO copiamos dist explícitamente)
COPY . .

# Construimos el frontend (genera /dist dentro de la imagen)
RUN npm run build

# Instalamos solo dependencias de producción (para Express y server.js)
RUN npm install --omit=dev --no-audit --no-fund

EXPOSE 3000
CMD ["node", "server.js"]
