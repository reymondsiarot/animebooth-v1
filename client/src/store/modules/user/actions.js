const actions = {
  async userRegister({ commit }, payload) {
    const response = await this._vm.$userApi.post("/register", payload);
    return response.data;
  },
};
export default actions;
