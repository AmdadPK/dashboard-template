import React from 'react'
import { CardsData } from '../../Data/Data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Cards.css'

const Cards = () => {
  return (
    <div className='Cards'>
      {CardsData.map((card, id) => {
        return(
          <div className='parentContainer' key={id}>
            <div className='CompactCard'
            style={{
              background: card.color.backGround,
              boxShadow: card.color.boxShadow
            }}
            >
              <div className='radialBar'>
                <CircularProgressbar 
                value={card.barValue} 
                text={`${card.barValue}%`} 
                />
                <span>{card.title}</span>
              </div>
              <div className='details'>
                <card.png />
                <span>${card.value}</span>
                <span>Last 24 hours</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards