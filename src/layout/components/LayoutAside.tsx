import { defineComponent } from 'vue'
// import UseIcon from '@/components/UseIcon.tsx'
import { routes } from '@/utils/MenuData.ts'
import { reactive } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
  setup() {
    const menus = reactive(routes)

    const renderMenu = (items: Array<RouteRecordRaw>) => {
      return items.map((item, index: number) =>
        item.children ? (
          <el-sub-menu
            index={item.path}
            key={index}
            v-slots={{ title: () => <span>{item.name}</span> }}
          >
            {renderMenu(item.children)}
          </el-sub-menu>
        ) : (
          <el-menu-item
            index={item.path}
            key={index}
            v-slots={{ title: () => <span>{item.name}</span> }}
          ></el-menu-item>
        )
      )
    }

    return () => (
      <el-menu router default-active="/" unique-opened>
        { renderMenu(menus) }
      </el-menu>
    )
  },
})
