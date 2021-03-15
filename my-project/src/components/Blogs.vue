<template>
    <div id="blogs">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle"> Update Title </button>
    </div>
</template>
<script>

export default {
  name: 'Blogs',
  data () {
    return {
      blogTitle: 'Blogs'
    }
  },
  methods: {
    changeTitle () {
      this.blogTitle = 'we'
    }
  },
  beforeCreate () {
    alert('before')
  },
  created () {
    alert('created')
  },
  beforeUpdate () {
    alert('before update')
  }
}
</script>
