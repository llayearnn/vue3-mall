import { onMounted } from 'vue'
import useCategoryStore from '@/store/modules/category'

// const { defineProps } = await import('vue')
let categoryStore = useCategoryStore()
onMounted(() => {
  getC1()
})
const getC1 = async () => {
  categoryStore.getC1()
}
export default (await import('vue')).defineComponent({
  props: {
    ...['scene'],
  },
  setup() {
    return {}
  },
})
