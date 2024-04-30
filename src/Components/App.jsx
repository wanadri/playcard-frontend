import FormModal from './FormModal';
import { useCardStore } from "../store/card";
import { useEffect } from 'react';
import { Card } from './Card';
import toast, { Toaster } from 'react-hot-toast';
import { PlayerCard } from './PlayerCard';

/**
 * This is the main component of the application.
 * It is the parent component of all other components.
 *
**/
function App() {

  /**
   * retrieve the state from the store and assign to new variable
   */
  const showModal = useCardStore(state => state.showModal);
  const cards = useCardStore((state) => state.cardList);
  const loading = useCardStore((state) => state.loading);
  const handoverCard = useCardStore((state) => state.handoverCard);

  /**
   * retrieve the action from the store and assign to new variable
   */
  const getCardList = useCardStore((state) => state.getCardList);
  const resetAll = useCardStore((state) => state.resetAll);
  const changeLayout = useCardStore((state) => state.changeLayout);

  /**
   * call the getCardList action once only
   */
  useEffect(() => {
    getCardList();
  }, [])

  return (
    <div className='container'>
      <span style={{ fontSize: '60px', fontWeight: '500' }}>こんにちは <span style={{ fontSize: '15px', color: '#B2B2B2' }}>/Kon-ni-chi-wa/</span></span>
      <div style={{ marginTop: '30px', display: 'flex', flexDirection: Object.keys(handoverCard).length ? 'column' : 'row', flexWrap: 'wrap',  }}>
        { loading ? <span>Generating...</span>
          : (
            Object.keys(handoverCard).length
              ? Object.entries(handoverCard).map(([key, card], index) => {
                return <PlayerCard card={card} cardKey={key} index={index} key={'card' + index}></PlayerCard>;
              })
              : cards.map((card, i) => {
                  return <Card card={card} key={i}></Card>
                })
            )
        }
      </div>
      { showModal ? <FormModal></FormModal> : null}
      {
        showModal ? null : (
          <div style={{
            position: 'fixed',
            width: '75%',
            bottom: 0,
            zIndex: 1,
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <button
              onClick={resetAll}
              style={{
              background: 'red',
              color: 'white',
              borderRadius: '40px',
              padding: '10px 20px',
              border: 'none',
              fontWeight: '500',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              fontSize: '18px',
              cursor: 'pointer',
            }}>
              Reset
            </button>
          </div>
        )
      }
      <Toaster />
    </div>
  )
}

export default App;
