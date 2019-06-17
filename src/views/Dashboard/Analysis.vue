<template>
  <div>
    <Chart :option="chartOption" style="height:400px;" />
  </div>
</template>

<script>
import Chart from "./../../components/Chart/Chart";
import random from "lodash/random";
export default {
  name: "Analysis",
  data() {
    return {
      chartOption: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.chartOption.series[0].data = this.chartOption.series[0].data.map(
        () => {
          random(100);
        }
      );
    }, 300);
  },
  components: {
    Chart
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style></style>
