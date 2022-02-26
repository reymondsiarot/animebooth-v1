const actions = {
  async userRegister({}, payload) {
    try {
      const response = await this._vm.$userApi.post("/register", payload);
      return response.data;
    } catch (er) {
      console.log(er);
    }
  },
  async userLogin({}, payload) {
    try {
      const response = await this._vm.$userApi.post("/login", payload);
      return response.data;
    } catch (er) {
      if (er.response) {
        return er.response.data;
      }
    }
  },
};
export default actions;
