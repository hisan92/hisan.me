<template lang="pug">
  div
    client-only
      vue-particles.tw-absolute.tw--mt-32.tw-w-full(
        :particleOpacity="0.5"
        :particlesNumber="60"
        shapeType="polygon"
        :particleSize="3"
        :linesDistance="200"
        :moveSpeed="2"
        :clickEffect="false"
      )
    NavigationBar
    .container
      .tw-absolute.app-section
        Nuxt
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import NavigationBar from '~/components/NavigationBar.vue'
export default defineComponent({
  components: { NavigationBar },
})
</script>

<style lang="sass" scoped>
.app-section
  top: 6rem;
</style>
