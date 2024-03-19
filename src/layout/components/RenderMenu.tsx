import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import RenderIcon from '@/components/RenderIcon'

interface Menu {
  label?: string
  name?: string
  icon?: string
  path: string
  children?: Array<Menu>
}

export default defineComponent({
  props: {
    menus: {
      type: Array as PropType<Array<Menu>>,
      required: true,
    },
  },
  setup(props) {
    const renderMenu = (items: Array<Menu>) => {
      return items.map((item, index: number) =>
        item.children ? (
          <el-sub-menu
            index={item.path}
            key={index}
            v-slots={{
              title: () => (
                <div>
                  <span>{item.name || item.label}</span>
                  {item.icon ? <RenderIcon icon={item.icon} /> : null}
                </div>
              ),
            }}
          >
            {renderMenu(item.children)}
          </el-sub-menu>
        ) : (
          <el-menu-item
            index={item.path}
            key={index}
            v-slots={{
              title: () => (
                <div>
                  <span>{item.name || item.label}</span>
                  {item.icon ? <RenderIcon icon={item.icon} /> : null}
                </div>
              ),
            }}
          ></el-menu-item>
        )
      )
    }
    return () => renderMenu(props.menus)
  },
})
