<template>
  <div class="container">
    <br>
    <div class="form-group mr-sm-2">

 <!--cambiar ruta-->     
<div class="container">
  <div class="row">
    <div class="col-sm">
      <label for="exampleFormControlSelect1">Seleccione uno de los tours</label>
      <select class="form-control p-3 mb-5 bg-white rounded sombra" id="exampleFormControlSelect1">
        <option value="2">Puebla Fascinante</option>
        <option value="1">Africam Safari</option>
        <option value="4">Cholula Milenaria</option>
        <option value="3">Puebla Nocturana</option>
      </select>
      
    </div>

    <div class = "col text-center">
        <nuxt-link :to="{ name: 'mapa-ruta'}" replace>     
        <button type="button" class="btn btn-success shadow">Puntos en el Tour</button>
        </nuxt-link> 
      </div>
  </div>
</div>


    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="15"
      style="width:95%;  height: 800px;"
      class="shadow text-align"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
      <gmap-polyline v-bind:path.sync="path"  v-bind:options="{ strokeColor:'#EA1B75'}">
         </gmap-polyline>
    </gmap-map>
         <br>
  </div>
 
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 19.048169, lng: -98.188524 },
      path: [
        { lat: 19.0380368, lng: -98.1919112 },
        //puntos
        { lat: 19.039749, lng: -98.195188 },
        { lat: 19.040205, lng: -98.193997 },
        { lat: 19.040702, lng: -98.193235 },
        { lat: 19.041605, lng: -98.192666 },
        { lat: 19.042152, lng: -98.192495 },
        { lat: 19.043217, lng: -98.192108 },
        { lat: 19.044465, lng: -98.191658 },
        { lat: 19.044827, lng: -98.19145 },
        { lat: 19.044648, lng: -98.190972 },
        //acaban puntos
        { lat: 19.0442404, lng: -98.191289 },
        //puntos
        { lat: 19.045065, lng: -98.190749 },
        { lat: 19.045343, lng: -98.190246 },
        { lat: 19.045148, lng: -98.189415 },
        { lat: 19.045949, lng: -98.18914 },
        { lat: 19.045911, lng: -98.189314 },
        { lat: 19.046007, lng: -98.189426 },
        { lat: 19.046094, lng: -98.189429 },
        { lat: 19.046239, lng: -98.189399 },
        { lat: 19.046561, lng: -98.189275 },
        { lat: 19.046692, lng: -98.18923 },
        { lat: 19.046995, lng: -98.189223 },
        //acaba puntos
        { lat: 19.0471625, lng: -98.1892118 },
        //puntos
        { lat: 19.048065, lng: -98.189121 },
        { lat: 19.048432, lng: -98.188671 },
        { lat: 19.048695, lng: -98.188301 },
        { lat: 19.049029, lng: -98.187753 },
        { lat: 19.049383, lng: -98.187215},
        { lat: 19.050187, lng: -98.186300},
        { lat:19.050677, lng: -98.185531},
        { lat: 19.050975, lng: -98.185458},
        { lat: 19.051894, lng: -98.185701},
        { lat: 19.053172, lng: -98.185166},
        //{ lat: 19.049135, lng: -98.187879 },
        //{ lat: 19.049416, lng: -98.188103 },
        //{ lat: 19.049548, lng: -98.188235 },
        //{ lat: 19.049962, lng: -98.1882 },
        //{ lat: 19.050658, lng: -98.188175 },
        //{ lat: 19.051332, lng: -98.188157 },
        //{ lat: 19.051634, lng: -98.188125 },
        //{ lat: 19.052295, lng: -98.188713 },
        //{ lat: 19.052597, lng: -98.18899 },
        //{ lat: 19.052798, lng: -98.189155 },
        //{ lat: 19.052901, lng: -98.189141 },
        //acaban puntos
        //{ lat: 19.0531589, lng: -98.1851249 },
        //puntos
        //{ lat: 19.052558, lng: -98.188955 },
        //{ lat: 19.052085, lng: -98.188545 },
        //{ lat: 19.051618, lng: -98.188131 },
        //{ lat: 19.051273, lng: -98.187489 },
        //{ lat: 19.051087, lng: -98.187061 },
        //{ lat: 19.050831, lng: -98.186141 },
        //{ lat: 19.051333, lng: -98.185901 },
        //{ lat: 19.051734, lng: -98.185712 },
        //{ lat: 19.052256, lng: -98.185612 },
        //{ lat: 19.052662, lng: -98.185413 },
        //{ lat: 19.053105, lng: -98.185181 },
        { lat: 19.0531589, lng: -98.1851249 },
        //{ lat: 19.053571, lng: -98.185237 },
        { lat: 19.053385, lng: -98.185134 },
        { lat: 19.053619, lng: -98.185284 },
        { lat: 19.053751, lng: -98.185363 },
        { lat: 19.053854, lng: -98.185407 },
        { lat: 19.054007, lng: -98.185453 },
        { lat: 19.054152, lng: -98.185465 },
        { lat: 19.054543, lng: -98.185459 },
        { lat: 19.055, lng: -98.185468 },
        { lat: 19.055166, lng: -98.185516 },
        { lat: 19.055409, lng: -98.185617 },
        { lat: 19.055552, lng: -98.185705 },
        { lat: 19.05572, lng: -98.185861 },
        { lat: 19.055849, lng: -98.186039 },
        { lat: 19.056011, lng: -98.186287 },
        //{ lat: 19.056363, lng: -98.186473 },
        //{ lat: 19.056681, lng: -98.186581 },
        //{ lat: 19.05685, lng: -98.186618 },
        //{ lat: 19.056854, lng: -98.186699 },
        //{ lat: 19.05702, lng: -98.187018 },
        //{ lat: 19.057313, lng: -98.186541 },
        //{ lat: 19.057585, lng: -98.186405 },
        { lat: 19.056907, lng: -98.187749},
        { lat: 19.057543, lng: -98.188146},
        { lat: 19.057913, lng: -98.188138},
        { lat: 19.058310, lng: -98.187818},
        { lat: 19.058114, lng: -98.187685},
        { lat: 19.057651, lng: -98.187925},
        { lat: 19.057225, lng: -98.187358},
        { lat: 19.056845, lng: -98.186609},
        { lat: 19.057384, lng: -98.186535},
        //acaban puntos
        //{ lat: 19.0579336, lng: -98.1870003 },
        //puntos
        { lat: 19.05779, lng: -98.18627 },
        { lat: 19.057974, lng: -98.186031 },
        { lat: 19.058184, lng: -98.185727 },
        { lat: 19.058302, lng: -98.185467 },
        { lat: 19.058246, lng: -98.185234 },
        { lat: 19.057611, lng: -98.184638 },
        { lat: 19.056965, lng: -98.184068 },
        { lat: 19.056314, lng: -98.183526 },
        { lat: 19.055905, lng: -98.183207 },
        //acaban puntos
        { lat: 19.0562241, lng: -98.1827389 },
        //puntos
        { lat: 19.055856, lng: -98.183143 },
        { lat: 19.055676, lng: -98.182988 },
        { lat: 19.055374, lng: -98.182726 },
        { lat: 19.055029, lng: -98.182427 },
        { lat: 19.054639, lng: -98.182094 },
        { lat: 19.054365, lng: -98.181863 },
        { lat: 19.053983, lng: -98.181602 },
        { lat: 19.053684, lng: -98.181359 },
        { lat: 19.053372, lng: -98.181105 },
        { lat: 19.052863, lng: -98.180929 },
        { lat: 19.052549, lng: -98.18083 },
        { lat: 19.052228, lng: -98.180684 },
        { lat: 19.052103, lng: -98.180593 },
        { lat: 19.05197, lng: -98.18021 },
        { lat: 19.051974, lng: -98.179935 },
        //acaban puntos
        { lat: 19.0525066, lng: -98.179964 }, //unidad civica  mayo
        //puntos
        { lat: 19.051993, lng: -98.179876 },
        { lat: 19.052036, lng: -98.179479 },
        { lat: 19.052194, lng: -98.179194 },
        { lat: 19.052441, lng: -98.178989 },
        { lat: 19.052753, lng: -98.17889 },
        { lat: 19.053025, lng: -98.178932 },
        { lat: 19.053285, lng: -98.179161 },
        { lat: 19.053348, lng: -98.180086 },
        { lat: 19.053535, lng: -98.180323 },
        //acaban puntos
        { lat: 19.053879, lng: -98.18019 }, //centro expositorio
        //puntos
        { lat: 19.053598, lng: -98.180394 },
        { lat: 19.054415, lng: -98.180824 },
        { lat: 19.054565, lng: -98.180913 },
        //acaban puntos
        { lat: 19.0548, lng: -98.180408 }, //museo de la revolucion
        //puntos
        { lat: 19.054699, lng: -98.180997 },
        { lat: 19.054871, lng: -98.181081 },
        { lat: 19.054951, lng: -98.181125 },
        //acaban puntos
        { lat: 19.055348, lng: -98.179562 }, //teleferico
        //puntos
        { lat: 19.054988, lng: -98.181152 },
        { lat: 19.056659, lng: -98.182051 },
        //acaban puntos
        { lat: 19.057018, lng: -98.181575 }, //planetario
        //puntos
        { lat: 19.056823, lng: -98.18214 },
        { lat: 19.057617, lng: -98.18257 },
        { lat: 19.058124, lng: -98.182516 },
        { lat: 19.058393, lng: -98.182721 },
        { lat: 19.058626, lng: -98.183157 },
        { lat: 19.058591, lng: -98.18311 },
        { lat: 19.059223, lng: -98.183642 },
        { lat: 19.059609, lng: -98.183796 },
        { lat: 19.059939, lng: -98.18374 },
        { lat: 19.060402, lng: -98.183353 },
        { lat: 19.061883, lng: -98.18196 },
        { lat: 19.062032, lng: -98.182144 },
        { lat: 19.060885, lng: -98.183217 },
        { lat: 19.060865, lng: -98.183851 },
        { lat: 19.060877, lng: -98.184605 },
        //acaban puntos
        { lat: 19.060459, lng: -98.184605 }, //monumento zaragoza
        //puntos
        { lat: 19.060813, lng: -98.184775 },
        { lat: 19.060316, lng: -98.185886 },
        { lat: 19.059148, lng: -98.188039 },
        { lat: 19.057113, lng: -98.189279 },
        { lat: 19.056173, lng: -98.189781 },
        { lat: 19.055489, lng: -98.190103 },
        { lat: 19.053807, lng: -98.191054 },
        { lat: 19.053019, lng: -98.191712 },
        { lat: 19.052811, lng: -98.191793 },
        { lat: 19.052488, lng: -98.191729 },
        { lat: 19.051723, lng: -98.191054 },
        { lat: 19.051629, lng: -98.190803 },
        { lat: 19.050153, lng: -98.189614 },
        { lat: 19.048997, lng: -98.189401 },
        { lat: 19.048267, lng: -98.189462 },
        { lat: 19.047329, lng: -98.18971 },
        { lat: 19.046439, lng: -98.189693 },
        { lat: 19.046119, lng: -98.189771 },
        { lat: 19.045882, lng: -98.18996 },
        { lat: 19.045586, lng: -98.19046 },
        { lat: 19.044947, lng: -98.191741 },
        { lat: 19.044184, lng: -98.192037 },
        //acaban puntos
        { lat: 19.044109, lng: -98.192068 }, //num 6
        //puntos
        { lat: 19.044066, lng: -98.192079 },
        { lat: 19.043914, lng: -98.192114 },
        //acaban puntos
        { lat: 19.042019, lng: -98.192741 },
        { lat: 19.040919, lng: -98.193606 },
        { lat: 19.040271, lng: -98.194898 },
        { lat: 19.039936, lng: -98.194137 },
        { lat: 19.038636, lng: -98.195137 },
        { lat: 19.037176, lng: -98.192008 },
        { lat: 19.037913, lng: -98.191588 },
        { lat: 19.038061, lng: -98.191895 }
        //regresa a principio
      ],

      markers: [
        { position: { lat: 19.0380368, lng: -98.1919112 } },
        { position: { lat: 19.0442404, lng: -98.191289 } },
        { position: { lat: 19.0471625, lng: -98.1892118 } },
        //{ position: { lat: 19.0529056, lng: -98.1891781 } },
        { position: { lat: 19.057225, lng: -98.187358} },
        { position: { lat: 19.0531589, lng: -98.1851249 } },
        //{ position: { lat: 19.0579336, lng: -98.1870003 } },
        { position: { lat: 19.0562241, lng: -98.1827389 } },
        { position: { lat: 19.0525066, lng: -98.179964 } },
        { position: { lat: 19.053879, lng: -98.18019 } }, //centro expositorio
        { position: { lat: 19.0548, lng: -98.180408 } }, //museo de la revolucion
        { position: { lat: 19.055348, lng: -98.179562 } }, //teleferico
        { position: { lat: 19.057018, lng: -98.181575 } }, //planetario
        { position: { lat: 19.060459, lng: -98.184605 } }, //monumento zaragoza
        { position: { lat: 19.044109, lng: -98.192068 } } //num 6
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
    },

    getTours() {
      axios({
        method: "get",
        url: "https://adsoft-01.appspot.com/api/tour"
      })
        .then(
          function(response) {
            console.log(response);
            this.$store.commit({
              type: "storeTours",
              tours: response.data
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    },
    created: function(){
      this.getTours();
    }
  }
};
</script>
<style>

.letrabonita {
  font-size: 22px;
  font: bold;
}
  .sombra {
  box-shadow: 0 2px 6px rgba(39, 39, 39, 0.13), 0 2px 6px rgba(39, 39, 39, 0.13);
}
</style>