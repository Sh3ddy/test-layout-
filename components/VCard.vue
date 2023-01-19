<template lang="pug">
.cell
  .card(v-for="card in users" :key="card.id")
      .card__images
        img.card__images-roll(:src="card.photo", :alt="card.name")
      .card__list
        .card__list-name {{ card.name }}
        .card__list-position {{ card.position }}
        .card__list-email {{ card.email }}
</template>

<script>
export default {

  props: {
    users: {
      type: Array,
      default: []
    }
  },

  mounted() {
    console.log(this.users)



  },
}
</script>

<style lang="scss" scoped>
.cell {
  display: flex;
  flex-wrap: wrap;
  max-width: 1170px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0px;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    gap: 29px;
    }
}

.card {

    width: 328px;
    height: 254px;
    padding: 20px;
    background: #FFFFFF;

    @media screen and (min-width: 1024px) {
    width: 370px;
    }

  &__images {

    &-roll {
    width: 70px;
    height: 70px;
    margin: 0px auto 20px auto;
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    }
  }

  &__list {

    &-name {
    display: flex;
    justify-content: center;
    padding: 0px 0px 20px 0px;
    overflow: hidden;
    }

    &-position {
    display: flex;
    justify-content: center;
    overflow: hidden;

    }
    &-email {
    display: flex;
    justify-content: center;
    overflow: hidden;

    }
  }
}
</style>
