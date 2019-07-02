import Keys from '../constants/types';
const todoReducer = (state, action) => {
  switch(action.type) {
    case Keys.TODO_ADD:
      const { text } = action.payload;
      return [
        { id: new Date().getTime(), text , complete: false },
        ...state
        ];
    case Keys.TODO_DELETE: 
      return state.filter(todo => todo.id !== action.payload.id);
    case Keys.TODO_TOGGLE:
        return state.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              complete: !todo.complete
            }
          }
          return todo;
        });
    default:
      return state;
  }
}
export default todoReducer;