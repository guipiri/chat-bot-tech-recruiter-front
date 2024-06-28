import { IThread } from '@/context/ThreadsProvider'

export default async function getThread(threadId: string): Promise<IThread> {
  const res = await fetch(`http://localhost:3000/messages/${threadId}`)
  const messages = await res.json()
  const response = await fetch(`http://localhost:3000/status/${threadId}`)
  const { status } = await response.json()
  return { status, messages, threadId }
}
