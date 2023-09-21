# remote-markdown-app

Markdown を扱えるライブラリの比較用サンプルアプリ

## marked

bf1eb09

```plain
Route (pages)                              Size     First Load JS
┌ ○ /                                      291 B          78.1 kB
├   /_app                                  0 B            77.8 kB
├ ○ /404                                   182 B          77.9 kB
└ ○ /marked                                18.9 kB        96.6 kB
+ First Load JS shared by all              77.8 kB
  ├ chunks/framework-6d147d7a7a824486.js   45.2 kB
  ├ chunks/main-52b35dd6c9360cbb.js        31.5 kB
  ├ chunks/pages/_app-5cb38e139d19a014.js  288 B
  └ chunks/webpack-287f111a8ff57cc4.js     748 B

○  (Static)  automatically rendered as static HTML (uses no initial props)
```
