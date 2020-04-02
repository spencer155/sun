<template>
  <bxs-bottom-sheets
    v-model="isShow"
    title="选择地区"
    @close="isShow=false"
    :use-b-scroll="false"
    :height="375"
    >
    <div
      class="bx-area-header"
      slot="header"
      >
      <div class="bx-area-title">
        <div
          class="bx-area-cancel"
          @click="isShow=false"
          >
          取消
        </div>
        <div>{{ title }}</div>
        <div
          class="bx-area-confirm"
          @click="confirm"
          :class="{'bx-area-confirm--primary': isSelectionDone}"
          >
          确定
        </div>
      </div>
      <div class="bx-area-tabs bx-hairline--bottom">
        <div
          @click="switchTab('provinceItem')"
          class="bx-area-tab"
          :class="{'bx-area-active': tabActive === 'provinceItem'}"
          >
          {{ provinceName || '请选择' }}
        </div>
        <div
          @click="switchTab('cityItem')"
          class="bx-area-tab"
          :class="{'bx-area-active': tabActive === 'cityItem'}"
          v-if="provinceName"
          >
          {{ cityName || '请选择' }}
        </div>
        <div
          @click="switchTab('countyItem')"
          class="bx-area-tab"
          :class="{'bx-area-active': tabActive === 'countyItem'}"
          v-if="cityName && showDistrict"
          >
          {{ countyName || '请选择' }}
        </div>
      </div>
    </div>
    <div class="bx-area-container">
      <ul
        class="bx-area-items"
        v-if="tabActive === 'provinceItem'"
        >
        <li
          class="bx-area-item"
          v-for="item in provinceList"
          :key="item[keyName]"
          @click="selectProvince(item[keyName], item[valueName])"
          :class="{'bx-area-active': item[keyName] === provinceCode}"
          >
          {{ item[valueName] }}
        </li>
      </ul>
      <ul
        class="bx-area-items"
        v-if="tabActive === 'cityItem'"
        >
        <li
          class="bx-area-item"
          v-for="item in cityList"
          :key="item[keyName]"
          @click="selectCity(item[keyName], item[valueName])"
          :class="{'bx-area-active': item[keyName] === cityCode}"
          >
          {{ item[valueName] }}
        </li>
      </ul>
      <ul
        class="bx-area-items"
        v-if="tabActive === 'countyItem' && showDistrict"
        >
        <li
          class="bx-area-item"
          v-for="item in countyList"
          :key="item[keyName]"
          @click="selectCounty(item[keyName], item[valueName])"
          :class="{'bx-area-active': item[keyName] === countyCode}"
          >
          {{ item[valueName] }}
        </li>
      </ul>
    </div>
  </bxs-bottom-sheets>
</template>
<script>
import { create } from '../utils'
import BottomSheets from '../bottom-sheets'

export default create({
  name: 'area',
  props: {
    showDistrict: {
      type: Boolean,
      default: true,
    },
    keyName: {
      type: String,
      default: 'code',
    },
    valueName: {
      type: String,
      default: 'name',
    },
    areaData: {
      type: Object,
      default: () => ({}),
    },
    areaSelect: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '选择地区',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tabActive: 'provinceItem',
      provinceCode: '',
      provinceName: '',
      cityCode: '',
      cityName: '',
      countyCode: '',
      countyName: '',
      provinceList: this.areaData.provinceList,
      cityList: [],
      countyList: [],
    }
  },
  computed: {
    isSelectionDone() {
      return (
        this.provinceCode &&
        this.cityCode &&
        (this.countyCode || !this.showDistrict)
      )
    },
    isShow: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  mounted() {
    if (this.areaSelect) {
      this.setValues()
    }
  },
  methods: {
    setValues() {
      const proCode = this.areaSelect.slice(0, 2)
      const cityCode = this.areaSelect.slice(0, 4)
      const vm = this
      let result
      if (proCode) {
        ;[result] = this.areaData.provinceList.filter(
          item =>
            parseInt(item[vm.keyName], 10) === parseInt(`${proCode}0000`, 10),
        )
        if (result) {
          vm.selectProvince(result[vm.keyName], result[vm.valueName])
          if (this.areaSelect.slice(2, 6) !== '0000' && cityCode) {
            ;[result] = this.areaData.cityList.filter(
              item =>
                parseInt(item[vm.keyName], 10) ===
                parseInt(`${cityCode}00`, 10),
            )
            if (result) {
              vm.selectCity(result[vm.keyName], result[vm.valueName])
              if (this.areaSelect.slice(4, 6) !== '00' && vm.showDistrict) {
                ;[result] = this.areaData.countyList.filter(
                  item =>
                    parseInt(item[vm.keyName], 10) ===
                    parseInt(vm.areaSelect, 10),
                )
                if (result) {
                  vm.selectCounty(result[vm.keyName], result[vm.valueName])
                }
              }
            }
          }
        }
      }
    },
    switchTab(activeTab) {
      this.tabActive = activeTab
      if (activeTab === 'provinceItem') {
        this.cityCode = ''
        this.cityName = ''
        this.countyCode = ''
        this.countyName = ''
      } else if (activeTab === 'cityItem') {
        this.countyCode = ''
        this.countyName = ''
      }
    },
    selectProvince(provinceCode, provinceName) {
      this.provinceCode = provinceCode
      this.provinceName = provinceName
      this.tabActive = 'cityItem'
      this.cityList = []
      this.areaData.cityList.forEach(city => {
        if (city.parentId === provinceCode) {
          this.cityList.push(city)
        }
      })
    },
    selectCity(cityCode, cityName) {
      this.cityCode = cityCode
      this.cityName = cityName
      if (this.showDistrict) {
        this.tabActive = 'countyItem'
        this.countyList = []
        this.areaData.countyList.forEach(county => {
          if (county.parentId === cityCode) {
            this.countyList.push(county)
          }
        })
      }
    },
    selectCounty(countyCode, countyName) {
      this.countyCode = countyCode
      this.countyName = countyName
    },
    confirm() {
      if (!this.isSelectionDone) {
        return
      }
      this.$emit('confirm', {
        provinceCode: this.provinceCode,
        provinceName: this.provinceName,
        cityCode: this.cityCode,
        cityName: this.cityName,
        countyCode: this.countyCode,
        countyName: this.countyName,
      })
      this.isShow = false
    },
  },
  components: {
    [BottomSheets.name]: BottomSheets,
  },
})
</script>
<style>
@import './index.css';
</style>
