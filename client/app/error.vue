<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <div class="min-h-[60vh] flex items-center justify-center">
      <div class="text-center">
        <UIcon
          :name="error.statusCode === 404 ? 'i-heroicons-question-mark-circle' : 'i-heroicons-exclamation-triangle'"
          class="size-24 mx-auto mb-6 text-error"
        />

        <h1 class="text-6xl font-bold mb-4 text-highlighted">
          {{ error.statusCode }}
        </h1>

        <h2 class="text-2xl font-semibold mb-4 text-highlighted">
          {{ error.statusCode === 404 ? 'Страница не найдена' : 'Произошла ошибка' }}
        </h2>

        <p class="text-lg text-muted mb-8 max-w-md mx-auto">
          {{ error.message || 'К сожалению, запрашиваемая страница не существует или была перемещена' }}
        </p>

        <div class="flex gap-4 justify-center">
          <UButton
            color="primary"
            label="Вернуться на главную"
            @click="handleClearError"
          />

          <UButton
            to="/courses"
            color="neutral"
            variant="outline"
            label="Посмотреть курсы"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
