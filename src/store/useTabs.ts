import { defineStore } from 'pinia'

interface Tabs {
  name: string
  path: string
}

export const useTabs = defineStore(
  'tabs',
  () => {
    const tabs = ref<Array<Tabs>>([])
    const addTab = (name: string, path: string) => {
      if (
        !tabs.value.map(tab => tab.name).includes(name) &&
        !tabs.value.map(tab => tab.path).includes(path)
      ) {
        tabs.value.unshift({
          name,
          path,
        })
      }
    }

    const removeTab = (path: string) => {
      tabs.value = tabs.value.filter(tab => tab.path !== path)
    }

    return { tabs, addTab, removeTab }
  },
  {
    persist: {
      key: 'header-tabs',
      storage: localStorage,
      paths: ['tabs'],
    },
  }
)
