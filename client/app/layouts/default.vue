<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const navigationItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Курсы',
    icon: 'i-heroicons-academic-cap',
    to: '/courses',
    active: route.path.startsWith('/courses')
  },
  {
    label: 'Личный кабинет',
    icon: 'i-heroicons-user-circle',
    to: '/dashboard',
    active: route.path.startsWith('/dashboard')
  }
])

const footerLinks: NavigationMenuItem[] = [
  {
    label: 'О портале',
    to: '/about'
  },
  {
    label: 'Помощь',
    to: '/help'
  },
  {
    label: 'Обратная связь',
    to: '/feedback'
  }
]
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <NuxtLink to="/" class="flex items-center gap-2">
          <UIcon name="i-heroicons-academic-cap" class="size-6" />
          <span class="font-bold text-lg">Учебный портал</span>
        </NuxtLink>
      </template>

      <UNavigationMenu :items="navigationItems" class="hidden lg:flex" />

      <template #right>
        <UColorModeButton />

        <UButton
          to="/auth/login"
          variant="ghost"
          color="neutral"
          label="Войти"
          class="hidden sm:inline-flex"
        />

        <UButton
          to="/auth/register"
          color="primary"
          label="Регистрация"
        />
      </template>

      <template #body>
        <UNavigationMenu
          :items="navigationItems"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Учебный портал. Все права защищены.
        </p>
      </template>

      <UNavigationMenu :items="footerLinks" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UApp>
</template>
