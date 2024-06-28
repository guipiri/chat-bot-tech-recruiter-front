export function getThreadsIds() {
  const threadsIds = JSON.parse(
    window.localStorage.getItem('threadsIds') || '[]'
  )
  return threadsIds
}

export function setThreadsIds(threadId: string) {
  const threadsIds = getThreadsIds()
  threadsIds.push(threadId)
  window.localStorage.setItem('threadsIds', JSON.stringify(threadsIds))
}
