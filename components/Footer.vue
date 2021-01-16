<template lang="pug">
  .footer
    div &copy; 2020 - {{ currYear }} Hiago S.
    div Brought to you with CloudFront powered by AWS.
    div Made with 💙.
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const currYear = computed(() => new Date().getFullYear())

    return { currYear }
  },
})
</script>
