const actions = {
  async userRegister({}, payload) {
    try {
      const response = await this._vm.$authApi.post("/api/register", payload);
      return response.data;
    } catch (er) {
      console.log(er);
    }
  },
  async userLogin({}, payload) {
    try {
      const response = await this._vm.$authApi.post("/api/login", payload);
      return response.data;
    } catch (er) {
      console.log(er);
      if (er.response) {
        return er.response.data;
      }
    }
  },

  async sanctumCSRF() {
    try {
      const response = await this._vm.$authApi.get("/sanctum/csrf-cookie");
    } catch (er) {
      if (er.response) {
        return er.response.data;
      }
    }
  },

  async init() {
    try {
      await this._vm.$authApi.get("/api/init");
    } catch (er) {
      if (er.response) {
        return er.response.data;
      }
    }
  },
};
export default actions;
