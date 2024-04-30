import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

import { useCardStore } from "../store/card";

function generate() {
  let totalPlayer = document.getElementById('formPlayer').querySelector('input').value;
  if (totalPlayer <= 0) {
    toast.error('Please enter a valid number.');
    return;
  }

  useCardStore.getState().closeModal();
  useCardStore.getState().distributeCard(parseInt(totalPlayer));
}

export default function FormModal() {

  return (
    <div className='modal'>
      <div className='modal-body'>
        <span className='modal-title'>Please enter the total player.</span>
        <span style={{ color: '#9C9C9C' }}>合計プレイヤーを入力してください</span>
        <div style={{ marginTop: '30px' }}>
          <form id="formPlayer">
            <input type='number' style={{
              width: '100%',
              height: 'auto',
              fontSize: '100px',
              color: 'black',
              border: 'none',
              textAlign: 'right',
              borderBottom: '4px dashed black',
              backgroundColor: 'transparent',
            }} />
           </form>
        </div>
        <button type="button" style={{
          marginTop: '20px',
         }} className='submit-total' onClick={generate}>Generate</button>
      </div>
    </div>
  )
}
