<template>
    <v-container>
        <v-layout row wrap v-if="loading">
         <v-flex xs12 class="text-xs-center">
                   <v-progress-circular
                        indeterminate
                        color="primary"
                        v-bind:width="7"
                        v-bind:size="70">
                        </v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-else>
           <v-flex xs12>
              <v-card>
                  <v-card-title>
                      <h2 class="primary--text">{{ meetup.title }}</h2>
                      <template v-if="userIsCreator">
                          <v-spacer></v-spacer>
                          <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
                      </template>
                  </v-card-title>
                  <v-card-media
                  v-bind:src="meetup.imageUrl"
                      height="400px"
                      
                    ></v-card-media>
                    <v-card-text>
                        <div> <h3 class="info--text">{{ meetup.date | date }} - Here it is, we have our meetup {{ meetup.location }}</h3></div>
                        <div>
                        <app-edit-meetup-date-dialog :meetup="meetup" v-if="userIsCreator"></app-edit-meetup-date-dialog>
                        <app-edit-meetup-time-dialog :meetup="meetup" v-if="userIsCreator"></app-edit-meetup-time-dialog>
                        </div>
                        <div>{{ meetup.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                       <app-meetup-register-dialog :meetupId="meetup.id" v-if="userIsAuthenticated && !userIsCreator"></app-meetup-register-dialog>
                    </v-card-actions>
              </v-card>
           </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        meetup (){
            return this.$store.getters.loadedMeetup(this.id)
        },
        userIsAuthenticated () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
        userIsCreator () {
            if (!this.userIsAuthenticated) {
                return false
            }
            return this.$store.getters.user.id === this.meetup.creatorId
        },
         loading () {
            return this.$store.getters.loading
        }
    }
}
</script>
