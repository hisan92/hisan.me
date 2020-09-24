<template lang="pug">
  div(:class="{'tw-flex': flex}").tw-p-6.tw-bg-gray-700.tw-bg-opacity-25.tw-rounded-lg.tw-border.tw-border-gray-700.tw-shadow-xl.app-box
    slot
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BaseBoxComponent',
  props: {
    flex: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="sass" scoped>
.app-box
  backdrop-filter: blur(4px);
</style>
