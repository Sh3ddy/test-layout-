<template lang="pug">
section.speaker.container

  h2.speaker__title Working with POST request
  ul.speaker__list
    li.speaker__list-name
      input#name.speaker__name-form(type='name', name='name', placeholder='Your name')
    li.speaker__list-email
      input#email.speaker__email-form(type='email', name='email', placeholder='Email')
    li.speaker__list-phone
      input#phone.speaker__phone-form(type='phone', name='phone', placeholder='Phone')
    h4.speaker__subtitle Select your position
    li.speaker__list-position
      .speaker__position-form(, value="Frontend developer", name="Frontend developer")

      ul.speaker__position-list
        li(v-for="position in positions" :key="position.id" @click="selectPosition(position.id)") {{ position.name }}

    .wrapper
      .file-upload
        input(type='file', name='Upload your photo', @change="uploadFile" ref="file")
        i.fa.fa-arrow-up


    .speaker__button
      button(@click.prevent="submitForm()").speaker__button-accept Sign up

</template>

<script>
import { mapGetters } from 'vuex';
export default {


  data() {
    return {
      form: {
        name: "Test",
        email: "test@gmail.com",
        phone: "+380955388485",
        position_id: 1,
        photo: null,
      }
    }
  },


  computed:{
  ...mapGetters({
        token: 'users/getToken',
        positions: 'users/getPositions'
    }),
  },
  methods: {
    uploadFile() {
      this.form.photo = this.$refs.file.files[0];
    },

    selectPosition(position) {

      this.form.position_id = position;

      console.log(this.form.position_id);

    },


    async submitForm() {

    const formData = new FormData();
    formData.append('position_id', this.form.position_id);
    formData.append('name', this.form.name);
    formData.append('email', this.form.email);
    formData.append('phone', this.form.phone);
    formData.append('photo', this.form.photo);

    console.log(this.token);
    await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': this.token, }, }).then(function(response) { return response.json(); }).then(function(data) { console.log(data); if(data.success) {  } else {  } }).catch(function(error) { console.log(error) })
    await this.$store.dispatch('users/users');
    }
  },

  mounted() {
    console.log(this.positions);
  }


 }
</script>

<style lang="scss" scoped>

.wrapper{

width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;


.file-upload{

  height:100px;
  width:100px;
  margin-top: 10px;
  border-radius: 100px;
  position:relative;

  display:flex;
  justify-content:center;
  align-items: center;

  border:4px solid #F8F8F8;
  overflow:hidden;
  background-image: linear-gradient(to bottom, #F4E041 50%, #F8F8F8 50%);
  background-size: 100% 200%;
  transition: all 1s;
  color: #F4E041;
  font-size:100px;

  input[type='file']{

    height:100px;
    width:100px;
    position:absolute;
    opacity:0;
    cursor:pointer;

  }

  &:hover{

    background-position: 0 -100%;

    color:#FFE302;

  }


}
}
.speaker {

  &__subtitle {
    display: flex;
    justify-content: center;
  }
  &__list {
    margin-left: auto;
    margin-right: auto;

    &-name {
    display: flex;
    justify-content: center;
    }
    &-email {
    display: flex;
    justify-content: center;
    }
    &-phone {
    display: flex;
    justify-content: center;
    }
    &-position {
    display: flex;
    justify-content: center;
    text-align: center;
    }
    &-file {
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    width: 100%;
    max-width:380px;
    height: 50px;
    }
  }

  &__title {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;

    display: flex;
    align-items: flex-end;
    text-align: center;

    color: #000000;
  }

  &__name {


      &-form {
        width: 100%;
        max-width:380px;
        height: 50px;
        padding-left: 16px;
        margin-bottom: 50px;

        background: #F8F8F8;

        border: 1px solid #D0CFCF;
        border-radius: 4px;
      }
  }

  &__email {


      &-form {
        width: 100%;
        max-width:380px;
        height: 50px;
        padding-left: 16px;
        margin-bottom: 50px;
        background: #F8F8F8;

        border: 1px solid #D0CFCF;
        border-radius: 4px;
      }
  }

  &__phone {


      &-form {
        width: 100%;
        max-width:380px;
        height: 50px;
        padding-left: 16px;
        margin-bottom: 25px;
        background: #F8F8F8;

        border: 1px solid #D0CFCF;
        border-radius: 4px;
      }
  }

  &__position {
    margin: 20px 0px 40px 0px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  &__button {
    margin-top: 35px;
    justify-content: center;
    display: flex;

    &-accept{
      width: 100px;
      height: 34px;
      background: #B4B4B4;
      color: #000000;
      border-radius: 80px;
    }
  }
}
</style>
