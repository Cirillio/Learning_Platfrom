<script setup lang="ts">
useSeoMeta({
  title: 'Главная - Учебный портал',
  description: 'Современная платформа для обучения и взаимодействия студентов и преподавателей'
})
</script>

<template>
  <div class="py-12 lg:py-24">
    <!-- Hero Section -->
    <div class="text-center mb-16">
      <UIcon
        name="i-heroicons-academic-cap"
        class="size-16 mx-auto mb-6 text-primary"
      />

      <h1 class="text-4xl lg:text-6xl font-bold mb-6 text-highlighted">
        Добро пожаловать в<br>
        Учебный портал
      </h1>

      <p class="text-xl text-muted max-w-2xl mx-auto mb-8">
        Современная платформа для эффективного обучения и взаимодействия между студентами и преподавателями
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <UButton
          to="/auth/register"
          color="primary"
          size="xl"
          label="Начать обучение"
          trailing-icon="i-heroicons-arrow-right"
        />

        <UButton
          to="/courses"
          color="neutral"
          variant="outline"
          size="xl"
          label="Посмотреть курсы"
        />
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-3 gap-8 mt-20">
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-book-open" class="size-8 text-primary" />
            <h3 class="text-xl font-semibold">Курсы</h3>
          </div>
        </template>

        <p class="text-muted">
          Широкий выбор курсов от опытных преподавателей по различным направлениям
        </p>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-clipboard-document-check" class="size-8 text-primary" />
            <h3 class="text-xl font-semibold">Задания</h3>
          </div>
        </template>

        <p class="text-muted">
          Практические задания с возможностью загрузки файлов и получения обратной связи
        </p>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-chart-bar" class="size-8 text-primary" />
            <h3 class="text-xl font-semibold">Прогресс</h3>
          </div>
        </template>

        <p class="text-muted">
          Отслеживание прогресса обучения, оценок и достижений в личном кабинете
        </p>
      </UCard>
    </div>

    <!-- CTA Section -->
    <div class="mt-20 text-center">
      <UCard class="bg-primary/5 dark:bg-primary/10">
        <div class="py-8">
          <h2 class="text-3xl font-bold mb-4 text-highlighted">
            Готовы начать?
          </h2>

          <p class="text-lg text-muted mb-8 max-w-xl mx-auto">
            Зарегистрируйтесь сейчас и получите доступ ко всем возможностям платформы
          </p>

          <UButton
            to="/auth/register"
            color="primary"
            size="xl"
            label="Зарегистрироваться бесплатно"
          />
        </div>
      </UCard>
    </div>
  </div>
</template>
