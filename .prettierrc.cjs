module.exports = {
  arrowParens: 'avoid', // 箭头函数只有一个参数时可以忽略括号,
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  endOfLine: 'lf', // 换行符使用 lf
  // jsxBracketSameLine: false, // jsx > 是否另起一行
  printWidth: 80, // 每行代码长度（默认80）
  proseWrap: 'preserve', // 是否要换行
  semi: false, // 声明结尾使用分号(默认true)
  singleQuote: true, // 使用单引号（默认false）
  tabWidth: 2, // 缩进字节数（默认2）
  useTabs: false, // 缩进不使用tab，使用空格（默认false）
  trailingComma: 'es5', // 多行使用拖尾逗号（默认none）
  parser: 'typescript', // 指定使用的解析器，默认是babylon
}
