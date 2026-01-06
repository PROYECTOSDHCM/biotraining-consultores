# ETAPA 1: Construcción (Build)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ETAPA 2: Producción (Runtime)
FROM node:20-alpine
WORKDIR /app

# Copiamos solo lo necesario desde la etapa de build
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./
COPY --from=build /app/package*.json ./

# Instalamos solo dependencias de producción (Express)
RUN npm install --omit=dev --no-audit --no-fund

EXPOSE 3000

CMD ["node", "server.js"]
