// eslint-disable-next-line no-undef
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n啥意思呢?你必须使用pnpm安装依赖🥵\u001b[39m\n`,
  )
  // eslint-disable-next-line no-undef
  process.exit(1) // 终止执行
}
// 必须使用 pnpm 作为包管理器的 脚本
// package.json 中scripts preinstall
