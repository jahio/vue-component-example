<template>
  <div class="profile-card" v-on:click="gotClicked">
    <img :src="profileImage" class="rounded-circle float-left" />
    <h1>{{ name }}</h1>
    <h3>{{ location }}</h3>
    <p>{{ occupation }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    id: Number,
    profileImage: String,
    name: String,
    location: String,
    occupation: String
  },
  methods: {
    gotClicked: function() {
      console.log("You clicked on " + (this.$store.getters['profiles/getProfile'](this.$props.id)).name + "!")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}

.profile-card {
  margin-left: 25%;
  padding: 50px;
  padding-bottom: 100px;
  margin-bottom: 50px;
  transition: all 0.2s linear;
  cursor: pointer;
  width: 50%;
}

.profile-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
