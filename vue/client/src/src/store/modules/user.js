const user = {
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = JSON.parse(JSON.stringify(data))
    }
  }
}

export default user
