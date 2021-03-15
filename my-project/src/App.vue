<template>
  <div id="app">
    <router-view/>
    <Navbar />
    <AllFriends :friends="friends" v-on:delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AllFriends from './components/AllFriends'
import OnlineFriends from './components/OnlineFriends'

export default {
  name: 'App',
  components: {
    Navbar: Navbar,
    AllFriends: AllFriends,
    OnlineFriends: OnlineFriends
  },
  data () {
    return {
      friends: [
        {name: 'Mario', online: true},
        {name: 'Luigi', online: false},
        {name: 'Toad', online: true},
        {name: 'Bowa', online: false}
      ]
    }
  },
  methods: {
    deleteFriend (payload) {
      console.log('payload: ', payload)
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    } 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
