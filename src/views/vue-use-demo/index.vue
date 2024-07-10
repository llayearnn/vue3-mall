<script setup lang="ts">
import moment from 'moment'
import { debounce } from 'throttle-debounce'
import { useNow } from '@vueuse/core'

const { now, pause, resume } = useNow({ controls: true })
interface ListItem {
  value: string
  label: string
  [key: string]: any
}

const list = ref<ListItem[]>([])
const options = ref<ListItem[]>([])
const value = ref<string[]>([])
const loading = ref(false)
onMounted(() => {
  list.value = states.map((item, index) => {
    return {
      value: `value:${item}`,
      label: `${item}`,
      name: `药${item}`,
      ji: `${index / 2 == 0 ? '是' : '否'}`,
      cai: `${index / 2 == 1 ? '是' : '否'}`,
      kang: `${index / 3 == 0 ? '是' : '否'}`,
      price: `${index * 10}`,
    }
  })
})

const debounces = debounce(750, (str: string) => {
  remoteMethod(str)
})
const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter(item => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}

const changeDrugName = (val: any) => {
  console.log(val)
}

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
const searchParam = ref({
  query: '',
  checkAll: false,
})
</script>

<template>
  <div>
    <el-button @click="pause()" type="primary">Pause</el-button>
    <el-button @click="resume()">Resume</el-button>

    <h1 text-black absolute right-0 top-0>
      {{ moment(now).format('YYYY-MM-DD HH:mm:ss') }}
    </h1>
    <div class="h-200 overflow-y-auto">
      <el-select
        v-model="value"
        filterable
        remote
        reserve-keyword
        placeholder="请选择药品"
        :remote-method="debounces"
        @change="changeDrugName"
        :loading="loading"
        style="width: 300px"
      >
        <template #header>
          <div>
            <div>
              <el-form :inline="true">
                <el-form-item label="药房">
                  <el-input
                    v-model="searchParam.query"
                    placeholder="请选择药房"
                    @input="debounces"
                  />
                </el-form-item>
                <el-form-item label="">
                  <el-checkbox v-model="searchParam.checkAll">
                    <span class="text-red">显示0库存药品</span>
                  </el-checkbox>
                </el-form-item>
              </el-form>
            </div>
            <div class="flex pl-10">
              <div class="w-100">药品名称</div>
              <div class="w-100">规格</div>
              <div class="w-50">单价</div>
              <div class="w-50">基药</div>
              <div class="w-50">集采</div>
              <div class="w-50">抗菌药</div>
            </div>
          </div>
        </template>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <div class="flex">
            <div class="w-100">{{ item.name }}</div>
            <div class="w-100">{{ item.label }}</div>
            <div class="w-50">{{ item.price }}</div>
            <div class="w-50">{{ item.ji }}</div>
            <div class="w-50">{{ item.cai }}</div>
            <div class="w-50">{{ item.kang }}</div>
          </div>
        </el-option>
      </el-select>
    </div>
  </div>
</template>
