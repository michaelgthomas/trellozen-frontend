import { useState, useEffect } from 'react'
import { fetchLists } from '../../api'
import { Grid, Paper, Button, CircularProgress } from '@material-ui/core'
import withStyles from './style'
import { Add } from '@material-ui/icons'
import { Modal } from './components'

function Board() {
  const style = withStyles()
  const BACKEND_URL = process.env.REACT_APP_TRELLOZEN_BACKEND_URL
  const [lists, setLists] = useState([])
  const [showAddCardModal, setShowAddCardModal] = useState(false)
  const [refetch, setRefetch] = useState(false)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
      const listsWithCards = await fetchLists(BACKEND_URL)
      setLists(listsWithCards)
      setIsFetching(false)
    }

    fetchData()
  }, [BACKEND_URL, refetch])
  return (
    <>
      <br />
      {!isFetching && (
        <Grid container spacing={3} className={style.container}>
          <Grid item xs={1}></Grid>
          {lists.map((list) => (
            <Grid item xs={5} className={style.list} key={list.id}>
              <Paper className={style.paper}>
                <Grid container>
                  <Grid item xs={6}>
                    <span style={{ fontWeight: 'bold' }}>{list.name}</span>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      startIcon={<Add />}
                      className={style.button}
                      onClick={(_) => setShowAddCardModal(true)}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  {list.cards.map((card) => (
                    <Grid item xs={12} key={card.id}>
                      <div className={style.card}>
                        <span style={{ paddingTop: '50px' }}>{card.name}</span>
                      </div>
                      <br />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
          <Grid item xs={1}></Grid>
        </Grid>
      )}
      {isFetching && (
        <div className={style.progress}>
          <CircularProgress />
        </div>
      )}
      {showAddCardModal && (
        <Modal
          handleHideModal={(_) => {
            setShowAddCardModal(false)
          }}
          refetch={refetch}
          setRefetch={setRefetch}
        />
      )}
    </>
  )
}

export default Board
