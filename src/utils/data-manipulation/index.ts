export const arrayToObject = <T>(arr: T[]): { [key: string]: T } =>
  arr.reduce((prev, curr: any) => ({ ...prev, [curr.id]: curr }), {})
