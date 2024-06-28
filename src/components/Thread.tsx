import { IThread } from '@/context/ThreadsProvider'

import Message from './Message'

function Thread({ thread }: { thread: IThread }) {
  return (
    <>
      {thread.messages.map((message, index) => (
        <Message key={index} from={message.from}>
          {message.text}
        </Message>
      ))}
    </>
  )
}

export default Thread
