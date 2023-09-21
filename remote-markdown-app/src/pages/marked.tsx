import { useData } from '@/lib/useData'
import DOMPurify from 'dompurify'
import { marked } from 'marked'

export default () => {
  const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
  if (!data) {
    return <div>Loading...</div>
  }

  const rawHtml = DOMPurify.sanitize(marked.use({ gfm: true }).parse(data.statement))

  return (
    <>
      <h1>サンプル問題 - marked の場合</h1>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
    </>
  )
}
