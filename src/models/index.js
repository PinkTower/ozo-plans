import { init } from '@rematch/core'

import users from './users'

const store = init({
  models: {
    users,
  },
})

export default store
