<template>
    <div>
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Login/>
            <Footer/>
          </div>
      </div>
    </div>
  </template>
  

<script>
  import Sidebar from '@/components/Sidebar'
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import Login from '@/components/Login/Login'
  export default {
    components: {
      Sidebar,
      Footer,
      Header,
      Login
    }
  }
</script>

<style>

</style>