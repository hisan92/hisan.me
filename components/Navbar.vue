<template lang="pug">
  header.navbar(:class="{ fixed, shadow }")
    .content
      .brand
        slot(name="brand")

      div.burger
        button.toggle(
          @click="isOpen = !isOpen"
          type="button"
        )
          svg.icon(viewBox="0 0 24 24")
            path(
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            )

            path(
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            )

    nav.menu(
      :class="isOpen ? 'visible' : ''"
    )
      slot(name="content")
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Navbar',
  props: {
    fixed: {
      type: Boolean,
      default: () => true,
    },
  },
  setup(props) {
    const isOpen = ref(false)
    const shadow = ref(false)

    onMounted(() => {
      props.fixed &&
        window.addEventListener('scroll', () => {
          shadow.value = window.pageYOffset > 20
        })
    })

    onBeforeUnmount(() => {
      props.fixed && window.removeEventListener('scroll', () => {})
    })

    return { isOpen, shadow }
  },
})
</script>
