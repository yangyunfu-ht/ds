import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface TagLink {
  name: string
  path: string
}

export const useTabs = () => {
  const tagLinks = ref<Array<TagLink>>([])

  const route = useRoute()

  const addTabLink = (name: string, path: string) => {
    tagLinks.value.push({ name, path })
  }

  const removeTabLink = (path: string) => {
    console.log(path)
    tagLinks.value = tagLinks.value.filter(link => link.path !== path)
  }

  watch(route, to => {
    const { name, path } = to
    if (
      tagLinks.value.map(link => link.name).includes(name as string) ||
      tagLinks.value.map(link => link.path).includes(path) ||
      path === '' ||
      path === '/'
    )
      return
    addTabLink(name as string, path)
  })

  return {
    tagLinks,
    addTabLink,
    removeTabLink,
  }
}
