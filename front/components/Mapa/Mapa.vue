<template>
    <div class="container">
      <br>
      <div class="mt-5">
    <div class="row">
    <!--Buscador-->
    <div class="col">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Ingrese texto a buscar" aria-label="Search">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"><img src="@/static/magnifier.png" width="20" height="20"></button> 
      </form>
    </div>
    </div>
    </div>
    <GmapMap ref="mapRef" ...>
    </GmapMap>
    </div>
</template>
  
<script>
export default {
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
 
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 1.38, lng: 103.80})
    })
  }
}
</script>
<style>

</style>
