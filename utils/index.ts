export const waitUntilFunctionSucceeds = async (
  fn: () => Promise<any>, maxRetries = 10, retryInterval = 1000
  ) => {
  let retries = 0
  let result
  while (retries < maxRetries) {
    console.log('Trying', retries)
    try {
      result = await fn()
      break
    } catch (e) {
      console.error(e)
      retries++
      await new Promise((resolve) => setTimeout(resolve, retryInterval))
    }
  }
  return result;
}