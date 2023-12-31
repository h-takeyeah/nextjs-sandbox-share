import { useData } from '@/lib/useData'
import { Remarkable } from 'remarkable'
import rkatex from 'remarkable-katex'
import 'katex/dist/katex.min.css'

export default () => {
  const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
  if (!data) {
    return <div>Loading...</div>
  }

  const md = new Remarkable({})
  md.use(rkatex)
  const output = md.render(data.statement)

  return (
    <>
      <h1>サンプル問題 - Remarkable (npm remarkable-katex) の場合</h1>
      <div dangerouslySetInnerHTML={{ __html: output }}></div>
    </>
  )
}
