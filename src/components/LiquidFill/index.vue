<template>
    <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>
    function getColor(value) {
        // console.log(value)
        // 设置根据不同的值显示不同的颜色
        return value > 0 && value <= 0.5 ? 'rgba(97,216,0,.7)' : value > 0.5 && value <= 0.8 ? 'rgba(204,178,26,.7)' : value > 0.8 ? 'rgba(241,47,28,.7)' : '#c7c7cb'
    }
    export default {
        data() {
            return {
                chartData: {
                    columns: ['title', 'percent'],
                    rows: [{
                        title: 'rate',
                        percent: 0.6899
                    }]
                },
                chartSettings: {}
            }
        },
        mounted() {
            // DOM渲染完后再对chartSettings赋值，才能getColor
            this.chartSettings = {
                seriesMap: {
                    rate: {
                        radius: '90%',
                        label: { // 修改文本
                            formatter: (v) => {
                                    // console.log(v)
                                    // return v.data.value
                                    return `${Math.floor(v.data.value * 100)}%`
                                },
                                textStyle: {
                                    fontSize: 36,
                                    color: '#999',
                                    fontWeight: 'normal'
                                },
                                position: ['50%', '50%'], // 设置居中
                                insideColor: '#fff' // 波纹漂浮到文字时的颜色
                        },
                        outline: {
                            itemStyle: {
                                borderColor: '#aaa4a4',
                                borderWidth: 1,
                                color: 'none',
                                shadowBlur: 0,
                                shadowColor: '#fff'
                            },
                            borderDistance: 0 // 设置环的宽度
                        },
                        backgroundStyle: { // 设置背景色
                            color: '#fff'
                        },
                        itemStyle: {
                            shadowBlur: 0,
                            shadowColor: '#fff'
                        },
                        amplitude: 8, // 波纹振幅
                        color: [getColor(this.chartData.rows[0].percent)] // 波纹颜色
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
