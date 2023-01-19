<template lang="pug">
header.header
  ul.header__list
    li.header__list-logo
      n-link(to="/")
          svg.header__list-icon
              use(href='@/assets/svg/symbol-defs.svg#icon-cat')
      h1.header__list-title TESTTASK

    li.header__list-authorization
      button.header__list-button Users
      button.header__list-button Sign up

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
padding: 16px;
margin-left: auto;
margin-right: auto;
max-width: 1200px;

  &__list{
  display: flex;
  justify-content: space-between;
  align-items: center;

    &-logo {
      display: flex;
      align-items: center;
    }

    &-icon {
      width: 38.11px;
      height: 26px;
    }

    &-title {
      font-family: 'Nunito';
      font-weight: 400;
      font-size: 11.52px;

      color: #000000;
    }

    &-button {
      width: 100px;
      height: 34px;
      background: #F4E041;
      color: #000000;
      border-radius: 80px;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background: #FFE302;
      }

      &:not(:last-child) {
          margin-right: 10px;
        }
    }
  }
}
</style>
