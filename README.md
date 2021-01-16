## 自定义 Vuepress 主题

在 Vuepress 主题的基础上添加了一些组件，修改了一些样式，更像 Vue 3.0 的文档。

案例链接：[国内](https://uphg.gitee.io/vue-docs-universal/) | [GitHub](https://uphg.github.io/vue-docs-universal/)

## 使用

使用前需要将 `config.js` 中的 base 修改为自己的域名子目录，示例:

```js
module.exports = {
  base: '/vue-docs-universal/',
}
```

并且需要修改 `.vuepress/styles/index.styl` 中的 `$iconUrl` 的路径为对应路径

```styl
$iconUrl = '/vue-docs-universal'
```
