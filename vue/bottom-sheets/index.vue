<template>
  <transition
    name="bx-animate-slide"
    @enter="enter"
    @appear="enter"
    @after-enter="afterEnter"
    >
    <div
      class="bx-sheets-layer"
      v-if="value"
      >
      <div
        class="bx-sheets-header"
        v-if="!hideHeader"
        >
        <slot name="header">
          <div class="bx-sheets-header-inner">
            <div class="bx-sheets-title">
              {{ title }}
            </div>
            <div
              class="bx-sheets-close"
              @click="closePopup"
              >
              <bxs-icon name="close" />
            </div>
          </div>
        </slot>
      </div>
      <div
        class="bx-sheets-content"
        :class="!useBScroll && 'bx-sheets-content--scroll'"
        >
        <div class="bx-sheets-scroll">
          <slot />
        </div>
      </div>
      <div
        class="bx-sheets-footer"
        v-if="!hideFooter"
        >
        <slot name="footer" />
      </div>
    </div>
  </transition>
</template>
<script>
import BScroll from 'better-scroll'
import Popup from '../mixins/popup/index'
import Icon from '../icon/index'
import { create } from '../utils/index'

export default create({
  name: 'bottom-sheets',
  mixins: [Popup],
  props: {
    // 半屏浮层的固定高度
    height: {
      type: Number,
      default: null,
    },
    // 是否使用better-scroll
    useBScroll: {
      type: Boolean,
      default: true,
    },
    // 是否隐藏浮层顶部栏
    hideHeader: {
      type: Boolean,
      default: false,
    },
    // 是否隐藏浮层底部栏
    hideFooter: {
      type: Boolean,
      default: false,
    },
    // 顶部栏标题
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      canScroll: false,
    }
  },
  methods: {
    // 关闭浮层
    closePopup() {
      this.$emit('input', false)
    },
    // 设置正文内容的位置
    setContentPosition() {
      const $header = document.querySelector('.bx-sheets-header')
      const $footer = document.querySelector('.bx-sheets-footer')
      this.headerHeight = 0
      if ($header) {
        this.headerHeight = $header.clientHeight
        this.wrapper.style.top = `${$header.clientHeight}px`
      }
      if ($footer) {
        this.wrapper.style.bottom = `${$footer.clientHeight}px`
      }
    },
    // 设置浮层的高度最大70%，最小40%
    setLayerHeight() {
      const $scroll = this.wrapper.children[0]
      const layerHeight = parseInt($scroll.clientHeight + this.headerHeight, 10)
      if (this.height) {
        this.canScroll = layerHeight > this.height
        this.layer.style.height = `${this.height}px`
        return false
      }
      const maxHeight = parseInt(
        document.documentElement.clientHeight * 0.7,
        10,
      )
      const minHeight = parseInt(
        document.documentElement.clientHeight * 0.4,
        10,
      )
      if (layerHeight >= maxHeight) {
        this.canScroll = true
        this.layer.style.height = `${maxHeight}px`
      } else if (layerHeight <= minHeight) {
        this.layer.style.height = `${minHeight}px`
      } else {
        this.layer.style.height = `${layerHeight}px`
      }
      return true
    },
    initPopup() {
      this.layer = document.querySelector('.bx-sheets-layer')
      this.wrapper = document.querySelector('.bx-sheets-content')
      if (this.layer) {
        this.setContentPosition()
        this.setLayerHeight()
      }
    },
    // 动画enter回调
    enter() {
      this.initPopup()
    },
    // 动画after-enter回调
    afterEnter() {
      if (this.useBScroll && this.canScroll) {
        // eslint-disable-next-line
        var scroll = new BScroll(this.wrapper)
        this.$emit('bscroll', scroll)
      }
    },
  },
  components: {
    [Icon.name]: Icon,
  },
})
</script>
<style lang="postcss">
@import './index.css';
</style>
