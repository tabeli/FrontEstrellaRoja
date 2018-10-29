<template>
    <div>
      <form>
          <div class="form-group">
            <label for="Nombre de ruta">Nombre de ruta</label>
            <input class="form-control" type="text"> 
            <label for="Descripcion">Descripcion</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="auto"></textarea>
            <label for="imagen ruta">Seleccione imagen </label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1">
          </div>
      </form>
    </div>
  </template>
  
  <script>
    import Sidebar from '@/components/Sidebar'
    import Rutas from '@/components/Ruta/Rutas'
  
    export default {
      components: {
        Sidebar,
        Rutas
      }
    }
  </script>
  
  <style>
  
  </style>