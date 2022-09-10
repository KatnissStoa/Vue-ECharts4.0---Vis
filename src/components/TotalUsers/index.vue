<template>
    <common-card
        title="累计用户数"
        value="1,087,503"
    >
        <template>
            <v-chart :options="getOptions" />
        </template>
        <template v-slot:footer>
            <div class="total-users-footer">
                <span>日同比</span>
                <span class="emphasis">8.73%</span>
                <div class="increase"></div>
                <span class="month">月同比</span>
                <span class="emphasis">35.91%</span>
                <div class="decrease"></div>
            </div>
        </template>
    </common-card>
</template>

<script>
    import CommonCardMixin from '../../mixins/CommonCardMixin'
    export default {
        // data() {
        //     return {
        //         timer: ''
        //     }
        // },
        mixins: [CommonCardMixin],
        methods: {
            getOptions() {
                return {
                    grid: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        type: 'category',
                        show: false
                    },
                    series: [{
                        // 左侧bar
                        type: 'bar',
                        stack: '总量', // 合并相同type
                        data: [200],
                        barWidth: 10, // 修改bar宽度
                        itemStyle: {
                            color: '#45c946'
                        }
                    }, {
                        // 右侧bar
                        type: 'bar',
                        stack: '总量',
                        data: [250],
                        itemStyle: {
                            color: '#eee'
                        }
                        // barWidth: 10 // stack合并后的图表，只需要写一个barWidth
                    }]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .total-users-chart {
        width: 100%;
        height: 100%;
    }
    .total-users-footer {
        display: flex;
        align-items: center;
        .month {
            margin-left: 10px;
        }
    }
</style>
