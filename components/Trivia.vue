<template lang="pug">
  #questions
    .title {{ $t('labels.anchors.qna') }}

    template(v-for="label in labels")
      .question {{ $t(`questionsAndAnswers.${label}.question`) }}
      .answear - {{ $t(`questionsAndAnswers.${label}.answer`) }}
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const labels = Object.keys(app.i18n.messages.en.questionsAndAnswers)

    return { labels }
  },
})
</script>

<style lang="sass">
#questions
  @apply mb-8

  & :not(:last-child)
    @apply mb-5

  .question
    @apply mb-2

  .answear
    @apply italic
</style>
