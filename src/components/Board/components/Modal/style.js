import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  button: {
    borderRadius: '2px',
    padding: '7px 15px',
    margin: '5px',
    background: '#5EA5EE',
    color: 'white',
    '&:hover': {
      background: '#343951',
      color: 'white',
    },
  },
  dialogActions: {
    justifyContent: 'center',
  },
  dialogText: {
    color: '#5EA5EE',
  },
}))
