import { defineComponent, resolveComponent, h } from "vue";


export default defineComponent({
  props: {
    icon: {
      type: String,
    },
  },
  setup(props) {
    // resolveComponent 接收字符串，解析对应的 element-plus 图标组件
    const elIcon = resolveComponent(props.icon as string);
    // h 函数渲染 elIcon 组件
    return () => (
        <el-icon>{h(elIcon)}</el-icon>
    );
  }
});
