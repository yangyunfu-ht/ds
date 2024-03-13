/* eslint-disable @typescript-eslint/ban-ts-comment */
export function flatArray<T> (arr: Array<T>, level = 1, propsName: string = 'children'): Array<T>  {
  let result: Array<T> = []
  for(let i = 0; i < arr.length; i++) {
    // @ts-expect-error
    if(Array.isArray(arr[i][propsName]) && level) {
      // @ts-expect-error
      result = result.concat(flatArray(arr[i][propsName], level - 1))
    } else {
      if(level) {
        result.push(arr[i])
      }
    }
  }
  return result
}

