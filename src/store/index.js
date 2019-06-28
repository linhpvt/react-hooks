import { createStore } from 'easy-peasy';

// pieces of model
import models from './models';

const Store = createStore(models);
export default Store;
