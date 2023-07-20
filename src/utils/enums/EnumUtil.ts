export function getEnumByString<T>(
  key: string | undefined,
  e: T
): T[keyof T] | undefined {
  if (key) {
    return e[key as keyof typeof e];
  }
}
