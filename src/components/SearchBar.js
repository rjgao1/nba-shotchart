import React from 'react'
import { AutoComplete, Input, Icon } from 'antd'
import nba from 'nba'
import { PROFILE_PIC_URL_PREFIX } from '../constants'

const Option = AutoComplete.Option
export class SearchBar extends React.Component {
  state = {
    dataSource: [],
  }

  render() {
    return (
      <AutoComplete className="search-bar">

        <Input suffix={<Icon type="search" className="certain-category-icon"/>}/>
        
      </AutoComplete>
    )
  }

}