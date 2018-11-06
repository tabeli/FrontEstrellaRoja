<template>

    <div>

      <div class="Header">
        <Header/>
      </div>

      <div class ="row">
          <div class="col-sm-1 mt-5">
              <Sidebar/>
          </div>
          <div class="col-sm-11">
              <CreaUsuario :idUser="idUser"/>
          </div>
      </div>

    <div class="Footer mt-5">
      <Footer/>
    </div>

    </div>
  
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import CreaUsuario from '@/components/Usuario/CreaUsuario'
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
  
    export default {
      data: function(){
        return {
          idUser: this.$route.params.idUser
        }
      },
      components: {
        Sidebar,
        CreaUsuario,
        Header,
        Footer
      },
      created: function(){
        console.log("id of user :D")
        console.log(this.idUser)
      }
    }
  </script>
  
  <style>
  
  </style>