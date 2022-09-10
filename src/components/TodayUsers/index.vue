<template>
    <common-card
        title="今日交易用户数"
        value="81,014"
    >
        <template>
            <v-chart :options="getOptions()" />
        </template>
        <template v-slot:footer>
            <div>
                <span>退货率</span>
                <span class="emphasis">5.14%</span>
            </div>
        </template>
    </common-card>
</template>

<script>
    import CommonCardMixin from '../../mixins/CommonCardMixin'
    export default {
        mixins: [CommonCardMixin],
        methods: {
            getOptions() {
                return {
                    color: ['#3398DB'],
                    series: [{
                        type: 'bar',
                        data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
                        barWidth: '60%' // 控制柱状图柱形宽度
                    }],
                    xAxis: {
                        type: 'category',
                        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
                        show: false
                    },
                    yAxis: {
                        show: false
                    },
                    grid: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    /* // 必须要写style，不然echarts默认宽高为0，无法显示绘图 */
    #today-users-chart {
        width: 100%;
        height: 100%;
    }
</style>
