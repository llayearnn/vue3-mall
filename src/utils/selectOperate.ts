export interface Dict {
  /** 字典值 */
  value?: string
  /** 字典名称 */
  label?: string
  /** 其他非必须属性 */
  [key: string]: any
}

/**
 * @description 下拉框 显示 label
 * @param value value值
 * @param options 下拉选项
 * @param label 需要回显的字段，默认是label
 * @param valueField 值的字段名
 * @returns 名称
 */
export const getSelectLabel = <T = Dict>(
  value: string,
  options: T[] = [],
  label: string = 'label',
  valueField: string = 'value',
): string => {
  if (!value) return ''
  const [obj] = options.filter((i: any) => i[valueField] === value) as any
  return obj?.[label] || value
}
