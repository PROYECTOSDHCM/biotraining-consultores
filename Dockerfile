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
# Stage 2: Serve the application with Node.js (serve)
FROM node:20-alpine

WORKDIR /app

# Install 'serve' package globally
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=build /app/dist /app/dist

# Expose port 80
EXPOSE 80

# Start server on port 80 for the dist folder, single page app mode (-s)
CMD ["serve", "-s", "dist", "-l", "80"]
