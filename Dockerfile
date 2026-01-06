FROM node:20-alpine
WORKDIR /app

# Copiar package.json y package-lock.json desde el contexto de build
COPY package*.json ./

# Instalar dependencias (dev + prod)
RUN npm install --no-audit --no-fund

# Copiar todo el código (src, index.html, server.js, etc.)
COPY . .

# Construir el frontend de Vite
RUN npm run build

# Instalar solo dependencias de producción
RUN npm install --omit=dev --no-audit --no-fund

EXPOSE 3000
CMD ["node", "server.js"]
