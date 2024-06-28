import { useContext } from 'react'

import {
  ClosedThreadsContex,
  SetCurrentThreadContext
} from '@/context/ThreadsProvider'

import InputMessage from './InputMessage'
import Thread from './Thread'

function Chat() {
  const threads = useContext(ClosedThreadsContex)
  const setCurrentThread = useContext(SetCurrentThreadContext)

  const sendMessage = async (newMessage: string) => {
    console.log(newMessage)
  }

  return (
    <div className="calc-heigth m-8 flex w-full max-w-xl flex-col rounded-3xl bg-white px-4 py-8">
      <div className="grid overflow-y-scroll">
        {threads.map((thread) => (
          <Thread key={thread.threadId} thread={thread}></Thread>
        ))}
      </div>
      <InputMessage handleSend={sendMessage} />
    </div>
  )
}

export default Chat
