import pico from 'picocolors'
import { readFileSync } from 'fs'
const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|init|merge|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)?: .{1,50}/
const commitRE1 =
  /^(revert: )?(feat|init|merge|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg) && !commitRE1.test(msg)) {
  console.error(
    ` ${pico.red(' ERROR ')} ${pico.red(`	invalid commit message format.`)}\n\n` +
      pico.red(
        `Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      ) +
      `    ${pico.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${pico.green(`fix: handle events on blur`)}\n\n` +
      pico.red(`  查看 ./.versionrc 获取基本配置信息.`),
  )
  process.exit(1)
}
