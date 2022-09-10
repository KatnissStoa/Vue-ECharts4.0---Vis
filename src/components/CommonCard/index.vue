<template>
    <div class="common-card">
        <div class="title">{{title}}</div>
        <div class="value">{{value}}</div>
        <div class="chart">
            <slot></slot>
        </div>
        <div class="line" />
        <div class="total">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        // 接收数据并对数据进行类型限定
        props: {
            title: String,
            value: String
        }
    }
</script>

<!-- scoped样式只在该组件内局部生效，可防止样式冲突 -->
<style lang="scss" scoped>
    .title {
        font-size: 12px;
        color: #999;
    }
    .value {
        font-size: 25px;
        color: #000;
        margin-top: 5px; //距上方5px
        letter-spacing: 1px; //扩大字母之间的间距
    }
    .chart {
        height: 50px;
    }
    .line {
        margin: 10px 0;
        border-top: 1px solid #eee; //设置上边框
    }
    .total {
        font-size: 12px;
        color: #666;
    }
</style>

<style lang="scss"> //放在scoped外，为全局样式，方面引入CommonCard的组件使用
    .emphasis {
        margin-left: 5px;
        color: #333;
        font-weight: 700; //加粗
    }
    .increase {
            width: 0;
            height: 0;
            border-width: 3px;
            border-color: transparent transparent red transparent; //设置下方为red
            border-style: solid;
            margin: 0 0 3px 5px;
        }
    .decrease {
        width: 0;
        height: 0;
        border-width: 3px;
        border-color: green transparent transparent transparent; //设置下方为red
        border-style: solid;
        margin: 3px 0 0 5px;
    }
</style>
