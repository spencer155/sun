## area
Area省市区选择组件
## Import
```js
import { Area } from 'bxs-ui-vue';
```
## Example
基础用法
```html
<bxs-area 
    v-model="isShow" 
    :area-data="areaData" 
    @confirm="confirm">
</bxs-area>
```
默认选中地区
```html
<bxs-area 
    :area-select="value" 
    v-model="isShow2" 
    :area-data="areaData" 
    @confirm="confirm2" 
    :show-district="showDistrict" 
    :key-name="keyName" 
    :value-name="valueName" 
    :title="title">
</bxs-area>
```
只显示省市
```html
<bxs-area 
    :area-select="value" 
    v-model="isShow3" 
    :area-data="areaData" 
    @confirm="confirm3" 
    :show-district="false" 
    :key-name="keyName" 
    :value-name="valueName">
</bxs-area>
```

```js
data() {
    return {
      isShow: false,
      isShow2: false,
      isShow3: false,
      areaData: {
        provinceList: province,
        cityList: city,
        countyList: area,
      },
      value: '110101',
      showDistrict: true,
      valueName: 'name',
      keyName: 'code',
      title:'修改标题',
      selectData: {
        provinceName: '',
        cityName: '',
        countyName: '',
      },
      selectData2: {
        provinceName: '',
        cityName: '',
        countyName: '',
      },
      selectData3: {
        provinceName: '',
        cityName: '',
        countyName: '',
      },
    }
  },
  methods: {
    confirm(data) {
      this.selectData = data
    },
    confirm2(data) {
      this.selectData2 = data
    },
    confirm3(data) {
      this.selectData3 = data
    },
  }
```
## Attribute

| 参数 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| v-model | 必选,是否显示组件 | Boolean | false |
| title | 可选,标题 | String | 选择地区 |
| show-district | 是否显示区 | Boolean | true |
| area-select | 默认选中的值 | String | - |
| key-name | 地区显示的key | String | code |
| value-name | 地区显示的值 | String | name |
| area-data | 必选,地区数据 | Object | - |
area-data整体是一个 Object,包含 provinceList, cityList, countyList 三个 key,area-data具体格式:
```js
{
    provinceList:[
        {
            code: 110000,
            name: '北京市'
        },
        {
            code: 120000,
            name: '天津市'
        }
    ],
    cityList:[
        {
            code: 110100,
            name: '北京市',
            parentId: 110000
        },
        {
            code: 120100,
            name: '天津市',
            parentId: 120000
        }
    ],
    countyList:[
        {
            code: 110101,
            name: '东城区',
            parentId: 110100
        },
        {
            code: 110102,
            name: '西城区',
            parentId: 110100
        }
    ]
}
```

### Slot
无

### Event
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确定后回调事件 | 选中的省市区对象 |
返回的数据格式具体:
```js
{
    cityCode: 110100,
    cityName: "北京市",
    countyCode: 110101,
    countyName: "东城区",
    provinceCode: 110000,
    provinceName: "北京市"
}
```
