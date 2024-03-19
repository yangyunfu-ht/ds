import { defineComponent, resolveComponent, h } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
    },
  },
  setup(props) {
    const elIcon = resolveComponent(props.icon as string)
    return () => <el-icon>{h(elIcon)}</el-icon>
  },
})
