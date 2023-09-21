import ReactMarkdown from 'react-markdown'
import { useData } from '@/lib/useData'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

export default () => {
  const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        // @ts-expect-error
        rehypePlugins={[rehypeKatex]}
        children={data.statement}
      />
    </>
  )
}
