<template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
            <Editar/>
          </div>
      </div>
      <div class="footer" :style="{'background-image': `url(${require('@/static/back4.png')})`}"></div>
    </div>
  </template>

<script>

  import Sidebar from "@/components/Sidebar"
  import Header from "@/components/Header"
  import Editar from "@/components/Mural/Editar"

  export default {
    components: {
      Sidebar,
      Header,
      Editar
    }
  }
</script>

<style>

</style>


