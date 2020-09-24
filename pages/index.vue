<template lang="pug">
    HelloWorld
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import HelloWorld from '~/components/HelloWorld.vue'

export default defineComponent({
  components: { HelloWorld },
})
</script>
