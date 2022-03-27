<template>
  <div class="text-center">
    <v-dialog v-model="loginModal" width="700" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="tw-h-full" rounded color="#BD203E" dark v-bind="attrs" v-on="on">
          Sign in
        </v-btn>
      </template>
      <span>
        <LoginModal v-if="loginModal" @toRegister="toRegister"></LoginModal>
      </span>
    </v-dialog>

    <v-dialog v-model="registerModal" width="700" >
      <span>
        <RegisterModal v-if="registerModal" @toLogin="toLogin"></RegisterModal>
      </span>
    </v-dialog>

  </div>
</template>

<script>
import RegisterModal from "./RegisterModal.vue";
import LoginModal from "./LoginModal.vue";
export default {
  components: {
    RegisterModal,
    LoginModal,
  },
  data: () => ({
    loginModal: false,
    registerModal: false,
  }),
  methods: {
    toRegister() {
      this.registerModal = true;
      this.loginModal = false;
    },
    toLogin() {
      this.registerModal = false;
      this.loginModal = true;
    },
  },
};
</script>

<style>
</style>