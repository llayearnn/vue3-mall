// import { defineConfig, presetAttributify, presetUno } from 'unocss'

// export default defineConfig({
//   shortcuts: {
//     'wh-full': 'w-full h-full',
//   },
//   presets: [presetUno(), presetAttributify()],
// })
import {
  presetAttributify,
  presetUno,
  toEscapedSelector,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { UserConfig } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

const parseVar = (str: string) => {
  if (str.startsWith('--')) return `var(${str})`
  else return `#${str}`
}
const config: UserConfig = {
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx({ baseFontSize: 4 }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [
    [
      /^bc-((?:\([^)]+\))|.*[\da-zA-Z)]$)/,
      ([, color]) => ({ 'border-color': parseVar(color) }),
    ],
    [
      /^bgc-((?:\([^)]+\))|.*[\da-zA-Z)]$)/,
      ([, color]) => ({ 'background-color': parseVar(color) }),
    ],
    [
      /^h-calc-(\d+)$/,
      ([, height]) => ({ height: `calc(100% - ${height}px)` }),
    ],
    [/^w-calc-(\d+)$/, ([, width]) => ({ width: `calc(100% - ${width}px)` })],
    [/^p-(\d+)-(\d+)$/, ([, tb, lr]) => ({ padding: `${tb}px ${lr}px` })],
    [/^m-(\d+)-(\d+)$/, ([, tb, lr]) => ({ margin: `${tb}px ${lr}px` })],
    [/^lpc-(.+\d)$/, ([, num]) => ({ 'letter-spacing': `${num}` })],
    [
      /^border-(.+)-(\d+)-(none|solid|dotted|dashed)-((?:\([^)]+\))|.*[\da-zA-Z)]$)/,
      ([, p, width, type, color]) => {
        return { [`border-${p}`]: `${width}px ${type} ${parseVar(color)}` }
      },
    ],
    [
      /^border-(\d+)-(none|solid|dotted|dashed)-((?:\([^)]+\))|.*[\da-zA-Z)]$)/,
      ([, width, type, color]) => {
        return { [`border`]: `${width}px ${type} ${parseVar(color)}` }
      },
    ],
    [
      /^c-((?:\([^)]+\))|.*[\da-zA-Z)]$)/,
      ([, color]) => ({ color: `${parseVar(color)}` }),
    ],
    [
      /^nth\-(\d+)\:(.*)$/,
      async ([, d, r], { rawSelector, generator }) => {
        const rule = (await generator.parseToken(r)) || []
        return `${toEscapedSelector(rawSelector)} > *:nth-child(${d}) { ${rule[0][2]} }`
      },
    ],
    [
      /^flex-flow-(.+)-(.+)$/,
      ([, direction, wrap]) => {
        return { [`flex-flow`]: `${direction} ${wrap}` }
      },
    ],
  ],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['f-j-b', 'flex flex-justify-between'],
    ['f-j-ad', 'flex grid-justify-around'],
    ['f-c-c', 'flex justify-center items-center'],
    ['flex-col', 'flex flex-col'],
    ['text-ellipsis', 'truncate'],
    ['page-view', 'box-border h-full p-5 bgc-(--el-bg-color)'],
  ],
}
export default config
