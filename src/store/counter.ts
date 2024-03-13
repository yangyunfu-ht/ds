import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  persist: {
    key: 'counter',
    storage: sessionStorage,
    paths: undefined,
  },
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
