<template lang="pug">
  div
    .title {{ $t('labels.anchors.about') }}

    p
      i18n(path="pages.about.body")
        template(#0)
          a.link(href="https://github.com/hisan92/hisan.me" target="_blank") Github

</template>
