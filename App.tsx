import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Conexão Escobar',
    cover: 'https://capas-m.imagemfilmes.com.br/164485_000_m.jpg',
    sinopse: '',
    ano: '',
    titleOriginal: ''
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'De Volta Ao Jogo',
    cover: 'https://capas-m.imagemfilmes.com.br/164389_000_m.jpg',
    sinopse: '',
    ano: '',
    titleOriginal: ''
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Quando Te Conheci',
    cover: 'https://capas-m.imagemfilmes.com.br/164405_000_m.jpg',
    sinopse: '',
    ano: '',
    titleOriginal: ''
  },
];

type ItemProps = {item: any};

const Item = ({item}: ItemProps) => (
  <View style={styles.listItem}>
    <Image source={{uri: item.cover}} style={{width:90, height:120}}  />
    <View style={{alignItems:"flex-start",flex:1}}>
      <Text style={{fontWeight:"bold"}}>{item.title} </Text>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});

export default App;