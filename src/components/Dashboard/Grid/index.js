import React from 'react'
import "./style.scss"


const GridComponent = ({coin}) => {
  const cardStyle = `grid-card ${coin.price_change_percentage_24h>=0 ? "green": "red"}`
  const percentageStyle = `percentageChange ${coin.price_change_percentage_24h>=0 ? "green": "red"}`
  const priceStyle = `currentPrice ${coin.price_change_percentage_24h>=0 ? "green": "red"}`
  const price = `${coin.price_change_percentage_24h}`
  
  return (
    <div className={cardStyle}>
        <div className='name-logo'>
            <img src={coin.image} className='coinImg'/>
            <div className='symbol-name'  >
              <h3 className='name'>{coin.name}</h3>
              <p className='symbol'>{coin.symbol}</p>
            </div>
        </div>  
            <div className='percentContainer' >
                <p className={percentageStyle}>{coin.price_change_percentage_24h}%</p>
                {/* TODO:icon */}
                {
                  price>=0 ? <span class="material-icons priceUp">trending_up</span> : 
                              <span class="material-icons priceDown">trending_down</span>
                }
                
            </div>
            <h2 className={priceStyle}>${coin.current_price}</h2>
            <div className='totalVolume'  >
              <h5>Total Volume: ${coin.total_volume}</h5>
              <h5>Market Cap: ${coin.market_cap}</h5>
            </div>
    </div>
  )
}

export default GridComponent
