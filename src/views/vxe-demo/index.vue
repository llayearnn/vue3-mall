<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      size="medium"
      :edit-config="{ trigger: 'click', mode: 'row' }"
      :data="tableData"
    >
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column
        field="name"
        title="Name"
        :editRender="{ name: 'input' }"
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
    <el-form mb-50>
      <el-date-picker
        v-model="text"
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        format="YYYY-MM-DD HH:mm:ss"
        @change="changeExpireDate"
      />
      <div style="margin: 20px 0" />
      <span>{{ text }}</span>
    </el-form>
    <el-badge :value="100" :max="1000" class="item">
      <el-icon size="30px"><Bell /></el-icon>
    </el-badge>
    <div>
      <vxe-grid v-bind="gridOptions"></vxe-grid>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VxeTableInstance, VxeGridProps } from 'vxe-table'

const text = ref('2023-06-09 02:16:01')
const textarea = ref('')
interface RowVO {
  id?: number
  name: string
  role: string
  sex: string
  age: number
  address?: string
  time?: string | Date
  content?: string
}
const gridOptions = reactive<VxeGridProps<RowVO>>({
  rowConfig: {
    useKey: true,
  },
  columnConfig: {
    useKey: true,
  },
  columns: [
    { type: 'seq', width: 70, title: '序号' },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'content', title: 'Html', type: 'html', showOverflow: true },
    { field: 'role', title: 'Role', showOverflow: true },
  ],
  data: [
    {
      name: 'Test2',
      age: 28,
      sex: '男',
      role: '后端',
      content:
        '<img height="40" src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">',
    },
    {
      name: 'Test4',
      age: 26,
      sex: '男',
      role: '前端',
      content: '<a href="https://github.com/x-extends/vxe-table">我是链接</a>',
    },
    {
      name: 'Test3',
      age: 20,
      sex: '女',
      role: '程序员鼓励师',
      content:
        '<img height="40" src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">',
    },
    {
      name: 'Test1',
      age: 22,
      sex: '女',
      role: '设计师',
      content: '<div><span style="color: red">我是 Htmp 片段</span></div>',
    },
  ],
})
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
