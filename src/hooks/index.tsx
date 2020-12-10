import React from 'react';
import {FavoriteRepositoryProvider} from './repository';

const AppProvider: React.FC = ({children}) => {
  return <FavoriteRepositoryProvider>{children}</FavoriteRepositoryProvider>;
};

export default AppProvider;
