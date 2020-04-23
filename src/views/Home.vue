<template>
  <div class="home">
    <h1>Here's Some Random People</h1>
    <ProfileCard
      v-for="profile in profiles"
      :key="profile.id"
      :name="profile.name"
      :location="profile.location"
      :occupation="profile.occupation"
      :profileImage="profile.profileImage"
    />
  </div>
</template>

<style>
  .home {
    text-align: center;
  }
</style>

<script>
// @ is an alias to /src
import ProfileCard from '@/components/ProfileCard.vue'

export default {
  name: 'Home',
  components: {
    ProfileCard
  },
  data() {
    return {
      profiles: [
        { id: 1, name: "J. Austin Hughey", location: "El Paso, Texas, USA", occupation: "Dark Lord of the Sith", profileImage: "http://localhost:8080/jah.jpg" },
        { id: 2, name: "Obi-Wan Kenobi", location: "Tatooine", occupation: "Jedi Knight, Mentor to Darth Vader", profileImage: "http://localhost:8080/obi-wan.jpg" },
        { id: 3, name: "Yoda", location: "Dagobah", occupation: "Jedi Master, Mentor to Luke Skywalker", profileImage: "http://localhost:8080/yoda.jpg" }
      ]
    }
  }
}
</script>
