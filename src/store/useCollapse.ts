import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCollapseStore = defineStore(
  'collapse',
  () => {
    const isCollapse = ref<boolean>(false)

    const toggle = () => (isCollapse.value = !isCollapse.value)

    return { isCollapse, toggle }
  },
  {
    persist: {
      key: 'collapse',
      storage: sessionStorage,
      paths: ['isCollapse'],
    },
  }
)
