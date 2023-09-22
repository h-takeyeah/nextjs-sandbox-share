# remote-markdown-app

Markdown を扱えるライブラリの比較用サンプルアプリ

react-markdown と remark-react が remark のバージョンで喧嘩したので，react-markdown だけ別ブランチになっている．react-markdown の結果は[こちら](https://github.com/h-takeyeah/nextjs-sandbox-share/tree/react-markdown/remote-markdown-app#react-markdown)．remark-react は remark-math@4 じゃないと動かなかったのだが，最新版は6なので react-markdown の方がいいかも．

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

## micromark

627798c

```plain
Route (pages)                              Size     First Load JS
┌ ○ /                                      291 B          78.1 kB
├   /_app                                  0 B            77.8 kB
├ ○ /404                                   182 B          77.9 kB
├ ○ /marked                                18.9 kB        96.7 kB
└ ○ /micromark                             91.4 kB         169 kB
+ First Load JS shared by all              77.8 kB
  ├ chunks/framework-6d147d7a7a824486.js   45.2 kB
  ├ chunks/main-52b35dd6c9360cbb.js        31.5 kB
  ├ chunks/pages/_app-5cb38e139d19a014.js  288 B
  └ chunks/webpack-287f111a8ff57cc4.js     748 B

○  (Static)  automatically rendered as static HTML (uses no initial props)
```

## react-remark

429959d

```plain
Route (pages)                              Size     First Load JS
┌ ○ /                                      327 B          78.1 kB
├   /_app                                  0 B            77.8 kB
├ ○ /404                                   182 B            78 kB
├ ○ /marked                                18.9 kB        96.7 kB
├ ○ /micromark (365 ms)                    15.7 kB         169 kB
└ ○ /react-remark (339 ms)                 40.3 kB         194 kB
    └ css/c0eba1c9baeeb50e.css             3.77 kB
+ First Load JS shared by all              77.8 kB
  ├ chunks/framework-6d147d7a7a824486.js   45.2 kB
  ├ chunks/main-52b35dd6c9360cbb.js        31.5 kB
  ├ chunks/pages/_app-5cb38e139d19a014.js  288 B
  └ chunks/webpack-de933733784ef5dd.js     752 B

○  (Static)  automatically rendered as static HTML (uses no initial props)
```

## remarkable

e9a88e1

Markdown -> HTML の変換の速さをウリにしているらしい

```plain
Route (pages)                              Size     First Load JS
┌ ○ / (312 ms)                             337 B          78.1 kB
├   /_app                                  0 B            77.8 kB
├ ○ /404                                   182 B            78 kB
├ ○ /marked                                18.9 kB        96.7 kB
├ ○ /micromark                             15.7 kB         169 kB
├ ○ /react-remark (390 ms)                 43.5 kB         197 kB
└ ○ /remarkable                            90.9 kB         169 kB
+ First Load JS shared by all              77.8 kB
  ├ chunks/framework-6d147d7a7a824486.js   45.2 kB
  ├ chunks/main-52b35dd6c9360cbb.js        31.5 kB
  ├ chunks/pages/_app-5cb38e139d19a014.js  288 B
  └ chunks/webpack-de933733784ef5dd.js     752 B

○  (Static)  automatically rendered as static HTML (uses no initial props)
```

[remarkable-katex](https://github.com/bradhowes/remarkable-katex) 使ってるけど ES6 準拠じゃないので katex.mjs を使ってくれないのが難点. 自前で remarkable プラグイン書いたほうがいいかも.
