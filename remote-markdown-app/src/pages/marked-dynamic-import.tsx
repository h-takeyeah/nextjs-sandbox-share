import { useData } from '@/lib/useData'
import "katex/dist/katex.min.css"
import dynamic from 'next/dynamic'


export default () => {
  const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
  if (!data) {
    return <div>Loading...</div>
  }

  const MarkdownView = dynamic(() => import('@/components/MarkdownView'));

  return (
    <>
      <h1>サンプル問題 - marked with React.lazy() の場合</h1>
      <MarkdownView markdown={data.statement} />
    </>
  )
}
