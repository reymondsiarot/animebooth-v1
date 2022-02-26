<template>

  <v-card>
    <v-card-title class="text-h5  ">
      Registration
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
            <form @submit.prevent="register">
              <v-text-field tabindex="1" v-model="form.email" color="white" hide-details dense class="py-0 mb-4" filled label="Email" append-icon="mdi-account"></v-text-field>
              <v-text-field tabindex="2" v-model="form.password" color="white" hide-details dense class="py-0 mb-4" filled label="Password" :type="passShow ? 'text' : 'password'" @click:append="passShow = !passShow" :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
              <v-text-field tabindex="3" v-model="form.cpassword" color="white" hide-details dense class="py-0 mb-4" filled label="Confirm Password" :type="passShow1 ? 'text' : 'password'" @click:append="passShow1 = !passShow1" :append-icon="passShow1 ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
              <div class="tw-flex tw-justify-center tw-mb-4">
                <vue-recaptcha @expired="errorCaptcha" @error="errorCaptcha" @verify="verifyCaptcha" ref="recaptcha" :sitekey="siteKey" />
              </div>

              <v-btn class="tw-h-full tw-w-full tw-rounded-md" large rounded color="#BD203E" type="submit" tabindex="4">
                Register
              </v-btn>
            </form>
            <div class="tw-my-4">
              <small>
                Already have an account? <a href="#" @click="$emit('toLogin')">Login</a>
              </small>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
import { VueRecaptcha } from "vue-recaptcha";
import { mapActions } from "vuex";
export default {
  components: {
    VueRecaptcha,
  },
  data: () => ({
    showSignUpModal: false,
    passShow: false,
    passShow1: false,
    error: {
      status: false,
      message: "",
    },
    allowedRegister: false,
    form: {
      email: "",
      password: "",
      cpassword: "",
    },
  }),
  computed: {
    siteKey() {
      return process.env.VUE_APP_SITE_KEY;
    },
  },
  methods: {
    ...mapActions("user", ["userRegister"]),
    async verifyCaptcha(evt) {},
    errorCaptcha(err) {
      this.allowedRegister = false;
    },
    async register() {
      this.clearError();
      const response = await this.userRegister(this.form);
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