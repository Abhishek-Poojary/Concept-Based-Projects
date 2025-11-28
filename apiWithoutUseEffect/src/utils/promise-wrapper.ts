export const wrapPromise = <T>(promise: Promise<T>) => {
  let status: "pending" | "success" | "error" = "pending"
  let result: T | unknown | null = null
  const suspender = promise.then(
    (res: T) => {
      status = "success"
      result = res
    },
    (err: unknown) => {
      status = "error"
      result = err
    },
  )

  return {
    read(): T {
      if (status === "pending") {
        throw suspender
      } else if (status === "error") {
        throw result
      }
      return result as T
    },
  }
}
