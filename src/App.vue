<template>
  <v-app>
    <v-navigation-drawer app v-model="sideNav" temporary>
      <v-list>
        <v-list-tile 
        v-for="item in menuItems" 
        v-bind:key="item.title"
        router 
        v-bind:to="item.link">
          <v-list-tile-action>
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon> exit_to_app </v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click="onLogout">Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
   </v-navigation-drawer>
     <v-toolbar dark class = "primary">
       <span class="hidden-sm-and-up"> <v-toolbar-side-icon app 
        @click.stop="sideNav = !sideNav"  ></v-toolbar-side-icon></span>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
              DevMeetup
          </router-link>     
          </v-toolbar-title>
         <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only" >
          <v-btn flat v-for="item in menuItems"
           v-bind:key="item.title"
           router 
           v-bind:to="item.link">
           <v-icon left>{{ item.icon }}</v-icon>
           {{ item.title }}</v-btn>
          <v-btn flat v-if="userIsAuthenticated"
          @click="onLogout">
           <v-icon dark> exit_to_app </v-icon>
           Logout
           </v-btn>
          
        </v-toolbar-items>
      </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default{
  data () {
    return {
      sideNav: false
      
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
       { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' }
      
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
        { icon: 'supervisor_account', title: 'View Meetup', link: '/meetups' },
        { icon: 'room', title: 'Organize Meetup', link: '/meetup/create' },
        { icon: 'person', title: 'Profile', link: '/profile' }
        ]
      }
      return  menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style>
html { overflow-y: auto }
</style>

