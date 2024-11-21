<template>
    <div class="card">
        <Chart v-if="data&&data.length > 0" type="bar" :data="displayValueCount" :options="chartOptions" class=" w-[40rem]" />
    </div>
    <div>
      {{ displayValueCount }}
    </div>
</template>

<script setup lang="ts">
import Chart from 'primevue/chart';

import { ref, onMounted, type CanvasHTMLAttributes, computed } from "vue";

interface Props {
  data: DataObject[] | undefined,
}
interface DataObject {
  date?: Date | string;
  count?: string | number
}
const props = defineProps<Props>()

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();

  });
const aunt = ref<string[]>([]);
const displayValueCount = computed(() => {
  if (props.data && props.data.length > 0) {
    const dates = props.data.forEach(e => {
      const item = e.count;

      if(item !== undefined) {
        aunt.value.push(item.toString())
        return aunt
      } else {
        return [];
      }
    })
    console.log(dates);
  }
  return 'No data available';
});
console.log(aunt.value);

const chartData = ref();
const chartOptions = ref();
const size = ref<CanvasHTMLAttributes|undefined>();
size.value = {width: 100, height: 100};

const setChartData = () => {
    return {
        labels: [],
        datasets: [
            {
                label: 'Sales',
                data: aunt.value,
                backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
                borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                borderWidth: 1
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>

<style scoped>

</style>
