# Следующие шаги реализации

## ✅ Выполнено

- [x] Docker Compose конфигурация (SQLite + Redis + Django + Nuxt + Nginx)
- [x] Dockerfile для Django backend
- [x] Dockerfile для Nuxt frontend
- [x] .env файлы (примеры)
- [x] requirements.txt для Python
- [x] .dockerignore файлы
- [x] Nginx конфигурация
- [x] .gitignore
- [x] README.md
- [x] Makefile с удобными командами

---

## 📋 Следующие этапы

### 1. Настройка окружения

- [ ] Скопировать `.env.example` → `.env` для backend
- [ ] Скопировать `.env.example` → `.env` для frontend
- [ ] Сгенерировать SECRET_KEY для Django
- [ ] Настроить ALLOWED_HOSTS при необходимости

### 2. Backend - Django Settings

- [ ] Настроить `settings.py`:
  - [ ] Подключить DRF
  - [ ] Настроить JWT (simplejwt)
  - [ ] Настроить CORS
  - [ ] Настроить Celery
  - [ ] Настроить пути для MEDIA и STATIC
  - [ ] Добавить созданные приложения в INSTALLED_APPS

### 3. Backend - Модели

- [ ] Создать кастомную модель User (с ролями teacher/student)
- [ ] Создать модель UserProfile
- [ ] Создать модель Course
- [ ] Создать модель CourseEnrollment
- [ ] Создать модель Category
- [ ] Создать модель Lesson
- [ ] Создать модель LessonMaterial
- [ ] Создать модель Assignment
- [ ] Создать модель AssignmentFile
- [ ] Создать модель Submission
- [ ] Создать модель SubmissionFile
- [ ] Создать модель Grade
- [ ] Создать модель Comment
- [ ] Создать модель Notification
- [ ] Создать модель Feedback
- [ ] Создать модель ActivityLog
- [ ] Выполнить миграции

### 4. Backend - Сериализаторы

- [ ] UserRegistrationSerializer
- [ ] UserProfileSerializer
- [ ] CourseSerializer + CourseDetailSerializer
- [ ] LessonSerializer + LessonDetailSerializer
- [ ] AssignmentSerializer
- [ ] SubmissionSerializer + SubmissionWithFilesSerializer
- [ ] GradeSerializer
- [ ] CommentSerializer
- [ ] FeedbackSerializer
- [ ] NotificationSerializer

### 5. Backend - Permissions

- [ ] IsTeacher
- [ ] IsStudent
- [ ] IsOwner
- [ ] IsCourseOwner
- [ ] IsTeacherOrReadOnly

### 6. Backend - API Views/ViewSets

- [ ] Authentication endpoints (register, login, refresh, profile)
- [ ] Courses ViewSet (CRUD + enroll)
- [ ] Lessons ViewSet (CRUD)
- [ ] Assignments ViewSet (CRUD)
- [ ] Submissions ViewSet (CRUD)
- [ ] Grades ViewSet (CRUD)
- [ ] Comments ViewSet (CRUD)
- [ ] Notifications ViewSet (list + mark as read)
- [ ] Feedback ViewSet (POST для пользователей, GET для админа)
- [ ] Categories ViewSet (read-only)

### 7. Backend - URLs

- [ ] Настроить роутинг для всех ViewSets
- [ ] Добавить JWT endpoints
- [ ] Документация API (опционально - drf-spectacular)

### 8. Backend - Celery Tasks

- [ ] Task для email-уведомлений о дедлайнах
- [ ] Task для уведомлений о новых оценках
- [ ] Task для уведомлений о новых комментариях
- [ ] Periodic task (beat) для проверки дедлайнов
- [ ] Настроить Celery в settings.py

### 9. Backend - Django Admin

- [ ] Зарегистрировать все модели в admin.py
- [ ] Настроить list_display, list_filter, search_fields
- [ ] Добавить inline редактирование где нужно

### 10. Backend - Тесты

- [ ] Тесты моделей
- [ ] Тесты API endpoints
- [ ] Тесты permissions
- [ ] Тесты сериализаторов

### 11. Frontend - Базовая настройка

- [ ] Настроить `nuxt.config.ts`:
  - [ ] Nuxt UI
  - [ ] Pinia
  - [ ] Runtime config для API URL
  - [ ] Middleware
