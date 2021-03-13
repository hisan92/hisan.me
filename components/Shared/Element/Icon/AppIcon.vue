<template lang="pug">
  span.icon
    i(
      v-if="!useIconComponent"
      v-bind="$attrs"
      :class="[usePack, icon, customClass]"
    )
    component(
      v-else
      v-bind="$attrs"
      :class="[customClass]"
      :icon="[usePack, icon]"
      :is="component"
      :size="size"
      height="16"
      width="16"
    )
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { defaultIconPack, defaultIconSizes } from '~/utils/config'

export default defineComponent({
  props: {
    component: {
      type: String,
      required: false,
    },
    customClass: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: true,
    },
    pack: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
      validator: (value: string) => defaultIconSizes.includes(value),
    },
  },
  setup(props) {
    const usePack = computed(() => props.pack || defaultIconPack)
    const useIconComponent = computed(() => props.component)

    return { usePack, useIconComponent }
  },
})
</script>
