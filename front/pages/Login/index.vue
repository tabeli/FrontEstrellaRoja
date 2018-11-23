<template>
    <div :style="{'background-image': `url(${require('@/static/back4.png')})`}">
      <div class ="row">
          <div class="col-sm-1">
              <Sidebar/>
          </div>
          <div class="col-11">
            <Header/>
                         <div class="form-group">
                <label for="usr">Usuario:</label>
                <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group">
                <label for="contr">Contraseña:</label>
                <input type="password" class="form-control" id="contr">
            </div>
          </div>
      </div>
      <div class="footer" :style="{'background-image': `url(${require('@/static/back4.png')})`}"></div>
    </div>
  </template>
        
            <script>
    import Usuarios from '@/components/Login/Login'
    import Header from '@/components/Header'
  
    export default {
      components: {
        Login,
        Header,
      }
    }
</script>
            
<style>
            
</style>