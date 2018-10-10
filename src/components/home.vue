<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetup/create" class="info">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
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
        <v-layout row wrap class="mt-2" v-if="!loading" >
            <v-flex xs12>
                 <v-carousel style=" cursor:pointer;">
                    <v-carousel-item
                          v-for="meetup in meetups"
                          v-bind:src="meetup.imageUrl"
                          v-bind:key="meetup.id"
                          v-on:click.native="onLoadMeetup(meetup.id)"> 
                          <div class="title">
                          {{ meetup.title }}
                          </div>
                      </v-carousel-item>
                  </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <h2>Join our awesome Meetups</h2>
                <v-divider></v-divider>
                <h3>Made with LOVE<v-icon class="primary--text">whatshot</v-icon> by Chris Kamau</h3>
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
        }
    },
     methods: {
       onLoadMeetup (id) {
         this.$router.push('/meetupz/' + id);
       }
     }
}
</script>
<style scoped> 
.title {
  position: static;
  bottom: 50px;
  background-color: rgba(0,0,0,0.6);
  color:white;
  font-size: 1em;
  padding: 20px;
}

</style>


