## BottomSheets组件
保险师全平台所有从底部弹窗的浮层弹窗均可适用（选择器的弹窗高度根据实际内容高度而定，此规范不包含
内容分享浮层）

### Import
```js
import { BottomSheets } from 'bxs-ui-vue';
```

### Example
```html
<!-- 普通用法 -->
<bxs-bottom-sheets v-model="isShow" title="自定义标题">
  <div>你的自定义内容</div>
</bxs-bottom-sheets>
<!-- 自定义顶部栏 -->
<bxs-bottom-sheets v-model="isShow">
  <div slot="header">
    <bxs-tab>
      <bxs-tab-item>这是个</bxs-tab-item>
      <bxs-tab-item>自定义</bxs-tab-item>
      <bxs-tab-item>标题</bxs-tab-item>
    </bxs-tab>
  </div>
  <div>你的自定义内容</div>
</bxs-bottom-sheets>
<!-- 自定义底部栏 -->
<bxs-bottom-sheets v-model="isShow" title="自定义标题">
  <div>你的自定义内容</div>
  <div slot="footer">
    <bxs-tab>
      <bxs-tab-item>这是个</bxs-tab-item>
      <bxs-tab-item>自定义</bxs-tab-item>
      <bxs-tab-item>底部栏</bxs-tab-item>
    </bxs-tab>
  </div>
</bxs-bottom-sheets>
```
```js
import { BottomSheets, Tab, TabItem } from 'bxs-ui-vue';
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    close () {
      this.isShow = false;
    }
  },
  components: {
    [BottomSheets.name]: BottomSheets,
    [Tab.name]: Tab,
    [TabItem.name]: TabItem
  }
}
```

### Attributes
| 参数| 说明 | 类型 | 默认值 |
| --- | --- | --- |  --- |
| v-model | 必选，是否显示浮层 | Boolean | false |
| title | 可选，顶部栏标题,hideHeader为false并且slot未被覆盖时有效 | String | '' |
| height | 可选，半屏浮层的固定高度 | Number | null |
| useBScroll | 可选，是否使用better-scroll，值为false时，使用默认滚动 | Boolean | true |
| hideHeader | 可选，是否隐藏浮层顶部栏 | Boolean | false |
| hideFooter | 可选，是否隐藏浮层底部栏 | Boolean | false |
| overlay | 可选，是否显示遮罩背景 | Boolean | true |
| close-on-click-overlay | 可选，点击遮罩是否关闭 | Boolean | true |
| lock-scroll | 可选，是否禁止document滚动，在弹出层无滚动或自己重写滚动情况下使用 | Boolean | false |
| prevent-scroll-through | 可选，是否防止滚动穿透，在弹出层使用默认滚动下使用 | Boolean | false |

### Slot
| 参数 | 说明 |
| --- | --- |
| — | 默认slot |
| header | 顶部栏slot |
| footer | 底部栏slot |

### Event
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| bscroll | 可选，better-scroll初始化后回调事件 | scroll对象 |
