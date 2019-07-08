import { action } from 'easy-peasy';
export default {
  todos: {
    // data
    item: '',
    items: [],
    // thunks
    // actions
    addItem: action((state, payload) => {
      const { item, items } = state;
      return {
        ...state,
        item: '',
        items: [
          { title: item, id: new Date().getTime(), complete: false },
          ...items]
        };
    }),
  
    updateItem: action((state, payload) => {
      return {...state, item: payload};
    }),
  
    toggleItem: action((state, id) => {
      let { items = []} = state;
      items = items.map(item => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return {...state, items};
      });
    }),

    deleteItem: action((state, id) => {
      let { items = []} = state;
      items = items.filter(item => item.id !== id);
      return {...state, items};
    }),
  }
};