import React from 'react'
import { Profile } from './Profile'
import { ShotChart } from './ShotChart'
import nba from 'nba'
import { DEFAULT_PLAYER_INFO } from '../constants'

import '../styles/Main.css'
import { DataViewContainer } from './DataViewContainer';
import { SearchBar } from './SearchBar';

export class Main extends React.Component {
  state = {
    playerInfo: DEFAULT_PLAYER_INFO
  }

  componentDidMount() {
    this.loadPlayerInfo(this.state.playerInfo.fullName)
  }

  loadPlayerInfo = (playerName) => {
    nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId })
      .then((info) => {
        const playerInfo = Object.assign(info.commonPlayerInfo[0],
          info.playerHeadlineStats[0])
        console.log('playerInfo', playerInfo)
        this.setState({ playerInfo })
      })
      .catch((e) => console.log(e))
  }
  
  render() {
    return (
      <div className="main">
        <SearchBar />
        <div className="player">
          <Profile playerInfo={this.state.playerInfo} />
          <DataViewContainer playerId={this.state.playerInfo.playerId}/>
        </div>
      </div>
    )
  }
}