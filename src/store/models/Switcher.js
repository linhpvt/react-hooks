import { action } from 'easy-peasy';
import { getNavByTab } from '../../helpers';
const getPathFromHashUrl = () => {
  const tab = window.location.hash.split('#')[1];
  return getNavByTab(tab)
}
export default {
  switcher: {
    // data
    ...getPathFromHashUrl(),
    // thunks
    // actions
    switchTo: action((state, payload) => {
      console.log('SATE', state);
      return { ...state, ...state.switcher, ...payload };
    })
  }
};