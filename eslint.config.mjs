// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  markdown: {
    overrides: {
      'style/no-tabs': 'off',
    },
  },
})
