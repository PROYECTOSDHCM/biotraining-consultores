# Failsafe Dockerfile: Pre-built Strategy
FROM node:20-alpine
WORKDIR /app

# Copy ONLY necessary server files
COPY package*.json ./
COPY server.js ./
# We copy the ALREADY BUILT dist folder from local
COPY dist ./dist

# Install production dependencies (Express)
RUN npm install --omit=dev --no-audit --no-fund

EXPOSE 3000

CMD ["node", "server.js"]