- [ ] Установить дополнительные пакеги (zod, @vueuse/core)

### 12. Frontend - Composables

- [ ] `useAuth.ts` (авторизация, JWT)
- [ ] `useApi.ts` (базовый API клиент)
- [ ] `useCourses.ts`
- [ ] `useLessons.ts`
- [ ] `useAssignments.ts`
- [ ] `useSubmissions.ts`
- [ ] `useGrades.ts`
- [ ] `useComments.ts`
- [ ] `useFeedback.ts`
- [ ] `useNotifications.ts`
- [ ] `useFileUpload.ts`

### 13. Frontend - Stores (Pinia)

- [ ] `auth.ts` (user, role, token, login/logout)
- [ ] `courses.ts` (courses list, filters, sorting)
- [ ] `lessons.ts`
- [ ] `notifications.ts` (notifications, unreadCount)

### 14. Frontend - Validation Schemas (Zod)

- [ ] `auth.schema.ts`
- [ ] `profile.schema.ts`
- [ ] `course.schema.ts`
- [ ] `lesson.schema.ts`
- [ ] `assignment.schema.ts`
- [ ] `comment.schema.ts`
- [ ] `submission.schema.ts`
- [ ] `feedback.schema.ts`

### 15. Frontend - Middleware

- [ ] `auth.ts` (проверка авторизации)
- [ ] `teacher-only.ts`
- [ ] `student-only.ts`
- [ ] `owner.ts`

### 16. Frontend - UI Components

- [ ] Button, Input, Textarea (базовые)
- [ ] FileUpload (с drag&drop)
- [ ] Modal, Card, Badge
- [ ] Forms:
  - [ ] RegisterForm
  - [ ] LoginForm
  - [ ] ProfileEditForm
  - [ ] CommentForm
  - [ ] SubmissionForm
  - [ ] FeedbackForm
  - [ ] CourseForm
  - [ ] LessonForm
  - [ ] AssignmentForm
- [ ] Course components:
  - [ ] CourseCard
  - [ ] CourseFilter
  - [ ] LessonList
- [ ] Lesson components:
  - [ ] LessonContent
  - [ ] CommentList
  - [ ] AssignmentList
- [ ] Dashboard components:
  - [ ] TeacherStats
  - [ ] StudentProgress
  - [ ] UpcomingDeadlines

### 17. Frontend - Pages

- [ ] `index.vue` (главная)
- [ ] `auth/login.vue`
- [ ] `auth/register.vue`
- [ ] `dashboard/index.vue` (роутинг по ролям)
- [ ] `dashboard/teacher.vue`
- [ ] `dashboard/student.vue`
- [ ] `courses/index.vue` (список курсов)
- [ ] `courses/[id].vue` (детали курса)
- [ ] `courses/create.vue`
- [ ] `lessons/[id].vue`
- [ ] `assignments/[id].vue`
- [ ] `profile/index.vue`
- [ ] `feedback.vue`

### 18. Интеграция и тестирование

- [ ] Проверка работы регистрации/авторизации
- [ ] Проверка CRUD операций для курсов
- [ ] Проверка отправки заданий студентами
- [ ] Проверка выставления оценок преподавателями
- [ ] Проверка системы комментариев
- [ ] Проверка уведомлений (Celery)
- [ ] Проверка загрузки файлов

### 19. Документация

- [ ] API документация (Swagger/ReDoc)
- [ ] Обновить README.md с примерами использования
- [ ] Инструкции по развертыванию

### 20. Production готовность

- [ ] Настроить production settings для Django
- [ ] Настроить SSL для Nginx
- [ ] Настроить логирование
- [ ] Backup стратегия для SQLite
- [ ] Мониторинг и алерты

---

## Приоритеты

**Критичные (для MVP):**
1. Настройка окружения
2. Backend модели + миграции
3. Backend API (auth + курсы + задания)
4. Frontend auth + dashboard
5. Базовые CRUD операции

**Важные:**
6. Permissions и security
7. Файловая загрузка
8. Комментарии и уведомления
9. Celery tasks

**Опциональные:**
10. Тесты
11. API документация
12. Production optimization
