# Failsafe Dockerfile: Pre-built Strategy
FROM node:20-alpine
WORKDIR /app

# Copy all project files (honoring .dockerignore)
COPY . .

# Install production dependencies (Express)
RUN npm install --omit=dev --no-audit --no-fund

EXPOSE 3000

CMD ["node", "server.js"]
