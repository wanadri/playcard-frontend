import React from 'react'

export const Card = ({ card }) => {
  return (
    <div style={{
        border: '3px solid #B6B6B6',
        borderRadius: '10px',
        padding: '20px',
        width: '50px',
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10px',
        marginTop: '10px',
        fontSize: '20px',
        fontWeight: '600'
    }}>
        { card.name }
    </div>
  )
}
