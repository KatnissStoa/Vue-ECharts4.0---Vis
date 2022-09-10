<template>
    <common-card
        title="累计订单量"
        value="2,157,420"
    >
        <template>
            <div id="total-order-chart"></div>
        </template>
        <template v-slot:footer>
            <div>
                <span>昨日订单量</span>
                <span class="emphasis">2,000,000</span>
            </div>
        </template>
    </common-card>
</template>

<script>
    import CommonCardMixin from '../../mixins/CommonCardMixin'
    export default {
        mixins: [CommonCardMixin],
        // 获取DOM
        mounted() {
            // 获取DOM
            const chartDom = document.getElementById('total-order-chart')
            // 在main.js中的Vue原型链上已经添加了echarts，其余组件引入时可通过$echarts直接使用，不需要import Echarts
            // 初始化echarts
            const chart = this.$echarts.init(chartDom)
            // 调用setOption完成绘图（重点）
            chart.setOption({
                xAxis: {
                    type: 'category',
                    show: false,
                    boundaryGap: false // 默认图距x轴两侧会有间距，此将间距删除
                },
                yAxis: {
                    show: false
                },
                series: [{
                    type: 'line',
                    data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 843, 690, 530, 220, 620], // 此处写死，后续由API引入
                    areaStyle: {
                        color: 'purple'
                    },
                    lineStyle: { // 控制线条
                        width: 0 // 不显示线宽
                    },
                    itemStyle: { // 控制点
                        opacity: 0 // 不显示数据点
                    },
                    smooth: true
                }],
                grid: { // 每个图创建之后都会生成一个grid
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            })
        }
    }
</script>

<style>
    #total-order-chart {
        width: 100%;
        height: 100%;
    }
</style>
