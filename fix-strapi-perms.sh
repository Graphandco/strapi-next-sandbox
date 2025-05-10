#!/bin/bash

# Dossier du projet Strapi
PROJECT_PATH="/var/www/strapi-next-sandbox"

echo "🔧 Fixing ownership and permissions for Strapi..."

# Tout le projet en root:root
chown -R root:root "$PROJECT_PATH"

# Droits par défaut sur tout le projet
chmod -R 755 "$PROJECT_PATH"

# Sécuriser le fichier .env.production
chmod 600 "$PROJECT_PATH/backend/.env.production"

# Autoriser écriture sur les dossiers nécessaires s'ils existent
[ -d "$PROJECT_PATH/backend/public/uploads" ] && chmod -R 755 "$PROJECT_PATH/backend/public/uploads"
[ -d "$PROJECT_PATH/backend/.tmp" ] && chmod -R 755 "$PROJECT_PATH/backend/.tmp"
[ -d "$PROJECT_PATH/backend/.cache" ] && chmod -R 755 "$PROJECT_PATH/backend/.cache"


echo "✅ Permissions fixed for $PROJECT_PATH"
