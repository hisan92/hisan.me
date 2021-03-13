<template lang="pug">
  component.item(
    v-bind="$attrs"
    v-on="$listeners"
    :class="{ 'active': isActive }"
    :is="computedTag"
  )
    slot
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { defaultLinkTags } from '~/utils/config'

export default defineComponent({
  name: 'AppDropdownItem',
  props: {
    isActive: {
      type: Boolean,
      default: () => false,
    },
    tag: {
      type: String,
      default: () => 'a',
      validator: (value: string) => defaultLinkTags.includes(value),
    },
  },
  setup(props, { attrs }) {
    const computedTag = computed(() => {
      if (attrs.disabled) return 'a'
      return props.tag
    })

    return { computedTag }
  },
})
</script>
