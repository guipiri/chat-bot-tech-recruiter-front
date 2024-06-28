import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react'

import getThread from '@/services/getThread'
import { getThreadsIds } from '@/services/localStorage'

export interface Message {
  text: string
  createdAt: Date
  from: 'user' | 'bot'
}

export interface IThread {
  threadId: string
  status: 'open' | 'closed'
  messages: Message[]
}

type Threads = IThread[]

export const ClosedThreadsContex = createContext<Threads>([])
export const CurrentThreadContex = createContext<IThread | undefined>(undefined)
export const SetCurrentThreadContext = createContext<
  Dispatch<React.SetStateAction<IThread | undefined>>
>(() => ({}))

function ThreadsProvider({ children }: { children: ReactNode }) {
  const [threads, setThreads] = useState<Threads>([])
  const [currentThread, setCurrentThread] = useState<IThread | undefined>()

  const getThreads = useCallback(async () => {
    const threadsId: string[] = getThreadsIds()
    const threadsPromise = threadsId.map(async (threadId) => {
      const thread = getThread(threadId)
      return thread
    })
    const threads = await Promise.all(threadsPromise)
    setThreads(threads.filter((thread) => thread.status === 'closed'))
    setCurrentThread(threads.find((thread) => thread.status === 'open'))
  }, [])

  useEffect(() => {
    getThreads()
  }, [getThreads])

  return (
    <CurrentThreadContex.Provider value={currentThread}>
      <SetCurrentThreadContext.Provider value={setCurrentThread}>
        <ClosedThreadsContex.Provider value={threads}>
          {children}
        </ClosedThreadsContex.Provider>
      </SetCurrentThreadContext.Provider>
    </CurrentThreadContex.Provider>
  )
}

export default ThreadsProvider
