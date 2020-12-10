import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {IRepository} from '../pages/Home';

interface IFavoriteRepositoryContext {
  favoritesRepositories: Array<IRepository>;
  toggleCachedRepository(repository: IRepository): Promise<void>;
}

const FavoriteRepositoryContext = createContext<IFavoriteRepositoryContext>(
  {} as IFavoriteRepositoryContext,
);

const FavoriteRepositoryProvider: React.FC = ({children}) => {
  const [favoritesRepositories, setFavoritesRepositories] = useState<
    IRepository[]
  >([]);

  const addFavoriteRepository = useCallback(
    async (repository: IRepository) => {
      setFavoritesRepositories([...favoritesRepositories, repository]);

      await AsyncStorage.setItem(
        '@GithubExplorer:Favorites',
        JSON.stringify(favoritesRepositories),
      );
    },
    [favoritesRepositories],
  );

  const removeFavoriteRepository = useCallback(
    async (id) => {
      setFavoritesRepositories([
        ...favoritesRepositories.filter((repository) => repository.id !== id),
      ]);
      await AsyncStorage.setItem(
        '@GithubExplorer:Favorites',
        JSON.stringify(favoritesRepositories),
      );
    },
    [favoritesRepositories],
  );

  const toggleFavoriteRepository = useCallback(
    async (repository: IRepository) => {
      if (
        favoritesRepositories.find(
          (cachedRepository) => cachedRepository.id === repository.id,
        )
      ) {
        await removeFavoriteRepository(repository.id);
      } else {
        await addFavoriteRepository(repository);
      }
    },
    [addFavoriteRepository, favoritesRepositories, removeFavoriteRepository],
  );

  useEffect(() => {
    async function loadFavoritedRepositories(): Promise<void> {
      const cachedRepositories = await AsyncStorage.getItem(
        '@GithubExplorer:Favorites',
      );

      if (cachedRepositories) {
        setFavoritesRepositories(JSON.parse(cachedRepositories));
      }
    }

    loadFavoritedRepositories();
  }, []);

  return (
    <FavoriteRepositoryContext.Provider
      value={{
        favoritesRepositories,
        toggleCachedRepository: toggleFavoriteRepository,
      }}>
      {children}
    </FavoriteRepositoryContext.Provider>
  );
};

const useFavoriteRepository = (): IFavoriteRepositoryContext => {
  const context = useContext(FavoriteRepositoryContext);

  if (!context) {
    throw Error(
      'useFavoriteRepository must be within a FavoriteRepositoryProvider.',
    );
  }
  return context;
};

export {FavoriteRepositoryProvider, useFavoriteRepository};
