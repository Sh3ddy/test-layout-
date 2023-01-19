<template lang="pug">
.page
  VHeader
  VOverlay
  VWorker(:users="users")
  VSpeaker


</template>

<script>
import VHeader from '@/components/VHeader.vue'
import VOverlay from '@/components/VOverlay.vue'
import VWorker from '@/components/VWorker.vue'
import VSpeaker from '@/components/VSpeaker.vue'
import { mapGetters } from 'vuex';
export default {
  components: {
    VHeader, VOverlay, VWorker,VSpeaker
  },
  async asyncData({ $axios, store }){
   await store.dispatch('users/users');
   await store.dispatch('users/token');
   await store.dispatch('users/positions');


   
  },
  data(){
    return {
    }
  },
 
  computed:{
  ...mapGetters({
        users: 'users/getUsers'
   }),
  },

  
}
</script>

<style lang="scss" scoped>

</style>
