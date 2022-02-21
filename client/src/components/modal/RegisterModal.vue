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
            <v-text-field  color="white" hide-details dense class="py-0 mb-4" filled label="Email" append-icon="mdi-account"></v-text-field>
            <v-text-field color="white" hide-details dense class="py-0 mb-4" filled label="Password" :type="passShow ? 'text' : 'password'" @click:append="passShow = !passShow" :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
            <v-text-field color="white" hide-details dense class="py-0 mb-4" filled label="Confirm Password" :type="passShow1 ? 'text' : 'password'" @click:append="passShow1 = !passShow1" :append-icon="passShow1 ? 'mdi-eye' : 'mdi-eye-off'"></v-text-field>
            <div class="tw-flex tw-justify-center tw-mb-4">
                <vue-recaptcha @error="errorCaptcha" @verify="verifyCaptcha" ref="recaptcha" :sitekey="siteKey" />
            </div>

            <v-btn class="tw-h-full tw-w-full tw-rounded-md" large rounded color="#BD203E" dark>
              Register
            </v-btn>
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
export default {
  components: {
    VueRecaptcha,
  },
  data: () => ({
    showSignUpModal: false,
    passShow: false,
    passShow1: false,
  }),
  computed: {
    siteKey() {
      return process.env.VUE_APP_SITE_KEY;
    },
  },
  methods: {
    verifyCaptcha(evt) {
      console.log(evt);
    },
    errorCaptcha(err) {
      console.log(err);
    },
  },
};
</script>

<style>
</style>