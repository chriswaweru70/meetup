<template>
      <v-container>
                <v-layout row v-if="error">
                      <v-flex xs12 sm6 offset-sm3>
                            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                      </v-flex>
              </v-layout>
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                      <v-card-text>
                          <v-contanier>
                            <form @submit.prevent="onSignin">
                              <v-layout row>
                                <v-flex xs12>
                                  <v-text-field
                                  name="email"
                                  label="Mail"
                                  id="email"
                                  v-model="email"
                                  type="email"
                                  required></v-text-field>
                                </v-flex>
                              </v-layout>
                              <v-layout row>
                                <v-flex xs12>
                                  <v-text-field
                                  name="password"
                                  label="Password"
                                  id="password"
                                  v-model="password"
                                  type="password"
                                  required></v-text-field>
                                </v-flex>
                              </v-layout>
                              <v-layout row>
                                  <v-flex>
                                    <v-btn type="submit" v-bind:disabled="loading" v-bind:loading="loading"> 
                                      Sign in          
                                      <span slot="loader" class="custom-loader">
                                              <v-icon light>cached</v-icon>
                                        </span>
                                      </v-btn>
                                  </v-flex>
                              </v-layout>
                            </form>
                          </v-contanier>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
          </v-container>
</template>


<script>
   export default {
     data () {
       return {
         email:'',
         password:''
      

       }
     },
     computed: {
              user () {
                return this.$store.getters.user
              },
               error () {
                return this.$store.getters.error
              },
              loading () {
                return this.$store.getters.loading
              }
     },
     watch: {
              user (value) {
                if (value !==null && value !==undefined) {
                  this.$router.push('/')
                }
              }
     },
     methods: {
       onSignin () {
          this.$store.dispatch('signUserIn', {email: this.email, password: this.password })
       },
        onDismissed () {
          console.log('Dismissed Alert!')
          this.$store.dispatch('clearError')
        }
     }
   }
</script>

<style>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
  
