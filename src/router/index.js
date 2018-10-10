import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Meetups from '@/components/MeetUp/meetUps'
import CreateMeetup from '@/components/MeetUp/createMeetUp'
import Profile from '@/components/User/profile'
import Signup from '@/components/User/signUp'
import Signin from '@/components/User/signIn'
import meetUp from '@/components/MeetUp/meetUp2'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/create',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter: AuthGuard
    },
    {
      path: '/meetupz/:id',
      name: 'Meetup',
      props: true, 
      component: meetUp,
      beforeEnter: AuthGuard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    }
  ],
  mode: 'history'
})
