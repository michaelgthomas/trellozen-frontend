import { useState } from 'react'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from '@material-ui/core'
import withStyles from './style'
import { addCard } from '../../../../api'

function Modal({ handleHideModal, setRefetch, refetch }) {
  const style = withStyles()
  const BACKEND_URL = process.env.REACT_APP_TRELLOZEN_BACKEND_URL

  const [isAddingCard, setIsAddingCard] = useState(false)
  const [err, setErr] = useState(null)
  const [addingCardSuccess, setAddingCardSuccess] = useState(false)
  const [newCardTitle, setNewCardTitle] = useState(null)

  const handleSetCard = (_) => {
    console.log('Setting new card title')
    addCard({
      url: BACKEND_URL,
      setIsAddingCard,
      setAddingCardSuccess,
      setErr,
      cardTitle: newCardTitle,
      refetch,
      setRefetch,
    })
  }

  return (
    <div>
      <Dialog open onClose={handleHideModal}>
        {!isAddingCard && err && (
          <>
            <DialogTitle>Could not add new card</DialogTitle>
            <DialogContent>
              <DialogContentText>Server error</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={(_) => {
                  setErr(null)
                  handleHideModal()
                }}
                color="primary"
                className={style.button}
              >
                Cancel
              </Button>
              <Button
                className={style.button}
                onClick={(_) => {
                  setErr(null)
                }}
                color="primary"
              >
                Retry
              </Button>
            </DialogActions>
          </>
        )}
        {!isAddingCard && addingCardSuccess && (
          <>
            <DialogTitle>Success!</DialogTitle>
            <DialogContent>
              <DialogContentText>Card added successfully</DialogContentText>
            </DialogContent>
            <DialogActions className={style.dialogActions}>
              <Button
                className={style.button}
                onClick={(_) => {
                  setErr(null)
                  handleHideModal()
                }}
                color="primary"
              >
                OK
              </Button>
            </DialogActions>
          </>
        )}
        {!isAddingCard && !err && !addingCardSuccess && (
          <>
            <DialogTitle>Add a new card</DialogTitle>

            <DialogContent>
              <DialogContentText className={style.dialogText}>
                Enter title for new card
              </DialogContentText>
              <form className={style.dialogText}>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Card Title"
                  fullWidth
                  required
                  onChange={(e) => {
                    setNewCardTitle(e.target.value)
                  }}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleHideModal} className={style.button}>
                Cancel
              </Button>
              <Button
                className={style.button}
                onClick={(_) => {
                  handleSetCard()
                }}
                disabled={!newCardTitle}
              >
                Add Card
              </Button>
            </DialogActions>
          </>
        )}
        {isAddingCard && !err && (
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

export default Modal
