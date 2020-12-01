import React, {useCallback, useState} from 'react';
import Header from '../../components/Header';
import {
  Container,
  SearchButton,
  SearchButtonText,
  SearchContainer,
  SearchField,
  Title,
} from './styles';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = useCallback(() => {
    console.log(searchText);
  }, []);

  return (
    <Container>
      <Header />
      <Title>Explore repositórios no github.</Title>

      <SearchContainer>
        <SearchField
          placeholder="Digite o nome do repositório"
          placeholderTextColor="#777"
          onChangeText={setSearchText}
        />
        <SearchButton onPress={handleSubmit}>
          <SearchButtonText>Pesquisar</SearchButtonText>
        </SearchButton>
      </SearchContainer>
    </Container>
  );
};

export default Home;
