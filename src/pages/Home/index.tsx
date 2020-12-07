import React, {useCallback, useState} from 'react';
import {AsyncStorage, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import api from '../../service/api';
import {
  Container,
  Error,
  RepositoriesList,
  SearchButton,
  SearchButtonText,
  SearchContainer,
  SearchField,
  Title,
} from './styles';

export interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [errorFeedback, setErrorFeedback] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>([
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
  ]);

  const handleSubmit = useCallback(async () => {
    console.log(searchText);
    if (searchText.length === 0) {
      setErrorFeedback('Informe um repositório');
      return;
    }
    try {
      setErrorFeedback('');
      const response = await api.get<IRepository>(`repos/${searchText}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setSearchText('');
    } catch (error) {
      setErrorFeedback(
        'Erro na busca por esse repositório. Verifique o nome/repositório usados.',
      );
    }
  }, [searchText]);

  const renderItem = (item: IRepository) => {
    return (
      <View style={{padding: 16}}>
        <Text>{item.full_name}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };

  return (
    <>
      <Container>
        <Header />
        <Title>Explore repositórios no github.</Title>

        <SearchContainer>
          <SearchField
            placeholder="Digite o nome do repositório"
            placeholderTextColor="#777"
            defaultValue={searchText}
            onChangeText={setSearchText}
          />
          {!!errorFeedback && <Error>{errorFeedback}</Error>}

          <SearchButton onPress={handleSubmit}>
            <SearchButtonText>Pesquisar</SearchButtonText>
          </SearchButton>
        </SearchContainer>

        <RepositoriesList
          data={repositories}
          keyExtractor={({full_name}, index) => String(`${full_name}-${index}`)}
          renderItem={({item}) => renderItem(item)}
        />
      </Container>
    </>
  );
};

export default Home;
