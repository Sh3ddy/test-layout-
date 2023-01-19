<template lang="pug">
section.overlay
  .overlay__background
    h1.overlay__background-title Test assignment for front-end developer
    p.overlay__background-subtitle What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
    button.overlay__background-button Sign up

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.overlay {

  &__background {
    width: 100%;
    height: 500px;
    padding: 40px 16px;
    background-size: cover;
    background-color: #afb1b8;
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(@/assets/images/base-mob.jpg);
    background-repeat: no-repeat;

    @media screen and (min-width: 425px){
      background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(@/assets/images/base-tablet.jpg);
    }
    @media screen and (min-width: 768px){
      background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(@/assets/images/base-desc.jpg);
      height: 650px;
      max-width: 1170px;
      margin-left: auto;
      margin-right: auto;
      padding: 164px 0px;
    }




      &-title {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        max-width: 380px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 21px;

        text-align: center;

        color: #FFFFFF;

      }

      &-subtitle {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        max-width: 380px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 32px;

        text-align: center;

        color: #FFFFFF;
      }

      &-button {
        width: 100px;
        height: 34px;
        background: #F4E041;
        color: #000000;
        border-radius: 80px;
        margin: 0 auto;
        display: block;

        &:hover {
          background: #FFE302;
        }
      }
  }
}
</style>
