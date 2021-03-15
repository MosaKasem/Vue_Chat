<template>
    <div id="online-friends">
        <h2>Online-Friends</h2>
        <div v-for="(friend, i) in friends" :key="i">
          <span v-if="friend.online"> {{friend.name}} </span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'online-friends',
  props: ['friends'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
