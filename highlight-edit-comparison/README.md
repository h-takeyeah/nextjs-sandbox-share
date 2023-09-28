# highlight-edit-comparison

コードのシンタックスハイライトを行うライブラリの比較．編集も？

## highlight.js

- 大本命
- シンタックスハイライト機能のみ
- 行番号の表示もできない
  - 行番号を無理やり表示させるページは試作した(./src/pages/line-number-hljs.tsx)
  - 自分が調べた限りでは `pre > code` を `pre > code > table` に書き換えて1列目に行番号，
    2列目にコードのテーブルを作るパターンがほとんどだったが上記試作はテーブル使わずに作ってみた．

optimized の方は highlight.js/lib/core を読みこみ，各言語のパーサは `registerLanguage()` で逐一登録していく形を取る．
この場合はアプリケーションでサポートしたい言語のみ読み込むことができるのでサイズの減少が期待できる．
試しに cpp を読み込むとまったく何も register しない場合に比べ 6KB 程度増加した．
- highlight.js/lib/core のみ: 7.61 KB (Gzipped)
  - \+ highlight.js/lib/languages/cpp: 13.3 KB (Gzipped)
- highlight.js (つまり全部): 278.88 KB (Gzipped)

メモ
- optimized-hljs.tsx (core) のビルド後 -> 3.03KB
- optimized-hljs.tsx (core + cpp) のビルド後 -> 3.03KB

```js
import(`../../node_modules/highlight.js/lib/languages/${language}.js`)
```

- みたいなことを書くと webpack が `highlight.js/lib/languages/.*\.js` を`out/_next/static/chunks` 以下にコピーしてくれる．
- 変数が含まれるので全てのパターンを網羅するためにこういう挙動をするっぽい？
- 必要な時に import されるのでバンドルサイズには影響しない．
- とはいえ一生使わないコードを成果物に入れるのも気持ち悪いので `import()` は使わず，素直に使う分のパーサを静的に import する方がよさそう．

## codemirror (エディタ)
- codemirror v6
  - ref を使って React に組み込める．最低限なら `@uiw/react-codemirror` を使わなくてもできる．
  - `@uiw/react-codemirror` のオーバーヘッド分減るのを期待したが結果はこのくらい

```plain
/react-codemirror                      29.5 kB         246 kB
/codemirror                            1.05 kB         218 kB
```

## @uiw/react-codemirror (エディタ)
- codemirror v6 をもとにした React Component
  - 最新の codemirror v6 に対応したものはこのくらいしか見つけられなかった
- uiwjs が開発している

## @uiw/react-textarea-code-editor (エディタ)
- codemirror っぽいものを uiwjs オリジナルで作っている
- バンドルサイズだけ見れば小さいが CSS の関係で next.config.js をいじらないと動かない


## `next build` stat

```plain
Route (pages)                              Size     First Load JS
┌ ○ /                                      624 B            88 kB
├   /_app                                  0 B            84.9 kB
├ ○ /404                                   185 B          85.1 kB
├ ○ /codemirror                            1.05 kB         218 kB
├ ○ /codemirror-dynamic                    3.04 kB        90.4 kB
├ ○ /hljs                                  943 B           380 kB
├ ○ /line-number-hljs                      1.2 kB          381 kB
├   └ css/869b74a550073f41.css             713 B
├ ○ /optimized-hljs                        6.24 kB         101 kB
├ ○ /optimized-hljs-dynamic                3.23 kB        90.6 kB
├ ○ /optimized-hljs-experimental           5.22 kB         100 kB
├ ○ /react-codemirror                      29.5 kB         246 kB
└ ○ /react-textarea-code-editor            3.06 kB        90.4 kB
    └ css/fd8cb407a7e59580.css             930 B
+ First Load JS shared by all              84.9 kB
  ├ chunks/framework-614030d3c5b8c24a.js   45.2 kB
  ├ chunks/main-06a36295972b6692.js        31.7 kB
  ├ chunks/pages/_app-9d6ba488ca63a1ed.js  293 B
  └ chunks/webpack-a184fb0ba6c08c92.js     7.74 kB

○  (Static)  automatically rendered as static HTML (uses no initial props)
```
