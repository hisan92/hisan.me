<template lang="pug">
  svg(
    :width="widthPx"
    viewBox="0 0 256 256"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
  )
    g(transform="matrix(0.9,0,0,0.9,12.8,31.04)")
      path(
       d="M 204.8,0 H 256 L 128,220.8 0,0 H 50.56 97.92 L 128,51.2 157.44,0 Z"
       fill="#41B883"
      )
      path(
        d="M 0,0 128,220.8 256,0 H 204.8 L 128,132.48 50.56,0 Z"
        fill="#41B883"
      )
      path(
        d="M 50.56,0 128,133.12 204.8,0 H 157.44 L 128,51.2 97.92,0 Z"
        fill="#35495E"
      )
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'VueJSLogoComponent',
  props: {
    width: {
      type: String,
      default: 256,
    },
  },
  setup({ width }) {
    const widthPx = computed(() => `${width}px`)
    return { widthPx }
  },
})
</script>
