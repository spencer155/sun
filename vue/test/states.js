// state.js
// 定义一个对象，用来存储状态
let states = {}


// 获取整个对象内容，常用于开发中查看保存的值变成了多少
function getStates () {
    return states
}

// 根据属性名，获取存储的值
function get (name) {
    if(states[name]) { return states[name] }
    return ''
}


// 保存属性名，用法与react中的setState方法完全一致
function set (options, target) {
    let keys = Object.keys(options)
    let o = target ? target : states
    keys.map( item => {
        if(typeof o[item] == 'undefined') {
            o[item] = options[item]
        } 
        else {
            if(type(o[item]) == 'object') {
                set(options[item], o[item])
            } else {
                o[item] = options[item]
            }
        }
        return item
    })
}

// 判断数据类型
function type(elem) {
    if (elem == null) return elem + '';
    return toString.call(elem).replace(/[\[\]]/g, '').split(' ')[1].toLowerCase();
}

// 这里使用了es6的模块语法对外提供接口，你也可以根据自己的实际开发情况使用其他的模块语法
export { getStates, get, set }