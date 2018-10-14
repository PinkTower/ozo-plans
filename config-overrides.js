/* eslint-disable no-param-reassign */
const path = require('path')

module.exports = {
  jest(config) {
    /**
     * Jest doesn't know about webpack config above,
     * so we need to tell him how to map custom import paths.
     */
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      '^~assets/(.+)': '<rootDir>/src/assets/$1',
      '^~components/(.+)': '<rootDir>/src/components/$1',
      '^~layout/(.+)': '<rootDir>/src/layout/$1',
      '^~models/(.+)': '<rootDir>/src/models/$1',
      '^~pages/(.+)': '<rootDir>/src/pages/$1',
      '^~services/(.+)': '<rootDir>/src/services/$1',
      '^~utils/(.+)': '<rootDir>/src/utils/$1',
    }
    return config
  },
  webpack(config) {
    /**
     * Aliases for imports to prevent ../../ hell.
     * Also, makes moving things around effortless.
     */
    const rootDir = path.dirname('')
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve || {}).alias,
        '~assets': path.resolve(rootDir, 'src/assets'),
        '~components': path.resolve(rootDir, 'src/components'),
        '~layout': path.resolve(rootDir, 'src/layout'),
        '~models': path.resolve(rootDir, 'src/models/'),
        '~pages': path.resolve(rootDir, 'src/pages'),
        '~services': path.resolve(rootDir, 'src/services/'),
        '~utils': path.resolve(rootDir, 'src/utils/'),
      },
    }
    return config
  },
}
