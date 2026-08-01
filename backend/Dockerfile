FROM node:20-alpine
WORKDIR /app
# Copy package files from the current context (backend folder)
COPY package*.json ./
RUN npm install --production
# Copy the rest of the backend source code
COPY . .
EXPOSE 5000
CMD ["npm", "start"]