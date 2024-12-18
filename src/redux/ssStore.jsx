import {configureStore} from '@reduxjs/toolkit';
import Sidemenu from './feature/feature-sidemenu';

const SsStore = configureStore({
  reducer: {
    Sidemenu: Sidemenu,
  },
});

export default SsStore;
