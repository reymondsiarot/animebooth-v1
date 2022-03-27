<template>

  <v-card>
    <v-card-title class="text-h5  ">
      Login
    </v-card-title>

    <v-divider></v-divider>

    <v-card>
      <v-container>
        <v-row>
          <v-col cols="6" class="tw-text-center">
            <v-img class="tw-w-[80%] tw-mx-auto" :src="require('@/assets/signupimage.png')"></v-img>
          </v-col>
          <v-col cols="6">

            <v-alert class="tw-cursor-pointer" @click="error.status = !error.status" transition="scale-transition" :value="error.status" dense text outlined color="#FB8C00">
              <v-row align="center">
                <v-col class="grow">
                  <div>
                    <v-icon color="#FB8C00">
                      mdi-circle-small
                    </v-icon>
                    <small>{{ error.message }}</small>
                  </div>
                </v-col>
              </v-row>
            </v-alert>
            <form @submit.prevent="login">
              <v-text-field v-model="form.email" color="white" hide-details dense class="py-0 mb-4" filled label="Email" append-icon="mdi-account"></v-text-field>
              <v-text-field v-model="form.password" type="password" color="white" hide-details dense class="py-0 mb-4" filled label="Password" append-icon="mdi-lock"></v-text-field>
              <v-btn class="tw-h-full tw-w-full tw-rounded-md" large rounded color="#BD203E" dark type="submit">
                Login
              </v-btn>
            </form>
            <div class="tw-my-4">
              <small>
                Dont have an account? <a href="#" @click="$emit('toRegister')">Register</a>
              </small>
            </div>

          </v-col>
        </v-row>
      </v-container>

    </v-card>

  </v-card>

</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    showSignUpModal: false,
    errorAlert: true,
    error: {
      status: false,
      message: "",
    },
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions("user", ["userLogin", "sanctumCSRF"]),
    async login() {
      await this.sanctumCSRF();
      const response = await this.userLogin(this.form);
      console.log(response);
      if (response.success) {
        return location.reload();
      }

      this.error.status = true;
      this.error.message = response.message;
    },
    clearError() {
      this.error.status = false;
      this.error.message = "";
    },
  },
};
</script>

<style>
</style>