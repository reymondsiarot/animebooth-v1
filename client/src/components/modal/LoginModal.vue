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

            <v-alert class="tw-cursor-pointer" @click="errorAlert = !errorAlert" transition="scale-transition" :value="errorAlert" dense text outlined color="#FB8C00" >
              <v-row align="center">
                <v-col class="grow">
                  <div>
                    <v-icon color="#FB8C00">
                      mdi-circle-small
                    </v-icon>
                    <small>Please specify valid fields</small>
                  </div>
                  <div>
                    <v-icon color="#FB8C00">
                      mdi-circle-small
                    </v-icon>
                    <small>Please specify valid fields</small>
                  </div>
                </v-col>

              </v-row>

            </v-alert>

            <v-text-field color="white" hide-details dense class="py-0 mb-4" filled label="Username or Email" append-icon="mdi-account"></v-text-field>
            <v-text-field color="white" hide-details dense class="py-0 mb-4" filled label="Password" append-icon="mdi-lock"></v-text-field>
            <v-btn class="tw-h-full tw-w-full tw-rounded-md" large rounded color="#BD203E" dark>
              Login
            </v-btn>

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
export default {
  data: () => ({
    showSignUpModal: false,
    errorAlert: true,
  }),
};
</script>

<style>
</style>