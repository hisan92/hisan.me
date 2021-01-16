<template lang="pug">
  .divider(:class="{ vertical: vertical }")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppDivider',
  props: {
    vertical: {
      type: Boolean,
      default: () => false,
    },
  },
})
</script>
