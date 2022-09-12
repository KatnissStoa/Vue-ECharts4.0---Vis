<template>
    <div class="map-view">
        <div class="left">
            <!-- 引入BMapScatter组件 -->
            <b-map-scatter />
        </div>
        <div class="right">
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="title">
                        用户月同比增长
                    </div>
                </template>
                <template>
                    <div class="chart-wrapper">
                        <liquid-fill />
                    </div>
                </template>
            </el-card>
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="title">
                        热门搜索
                    </div>
                </template>
                <template>
                    <div class="chart-wrapper">
                        <word-cloud />
                    </div>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script>
    import BMapScatter from '../BMapScatter'
    import LiquidFill from '../LiquidFill'
    import WordCloud from '../WordCloud'

    export default {
        components: {
            BMapScatter,
            LiquidFill,
            WordCloud
        }
    }
</script>

<style lang="scss" scoped>
    .map-view {
        display: flex;
        margin-top: 20px;
        .left {
            flex: 0 0 80%; // 占80%空间
            width: 80%;
            height: 600px;
            background: #fff;
        }
        .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 20px;
            .title {
                display: flex;
                align-items: center;
                height: 60px;
                box-sizing: 1px solid #eee;
                font-size: 14px;
                font-weight: 500;
                padding: 0 0 0 20px;
            }
        }
    }
</style>
