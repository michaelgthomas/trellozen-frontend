import { useState, useEffect } from 'react'
import { fetchLists } from '../../api'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  list: {
    flexGrow: 1,
    paddingLeft: '500',
    marginRight: '10'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    background: '#E4EBEF'
  },
  button: {
      background: '#5EA5EE',
      color: '#F3F4F5'
  },
  card: {
      background: '#F3F4F5',
      color: '#5C5C5C',
      borderRadius: '5px',
      height: '30px',
      
  }
}));

const Board = _ => {
    const classes = useStyles()
    const BACKEND_URL = process.env.REACT_APP_TRELLOZEN_BACKEND_URL
    const [lists, setLists ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const listsWithCards = await fetchLists(BACKEND_URL)
          setLists(listsWithCards)    
          
        };
     
        fetchData();
      }, [BACKEND_URL])
    return (
        <>
        <br/>
        <Grid container spacing={3} className={classes.container} >
            <Grid item xs={1}></Grid>
            {
                lists.map(list => <Grid item xs={5} className={classes.list} key={list.id}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item xs={6}>
                                <span style={{fontWeight: 'bold'}}>{list.name}</span>
                            </Grid>
                            <Grid item xs={6}>
                                <Button startIcon={<Add />} className={classes.button}>Add</Button>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container>
                            {
                                list.cards.map(card => <Grid item xs={12} key={card.id}>
                                              <div className={classes.card}>
                                                <span style={{paddingLeft: '50px'}}>{card.name}</span>

                                                </div>
                                              <br/>
                                </Grid>)
                            }
                        </Grid>
                    </Paper>
                    </Grid>)
            }
            <Grid item xs={1}></Grid>
        </Grid>
        </>
    )
}

export default Board