import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export const useApi = () => {
  const isFetching = ref(false)
  const error = ref()

  const toast = useToast()
  const callApi = async (callback: Function, options?: {
    errorMsg?: string,
    cache?: { id: string, type?: 'session' | 'local' },
    successMsg?: string
  }) => {
    try {
      isFetching.value = true
      // Cache block scope
      if (options?.cache?.id) {
        if (options.cache.type === 'local') {
          const cachedResponse = localStorage.getItem(options.cache.id)
          if (cachedResponse) {
            return JSON.parse(cachedResponse)
          }
        }
        // Default to session storage
        if ((options.cache.type || 'session') === 'session') {
          const cachedResponse = sessionStorage.getItem(options.cache.id)
          if (cachedResponse) {
            return JSON.parse(cachedResponse)
          }
        }
      }
      // Callback for api call
      const res = await callback()
      // Block scope for response handlers
      if (options?.successMsg) toast.success(options.successMsg)

      // Set caching for next time
      // default to session storage
      if (options?.cache?.id && (options?.cache?.type || 'session') === 'session') sessionStorage.setItem(options.cache.id, JSON.stringify(res))
      if (options?.cache?.id && options?.cache?.type === 'local') localStorage.setItem(options.cache.id, JSON.stringify(res))
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