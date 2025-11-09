# Multi-stage build для оптимизации размера
FROM node:20-alpine AS builder

WORKDIR /app

# Копирование package.json и pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Установка pnpm
RUN npm install -g pnpm

# Установка зависимостей
RUN pnpm install --frozen-lockfile

# Копирование остальных файлов
COPY . .

# Сборка приложения
RUN pnpm build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Установка pnpm
RUN npm install -g pnpm

# Копирование зависимостей и собранного приложения
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json /app/package.json

# Порт приложения
EXPOSE 3000

# Установка переменной окружения
ENV HOST=0.0.0.0
ENV PORT=3000

# Запуск приложения
CMD ["node", ".output/server/index.mjs"]
