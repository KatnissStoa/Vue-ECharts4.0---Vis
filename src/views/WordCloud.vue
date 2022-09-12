<template>
    <div id="container"></div>
</template>

<script>
    import 'echarts-wordcloud'

    export default {
        mounted() {
            const data = [{
                name: '慕课网',
                value: 100
            }, {
                name: '数据可视化',
                value: 50
            }, {
                name: 'Sam',
                value: 25
            }]
            const chart = this.$echarts.init(document.getElementById('container'))
            chart.setOption({
                series: [{
                    type: 'wordcloud',
                    data
                }]
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
