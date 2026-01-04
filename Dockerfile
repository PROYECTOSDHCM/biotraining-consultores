# Stage 1: Build the React application
FROM node:20-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
# Stage 2: Serve the application with Express
FROM node:20-alpine

WORKDIR /app

# Copy package.json and server.js
COPY package*.json ./
COPY server.js ./

# Install ONLY production dependencies (to keep image small)
RUN npm install --omit=dev

# Copy the build output from the previous stage
COPY --from=build /app/dist /app/dist

# Expose port (must match server.js)
EXPOSE 3000

# Start custom Node/Express server
CMD ["node", "server.js"]
