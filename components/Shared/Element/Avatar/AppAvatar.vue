<template lang="pug">
  .avatar
    .inner
      img(:src="image")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppAvatar',
  props: {
    image: {
      type: String,
      required: true,
    },
  },
})
</script>
