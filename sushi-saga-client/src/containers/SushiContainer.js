import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi sushiData={sushi} eatSushi={props.eatSushi} eaten={props.eaten} />)}
        <MoreButton moreSushi={props.moreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer