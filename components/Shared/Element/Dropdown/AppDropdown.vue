/* eslint-disable no-console */
<template lang="pug">
  .dropdown
    button.trigger(@click="toggle")
      slot(name="trigger")

    .menu(:class="{ visible: visible }")
      slot
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  ref,
  watch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppDropdown',
  props: {
    disabled: {
      type: Boolean,
      default: () => false,
    },
  },
  setup({ disabled }) {
    const visible = ref(false)

    const toggle = () => {
      if (disabled) return

      if (!visible.value) {
        nextTick(() => {
          visible.value = !visible.value
        })
      } else {
        visible.value = !visible.value
      }
    }

    const outsideClick = () => {
      if (visible.value) {
        visible.value = false
      }
    }

    watch(visible, (value) => {
      if (typeof window !== 'undefined') {
        if (value) {
          // Prevents from early closing
          setTimeout(() => {
            document.body.addEventListener('click', outsideClick)
          }, 1)
        } else {
          document.body.removeEventListener('click', outsideClick)
        }
      }
    })

    onBeforeUnmount(() => {
      if (typeof window !== 'undefined') {
        document.body.removeEventListener('click', outsideClick)
      }
    })

    return { toggle, visible }
  },
})
</script>
