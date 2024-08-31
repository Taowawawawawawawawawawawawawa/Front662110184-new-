import { configureStore } from '@reduxjs/toolkit';
import reducers from '../Product/reducers';
export default configureStore({
    reducer: {
        products: reducers
      }
});