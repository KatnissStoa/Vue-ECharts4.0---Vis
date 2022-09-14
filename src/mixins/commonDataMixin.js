// 统一编写千分位
function format(v) { // 传入value，返回value
    // return (+v).toLocaleString() // 该方法v必须是number类型
    const reg = /\d{1,3}(?=(\d{3})+$)/g // 理解正向肯定预查（?=）的原理
    return `${v}`.replace(reg, '$&,') // $&表示匹配当前正则表达式分割出的数字，,表示在分割出的数字后加,
}

// 统一编写￥符号
function wrapperMoney(o, k) {
    return o && o[k] ? `￥ ${format(o[k])}` : '￥ 0.00'
}

// 获取数值数据(不含千分号)
function wrapperOriginalNumber(o, k) {
    return o && o[k] ? o[k] : 0
}

// 获取数值数据(含千分号，变为string类型)
function wrapperNumber(o, k) {
    return o && o[k] ? format(o[k]) : 0
}

// 获取数组数据
function wrapperArray(o, k) {
    return o && o[k] ? o[k] : []
}

// 统一编写百分号
function wrapperPercentage(o, k) {
    return o && o[k] ? `${o[k]}%` : '0%'
}

export default {
    computed: { // 执行getScreenData
        screenData() {
            return this.getScreenData()
        },
        salesToday() { // 获取salesToday(字段值由后端返回)数据，对应到页面“累计销售额”
            // return this.screenData && this.screenData.salesToday
            return wrapperMoney(this.screenData, 'salesToday') // 封装的形式，避免在TopView组件中写太多表达式的业务逻辑
        },
        salesGrowthLastDay() {
            // return this.screenData && this.screenData.salesGrowthLastDay
            return wrapperPercentage(this.screenData, 'salesGrowthLastDay')
        },
        salesGrowthLastMonth() {
            // return this.screenData && this.screenData.salesGrowthLastMonth
            return wrapperPercentage(this.screenData, 'salesGrowthLastMonth')
        },
        salesLastDay() {
            // return this.screenData && this.screenData.salesLastDay
            return wrapperMoney(this.screenData, 'salesLastDay')
        },
        orderToday() {
            return wrapperNumber(this.screenData, 'orderToday')
        },
        orderLastToday() {
            return wrapperNumber(this.screenData, 'orderLastToday')
        },
        orderTrend() {
            return wrapperArray(this.screenData, 'orderTrend')
        },
        orderUser() {
            return wrapperNumber(this.screenData, 'orderUser')
        },
        returnRate() {
            return wrapperPercentage(this.screenData, 'returnRate')
        },
        orderUserTrend() {
            return wrapperArray(this.screenData, 'orderUserTrend')
        },
        orderUserTrendAxis() {
            return wrapperArray(this.screenData, 'orderUserTrendAxis')
        },
        userToday() {
            return wrapperNumber(this.screenData, 'userToday')
        },
        userTodayNumber() {
            return wrapperOriginalNumber(this.screenData, 'userTodayNumber')
        },
        userLastMonth() {
            return wrapperOriginalNumber(this.screenData, 'userLastMonth')
        },
        userGrowthLastDay() {
            return wrapperNumber(this.screenData, 'userGrowthLastDay')
        },
        userGrowthLastMonth() {
            return wrapperNumber(this.screenData, 'userGrowthLastMonth')
        },
        orderFullYear() {
            return wrapperNumber(this.screenData, 'orderFullYear')
        },
        orderFullYearAxis() {
            return wrapperNumber(this.screenData, 'orderFullYearAxis')
        },
        orderRank() {
            return wrapperNumber(this.screenData, 'orderRank')
        },
        userFullYear() {
            return wrapperNumber(this.screenData, 'userFullYear')
        },
        userFullYearAxis() {
            return wrapperNumber(this.screenData, 'userFullYearAxis')
        },
        userRank() {
            return wrapperNumber(this.screenData, 'userRank')
        },
        wordCloud() {
            return this.getWordCloud()
        }
    },
    methods: {
        format(v) {
            return format(v)
        }
    },
    inject: ['getScreenData', 'getWordCloud', 'getMapData']
}
