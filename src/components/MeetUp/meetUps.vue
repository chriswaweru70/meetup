<template>
  <v-container>
         <v-layout>
            <v-flex xs12 class="text-xs-center">
                   <v-progress-circular
                        indeterminate
                        color="primary"
                        v-bind:width="7"
                        v-bind:size="70"
                        v-if="loading">
                   </v-progress-circular>
            </v-flex>
    </v-layout>
    <v-layout row wrap v-for="meetup in meetups" v-bind:key="meetup.id" class="mb-2">
       <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
         <v-card class="info">
           <v-container fluid grid list lg>
              <v-layout row>
                 <v-flex xs5>
                    <v-card-media
                    v-bind:src="meetup.imageUrl"
                      height="130px"
                      
                    > </v-card-media>

                  </v-flex>
                  <v-flex xs7 sm8 md9>
                    <v-card-title primary-title>
                      <div>
                         <h2 class="white--text" mb-0>{{ meetup.location }}</h2>
                         <div>{{ meetup.date | date }}</div>
                      </div>
                       
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat v-bind:to="'/meetupz/' + meetup.id">
                        View Meetups
                        <v-icon left light>chevron_right</v-icon>
                        </v-btn>
                    </v-card-actions>
                  </v-flex>
              </v-layout>
           </v-container>
         </v-card>
       </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        },
        loading () {
                return this.$store.getters.loading
    },
     methods: {
       onLoadMeetup (id){
         this.$router.push('/meetup/1' + id)
       }
     }
    }
}
</script>