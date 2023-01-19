export { default as VCard } from '../../components/VCard.vue'
export { default as VHeader } from '../../components/VHeader.vue'
export { default as VOverlay } from '../../components/VOverlay.vue'
export { default as VSpeaker } from '../../components/VSpeaker.vue'
export { default as VWorker } from '../../components/VWorker.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
