<template>
    <div id="container"></div>
</template>

<script>
    import 'echarts-liquidfill'

    export default {
        mounted() {
            const data = [0.68, 0.4, 0.2] // 必须从大到小依次排列，数额大小代表波浪大小
            const chart = this.$echarts.init(document.getElementById('container'))
            chart.setOption({
                series: [{
                    type: 'LiquidFill',
                    data,
                    color: ['red', 'blue', 'yellow'], // 颜色,个数与data对应
                    itemStyle: {
                        opacity: 0.6 // 透明度
                    },
                    emphasis: { // 选中时的操作
                        itemStyle: {
                            opacity: 0.9 // 选中时的透明度
                        }
                    }
                }]
            })
        }
    }
</script>

<style lang="scss" scoped>
    #container {
        width: 100%;
        height: 100%;
    }
</style>
