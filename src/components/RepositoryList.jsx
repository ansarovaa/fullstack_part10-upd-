import React from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Dropdown from "./Dropdown";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  listHeader: {
    zIndex: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

export const formatNumbers = (num) => {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
};

const renderItem = ({ item }) => (
  <RepositoryItem
  id={item.id}
    fullName={item.fullName}
    description={item.description}
    language={item.language}
    forksCount={formatNumbers(item.forksCount)}
    stars={formatNumbers(item.stargazersCount)}
    ratingAverage={formatNumbers(item.ratingAverage)}
    reviewCount={formatNumbers(item.reviewCount)}
    avatar={item.ownerAvatarUrl}
  />
);


const RepositoryList = () => {
  const { repositories } = useRepositories();
  const repositoryNodes = repositories
    ? repositories?.edges.map((edge) => edge.node)
    : [];
    const [sort, setSort] = React.useState();

    let data;
  
    switch (sort) {
      case "Latest repositories":
        data = useRepositories("CREATED_AT", "DESC");
        break;
      case "Highest rated repositories":
        data = useRepositories("RATING_AVERAGE", "DESC");
        break;
      case "Lowest rated repositories":
        data = useRepositories("RATING_AVERAGE", "ASC");
        break;
      default:
        // eslint-disable-next-line no-unused-vars
        data = useRepositories();
    }

  
    const onPress = (value) => setSort(value);
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <Dropdown onPress={onPress} sort={sort} />}
      ListHeaderComponentStyle={styles.listHeader}
    />
  );
};

export default RepositoryList;