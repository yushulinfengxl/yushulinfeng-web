import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  // Site config file
  const count = ref(0)

  const config = useRuntimeConfig()

  const version = ref(config.public.version)

  const test = ref(0)

  return {
    count,
    version,
    test
  }
},
{
  // 持久化
  persist: true,
})