<template lang="pug">
  .app
    Navbar(fixed)
      template(#brand)
        span hisan.me

      template(#content)
        NavbarLink(
          @click="smoothScroll"
          href="#about"
        )
          | {{ $t('labels.links.about') }}
        NavbarLink(
          @click="smoothScroll"
          href="#skills"
        )
          | {{ $t('labels.links.skills') }}

        NavbarLink(
          @click="smoothScroll"
          href="#questions"
        )
          | {{ $t('labels.links.qna') }}
        AppDropdown
          template(#trigger)
            FaIcon(icon="globe-americas" size="lg" style="color: white")

          AppDropdownItem(
            v-for="(local, i) in locales"
            :is-active="local.code === $i18n.locale"
            :key="i"
            :to="switchLocalePath(local.code)"
            tag="nuxt-link"
          )
            | {{ local.name }}

    //- Content
    main.section
      Nuxt

    //- Footer
    Footer
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

import Navbar from '~/components/Navbar.vue'
import NavbarLink from '~/components/NavbarLink.vue'
import Footer from '~/components/Footer.vue'

import smoothScroll from '~/assets/js/smoothScroll'

export default defineComponent({
  components: { Navbar, NavbarLink, Footer },
  setup() {
    const { app } = useContext()
    const locales = computed(() => app.i18n.locales)

    return { locales, smoothScroll }
  },
})
</script>
