<template lang="pug">
  b-navbar-dropdown(
    arrowless
    boxed
    hoverable
    right
  )
    template(#label)
      FaIcon(icon="globe-americas" size="lg" style="color: white")
    b-navbar-item(
      v-for="(loc, i) in available"
      :disabled="loc.code === $i18n.locale"
      :key="i"
      tag="nuxt-link"
      :to="switchLocalePath(loc.code)"
    )
      | {{ loc.name }}
</template>

<script lang="ts">
import { defineComponent, computed, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'LanguageSelectorComponent',
  setup() {
    const { app } = useContext()
    const available = computed(() => app.i18n.locales)

    return { available }
  },
})
</script>
