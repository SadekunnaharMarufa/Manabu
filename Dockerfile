# Use a standard Node environment
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose the port your app runs on (e.g., 8080)
EXPOSE 8080

# The command to start your app
CMD ["npm", "start"]