<template>
    <div class="grid-container">
         <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
    <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
        <div class="Ventas">
            <div class="Calificación de paradas">
                <div class="Paradas más visitadas">

                </div>
            </div>
            <div class="Promedio boletos por compra">

            </div>
        </div>
        <div class="Ventas Mensuales">

        </div>
        <div class="Ganancias">

        </div>
        <div class="Usuarios nuevos este mes">
                
        </div>
        <div class="Rangos de edades">
             <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
            <script>
                var chart = new Chartist.Line('.ct-chart', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  series: [
    [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
    [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
    [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null],
    [{x:3, y: 3},{x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 10
  },
  lineSmooth: Chartist.Interpolation.cardinal({
    fillHoles: true,
  }),
  low: 0
});

            </script>
        </div>
    </div>
</template>

<script>
export default{
    
}
</script>

<style>
.demo_grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "Ventas Ventas Ventas Mensuales Ventas Mensuales" "Ventas Ventas Ventas Mensuales Ventas Mensuales" "Ganancias Usuarios nuevos este mes Rangos de edades Rangos de edades";
}

.demo_Ventas {
  display: grid;
  grid-template-columns: 1.7fr 0.3fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: ". Promedio boletos por compra Promedio boletos por compra" "Calificación de paradas Calificación de paradas Calificación de paradas";
  grid-area: Ventas;
}

.demo_Calificación de paradas {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: ". . Paradas más visitadas" ". . Paradas más visitadas";
  grid-area: Calificación de paradas;
}

.demo_Paradas más visitadas { grid-area: Paradas más visitadas; }

.demo_Promedio boletos por compra { grid-area: Promedio boletos por compra; }

.demo_Ventas Mensuales { grid-area: Ventas Mensuales; }

.demo_Ganancias { grid-area: Ganancias; }

.demo_Usuarios nuevos este mes { grid-area: Usuarios nuevos este mes; }

.demo_Rangos de edades { grid-area: Rangos de edades; }

</style>
