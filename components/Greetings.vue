<template lang="pug">
  #about.greeting
    .h1
      | {{ $t('pages.home.greetingTitle', ['Hiago']) }}

    p
      i18n(path="pages.home.greetingBody")
        template(#0)
          a(href="https://github.com/hsn9207" target="_blank") Github
        template(#1)
          a(href="https://www.linkedin.com/in/hisan" target="_blank") LinkedIn
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

const birthDate = new Date(1992, 7, 28)
const actualDate = new Date()
const year = 1e3 * 60 * 60 * 24 * 365.25

export default defineComponent({
  name: 'AppGreetings',
  setup() {
    const age = computed(() =>
      Math.floor((actualDate.getTime() - birthDate.getTime()) / year)
    )

    return { age }
  },
})
</script>

<style lang="sass">
.greeting
  @apply tw-mb-12

  .h1
    @apply tw-text-center tw-mb-8

  a
    @apply tw-border-dashed tw-border-b-2
</style>
