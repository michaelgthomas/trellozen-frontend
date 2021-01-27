async function fetchLists (url) {
  
  const boardResp = await fetch(`${url}/trello/board`)
  const boardDetails = await boardResp.json()

  const pizzaBoard = boardDetails.find(board => board.name === 'The Pizza Project')
  const boardId = pizzaBoard.id

  const listsResp = await fetch(`${url}/trello/lists/${boardId}`)
  const listsWithCards = await listsResp.json()
  return listsWithCards.filter(({name}) => name !== 'Done')
}

export { fetchLists}