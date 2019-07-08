import Todos from './Todos';
import Switcher from './Switcher';
import Posts from './Posts';
import UiState from './UiState';

export default {
  ...UiState,
  ...Todos,
  ...Switcher,
  ...Posts,
}