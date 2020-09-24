<template lang="pug">
  BaseBox.tw-w-120
    h1.is-size-4.tw-font-black.tw-mb-2
      | {{ $t('pages.home.greetingTitle', ['hisan']) }}
    p.tw-text-md
      i18n(path="pages.home.greetingBody")
        template(#0)
          a(href="https://github.com/hsn9207" target="_blank") Github
        template(#1)
          a(href="https://www.linkedin.com/in/hisan" target="_blank") LinkedIn
</template>
