export const classList = (...classes: (string | Record<string, any>)[]) => {
  return classes
    .map(c => {
      return typeof c === 'string'
        ? c
        : Object.entries(c)
            .filter(([, v]) => v)
            .map(([k]) => k)
    })
    .flat()
    .join(' ')
}
