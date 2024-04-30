import { create } from 'zustand'
import _ from 'lodash';

export const useCardStore = create((set, get) => ({
  /**
   * Below is the list of state that has been defined to use in the application.
   */
  showModal: true,
  cardList: [],
  loading: false,
  handoverCard: [],
  listLayout: true,

  getCardList:  () => {
    /**
     * Using native javascript fetch(), to fetch the card list API from
     * the server. The headers need to be set Accept: application/json
     * since need to inform the server to return json
     */
    fetch('http://localhost:8765/api/cards', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(response => response.json())
      .then(({ data }) => {
        set({ cardList: data });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  },

  /**
   * This method to distribute the card to the player.
   * It will shuffle the card list and randomly assign
   * the card to the player.
   */
  distributeCard: (totalPlayer) => {
    let data = {};
    let startPlayer = 1;

    for (let i = 1; i <= totalPlayer; i++) {
      data[i] = [];
    }

    _.shuffle(get().cardList).forEach((card, index) => {
        data[startPlayer].push(card.name);

        if (startPlayer === totalPlayer) {
          startPlayer = 1;
        } else {
          startPlayer++;
        }
    });

    set({ handoverCard: data, loading: false});
  },

  changeLayout: () => set(state => ({ listLayout: !state.listLayout  })),
  resetAll: () => set(state => ({ handoverCard: [],  showModal: true })),

  openModal: () => set(state => ({ showModal: true })),
  closeModal: () => set(state => ({ showModal: false, loading: true })),
}))