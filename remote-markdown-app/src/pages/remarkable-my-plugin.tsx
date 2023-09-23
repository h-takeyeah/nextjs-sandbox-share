import { useData } from '@/lib/useData'
import { Remarkable } from 'remarkable'
import rkatex from '@/lib/remarkable-katex-plugin'
import 'katex/dist/katex.min.css'

export default () => {
  const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
  if (!data) {
    return <div>Loading...</div>
  }

  const md = new Remarkable()
  md.use(rkatex)
  const output = md.render(data.statement)

  return (
    <>
      <h1>サンプル問題 - Remarkable (独自プラグインで KaTeX を読む) の場合</h1>
      <p>npm の remarkable-katex は commonjs 版の katex.js を使用しておりモジュール分割に難ありなので katex.mjs を使うために自前でプラグインを書いた</p>
      <div dangerouslySetInnerHTML={{ __html: output }}></div>
    </>
  )
}
