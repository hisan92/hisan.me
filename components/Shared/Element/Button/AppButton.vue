<template lang="pug">
  component.button(
    v-bind="$attrs"
    v-on="$listeners"
    :class="[{ active, full, loading }, type, computedSize]"
    :is="computedTag"
    :type="nativeType"
  )
    template(v-if="!loading")
      AppIcon(
        v-if="iconLeft && !loading"
        :component="iconComponent"
        :icon="icon"
        :pack="iconPack"
      )

      span(v-if="hasLabel") {{ label }}
      span(v-else-if="hasSlot")
        slot

      AppIcon(
        v-if="iconRight && !loading"
        :component="iconComponent"
        :icon="icon"
        :pack="iconPack"
      )

    template(v-else)
      AppLoading
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import {
  defaulNativeButtonTypes,
  defaultButtonSizes,
  defaultLinkTags,
  defaultStatusColorTypes,
} from '~/utils/config'

export default defineComponent({
  name: 'AppButton',
  props: {
    active: {
      type: Boolean,
      default: () => false,
    },
    icon: {
      type: String,
      required: false,
    },
    iconComponent: {
      type: String,
      required: false,
    },
    iconPack: {
      type: String,
      required: false,
    },
    iconPosition: {
      type: String,
      default: () => 'left',
      validator: (value: string) => {
        return ['left', 'right'].includes(value)
      },
    },
    full: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    nativeType: {
      type: String,
      default: () => 'button',
      validator: (value: string) => defaulNativeButtonTypes.includes(value),
    },
    size: {
      type: String,
      default: () => 'md',
      validator: (value: string) => defaultButtonSizes.includes(value),
    },
    tag: {
      type: String,
      default: () => 'button',
      validator: (value: string) => defaultLinkTags.includes(value),
    },
    type: {
      type: String,
      required: false,
      validator: (value: string) => defaultStatusColorTypes.includes(value),
    },
  },
  setup(props, { attrs, slots }) {
    const computedTag = computed(() => {
      if (attrs.disabled) return 'button'
      return props.tag
    })

    const computedSize = computed(() => {
      switch (props.size) {
        case 'sm':
          return 'small'
        case 'md':
          return ''
        case 'lg':
          return 'large'
        case 'xl':
          return 'xlarge'
        default:
          return ''
      }
    })

    const hasLabel = computed(() => !!props.label)
    const hasSlot = computed(() => !!slots.default)
    const iconLeft = computed(
      () => !!props.icon && props.iconPosition === 'left'
    )

    const iconRight = computed(
      () => !!props.icon && props.iconPosition === 'right'
    )

    return { computedTag, computedSize, hasLabel, hasSlot, iconLeft, iconRight }
  },
})
</script>
