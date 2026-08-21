export function isEmpty (opt: any): boolean {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

export function not (fun: (...params: any[]) => any) {
  return (...params: any[]) => !fun(...params)
}

export function includes (str: any, query: string): boolean {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined'
  if (str === null) str = 'null'
  if (str === false) str = 'false'
  const text = str.toString().toLowerCase()
  return text.indexOf(query.trim()) !== -1
}

export function stripGroups (options: any[]): any[] {
  return options.filter((option) => !option.$isLabel)
}

export function flattenOptions (values: string, label: string) {
  return (options: any[]): any[] =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        })
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

export const flow = (...fns: Array<(x: any) => any>) => (x: any) =>
  fns.reduce((v, f) => f(v), x)
