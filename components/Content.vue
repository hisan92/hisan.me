<template lang="pug">
  .content
    .title {{ $t('labels.anchors.about') }}

    p
      i18n(path="pages.about.body")
        template(#0)
          a(href="https://github.com/hsn9207/hisan.me" target="_blank") Github

</template>

<style lang="sass">
main .content
  @apply mb-12

  a
    @apply border-dashed border-b-2
</style>
