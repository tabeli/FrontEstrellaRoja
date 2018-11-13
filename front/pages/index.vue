<template>
    <div>
      <div class ="row">
          <div class="col-11">
            <Header/>
            <Login/>
            <Footer/>
          </div>
      </div>
    </div>
  </template>
  

<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import Login from '@/components/Login/Login'
  export default {
    components: {
      Footer,
      Header,
      Login
    }
  }
</script>

<style>

</style>