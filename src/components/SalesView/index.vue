<template>
    <div class="sales-view">
        <!-- el-card默认padding=20px -->
        <el-card shadow="hover" :body-style="{ padding:'0 0 20px 0' }">
            <template v-slot:header>
                <div class="menu-wrapper">
                    <el-menu
                        :default-active="activeIndex"
                        mode="horizontal"
                        @select="onMenuSelect"
                        class="sales-view-menu"
                    >
                        <el-menu-item index="1">销售额</el-menu-item>
                        <el-menu-item index="2">访问量</el-menu-item>
                    </el-menu>
                    <div class="menu-right">
                        <el-radio-group v-model="radioSelect" size="small">
                            <el-radio-button label="今日" />
                            <el-radio-button label="本周" />
                            <el-radio-button label="本月" />
                            <el-radio-button label="今年" />
                        </el-radio-group>
                        <el-date-picker
                            type="daterange"
                            v-model="date"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            size="small"
                            unlink-panels
                            :picker-options="pickerOptions"
                            class="sales-view-date-picker"
                        />
                    </div>
                </div>
            </template>
            <template>
                <div class="sales-view-chart-wrapper">
                    <!-- 只需在script中实现chartOption，v-chart默认宽高100%，故不需要在style中设置 -->
                    <v-chart :options="chartOption"/>
                    <div class="sales-view-list">
                        <div class="sales-view-title">排行榜</div>
                        <!-- 遍历排行榜内容(数组) -->
                        <div class="list-item-wrapper">
                            <div class="list-item" v-for="item in rankData" :key="item.no">
                                <!-- 传入下方data中item中的no值，设置前3个的特殊class="list-item-no top-no",便于后续给它们加特殊样式。有以下三种方式 -->
                                <!-- <div class="list-item-no" :class="+item.no <= 3 ? 'top-no' : ''">{{item.no}}</div> -->
                                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{item.no}}</div>
                                <!-- 传入下方data中item中的name值 -->
                                <div class="list-item-name">{{item.name}}</div>
                                <div class="list-item-money">{{item.money}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                radioSelect: '今日',
                date: null,
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const start = new Date()
                            const end = new Date()
                            start.setTime(start.getTime() - 3600 * 24 * 1000 * 7)
                            picker.$emit('pick', [start, end])
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const start = new Date()
                            const end = new Date()
                            start.setTime(start.getTime() - 3600 * 24 * 1000 * 30)
                            picker.$emit('pick', [start, end])
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const start = new Date()
                            const end = new Date()
                            start.setTime(start.getTime() - 3600 * 24 * 1000 * 90)
                            picker.$emit('pick', [start, end])
                        }
                    }, {
                        text: '最近一年',
                        onClick(picker) {
                            const start = new Date()
                            const end = new Date()
                            start.setTime(start.getTime() - 3600 * 24 * 1000 * 365)
                            picker.$emit('pick', [start, end])
                        }
                    }]
                },
                chartOption: {
                    title: {
                        text: '年度销售额',
                        textStyle: {
                            fontSize: 12,
                            color: '#666'
                        },
                        left: 25, // 设置标题位置
                        top: 20
                    },
                    xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisTick: {
                            alignWithLabel: true, // 使每个横轴短竖线位于每个bar中间
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLable: {
                            color: '#333'
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: { // 纵轴
                            show: false
                        },
                        axisTick: { // 纵轴每个分隔处的短横线
                            show: false
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dotted',
                                color: '#eee'
                            }
                        }
                    },
                    sereis: [{
                        type: 'bar',
                        barWidth: '35%',
                        data: [200, 250, 300, 350, 300, 250, 200, 250, 300, 350, 300, 250],
                        color: ['#3398DB'],
                        grid: {
                            top: 70,
                            left: 60,
                            right: 60,
                            bottom: 50
                        }
                    }]
                },
                rankData: [
                    {
                        no: 1,
                        name: '麦当劳',
                        money: '323,234'
                    },
                    {
                        no: 2,
                        name: '麦当劳',
                        money: '323,234'
                    },
                    {
                        no: 3,
                        name: '麦当劳',
                        money: '323,234'
                    },
                    {
                        no: 4,
                        name: '麦当劳',
                        money: '323,234'
                    },
                    {
                        no: 5,
                        name: '麦当劳',
                        money: '323,234'
                    },
                    {
                        no: 6,
                        name: '麦当劳',
                        money: '323,234'
                    },
                    {
                        no: 7,
                        name: '麦当劳',
                        money: '323,234'
                    }
                ]
            }
        },
        methods: {
            onMenuSelect(index) { // 切换销售额和访问量
                this.activeIndex = index
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sales-view {
        margin-top: 20px;
        .menu-wrapper {
            display: flex;
            position: relative;
            .sales-view-menu {
                width: 100%;
                padding-left: 20px;
                .el-menu-item {
                    height: 50px;
                    line-height: 50px;
                    margin: 0 20px;
                }
            }
            .menu-right {
                position: absolute;
                top: 0;
                right: 0;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                .sales-view-date-picker {
                    margin-left: 20px;
                }
            }
        }
        .sales-view-chart-wrapper {
            display: flex;
            height: 300px;
            .echarts { // 左侧echarts太大，限制其宽只占70%，高占100%
                flex: 0 0 70%;
                width: 70%;
                height: 100%;
            }
            .sales-view-list {
                flex: 1;
                width: 100%;
                height: 100%;
                overflow: hidden; // 仅展示7条数据，超出部分隐藏
                .sales-view-title {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #666;
                    font-weight: 500;
                }
                .list-item-wrapper {
                    margin-top: 15px;
                    .list-item {
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        height: 20px;
                        padding: 6px 20px 6px 0;
                        .list-item-no {
                            display: flex;
                            align-items: center; // 设置数字1~7在左侧垂直居中
                            justify-content: center; // 设置数字1~7在右侧垂直居中
                            width: 20px;
                            height: 20px;
                            color: #333;
                            &.top-no { // 设置前3名的样式
                                background: #000;
                                border-radius: 50%;
                                color: #fff;
                                font-weight: 500;
                            }
                        }
                        .list-item-name {
                            margin-left: 10px;
                            color: #333;
                        }
                        .list-item-money {
                            flex: 1; // list-item为flex布局的前提下让list-item-money占满剩下的空间
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
</style>
