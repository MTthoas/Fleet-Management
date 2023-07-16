# Stage 1 - the build process
FROM node:16-alpine as build-deps
WORKDIR /app
EXPOSE 3000
COPY package*.json ./
RUN npm install
COPY . ./
# Copy the backup script to the Docker image
COPY ./scripts/backup-script.sh /app/scripts/backup-script.sh
RUN chmod +x /app/scripts/backup-script.sh
CMD ["npm", "start"]
