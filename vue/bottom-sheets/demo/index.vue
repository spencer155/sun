<template>
  <div class="demo-sheets">
    <div class="bx-list">
      <div
        class="bx-list-item"
        @click="toggle(1)"
        >
        <div class="bx-list-item-title">
          最小高度
        </div>
        <div class="bx-list-item-link">
          <i class="bx-icon" />
        </div>
      </div>
      <div
        class="bx-list-item"
        @click="toggle(2)"
        >
        <div class="bx-list-item-title">
          自适应高度
        </div>
        <div class="bx-list-item-link">
          <i class="bx-icon" />
        </div>
      </div>
      <div
        class="bx-list-item"
        @click="toggle(3)"
        >
        <div class="bx-list-item-title">
          最大高度（better-scroll）
        </div>
        <div class="bx-list-item-link">
          <i class="bx-icon" />
        </div>
      </div>
      <div
        class="bx-list-item"
        @click="toggle(7)"
        >
        <div class="bx-list-item-title">
          固定高度
        </div>
        <div class="bx-list-item-link">
          <i class="bx-icon" />
        </div>
      </div>
      <div
        class="bx-list-item"
        @click="toggle(4)"
        >
        <div class="bx-list-item-title">
          去掉顶部标题栏
        </div>
        <div class="bx-list-item-link">
          <i class="bx-icon" />
        </div>
      </div>
      <div
        class="bx-list-item"
        @click="toggle(5)"
        >
        <div class="bx-list-item-title">
          自定义顶部标题栏
        </div>
        <div class="bx-list-item-link">
          <i class="bx-icon" />
        </div>
      </div>
      <div
        class="bx-list-item"
        @click="toggle(6)"
        >
        <div class="bx-list-item-title">
          扩展底部内容
        </div>
        <div class="bx-list-item-link">
          <i class="bx-icon" />
        </div>
      </div>
      <div
        class="bx-list-item"
        @click="toggle(8)"
        >
        <div class="bx-list-item-title">
          使用默认滚动
        </div>
        <div class="bx-list-item-link">
          <i class="bx-icon" />
        </div>
      </div>
    </div>
    <bxs-bottom-sheets
      v-model="show_1"
      title="普通半屏浮层"
      >
      <div class="ui-sheets-normal">
        <p>这是一个最小高度的半屏浮层</p>
        <p>浮层的最小高度为屏幕的40%</p>
      </div>
    </bxs-bottom-sheets>
    <bxs-bottom-sheets
      v-model="show_2"
      title="普通半屏浮层"
      >
      <div class="ui-sheets-normal">
        <p>这是一个普通的半屏浮层</p>
        <p>浮层大于屏幕的40%，小于屏幕的70%时，自适应</p>
        <br>
        <p>这是一个自适应的半屏浮层</p>
        <p>这是一个自适应的半屏浮层</p>
        <p>这是一个自适应的半屏浮层</p>
        <p>这是一个自适应的半屏浮层</p>
        <p>这是一个自适应的半屏浮层</p>
        <p>这是一个自适应的半屏浮层</p>
        <p>这是一个自适应的半屏浮层</p>
        <p>这是一个自适应的半屏浮层</p>
        <p>这是一个自适应的半屏浮层</p>
        <p>这是一个自适应的半屏浮层</p>
      </div>
    </bxs-bottom-sheets>
    <bxs-bottom-sheets
      v-model="show_3"
      title="普通半屏浮层"
      >
      <div class="ui-sheets-normal">
        <p>这是一个最大高度的半屏浮层</p>
        <p>浮层的最大高度为屏幕的70%</p>
        <p>默认开启better-scroll</p>
        <br>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
      </div>
    </bxs-bottom-sheets>
    <bxs-bottom-sheets
      v-model="show_4"
      :hide-header="!0"
      >
      <div class="ui-sheets-normal">
        <p>这是一个最小高度的半屏浮层</p>
        <p>浮层的最小高度为屏幕的40%</p>
      </div>
    </bxs-bottom-sheets>
    <bxs-bottom-sheets
      v-model="show_5"
      >
      <div
        slot="header"
        class="ui-sheets-header"
        >
        <bxs-tab class="ui-sheets-tab">
          <bxs-tab-item>这是个</bxs-tab-item>
          <bxs-tab-item>自定义</bxs-tab-item>
          <bxs-tab-item>标题</bxs-tab-item>
        </bxs-tab>
        <div
          class="ui-sheets-close"
          @click="toggle(5)"
          >
          <bxs-icon name="close" />
        </div>
      </div>
      <div class="ui-sheets-normal">
        <p>这是一个最小高度的半屏浮层</p>
        <p>浮层的最小高度为屏幕的40%</p>
      </div>
    </bxs-bottom-sheets>
    <bxs-bottom-sheets
      v-model="show_6"
      title="扩展浮层内容"
      >
      <div class="ui-sheets-normal">
        <p>这是一个最大高度的半屏浮层</p>
        <p>浮层的最大高度为屏幕的70%</p>
        <p>默认开启better-scroll</p>
        <br>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
      </div>
      <div
        slot="footer"
        class="ui-sheets-footer"
        >
        <bxs-tab>
          <bxs-tab-item>这是</bxs-tab-item>
          <bxs-tab-item>底部</bxs-tab-item>
          <bxs-tab-item>内容</bxs-tab-item>
        </bxs-tab>
      </div>
    </bxs-bottom-sheets>
    <bxs-bottom-sheets
      v-model="show_7"
      title="普通半屏浮层"
      :height="450"
      >
      <div class="ui-sheets-normal">
        <p>这是一个固定高度的半屏浮层</p>
        <p>浮层的最小高度为屏幕的40%</p>
        <p>浮层的最大高度为屏幕的70%</p>
        <p>默认开启better-scroll</p>
        <br>
        <p>这是一个固定高度的半屏浮层</p>
        <p>这是一个固定高度的半屏浮层</p>
        <p>这是一个固定高度的半屏浮层</p>
        <p>这是一个固定高度的半屏浮层</p>
        <p>这是一个固定高度的半屏浮层</p>
        <p>这是一个固定高度的半屏浮层</p>
      </div>
    </bxs-bottom-sheets>
    <bxs-bottom-sheets
      v-model="show_8"
      title="默认滚动"
      :use-b-scroll="!1"
      :prevent-scroll-through="!0"
      >
      <div class="ui-sheets-normal">
        <p>这是一个最大高度的半屏浮层</p>
        <p>关闭better-scroll</p>
        <p>默认滚动</p>
        <br>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
        <p>这是一个最大高度的半屏浮层</p>
      </div>
    </bxs-bottom-sheets>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_1: false,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      show_6: false,
      show_7: false,
      show_8: false,
    }
  },
  methods: {
    toggle(type) {
      const key = `show_${type}`
      this[key] = !this[key]
    },
  },
}
</script>

<style lang="less">
@import '~bxs-ui/packages/style/base/tools.less';
.demo-sheets {
  font-size: 30px;
}
.ui-sheets-normal {
  padding: 15px 15px;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}
.ui-sheets-footer {
  position: relative;
  &::before {
    .border-top();
  }
  .bx-tab {
    background: transparent;
  }
}
.ui-sheets-header {
  position: relative;
  &::after {
    .border-bottom();
  }
  .ui-sheets-tab {
    margin-right: 50px;
    &::after {
      height: 0;
    }
  }
  .ui-sheets-close {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 15px;
    font-size: 0;
    line-height: 1;
    .bx-icon {
      display: inline-block;
      margin-top: 13px;
      font-size: 18px;
      color: #ccc;
    }
  }
}
</style>
