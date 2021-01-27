async function fetchLists(url) {
  const boardResp = await fetch(`${url}/trello/board`)
  const boardDetails = await boardResp.json()

  const pizzaBoard = boardDetails.find(
    (board) => board.name === 'The Pizza Project'
  )
  const boardId = pizzaBoard.id

  const listsResp = await fetch(`${url}/trello/lists/${boardId}`)
  const listsWithCards = await listsResp.json()
  return listsWithCards.filter(({ name }) => name !== 'Done')
}

async function addCard({
  url,
  cardTitle,
  setErr,
  setIsAddingCard,
  setAddingCardSuccess,
  setRefetch,
  refetch,
}) {
  setIsAddingCard(true)

  try {
    const rawBody = `{"name": "${cardTitle}"}`
    await fetch(`${url}/trello/todo/add/600e88191dedb865792f307a`, {
      method: 'POST',
      body: rawBody,
    })
    setIsAddingCard(false)
    setAddingCardSuccess(true)
    setRefetch(!refetch)
  } catch (err) {
    setErr(true)
    setAddingCardSuccess(false)
    setIsAddingCard(false)
  }
}

export { fetchLists, addCard }
