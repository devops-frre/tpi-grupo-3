type RequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
