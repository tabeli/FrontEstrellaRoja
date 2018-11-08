<template>
  <div class="container">
    <div class="form-group mr-sm-2">

 <!--cambiar ruta-->     
<div class="container">
  <div class="row">
    <div class="col-sm">
      <label for="exampleFormControlSelect1">Seleccione uno de los tours</label>
      <select class="form-control shadow-sm p-3 mb-5 bg-white rounded" id="exampleFormControlSelect1">
        <option>Puebla fascinante</option>
        <option>Cholula</option>
      </select>
    </div>

    <div class="col-sm"></div>
    <div class="col-sm"></div>
  </div>
</div>


    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
     <br>
  </div>
 
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 19.04334, lng: -98.20193 },
      markers: [
        {position: {lat: 19.0380368, lng: -98.1919112}},
        {position: {lat: 19.0442404, lng: -98.191289}},
        {position: {lat: 19.0471625, lng: -98.1892118}},
        {position: {lat: 19.0529056, lng: -98.1891781}},
        {position: {lat: 19.0531589, lng: -98.1851249}},
        {position: {lat: 19.0579336, lng: -98.1870003}},
        {position: {lat: 19.0562241, lng: -98.1827389}},
        {position: {lat: 19.0525066, lng: -98.179964}},
        {position: {lat: 19.0529056, lng: -98.1891781}},
        {position: {lat: 19.0586238, lng: -98.1810677}},
        {position: {lat: 19.0570222, lng: -98.1815774}},
        {position: {lat: 19.0459528, lng: -98.1951918}},
        {position: {lat: 19.0562515, lng: -98.1818341}},
        {position: {lat: 19.0553552, lng: -98.1879825}},
      ],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};



</script>