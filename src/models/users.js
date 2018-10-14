import Http from '~services/Http'

const users = {
  effects: {
    async register({ companyName, email, password }) {
      try {
        await Http.post('/users', {
          name: companyName,
          user: {
            email,
            password,
          },
        })
      } catch (err) {
        console.error(err)
      }
    },
  },
  reducers: {
    increment(state, payload) {
      return state + payload
    },
    set(state, payload) {
      return payload
    },
  },
  state: {},
}

export default users
