<template>
    <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>
    export default {
        data() {
            return {
                chartData: {
                    columns: ['name', 'value'], // name表示词云图中的文字，value值的大小对应文字大小
                    rows: [{
                        name: '慕课网',
                        value: 200 * Math.random()
                    }, {
                        name: '慕课网1',
                        value: 200 * Math.random()
                    }, {
                        name: '慕课网2',
                        value: 200 * Math.random()
                    }, {
                        name: '慕课网3',
                        value: 200 * Math.random()
                    }, {
                        name: '慕课网4',
                        value: 200 * Math.random()
                    }]
                },
                chartSettings: {
                    color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)'] // 固定词云图可随机选择的颜色只能从这四个里边选
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
