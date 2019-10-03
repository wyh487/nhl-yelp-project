import React, { Component } from 'react'
import { getSchedules } from '../api'
import { Grid, Card, CardHeader, CardContent, CardActions, 
         Avatar, IconButton, Typography  } from '@material-ui/core'

import MoreVertIcon from '@material-ui/icons/MoreVert';

const Event = (props) => {
  const game = props.game
  return(
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title = {`Games at ${game.date}`}
      />
      <CardContent>
        {game.games.map( g => {
          return  <Typography variant="body2" color="textSecondary" component="p">
            <b>{g.teams.away.team.name}</b> vs. <b>{g.teams.home.team.name}</b> at <b>{g.venue.name}</b>
          </Typography>
        })}

      </CardContent>
    </Card>
  )
}

export default class Schedule extends Component{

  constructor(props) {
    super(props)
    this.state = {
      schedules: []
    }
  }
  
  componentDidMount = async() => {
    let schedules = await getSchedules()
    console.log(schedules)
    this.setState({
      schedules: schedules
    })
  };
  
  apiHelper = async() => {

  }

  render(){
    return(
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {this.state.schedules.map((game, index) => {
              return <Grid key={index} item>
                      <Event game={game}/>
                    </Grid>
            })}
        </Grid>
      </Grid>
    )
  }
}
