<template lang="pug">
  a.item(@click="$emit('click')" :class="{ 'active': isActive }")
    slot
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppDropdownItem',
  props: {
    isActive: {
      type: Boolean,
      default: () => false,
    },
  },
})
</script>
