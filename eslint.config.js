import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  rules: {
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
    'react-refresh/only-export-components': 'off',
  },
})
