import { createContext } from 'react';

import SHOP_DATA from './shop.data';

//Es como crear el INITIAL_STATE
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;