# ---- Build stage ----
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    # Install deps first to leverage layer caching
    COPY package*.json ./
    RUN npm ci
    
    # Copy sources and build
    COPY . .
    RUN npm run build
    
    # ---- Runtime stage ----
    FROM nginx:stable-alpine
    # Remove default nginx static content and copy React build
    RUN rm -rf /usr/share/nginx/html/*
    COPY --from=builder /app/build /usr/share/nginx/html
    
    # Optional: custom nginx config for SPA routing (fallback to index.html)
    # Uncomment if you need client-side routing to work on refresh:
    # COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    