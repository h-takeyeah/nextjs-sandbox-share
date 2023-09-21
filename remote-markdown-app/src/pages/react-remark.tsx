import { useData } from '@/lib/useData'
import { Remark } from 'react-remark'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'

export default () => {
  const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>サンプル問題 - react-remark の場合</h1>
      <Remark
        remarkPlugins={[remarkMath]}
        // @ts-expect-error rehype-katex@4 を要求するが型が合わないので
        rehypePlugins={[rehypeKatex]}
      >{data.statement}</Remark>
    </>
  )
}
