# highlight-edit-comparison

コードのシンタックスハイライトを行うライブラリの比較．編集も？

## highlight.js

大本命

optimized の方は highlight.js/lib/core を読みこみ，各言語のパーサは `registerLanguage()` で逐一登録していく形を取る．
この場合はアプリケーションでサポートしたい言語のみ読み込むことができるのでサイズの減少が期待できる．
試しに cpp を読み込むとまったく何も register しない場合に比べ 6KB 程度増加した．
- highlight.js/lib/core のみ: 7.61 KB (Gzipped)
  - + highlight.js/lib/languages/cpp: 13.3 KB (Gzipped)
- highlight.js (つまり全部): 278.88 KB (Gzipped)

メモ
- optimized-hljs.tsx (core) のビルド後 -> 3.03KB
- optimized-hljs.tsx (core + cpp) のビルド後 -> 3.03KB

```js
import(`../../node_modules/highlight.js/lib/languages/${language}.js`)
```

- みたいなことを書くと webpack が `highlight.js/lib/languages/.*\.js` を`out/_next/static/chunks` 以下にコピーしてくれる．
- 変数が含まれるので全てのパターンを網羅するためにこういう挙動をするっぽい？
- 必要な時に import されるのでバンドルサイズには影響しない
- とはいえ一生使わないコードを成果物に入れるのも気持ち悪いので `import()` は使わず，素直に使う分のパーサを静的に import する方がよさそう．

## @uiw/react-codemirror
- codemirror v6 をもとにした React Component
- uiwjs が開発している

## @uiw/react-textarea-code-editor
- codemirror っぽいものを uiwjs オリジナルで作っている
- バンドルサイズだけ見れば小さいが CSS の関係で next.config.js をいじらないと動かない
