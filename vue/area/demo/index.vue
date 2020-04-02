<template>
  <div>
    <div style="background:#fff;padding:15px;">
      <h6>默认用法</h6>
      <bxs-button
        type="primary"
        @click="isShow=true"
        >
        选择地区
      </bxs-button>
      <div class="text">
        当前选中：{{ selectData.provinceName + selectData.cityName + selectData.countyName }}
      </div>
      <bxs-area
        v-model="isShow"
        :area-data="areaData"
        @confirm="confirm"
        />
    </div>
    <div style="background:#fff;padding:15px;margin-top:15px;">
      <h6>默认选中地区</h6>
      <bxs-button
        type="primary"
        @click="isShow2=true"
        >
        选择地区
      </bxs-button>
      <div class="text">
        当前选中：{{ selectData2.provinceName + selectData2.cityName + selectData2.countyName }}
      </div>
      <bxs-area
        :area-select="value"
        v-model="isShow2"
        :area-data="areaData"
        @confirm="confirm2"
        :show-district="showDistrict"
        :key-name="keyName"
        :value-name="valueName"
        :title="title"
        />
    </div>
    <div style="background:#fff;padding:15px;margin-top:15px;">
      <h6>只显示省市</h6>
      <bxs-button
        type="primary"
        @click="isShow3=true"
        >
        选择地区
      </bxs-button>
      <div class="text">
        当前选中：{{ selectData3.provinceName + selectData3.cityName + selectData3.countyName }}
      </div>
      <bxs-area
        v-model="isShow3"
        :area-data="areaData"
        @confirm="confirm3"
        :show-district="false"
        />
    </div>
  </div>
</template>
<script>
import { province, city, area } from './address'

export default {
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
      title: '修改标题',
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
      console.log(data)
    },
    confirm2(data) {
      this.selectData2 = data
    },
    confirm3(data) {
      this.selectData3 = data
    },
  },
}
</script>
<style>
h6 {
  padding: 15px 0;
}
.text {
  font-size: 16px;
  margin-top: 15px;
}
</style>
