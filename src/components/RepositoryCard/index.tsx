import React from 'react';
import {View} from 'react-native';
import {IRepository} from '../../pages/Home';
import {
  Chevron,
  RepositoryContainer,
  RepositoryDescription,
  RepositoryImage,
  RepositoryName,
  RepositoryTextContainer,
} from './styles';

interface IRepositoryCardProps extends IRepository {
  updateFunction(index: number): void;
  index: number;
}

const RepositoryCard: React.FC<IRepositoryCardProps> = ({
  full_name,
  description,
  owner,
  index,
  updateFunction,
}) => {
  return (
    <RepositoryContainer onLongPress={() => updateFunction(index)}>
      <RepositoryImage source={{uri: owner.avatar_url}} />
      <RepositoryTextContainer showsVerticalScrollIndicator={false}>
        <RepositoryName>{full_name}</RepositoryName>
        <RepositoryDescription>{description}</RepositoryDescription>
      </RepositoryTextContainer>
      <Chevron name="chevron-right" size={24} />
    </RepositoryContainer>
  );
};

export default RepositoryCard;
