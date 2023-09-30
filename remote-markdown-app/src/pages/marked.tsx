import MarkdownView from '@/components/MarkdownView'
import { useData } from '@/lib/useData'
import "katex/dist/katex.min.css"


export default () => {
  const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>サンプル問題 - marked の場合</h1>
      <MarkdownView markdown={data.statement} />
    </>
  )
}
