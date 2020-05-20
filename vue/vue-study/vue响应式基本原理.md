vue基于Object.defineProperty来实现响应式的
```js
/* 
    obj:对象
    prop:对象的属性名
    desc:描述符
 */
// Object.defineProperty(obj,prop,desc)

function definefun(obj, key, val){
    Object.defineProperty(obj,key,{
        get:function getter(){
            return val;
        },
        set:function setter(newV){
            if(newV === val){
                return 
            }
            cb(newV) // 触发视图更新
        }
    })
}

function observer(obj){
    Object.keys(obj).forEach(key => {
        definefun(obj,key,obj[key])
    })
}

class Vue {
    constructor(options){
        this._data = options.data
        observer(this.data)
    }
}

let vm = new Vue({
    data:{
        text:'123'
    }
})

vm._data.text = '456' // 视图更新
```

