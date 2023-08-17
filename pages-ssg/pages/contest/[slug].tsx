import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json())

export default function Page() {
  const router = useRouter()
  const { query: { slug } } = router

  const { data, error }  = useSWR(slug ? `https://jsonplaceholder.typicode.com/todos/${slug}` : null, fetcher)

  if (error) return <div>failed to laod</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <h1>{data.id}</h1>
      <p>{data.title}</p>
    </div>
  )
}
