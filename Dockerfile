# 1. Базовый образ
FROM node:18-alpine AS builder

# 2. Директория приложения
WORKDIR /app

# 3. Копирование зависимостей и установка
COPY package*.json ./
RUN npm install

# 4. Копирование исходников и билд
COPY . .
RUN npm run build

# 5. Production image
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Копирование только нужных файлов
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
