import ThreadsProvider from '@/context/ThreadsProvider'

import Chat from './Chat'

const App = () => {
  return (
    <ThreadsProvider>
      <div className="flex h-screen flex-col items-center bg-sky-50">
        <h1 className="mt-4">Pergunte a Claudia, nossa tech recruiter:</h1>
        <Chat />
      </div>
    </ThreadsProvider>
  )
}

export default App
