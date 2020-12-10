import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Header from '../../components/Header';
import {Container} from './styles';

interface DetailsRouteProps {
  full_name: string;
}
const Details: React.FC = () => {
  const route = useRoute();
  const [name, setName] = useState('');

  useEffect(() => {
    const {full_name} = route.params as DetailsRouteProps;
    setName(full_name);
  }, [route.params]);

  return (
    <Container>
      <Header showGoBack />
    </Container>
  );
};
export default Details;
