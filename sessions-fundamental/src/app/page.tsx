import { getSession, login, logout } from '@/lib'
import { redirect } from 'next/navigation'

export function PagePresenter({ session }: { session: Awaited<ReturnType<typeof getSession>> }) {
  return (
    <section>
      <form
        role='form'
        action={async (formData: FormData) => {
          'use server'
          await login(formData)
          redirect('/')
        }}
      >
        <input type='email' name='email' placeholder='Email' />
        <br />
        <button type='submit'>Login</button>
      </form>
      <form
        action={async () => {
          'use server'
          await logout()
          redirect('/')
        }}
      >
        <button type='submit'>Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  )
}

export default async function Page() {
  const session = await getSession()
  return <PagePresenter session={session} />
}
