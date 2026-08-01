# Step 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app
# Copy package files from the current context (frontend folder)
COPY package*.json ./
RUN npm install
# Copy the rest of the frontend source code
COPY . .
RUN npm run build

# Step 2: Serve the production build files using Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]