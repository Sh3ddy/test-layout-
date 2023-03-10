export const VCard = () => import('../../components/VCard.vue' /* webpackChunkName: "components/v-card" */).then(c => wrapFunctional(c.default || c))
export const VHeader = () => import('../../components/VHeader.vue' /* webpackChunkName: "components/v-header" */).then(c => wrapFunctional(c.default || c))
export const VOverlay = () => import('../../components/VOverlay.vue' /* webpackChunkName: "components/v-overlay" */).then(c => wrapFunctional(c.default || c))
export const VSpeaker = () => import('../../components/VSpeaker.vue' /* webpackChunkName: "components/v-speaker" */).then(c => wrapFunctional(c.default || c))
export const VWorker = () => import('../../components/VWorker.vue' /* webpackChunkName: "components/v-worker" */).then(c => wrapFunctional(c.default || c))

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
