<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      size="medium"
      :edit-config="{ trigger: 'click', mode: 'row' }"
      :data="tableData"
    >
      <vxe-column type="seq" width="70" title="序号"></vxe-column>
      <vxe-column
        field="name"
        title="Name"
        :edit-render="{ name: 'input' }"
      ></vxe-column>
      <vxe-column
        field="sex"
        title="Sex"
        :edit-render="{ name: 'input' }"
      ></vxe-column>
      <vxe-column
        field="age"
        title="Age"
        :edit-render="{ name: 'input' }"
      ></vxe-column>
      <vxe-column field="time" title="日期" :edit-render="{ name: 'input' }">
        <template #edit="scope" style="border: 1px solid red">
          <el-date-picker
            class="w-full"
            v-model="scope.row.time"
            type="datetime"
            @change="changeExpireDate"
            @visibleChange="visibleChange"
            @blur="blurChange"
            @input="updateRowStatus(scope)"
            value-format="YYYY-MM-DD HH:mm:ss"
            format="YYYY-MM-DD HH:mm:ss"
          />
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { VxeTableInstance } from 'vxe-table'
interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  time?: string | Date
}

const tableData = ref<RowVO[]>([
  {
    id: 10001,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    age: 28,
    address: 'test abc',
    time: '2020-11-05 12:25:33',
  },
  {
    id: 10002,
    name: 'Test2',
    role: 'Test',
    sex: 'Women',
    age: 22,
    address: 'Guangzhou',
    // time: new Date('2023-05-01 12:25:33').toLocaleString(),
    time: '2022-06-09 02:16:01',
  },
  {
    id: 10003,
    name: 'Test3',
    role: 'PM',
    sex: 'Man',
    age: 32,
    address: 'Shanghai',
    time: '2023-05-11 22:08:33',
  },
  {
    id: 10004,
    name: 'Test4',
    role: 'Designer',
    sex: 'Women',
    age: 24,
    address: 'Shanghai',
    time: '2019-01-23 09:35:99',
  },
])
const changeExpireDate = (val: any) => {
  ElMessage.warning(val)
}
const visibleChange = (val: any) => {
  console.log('visibleChange', val)
}
const blurChange = (val: any) => {
  console.log('visibleChange', val)
}
const tableRef = ref<VxeTableInstance<RowVO>>()
const updateRowStatus = (params: any) => {
  const $table = tableRef.value
  if ($table) {
    return $table.updateStatus(params)
  }
}
</script>
