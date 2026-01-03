# Étape 1 : build du projet
FROM node:20-alpine
WORKDIR /app

# Copier les fichiers nécessaires
COPY ./package*.json ./
RUN npm install

# Copier tout le projet et builder
COPY . .

# Exposer le port par défaut de Next.js
EXPOSE 3000

# Démarrer l’application
CMD ["npm", "start"]
