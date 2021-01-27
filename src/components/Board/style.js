import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  list: {
    flexGrow: 1,
    paddingLeft: '500',
    marginRight: '10',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    background: '#E4EBEF',
  },
  button: {
    background: '#5EA5EE',
    color: '#F3F4F5',
  },
  card: {
    background: '#F3F4F5',
    color: '#5C5C5C',
    borderRadius: '5px',
    height: '30px',
    paddingTop: '15px',
    paddingLeft: '15px',
    boxShadow: '5px 5px  #888888',
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
