import React from 'react'
import { useCardStore } from '../store/card'
import { Card } from './Card';

export const PlayerCard = ({ card, cardKey, index }) => {

  return (
    <div key={'hand' + index} style={{ display: 'flex', flexDirection:  'column', marginTop: '20px'}}>
        <span style={{ fontSize: '16px', fontWeight: '500', color: '#737373' }}>Player {cardKey} | プレーヤー {cardKey}</span>
        <div>
            {
                card?.map((c, i, row) => {
                    return <span style={{ fontSize: '30px', fontWeight: '600' }} key={'test' + i}> {c}{row.length === i + 1 ? '' : ','}</span>
                })
            }
        </div>
    </div>
  )
}
