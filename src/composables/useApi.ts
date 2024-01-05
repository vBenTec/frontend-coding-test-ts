import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export const useApi = () => {
  const isFetching = ref(false)
  const error = ref()

  const toast = useToast()
  const callApi = async (callback: Function, options?: {
    errorMsg?: string,
    cache?: { id: string },
    successMsg?: string
  }) => {
    try {
      isFetching.value = true
      // Get session storage cache and return if exists
      if (options?.cache?.id) {
        const cachedResponse = sessionStorage.getItem(options.cache.id)
        if (cachedResponse) {
          return JSON.parse(cachedResponse)
        }
      }
      const res = await callback()
      if (options?.successMsg) toast.success(options.successMsg)
      // Set session storage cache for next time
      if (options?.cache?.id) sessionStorage.setItem(options.cache.id, JSON.stringify(res))
      return res
    } catch (e) {
      error.value = e
      console.error(e)
      if (options?.errorMsg) toast.error(options.errorMsg)
    } finally {
      isFetching.value = false
    }
  }

  return { isFetching, error, callApi }
}