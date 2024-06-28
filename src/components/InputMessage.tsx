import { useState } from 'react'

function InputMessage({ handleSend }: { handleSend: () => void }) {
  const [newMessage, setNewMessage] = useState<string>('')
  const handleSubmit: React.FormEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
  }
  return (
    <div className="mt-auto w-full pt-8">
      <input
        onSubmit={handleSubmit}
        className="w-full rounded-3xl border border-slate-200 px-3 py-2 outline-none"
        type="text"
        placeholder="Pergunte algo..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      ></input>
    </div>
  )
}
export default InputMessage
