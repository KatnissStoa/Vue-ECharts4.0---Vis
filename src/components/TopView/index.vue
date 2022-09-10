<template>
    <div>
        <!-- gutter表示4个el-col之间的间距为20px -->
        <el-row :gutter="20">
            <!-- el-row宽度为24px，将其分为4个部分，每个宽度6px -->
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-sales />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-orders />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <today-users />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-users />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import TotalSales from '../TotalSales'
    import TotalOrders from '../TotalOrders'
    import TodayUsers from '../TodayUsers'
    import TotalUsers from '../TotalUsers'
    export default {
        // 注册引入的组件，来使用组件
        components: {
            TotalSales,
            TotalOrders,
            TodayUsers,
            TotalUsers
        }
    }
</script>

<style lang="scss" scoped>

</style>
