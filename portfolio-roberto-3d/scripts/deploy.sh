#!/bin/bash

# Configuración
PROJECT_ID="tu-project-id"
REGION="us-central1"
SERVICE_NAME="portfolio-3d"

echo "🚀 Iniciando deployment de Portfolio 3D..."

# 1. Build de Docker
echo "📦 Construyendo imagen Docker..."
docker build -t gcr.io/$PROJECT_ID/$SERVICE_NAME:latest .

# 2. Push a Google Container Registry
echo "📤 Subiendo imagen a GCR..."
docker push gcr.io/$PROJECT_ID/$SERVICE_NAME:latest

# 3. Deploy en Cloud Run
echo "⚙️ Desplegando en Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME:latest \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --memory 1Gi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 3 \
  --port 3000

# 4. Obtener URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region $REGION --format='value(status.url)')
echo "✅ Deployment completado!"
echo "🌐 URL del servicio: $SERVICE_URL"

# 5. Configurar dominio personalizado (opcional)
read -p "¿Configurar dominio personalizado? (s/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Ss]$ ]]; then
    read -p "Ingresa tu dominio (ej: robertoquintana.dev): " DOMAIN
    gcloud run domain-mappings create --service $SERVICE_NAME --domain $DOMAIN --region $REGION
    echo "🔗 Dominio $DOMAIN configurado"
fi
