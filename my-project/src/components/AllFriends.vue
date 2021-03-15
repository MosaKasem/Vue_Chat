<template>
    <div id="all-friends">
        <h2>Friends List</h2>
        <div v-for="(friend, i) in friends" :key="i">
          <span v-on:click="unfriend(friend.name)"> {{friend.name}} </span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'AllFriends',
  props: ['friends'],
  data () {
    return {

    }
  },
  methods: {
    unfriend (name) {
      this.$emit('delete', { name })
    }
  }
}
</script>

<style scoped>

</style>
