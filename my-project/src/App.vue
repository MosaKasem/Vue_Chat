<template>
  <div id="app">
    <router-view/>
    <Navbar />
    <Blogs />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'

export default {
  name: 'App',
  components: {
    Navbar: Navbar,
    Blogs: Blogs
  },
  data () {
    return {

    }
  },
  methods: {

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
