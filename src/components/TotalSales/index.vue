<template>
    <common-card
        title="累计销售额"
        value="￥ 32,039,165"
    >
        <template>
            <div class="compare-wrapper">
                <div class="compare">
                    <span>日同比</span>
                    <span class="emphasis">7.33%</span>
                    <div class="increase"></div>
                </div>
                <div class="compare">
                    <span>月同比</span>
                    <span class="emphasis">38.79%</span>
                    <div class="decrease"></div>
                </div>
            </div>
        </template>
    <!-- 向name为footer的插槽中传值 -->
        <template v-slot:footer>
            <div>
                <span>昨日销售额</span>
                <span class="emphasis"> ￥ 30,000,000</span>
            </div>
        </template>
    </common-card>
</template>

<script>
    import CommonCardMixin from '../../mixins/CommonCardMixin'

    export default {
        mixins: [CommonCardMixin]
    }
</script>

<style lang="scss" scoped>
    .compare-wrapper {
        height: 100%; //高度占满整个父容器
        display: flex;
        flex-direction: column; //使内部两个compare竖直排列
        justify-content: center;
    }
    .compare {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-top: 3px;
        color: #666;
    }
</style>
