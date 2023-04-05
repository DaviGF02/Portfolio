<template>
  <canvas id="myChart"></canvas>
</template>
<script>
import Chart from 'chart.js/auto'
export default {
  name: 'appModelChart',
  props: {
    typeGrahic: {
      type: String,
      required: true
    },
    optionsGraphic: {
      type: Object
    },
    dataGraphic: {
      type: Object,
      required: true
    },
    pluginsGraphic: {
      type: Array
    }
  },
  mounted() {
    const data = this.dataGraphic

    const config = {
      type: this.typeGrahic,
      data: data,
      options: this.optionsGraphic,
      plugins: this.pluginsGraphic
    }

    const ctx = document.getElementById('myChart')
    const myChart = new Chart(ctx, config)
    myChart
  }
}
</script>
