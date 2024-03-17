import { defineComponent } from 'vue'
// import UseIcon from '@/components/UseIcon.tsx'
import { routes } from '@/utils/MenuData.ts'
import { reactive } from 'vue'
import type { MenuItem } from '@/utils/MenuData.ts'
import SearchMenu from './SearchMenu.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const menus = reactive(routes)
    const defaultActive = ref<string>('/')
    const route = useRoute()

    const renderMenu = (items: Array<MenuItem>) => {
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

    watch(route, formRoute => {
      defaultActive.value = formRoute.path
    })

    return () => (
      <>
        <div style="background-color:#fff;display: flex;justify-content:center;align-items: center;height:70px">
          {/* <img src="https://tms.dswljt.cn/static/img/logo.f0396b2.png" style="width:200px;height:55px" alt="logo" /> */}
          <span>logo</span>
        </div>
        <div style="height: 60px;display: flex;justify-content:center;align-items: center">
          <SearchMenu></SearchMenu>
        </div>
        <el-menu
          router
          default-active={defaultActive.value}
          unique-opened
          style={{
            width: '250px',
            height: 'calc(100% - 130px)',
            overflowY: 'scroll',
            borderRight: 'none',
          }}
        >
          {renderMenu(menus)}
        </el-menu>
      </>
    )
  },
})
