import { useData } from '@/lib/useData'
import { Remarkable } from 'remarkable'

export default () => {
  const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
  if (!data) {
    return <div>Loading...</div>
  }

  const md = new Remarkable({})
  const output = md.render(data.statement)

  return (
    <>
      <h1>サンプル問題 - Remarkable の場合</h1>
      <div dangerouslySetInnerHTML={{ __html: output }}></div>
    </>
  )
}
