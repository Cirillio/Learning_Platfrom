# University Portal

Учебный портал на Django REST Framework + Nuxt 4

## Технологии

**Backend:**
- Django 5.2
- Django REST Framework
- JWT Authentication
- Celery + Redis
- SQLite

**Frontend:**
- Nuxt 4
- TypeScript
- Pinia
- Nuxt UI
- Tailwind CSS

**DevOps:**
- Docker & Docker Compose
- Nginx

## Быстрый старт

### 1. Клонирование и настройка

```bash
git clone <repository-url>
cd University
```

### 2. Настройка переменных окружения

```bash
# Backend
cp server/.env.example server/.env
# Отредактируйте server/.env при необходимости

# Frontend
cp client/.env.example client/.env
# Отредактируйте client/.env при необходимости
```

### 3. Запуск через Docker Compose

```bash
# Сборка и запуск всех сервисов
docker-compose up --build

# В фоновом режиме
docker-compose up -d --build
```

Приложение будет доступно:
- Frontend: http://localhost:80 (через Nginx)
- Backend API: http://localhost:80/api/
- Django Admin: http://localhost:80/admin/

### 4. Создание суперпользователя

```bash
docker-compose exec backend python manage.py createsuperuser
```

## Разработка без Docker

### Backend

```bash
cd server
python -m venv virtenv
source virtenv/bin/activate  # или virtenv\Scripts\activate на Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend

```bash
cd client
pnpm install
pnpm dev
```

### Celery (в отдельном терминале)

```bash
cd server
celery -A config worker -l info
celery -A config beat -l info
```

## Структура проекта

```
University/
├── server/              # Django Backend
│   ├── config/         # Настройки проекта
│   ├── auth/           # Аутентификация
│   ├── users/          # Пользователи
│   ├── courses/        # Курсы
│   ├── notifications/  # Уведомления
│   └── core/           # Общие утилиты
├── client/             # Nuxt Frontend
│   ├── app/           # Приложение
│   ├── components/    # Компоненты
│   ├── composables/   # Composables
│   └── stores/        # Pinia stores
├── nginx/              # Nginx конфигурация
└── docker-compose.yml
```

## API Endpoints

Полная документация API доступна в файле `ПЛАН.md`

## Лицензия

MIT
