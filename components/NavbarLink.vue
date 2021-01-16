<template lang="pug">
  component.item(
    v-bind="$attrs"
    v-on="$listeners"
    :is="computedTag"
    :to="to"
  )
    template(v-if="hasContent")
      slot

    span(v-else-if="hasLabel") {{ label }}
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { defaultLinkTags } from '~/utils/config'

const componentName = 'NavbarLink'

export default defineComponent({
  name: componentName,
  props: {
    label: String,
    tag: {
      type: String,
      default: () => 'a',
      validator: (value: string) => defaultLinkTags.includes(value),
    },
    to: {
      type: [String, Object],
      validator: (value: string | object) => {
        if (typeof value === 'object') return 'name' in value || 'path' in value
        return true
      },
    },
  },
  setup(props, { attrs, slots }) {
    const computedTag = computed(() => {
      if (attrs.disabled) return 'a'
      return props.tag
    })

    const hasContent = computed(() => !!slots.default)
    const hasLabel = computed(() => !!props.label)

    return { computedTag, hasContent, hasLabel }
  },
})
</script>
