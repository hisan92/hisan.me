<template lang="pug">
    .content
      Avatar

      Greetings

      Content

      Skills

      Trivia
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Avatar from '~/components/Avatar.vue'
import Greetings from '~/components/Greetings.vue'
import Content from '~/components/Content.vue'
import Skills from '~/components/Skills.vue'
import Trivia from '~/components/Trivia.vue'

export default defineComponent({
  components: {
    Avatar,
    Greetings,
    Content,
    Skills,
    Trivia,
  },
})
</script>
