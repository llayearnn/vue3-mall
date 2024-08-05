<script setup lang="ts">
import moment from 'moment'
import { debounce } from 'throttle-debounce'
import { useNow } from '@vueuse/core'
import drugList from '@/static/drug.json'

const { now, pause, resume } = useNow({ controls: true })
interface ListItem {
  value: string
  label: string
  [key: string]: any
}

const list = ref<ListItem[]>([]) as any
const options = ref<ListItem[]>([])
const value = ref<string>('1794917946657607682')
const loading = ref(false)
onMounted(() => {
  list.value = drugList.map(item => {
    return {
      ...item,
      label: item.drugName,
    }
  })
})

const debounces = debounce(750, (str: string) => {
  remoteMethod(str)
})
const remoteMethod = (query: string) => {
  if (query || true) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter((item: any) => {
        return item.drugName.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}

const changeDrugName = (val: any) => {
  value.value = list.value.find((item: any) => item.id == val)?.drugName
}

const searchParam = ref({
  query: '',
  checkAll: false,
})
const test = async () => {
  const { flag } = await Demo()
  console.log('flag', flag)

  console.log(22222)
}

const Demo = (): any => {
  const { resolve, promise } = Promise.withResolvers()
  setTimeout(() => {
    resolve({
      flag: true,
    })
  }, 3000)
  console.log('promise ', promise)
  return promise
}
const firstFlag = ref(false)
const show = (val: boolean, _res: any) => {
  firstFlag.value &&
    ElMessage[`${val ? 'success' : 'error'}`](
      `div1${val ? '出现了' : '消失了'}`,
    )
  firstFlag.value = true
}

const changeSize = debounce(300, async (params: any) => {
  console.log(params)
})
</script>

<template>
  <div>
    <el-button @click="pause()" type="primary">Pause</el-button>
    <el-button @click="resume()">Resume</el-button>
    <el-button @click="test()">promise</el-button>

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
        style="width: 580px"
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
                <!-- {{ options }} -->
              </el-form>
            </div>
            <div class="flex pl-10">
              <div class="w-100">药品名称</div>
              <div class="w-160">规格</div>
              <div class="w-50">单价</div>
              <div class="w-50">基药</div>
              <div class="w-50">集采</div>
              <div class="w-50">抗菌药</div>
            </div>
          </div>
        </template>
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.label"
          :value="item.id"
        >
          <div class="flex itemTest">
            <div class="w-100">{{ item.drugName }}</div>
            <div class="w-160">{{ item.drugSpec }}</div>
            <div class="w-50">{{ item.retailPrice }}</div>
            <div class="w-50">{{ item.packageUnit }}</div>
            <div class="w-50">{{ item.drugClass }}</div>
            <div class="w-50">{{ item.supplierName?.slice(0, 6) }}</div>
          </div>
        </el-option>
      </el-select>
    </div>
    <div
      style="border: 1px dashed black"
      v-intersect="show"
      class="w-500 h-550"
    >
      1
    </div>
    <div style="border: 1px dashed red" class="w-500 h-650 mt-10">2</div>
    <div
      v-resize="changeSize"
      style="border: 1px dashed green"
      class="w-40% h-200 mt-10 resize"
    >
      3
    </div>
  </div>
</template>
<style lang="scss" scoped>
ul li {
  padding: 0 10;
  &:nth-child(n + 2) {
    border-top: 1px solid var(--el-border-color-light);
  }
}
</style>
