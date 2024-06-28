export default async function sendNewMessage(
  message: string,
  threadId: string
): Promise<string> {
  const res = await fetch(`http://localhost:3000/ask`, {
    method: 'POST',
    body: JSON.stringify({ threadId, message })
  })
  const answer = await res.json()

  return answer
}
