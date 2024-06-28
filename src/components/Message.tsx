import type { ReactNode } from 'react'
import { FaRobot } from 'react-icons/fa'

function Message({
  children,
  from
}: {
  children: ReactNode
  from: 'user' | 'bot'
}) {
  return (
    <div className={`flex w-full`}>
      {from === 'bot' && (
        <FaRobot
          className="mr-2 flex-none rounded-3xl bg-slate-100 p-2"
          size={35}
        />
      )}
      <div
        className={`mb-4 max-w-[80%] shrink-0  rounded-3xl px-3 py-2 ${
          from === 'user' ? 'ml-auto mr-2 items-end bg-sky-100' : 'bg-slate-100'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Message
