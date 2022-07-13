import * as state from './state.js';

//保存步骤1的选择，可以这样设计数据
state.set({
    payType: {
        step: 1,
        stepName: 'payType',
        preStep: null,
        selectType: 0  // 选择了什么付款方式，可自定义
    }
})

// 保存步骤二
state.set({
    cardInfo: {
        step: 2, 
        stepName: 'cardInfo',
        preStep: 'payType', 
        // 此处的名称与上一步保存的属性名保持一致，
        // 方便直接使用获取上一步的内容，如果有其他具体需求，
        // 也可以与上一步的弹窗的对象名保持同步， 方便直接获取对象。
        // 此处处理相对比较灵活，题主还可以借助一些路由插件来实现返回上一步
        moreInfo: {},
    }
})

// 这种方式在以后插入新的步骤也会十分方便，只需要重新保存或者修改一些数据即可

// 如果需要修改保存的数据，比如修改步骤二，直接这样修改就可以了
state.set({
    cardInfo: {
        preStep: 'otherStep'
    }
})

console.log(state)