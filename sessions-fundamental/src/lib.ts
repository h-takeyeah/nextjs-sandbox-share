import { cookies } from 'next/headers'
import { Buffer } from 'node:buffer'

export async function encrypt(payload: any) {
  return Buffer.from(JSON.stringify(payload)).toString('base64')
}

export async function decrypt(input: string) {
  return JSON.parse(Buffer.from(input, 'base64').toString())
}

export async function login(formData: FormData) {
  const user = { email: formData.get('email'), name: 'John' }

  const expires = new Date(Date.now() + 10 * 1000)
  const session = await encrypt({ user, expires })
  cookies().set('session', session, { expires, httpOnly: true })
}

export async function logout() {
  cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession() {
  const session = cookies().get('session')?.value
  if (!session) return null
  return await decrypt(session)
}
