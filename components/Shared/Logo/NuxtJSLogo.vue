<template lang="pug">
  svg(
    :width="widthPx"
    viewBox="0 0 256 256"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
  )
    g(
      fill="none"
      fill-rule="evenodd"
      transform="matrix(0.54,0,0,0.54,6.5007686,34.404563)"
    )
      path(
       d="m 139,330 -1,-2 c -2,-4 -2,-8 -1,-13 H 29 L 189,31 256,152 278,136 211,15 C 210,13 202,1 189,1 183,1 174,3 167,16 L 5,303 c -1,3 -8,16 -2,27 4,6 10,12 24,12 h 136 c -14,0 -21,-6 -24,-12 z"
       fill="#00C58E"
      )
      path(
        d="M 447,304 317,70 c -2,-2 -9,-15 -22,-15 -6,0 -15,3 -22,15 l -17,28 v 54 l 39,-67 129,230 h -49 a 23,23 0 0 1 -2,14 l -1,1 c -6,11 -21,12 -23,12 h 76 c 3,0 17,-1 24,-12 3,-5 5,-14 -2,-26 z"
        fill="#108775"
      )
      path(
        d="m 376,330 v -1 l 1,-2 c 1,-4 2,-8 1,-12 L 374,303 272,125 257,98 h -1 l -15,27 -102,178 -4,12 a 24,24 0 0 0 2,15 c 4,6 10,12 24,12 h 190 c 3,0 18,-1 25,-12 z M 256,152 349,315 H 163 Z"
        fill="#2F495E"
        fill-rule="nonzero"
      )
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'NuxtJSLogoComponent',
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
