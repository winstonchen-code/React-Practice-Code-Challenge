import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.sushiData) }>
        { 
          props.eaten.includes(props.sushiData) ?
            null
          :
            <img src={ props.sushiData.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        { props.sushiData.name } - ${ props.sushiData.price }
      </h4>
    </div>
  )
}

export default Sushi