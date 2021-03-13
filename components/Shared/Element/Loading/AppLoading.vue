<template lang="pug">
  span.icon
    svg(
      :width="size"
      :height="size"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    )
      circle(
        cx="50"
        cy="50"
        fill="none"
        stroke="#fff"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      )
        animateTransform(
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        )
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppLoading',
  props: {
    size: {
      type: [String, Number],
      default: () => '22',
    },
  },
})
</script>
