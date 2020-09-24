<template lang="pug">
  b-navbar(
    :mobile-burger="false"
    wrapper-class="container"
    fixed-top
    transparent
    spaced
  )
    template(#end)
      b-navbar-item(tag="nuxt-link" :to="localePath('index')" exact)
        | {{ $t('labels.links.home') }}
      b-navbar-item(tag="nuxt-link" :to="localePath('skills')")
        | {{ $t('labels.links.skills') }}
      b-navbar-item(tag="nuxt-link" :to="localePath('about')")
        | {{ $t('labels.links.about') }}
      LanguageSelector
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import LanguageSelector from './LanguageSelector.vue'

export default defineComponent({
  name: 'NavigationBarComponent',
  components: { LanguageSelector },
})
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.navbar
  font-family: Poppins, sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  backdrop-filter: blur(4px);

.navbar-item.is-active
  border-bottom: 3px solid;
</style>
