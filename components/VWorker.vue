<template lang="pug">
.worker.container
  .worker__title Working with GET request
  VCard(:users="users")
  button(@click.prevent="showMore(3)").worker__button Show more
</template>

<script>
import VCard from '@/components/VCard.vue'
import { mapGetters } from 'vuex';

export default {

 computed:{
  ...mapGetters({
        limit: 'users/getLimit'
   }),
},
components: {
  VCard
},

mounted() {
  console.log(this.limit);
},
methods: {
  showMore(val) {
    let newLimit = this.limit + val;
    this.$store.dispatch('users/limit', newLimit);
    console.log(newLimit)

    this.$store.dispatch('users/users');
  }
},

props: {
  users: {
    type: Array,
    default: []
  }
}, 


}
</script>

<style lang="scss" scoped>
.worker {

  &__title {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    margin: 50px auto;

    display: flex;
    align-items: flex-end;
    text-align: center;
    justify-content: center;

    /* Black 87 */

    color: rgba(0, 0, 0, 0.87);
  }

  &__button {
    cursor: pointer;
        width: 100px;
        height: 34px;
        background: #F4E041;
        color: #000000;
        border-radius: 80px;
        margin: 50px auto;
        display: block;

        transition: 0.3s ease;

        &:hover {
          background: #FFE302;
        }
  }
}

</style>
