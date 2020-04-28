<template>
  <div class="home">
    <h1>Here's Some Random People</h1>
    <ProfileCard
      v-for="profile in profiles"
      :id="profile.id"
      :key="profile.id"
      :name="profile.name"
      :location="profile.location"
      :occupation="profile.occupation"
      :profileImage="profile.profileImage"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
import ProfileCard from '@/components/ProfileCard.vue'

export default {
  name: 'Home',
  components: {
    ProfileCard
  },
  computed: {
    ...mapState({
      profiles: state => state.profiles.profiles
    }),
  },
  methods: {
    ...mapActions('profiles', [
      'addProfile',
      'removeProfile'
    ]),
  }
}
</script>
